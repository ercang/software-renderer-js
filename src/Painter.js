export default class Painter {
  constructor(frameBuffer) {
    this.fb = frameBuffer;
    this.clearColor = {
      r: 0, g: 0, b: 0, a: 255,
    };
  }

  setClearColor(r, g, b, a) {
    this.clearColor = {
      r, g, b, a,
    };
  }

  clear() {
    this.fb.clear(this.clearColor.r, this.clearColor.g, this.clearColor.b, this.clearColor.a);
  }

  drawLine(x1, y1, x2, y2, r = 255, g = 255, b = 255) {
    x1 |= 0;
    x2 |= 0;
    y1 |= 0;
    y2 |= 0;
    r |= 0;
    g |= 0;
    b |= 0;
    let x; let y;
    let xe; let ye; let i;
    const dx = x2 - x1;
    const dy = y2 - y1;
    const dx1 = Math.abs(dx);
    const dy1 = Math.abs(dy);
    let px = 2 * dy1 - dx1;
    let py = 2 * dx1 - dy1;
    if (dy1 <= dx1) {
      if (dx >= 0) {
        x = x1;
        y = y1;
        xe = x2;
      } else {
        x = x2;
        y = y2;
        xe = x1;
      }
      this.fb.setPixelXY(x, y, r, g, b);
      for (i = 0; x < xe; i++) {
        x += 1;
        if (px < 0) {
          px += 2 * dy1;
        } else {
          if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
            y += 1;
          } else {
            y -= 1;
          }
          px += 2 * (dy1 - dx1);
        }
        this.fb.setPixelXY(x, y, r, g, b);
      }
    } else {
      if (dy >= 0) {
        x = x1;
        y = y1;
        ye = y2;
      } else {
        x = x2;
        y = y2;
        ye = y1;
      }
      this.fb.setPixelXY(x, y, r, g, b);
      for (i = 0; y < ye; i++) {
        y += 1;
        if (py <= 0) {
          py += 2 * dx1;
        } else {
          if ((dx < 0 && dy < 0) || (dx > 0 && dy > 0)) {
            x += 1;
          } else {
            x -= 1;
          }
          py += 2 * (dx1 - dy1);
        }
        this.fb.setPixelXY(x, y, r, g, b);
      }
    }
  }

  drawTriangle(x1, y1, x2, y2, x3, y3, r = 255, g = 255, b = 255) {
    this.drawLine(x1, y1, x2, y2, r, g, b);
    this.drawLine(x2, y2, x3, y3, r, g, b);
    this.drawLine(x3, y3, x1, y1, r, g, b);
  }

  fillTriangle(x1, y1, x2, y2, x3, y3, r = 255, g = 255, b = 255) {
    // force to int
    x1 |= 0;
    y1 |= 0;
    x2 |= 0;
    y2 |= 0;
    x3 |= 0;
    y3 |= 0;
    r |= 0;
    g |= 0;
    b |= 0;

    // sort points
    // y1 <= y2 <= y3
    if (y1 > y2) {
      // swap y1 and y2
      const tx = x2;
      const ty = y2;
      x2 = x1;
      y2 = y1;
      x1 = tx;
      y1 = ty;
    }

    if (y1 > y3) {
      // swap y1 and y3
      const tx = x3;
      const ty = y3;
      x3 = x1;
      y3 = y1;
      x1 = tx;
      y1 = ty;
    }

    if (y2 > y3) {
      // swap y2 and y3
      const tx = x3;
      const ty = y3;
      x3 = x2;
      y3 = y2;
      x2 = tx;
      y2 = ty;
    }

    // points are sorted
    // http://www-users.mat.uni.torun.pl/~wrona/3d_tutor/tri_fillers.html#:~:text=The%20basic%20idea%20of%20the,scanlines%20and%20you%20are%20done.
    /*
     if (B.y-A.y > 0) dx1=(B.x-A.x)/(B.y-A.y) else dx1=0;
     if (C.y-A.y > 0) dx2=(C.x-A.x)/(C.y-A.y) else dx2=0;
     if (C.y-B.y > 0) dx3=(C.x-B.x)/(C.y-B.y) else dx3=0;
    */
    let dx1 = 0;
    let dx2 = 0;
    let dx3 = 0;
    if (y2 - y1 > 0) dx1 = (x2 - x1) / (y2 - y1);
    if (y3 - y1 > 0) dx2 = (x3 - x1) / (y3 - y1);
    if (y3 - y2 > 0) dx3 = (x3 - x2) / (y3 - y2);


    // S=E=A;
    let sx = x1;
    let sy = y1;
    let ex = x1;
    let ey = y1;

    // fill scan line
    /*
      S=E=A;
      if(dx1 > dx2) {
        for(;S.y<=B.y;S.y++,E.y++,S.x+=dx2,E.x+=dx1)
          horizline(S.x,E.x,S.y,color);
        E=B;
        for(;S.y<=C.y;S.y++,E.y++,S.x+=dx2,E.x+=dx3)
          horizline(S.x,E.x,S.y,color);
      } else {
        for(;S.y<=B.y;S.y++,E.y++,S.x+=dx1,E.x+=dx2)
          horizline(S.x,E.x,S.y,color);
        S=B;
        for(;S.y<=C.y;S.y++,E.y++,S.x+=dx3,E.x+=dx2)
          horizline(S.x,E.x,S.y,color);
      }
    */
    if (dx1 > dx2) {
      for (; sy < y2; sy++, ey++, sx += dx2, ex += dx1) {
        // horizline(S.x,E.x,S.y,color);
        this.fb.fillLine(sx | 0, ex | 0, sy | 0, r, g, b, 255);
      }
      ex = x2;
      ey = y2;
      for (; sy < y3; sy++, ey++, sx += dx2, ex += dx3) {
        // horizline(S.x,E.x,S.y,color);
        this.fb.fillLine(sx | 0, ex | 0, sy | 0, r, g, b, 255);
      }
    } else {
      for (; sy < y2; sy++, ey++, sx += dx1, ex += dx2) {
        // horizline(S.x,E.x,S.y,color);
        this.fb.fillLine(sx | 0, ex | 0, sy | 0, r, g, b, 255);
      }
      sx = x2;
      sy = y2;
      for (; sy < y3; sy++, ey++, sx += dx3, ex += dx2) {
        // horizline(S.x,E.x,S.y,color);
        this.fb.fillLine(sx | 0, ex | 0, sy | 0, r, g, b, 255);
      }
    }
  }
}

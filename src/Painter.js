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
}

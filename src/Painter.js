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
}

import Utility from './Utility';

export default class FrameBuffer32 {
  constructor(width = 320, height = 240) {
    const colorDepth = 4;
    this.width = width;
    this.height = height;
    this.bufferSize = width * height * colorDepth;
    this.buffer = new ArrayBuffer(this.bufferSize);
    this.bufferView = new Uint32Array(this.buffer);
  }

  getWidth() {
    return this.width;
  }

  getHeight() {
    return this.height;
  }

  getBuffer() {
    return this.buffer;
  }

  getBufferView() {
    return this.bufferView;
  }

  clear(r, g, b, a) {
    this.bufferView.fill(Utility.ConvertRGBAToData(r, g, b, a));
  }

  fillLine(x1, x2, y, r, g, b, a) {
    if(x1 > x2) {
      const t = x2;
      x2 = x1;
      x1 = t;
    }

    if (y < 0 || y >= this.height) {
      return;
    }

    if (x1 >= this.width - 1 || x2 < 0) {
      return;
    }

    x2 = x2 >= this.width ? this.width : x2;
    x1 = x1 < 0 ? 0 : x1;
    const start = y * this.width + x1;
    const len = x2 - x1;
    this.bufferView.fill(Utility.ConvertRGBAToData(r, g, b, a), start, start + len);
  }

  setPixel(pixelIndex, r, g, b, a = 255) {
    this.bufferView[pixelIndex] = (a << 24) // alpha
      | (b << 16) // blue
      | (g << 8) // green
      | r; // red
  }

  setPixelXY(x, y, r, g, b, a = 255) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      const pixelIndex = y * this.width + x;
      this.bufferView[pixelIndex] = (a << 24) // alpha
        | (b << 16) // blue
        | (g << 8) // green
        | r; // red
    }
  }

  setPixelData(pixelIndex, data) {
    this.bufferView[pixelIndex] = data;
  }

  setPixelDataXY(x, y, data) {
    if (x >= 0 && x < this.width && y >= 0 && y < this.height) {
      const pixelIndex = y * this.width + x;
      this.bufferView[pixelIndex] = data;
    }
  }

  getPixelData(pixelIndex) {
    return this.bufferView[pixelIndex];
  }

  getPixelDataXY(x, y) {
    const pixelIndex = y * this.width + x;
    return this.bufferView[pixelIndex];
  }
}

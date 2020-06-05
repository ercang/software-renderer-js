/* eslint-disable no-bitwise */
export default class FrameBuffer32 {
  constructor(width = 320, height = 240) {
    const colorDepth = 4;
    this.width = width;
    this.height = height;
    this.buffer = new ArrayBuffer(width * height * colorDepth);
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

  setPixel(pixelIndex, r, g, b, a = 255) {
    this.bufferView[pixelIndex] = (a << 24) // alpha
      | (b << 16) // blue
      | (g << 8) // green
      | r; // red
  }

  setPixelXY(x, y, r, g, b, a = 255) {
    const pixelIndex = y * this.width + x;
    this.bufferView[pixelIndex] = (a << 24) // alpha
      | (b << 16) // blue
      | (g << 8) // green
      | r; // red
  }

  setPixelData(pixelIndex, data) {
    this.bufferView[pixelIndex] = data;
  }

  setPixelDataXY(x, y, data) {
    const pixelIndex = y * this.width + x;
    this.bufferView[pixelIndex] = data;
  }

  getPixelData(pixelIndex) {
    return this.bufferView[pixelIndex];
  }

  getPixelDataXY(x, y) {
    const pixelIndex = y * this.width + x;
    return this.bufferView[pixelIndex];
  }
}

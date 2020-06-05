
/* eslint-disable no-bitwise */
import FrameBuffer32 from '../../src/FrameBuffer32';

describe('FrameBuffer32 tests', () => {
  test('frame buffer constructor and getters', () => {
    const fb = new FrameBuffer32(10, 20);
    expect(fb.getWidth()).toBe(10);
    expect(fb.getHeight()).toBe(20);
    expect(fb.getBuffer().byteLength).toBe(20 * 10 * 4);
    expect(fb.getBufferView().buffer).toBe(fb.getBuffer());
    expect(fb.getBufferView().byteLength).toBe(20 * 10 * 4);
  });

  test('frame buffer set/get pixels', () => {
    const w = 10;
    const h = 20;
    const fb = new FrameBuffer32(w, h);
    const x = 2;
    const y = 5;
    const pixelIndex = y * w + x;
    fb.setPixel(pixelIndex, 10, 20, 30);
    const pixelData = fb.getPixelData(pixelIndex);
    expect(pixelData).toBe(((255 << 24) | (30 << 16) | (20 << 8) | 10) >>> 0);
  });

  test('frame buffer set/get pixels by xy', () => {
    const fb = new FrameBuffer32();
    const x = 2;
    const y = 5;
    fb.setPixelXY(x, y, 10, 20, 30, 50);
    let pixelData = fb.getPixelDataXY(x, y);
    expect(pixelData).toBe((50 << 24) | (30 << 16) | (20 << 8) | 10);
    fb.setPixelXY(x, y, 10, 20, 30);
    pixelData = fb.getPixelDataXY(x, y);
    expect(pixelData).toBe(((255 << 24) | (30 << 16) | (20 << 8) | 10) >>> 0);
  });

  test('frame buffer set pixel data', () => {
    const w = 10;
    const h = 20;
    const fb = new FrameBuffer32(w, h);
    const x = 4;
    const y = 6;
    const pixelIndex = y * w + x;
    fb.setPixelData(pixelIndex, 200);
    const pixelData = fb.getPixelData(pixelIndex);
    expect(pixelData).toBe(200);
    const x2 = 8;
    const y2 = 3;
    fb.setPixelDataXY(x2, y2, 400);
    const pixelIndex2 = y2 * w + x2;
    const pixelData2 = fb.getPixelData(pixelIndex2);
    expect(pixelData2).toBe(400);
  });
});

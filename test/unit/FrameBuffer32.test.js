
import FrameBuffer32 from '../../src/FrameBuffer32';
import Utility from '../../src/Utility';

describe('FrameBuffer32 tests', () => {
  test('frame buffer constructor and getters', () => {
    const fb = new FrameBuffer32(10, 20);
    expect(fb.getWidth()).toBe(10);
    expect(fb.getHeight()).toBe(20);
    expect(fb.getBuffer().byteLength).toBe(20 * 10 * 4);
    expect(fb.getBufferView().buffer).toBe(fb.getBuffer());
    expect(fb.getBufferView().byteLength).toBe(20 * 10 * 4);
  });

  test('frame buffer clear', () => {
    const w = 5;
    const h = 1;
    const fb = new FrameBuffer32(w, h);
    fb.clear(10, 20, 30, 40);
    const pixelData = Utility.ConvertRGBAToData(10, 20, 30, 40);
    for (let i = 0; i < w; i++) {
      expect(fb.getPixelDataXY(i, 0)).toBe(pixelData);
    }
  });

  test('frame buffer fill-line', () => {
    const w = 5;
    const h = 5;
    const fb = new FrameBuffer32(w, h);
    let y = 0;
    let fillStart = 1;
    let fillEnd = 4;
    fb.fillLine(fillStart, fillEnd, y, 10, 20, 30, 40);
    const pixelData = Utility.ConvertRGBAToData(10, 20, 30, 40);
    for (let i = 0; i < w; i++) {
      const data = (i >= fillStart && i < fillEnd) ? pixelData : 0;
      expect(fb.getPixelDataXY(i, y)).toBe(data);
    }

    // fill more than width
    y = 2;
    fillStart = -1;
    fillEnd = 20;
    fb.fillLine(fillStart, fillEnd, y, 10, 20, 30, 40);
    for (let i = 0; i < w; i++) {
      expect(fb.getPixelDataXY(i, y)).toBe(pixelData);
    }

    // fill more than width
    y = 3;
    fillStart = 20;
    fillEnd = 30;
    fb.fillLine(fillStart, fillEnd, y, 10, 20, 30, 40);
    for (let i = 0; i < w; i++) {
      expect(fb.getPixelDataXY(i, y)).toBe(0);
    }

    // fill invalid line
    y = 100;
    fb.fillLine(fillStart, fillEnd, y, 10, 20, 30, 40);
    for (let i = 0; i < w; i++) {
      expect(fb.getPixelDataXY(i, y)).toBe(undefined);
    }
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
    expect(pixelData).toBe(Utility.ConvertRGBAToData(10, 20, 30, 255));
  });

  test('frame buffer set/get pixels by xy', () => {
    const fb = new FrameBuffer32();
    const x = 2;
    const y = 5;
    fb.setPixelXY(x, y, 10, 20, 30, 50);
    let pixelData = fb.getPixelDataXY(x, y);
    expect(pixelData).toBe(Utility.ConvertRGBAToData(10, 20, 30, 50));
    fb.setPixelXY(x, y, 10, 20, 30);
    pixelData = fb.getPixelDataXY(x, y);
    expect(pixelData).toBe(Utility.ConvertRGBAToData(10, 20, 30, 255));
  });

  test('frame buffer set/get pixels by xy out of bounds', () => {
    const fb = new FrameBuffer32(10, 20);
    const x = 20;
    const y = 50;
    fb.setPixelXY(x, y, 10, 20, 30, 50);
    const pixelData = fb.getPixelDataXY(x, y);
    expect(pixelData).toBe(undefined);
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

  test('frame buffer set pixel data out of bounds', () => {
    const w = 10;
    const h = 20;
    const fb = new FrameBuffer32(w, h);
    const x = 10;
    const y = 20;
    fb.setPixelDataXY(x, y, 200);
    const pixelData = fb.getPixelDataXY(x, y);
    expect(pixelData).toBe(undefined);
  });
});

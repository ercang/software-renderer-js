
import Painter from '../../src/Painter';

describe('Painter tests', () => {
  test('Painter fill test', () => {
    const fbMock = { clear: jest.fn() };
    const p = new Painter(fbMock);
    p.clear();
    expect(fbMock.clear).toBeCalledWith(0, 0, 0, 255);
  });

  test('Painter set clear color test', () => {
    const fbMock = { clear: jest.fn() };
    const p = new Painter(fbMock);
    p.setClearColor(255, 100, 50, 200);
    p.clear();
    expect(fbMock.clear).toBeCalledWith(255, 100, 50, 200);
  });
});

describe('Painter line drawing tests', () => {
  test('Painter draw horizontal line test', () => {
    const fbMock = { setPixelXY: jest.fn() };
    const p = new Painter(fbMock);
    p.drawLine(0, 0, 2, 0);
    expect(fbMock.setPixelXY).toBeCalledTimes(3);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(1, 0, 0, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(2, 1, 0, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(3, 2, 0, 255, 255, 255);
  });

  test('Painter draw reverse horizontal line test', () => {
    const fbMock = { setPixelXY: jest.fn() };
    const p = new Painter(fbMock);
    p.drawLine(2, 0, 0, 0);
    expect(fbMock.setPixelXY).toBeCalledTimes(3);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(1, 0, 0, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(2, 1, 0, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(3, 2, 0, 255, 255, 255);
  });

  test('Painter draw almost horizontal line test', () => {
    const fbMock = { setPixelXY: jest.fn() };
    const p = new Painter(fbMock);
    p.drawLine(0, 0, 3, 1);
    expect(fbMock.setPixelXY).toBeCalledTimes(4);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(1, 0, 0, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(2, 1, 0, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(3, 2, 1, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(4, 3, 1, 255, 255, 255);
  });

  test('Painter draw almost horizontal line test 2', () => {
    const fbMock = { setPixelXY: jest.fn() };
    const p = new Painter(fbMock);
    p.drawLine(0, 1, 3, 0);
    expect(fbMock.setPixelXY).toBeCalledTimes(4);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(1, 0, 1, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(2, 1, 1, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(3, 2, 0, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(4, 3, 0, 255, 255, 255);
  });

  test('Painter draw almost horizontal line test 3', () => {
    const fbMock = { setPixelXY: jest.fn() };
    const p = new Painter(fbMock);
    p.drawLine(3, 1, 0, 0);
    expect(fbMock.setPixelXY).toBeCalledTimes(4);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(1, 0, 0, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(2, 1, 0, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(3, 2, 1, 255, 255, 255);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(4, 3, 1, 255, 255, 255);
  });

  test('Painter draw vertical line test', () => {
    const fbMock = { setPixelXY: jest.fn() };
    const p = new Painter(fbMock);
    p.drawLine(0, 0, 0, 2, 100, 100, 100);
    expect(fbMock.setPixelXY).toBeCalledTimes(3);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(1, 0, 0, 100, 100, 100);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(2, 0, 1, 100, 100, 100);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(3, 0, 2, 100, 100, 100);
  });

  test('Painter draw reverse vertical line test', () => {
    const fbMock = { setPixelXY: jest.fn() };
    const p = new Painter(fbMock);
    p.drawLine(0, 2, 0, 0, 100, 100, 100);
    expect(fbMock.setPixelXY).toBeCalledTimes(3);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(1, 0, 0, 100, 100, 100);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(2, 0, 1, 100, 100, 100);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(3, 0, 2, 100, 100, 100);
  });

  test('Painter draw almost vertical line test', () => {
    const fbMock = { setPixelXY: jest.fn() };
    const p = new Painter(fbMock);
    p.drawLine(0, 0, 1, 3, 100, 100, 100);
    expect(fbMock.setPixelXY).toBeCalledTimes(4);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(1, 0, 0, 100, 100, 100);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(2, 0, 1, 100, 100, 100);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(3, 1, 2, 100, 100, 100);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(4, 1, 3, 100, 100, 100);
  });

  test('Painter draw almost vertical line test 2', () => {
    const fbMock = { setPixelXY: jest.fn() };
    const p = new Painter(fbMock);
    p.drawLine(1, 0, 0, 3, 100, 100, 100);
    expect(fbMock.setPixelXY).toBeCalledTimes(4);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(1, 1, 0, 100, 100, 100);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(2, 1, 1, 100, 100, 100);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(3, 0, 2, 100, 100, 100);
    expect(fbMock.setPixelXY).toHaveBeenNthCalledWith(4, 0, 3, 100, 100, 100);
  });
});

describe('Painter draw triangle tests', () => {
  test('Painter draw triangle', () => {
    const fbMock = { setPixelXY: jest.fn() };
    const p = new Painter(fbMock);
    p.drawLine = jest.fn(); // mock draw line
    const x1 = 10;
    const y1 = 11;
    const x2 = 20;
    const y2 = 21;
    const x3 = 30;
    const y3 = 31;
    p.drawTriangle(x1, y1, x2, y2, x3, y3);
    expect(p.drawLine).toBeCalledTimes(3);
    expect(p.drawLine).toHaveBeenNthCalledWith(1, x1, y1, x2, y2, 255, 255, 255);
    expect(p.drawLine).toHaveBeenNthCalledWith(2, x2, y2, x3, y3, 255, 255, 255);
    expect(p.drawLine).toHaveBeenNthCalledWith(3, x3, y3, x1, y1, 255, 255, 255);
  });
});

describe('Painter fill triangle tests', () => {
  test('Painter fill triangle', () => {
    const fbMock = { fillLine: jest.fn() };
    const p = new Painter(fbMock);
    p.fillTriangle(
      2, 1,
      1, 2,
      3, 3,
    );
    expect(fbMock.fillLine).toBeCalledTimes(4);
    expect(fbMock.fillLine).toHaveBeenNthCalledWith(1, 2, 2, 1, 255, 255, 255, 255);
    expect(fbMock.fillLine).toHaveBeenNthCalledWith(2, 1, 2, 2, 255, 255, 255, 255);
    expect(fbMock.fillLine).toHaveBeenNthCalledWith(3, 1, 3, 2, 255, 255, 255, 255);
    expect(fbMock.fillLine).toHaveBeenNthCalledWith(3, 1, 3, 2, 255, 255, 255, 255);
  });

  test('Painter fill triangle, different order', () => {
    const fbMock = { fillLine: jest.fn() };
    const p = new Painter(fbMock);
    p.fillTriangle(
      3, 3,
      1, 2,
      -2, 1,
    );
    expect(fbMock.fillLine).toBeCalledTimes(3);
    expect(fbMock.fillLine).toHaveBeenNthCalledWith(1, -2, -2, 1, 255, 255, 255, 255);
    expect(fbMock.fillLine).toHaveBeenNthCalledWith(2, 0, 1, 2, 255, 255, 255, 255);
    expect(fbMock.fillLine).toHaveBeenNthCalledWith(3, 3, 1, 3, 255, 255, 255, 255);
  });

  test('Painter fill horizontal triangle', () => {
    const fbMock = { fillLine: jest.fn() };
    const p = new Painter(fbMock);
    p.fillTriangle(
      2, 1,
      1, 1,
      3, 1,
    );
    expect(fbMock.fillLine).toBeCalledTimes(2);
    expect(fbMock.fillLine).toHaveBeenNthCalledWith(1, 2, 2, 1, 255, 255, 255, 255);
    expect(fbMock.fillLine).toHaveBeenNthCalledWith(2, 1, 2, 1, 255, 255, 255, 255);
  });
});

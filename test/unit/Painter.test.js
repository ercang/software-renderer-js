
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

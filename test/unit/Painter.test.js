
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

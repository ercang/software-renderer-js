
/* eslint-disable no-bitwise */
import Utility from '../../src/Utility';

describe('Utility tests', () => {
  test('color converter', () => {
    expect(Utility.ConvertRGBAToData(10, 20, 30, 255)).toBe(((255 << 24) | (30 << 16) | (20 << 8) | 10) >>> 0);
  });
});

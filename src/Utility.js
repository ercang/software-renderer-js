/* eslint-disable no-bitwise */
export default class Utility {
  static ConvertRGBAToData(r, g, b, a) {
    return ((a << 24) | (b << 16) | (g << 8) | r) >>> 0;
  }
}

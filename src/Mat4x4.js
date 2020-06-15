import Vector3 from './Vector3';

export default class Mat4x4 {
  constructor() {
    this.m = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
  }

  multiplyVector(v) {
    const result = new Vector3();
    result.x = v.x * this.m[0][0] + v.y * this.m[1][0] + v.z * this.m[2][0] + this.m[3][0];
    result.y = v.x * this.m[0][1] + v.y * this.m[1][1] + v.z * this.m[2][1] + this.m[3][1];
    result.z = v.x * this.m[0][2] + v.y * this.m[1][2] + v.z * this.m[2][2] + this.m[3][2];
    const w = v.x * this.m[0][3] + v.y * this.m[1][3] + v.z * this.m[2][3] + this.m[3][3];

    if (w !== 0.0) {
      result.x /= w;
      result.y /= w;
      result.z /= w;
    }

    return result;
  }
}

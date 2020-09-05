export default class Vector3 {
  constructor(x = 0, y = 0, z = 0) {
    this.data = new Float32Array(new ArrayBuffer(12));
    this.data[0] = x;
    this.data[1] = y;
    this.data[2] = z;
  }

  get x() {
    return this.data[0];
  }

  set x(_x) {
    this.data[0] = _x;
  }

  get y() {
    return this.data[1];
  }

  set y(_y) {
    this.data[1] = _y;
  }

  get z() {
    return this.data[2];
  }

  set z(_z) {
    this.data[2] = _z;
  }

  len() {
    return Math.hypot(this.data[0], this.data[1], this.data[2]);
  }

  len2() {
    return this.data[0] * this.data[0] + this.data[1] * this.data[1] + this.data[2] * this.data[2];
  }

  add(v) {
    this.data[0] += v.data[0];
    this.data[1] += v.data[1];
    this.data[2] += v.data[2];
    return this;
  }

  sub(v) {
    this.data[0] -= v.data[0];
    this.data[1] -= v.data[1];
    this.data[2] -= v.data[2];
    return this;
  }

  normalize() {
    const len = this.len();
    if (len !== 0) {
      this.data[0] /= len;
      this.data[1] /= len;
      this.data[2] /= len;
    }
    return this;
  }

  scale(mag) {
    this.data[0] *= mag;
    this.data[1] *= mag;
    this.data[2] *= mag;
    return this;
  }

  dot(v) {
    return this.data[0] * v.data[0]
           + this.data[1] * v.data[1]
           + this.data[2] * v.data[2];
  }

  cross(v) {
    const x = this.data[1] * v.data[2] - this.data[2] * v.data[1];
    const y = this.data[2] * v.data[0] - this.data[0] * v.data[2];
    const z = this.data[0] * v.data[1] - this.data[1] * v.data[0];
    this.data[0] = x;
    this.data[1] = y;
    this.data[2] = z;
    return this;
  }

  copy() {
    return new Vector3(this.data[0], this.data[1], this.data[2]);
  }
}

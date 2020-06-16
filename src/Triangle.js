import Vector3 from './Vector3';

export default class Triangle {
  constructor(p1x, p1y, p1z, p2x, p2y, p2z, p3x, p3y, p3z) {
    this.p = [];
    this.p.push(new Vector3(p1x, p1y, p1z));
    this.p.push(new Vector3(p2x, p2y, p2z));
    this.p.push(new Vector3(p3x, p3y, p3z));
    this.normal = undefined;
  }
}

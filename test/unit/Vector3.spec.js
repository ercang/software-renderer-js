
import Vector3 from '../../src/Vector3';

describe('Vector3 tests', () => {
  test('vector constructor', () => {
    const v1 = new Vector3();
    expect(v1.x).toBe(0);
    expect(v1.y).toBe(0);
    expect(v1.z).toBe(0);

    const v2 = new Vector3(1, 2, 3);
    expect(v2.x).toBe(1);
    expect(v2.y).toBe(2);
    expect(v2.z).toBe(3);
  });

  test('vector setters', () => {
    const v1 = new Vector3();
    v1.x = 5;
    v1.y = 6;
    v1.z = 7;
    expect(v1.x).toBe(5);
    expect(v1.y).toBe(6);
    expect(v1.z).toBe(7);
  });

  test('vector len function', () => {
    const v1 = new Vector3(1, 2, 3);
    expect(v1.len()).toBeCloseTo(3.74165);
  });

  test('vector len2 function', () => {
    const v1 = new Vector3(1, 2, 3);
    expect(v1.len2()).toBe(14);
  });

  test('vector add function', () => {
    const v1 = new Vector3(1, 2, 3);
    const v2 = new Vector3(4, 4, 4);
    v1.add(v2);
    expect(v1.x).toBe(5);
    expect(v1.y).toBe(6);
    expect(v1.z).toBe(7);
  });

  test('vector substract function', () => {
    const v1 = new Vector3(1, 2, 3);
    const v2 = new Vector3(4, 4, 4);
    v1.sub(v2);
    expect(v1.x).toBe(-3);
    expect(v1.y).toBe(-2);
    expect(v1.z).toBe(-1);
  });

  test('vector normalize function', () => {
    const v1 = new Vector3(3, 3, 3).normalize();
    expect(v1.len()).toBeCloseTo(1);
    expect(v1.x).toBeCloseTo(0.57735);
    expect(v1.y).toBeCloseTo(0.57735);
    expect(v1.z).toBeCloseTo(0.57735);
  });

  test('zero vector normalize function', () => {
    const v1 = new Vector3(0, 0, 0).normalize();
    expect(v1.len()).toBe(0);
    expect(v1.x).toBe(0);
    expect(v1.y).toBe(0);
    expect(v1.z).toBe(0);
  });

  test('vector scale function', () => {
    const v1 = new Vector3(3, 4, 5);
    v1.scale(2);
    expect(v1.x).toBe(6);
    expect(v1.y).toBe(8);
    expect(v1.z).toBe(10);
  });

  test('vector dot function', () => {
    const v1 = new Vector3(3, 4, 5);
    const v2 = new Vector3(4, 5, 6);
    expect(v1.dot(v2)).toBe(62);
  });

  test('vector cross function', () => {
    const v1 = new Vector3(3, 4, 5);
    const v2 = new Vector3(4, 5, 6);
    v1.cross(v2);
    expect(v1.x).toBe(-1);
    expect(v1.y).toBe(2);
    expect(v1.z).toBe(-1);
  });

  test('vector copy function', () => {
    const v1 = new Vector3(3, 3, 3);
    const v2 = v1.copy();
    expect(v1.x).toBe(v2.x);
    expect(v1.y).toBe(v2.y);
    expect(v1.z).toBe(v2.z);
    expect(v1).not.toBe(v2);
  });
});

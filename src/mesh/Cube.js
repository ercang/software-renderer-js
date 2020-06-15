import Triangle from '../Triangle';
import Mesh from '../Mesh';

const cubeMesh = new Mesh();
const t = cubeMesh.triangles;
// south
t.push(new Triangle(0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0));
t.push(new Triangle(0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0, 0.0));

// east
t.push(new Triangle(1.0, 0.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 1.0));
t.push(new Triangle(1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0));

// north
t.push(new Triangle(1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0));
t.push(new Triangle(1.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 0.0, 1.0));

// west
t.push(new Triangle(0.0, 0.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 0.0));
t.push(new Triangle(0.0, 0.0, 1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0));

// top
t.push(new Triangle(0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0));
t.push(new Triangle(0.0, 1.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0));

// bottom
t.push(new Triangle(1.0, 0.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0));
t.push(new Triangle(1.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0));

export default cubeMesh;

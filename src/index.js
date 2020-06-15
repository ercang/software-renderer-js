// test code
import Painter from './Painter';
import FrameBuffer32 from './FrameBuffer32';
import cube from './mesh/Cube';
import Mat4x4 from './Mat4x4';
import Triangle from './Triangle';

const screenWidth = 320;
const screenHeight = 240;

const matProj = new Mat4x4();
let fTheta = 0;

// initialize projection matrix
const fNear = 0.1;
const fFar = 1000.0;
const fFov = 90.0;
const fAspectRatio = screenHeight / screenWidth;
const fFovRad = 1.0 / Math.tan(fFov * 0.5 / 180.0 * Math.PI);

matProj.m[0][0] = fAspectRatio * fFovRad;
matProj.m[1][1] = fFovRad;
matProj.m[2][2] = fFar / (fFar - fNear);
matProj.m[3][2] = (-fFar * fNear) / (fFar - fNear);
matProj.m[2][3] = 1.0;
matProj.m[3][3] = 0.0;

const matRotZ = new Mat4x4(); const
  matRotX = new Mat4x4();
function onUpdate(painter) {
  // update rotation matrices
  fTheta = new Date() / 500;

  // Rotation Z
  matRotZ.m[0][0] = Math.cos(fTheta);
  matRotZ.m[0][1] = Math.sin(fTheta);
  matRotZ.m[1][0] = -Math.sin(fTheta);
  matRotZ.m[1][1] = Math.cos(fTheta);
  matRotZ.m[2][2] = 1;
  matRotZ.m[3][3] = 1;

  // Rotation X
  matRotX.m[0][0] = 1;
  matRotX.m[1][1] = Math.cos(fTheta * 0.5);
  matRotX.m[1][2] = Math.sin(fTheta * 0.5);
  matRotX.m[2][1] = -Math.sin(fTheta * 0.5);
  matRotX.m[2][2] = Math.cos(fTheta * 0.5);
  matRotX.m[3][3] = 1;

  // draw triangles
  cube.triangles.forEach((tri, index) => {
    const triProjected = new Triangle();
    const triRotatedZ = new Triangle();
    const triRotatedZX = new Triangle();

    // Rotate in Z-Axis
    triRotatedZ.p[0] = matRotZ.multiplyVector(tri.p[0]);
    triRotatedZ.p[1] = matRotZ.multiplyVector(tri.p[1]);
    triRotatedZ.p[2] = matRotZ.multiplyVector(tri.p[2]);

    // Rotate in X-Axis
    triRotatedZX.p[0] = matRotX.multiplyVector(triRotatedZ.p[0]);
    triRotatedZX.p[1] = matRotX.multiplyVector(triRotatedZ.p[1]);
    triRotatedZX.p[2] = matRotX.multiplyVector(triRotatedZ.p[2]);

    // Offset into the screen
    const triTranslated = triRotatedZX;
    triTranslated.p[0].z = triRotatedZX.p[0].z + 3.0;
    triTranslated.p[1].z = triRotatedZX.p[1].z + 3.0;
    triTranslated.p[2].z = triRotatedZX.p[2].z + 3.0;

    // Project triangles from 3D --> 2D
    triProjected.p[0] = matProj.multiplyVector(triTranslated.p[0]);
    triProjected.p[1] = matProj.multiplyVector(triTranslated.p[1]);
    triProjected.p[2] = matProj.multiplyVector(triTranslated.p[2]);

    // Scale into view
    triProjected.p[0].x += 1.0;
    triProjected.p[0].y += 1.0;
    triProjected.p[1].x += 1.0;
    triProjected.p[1].y += 1.0;
    triProjected.p[2].x += 1.0;
    triProjected.p[2].y += 1.0;
    triProjected.p[0].x *= 0.5 * screenWidth;
    triProjected.p[0].y *= 0.5 * screenHeight;
    triProjected.p[1].x *= 0.5 * screenWidth;
    triProjected.p[1].y *= 0.5 * screenHeight;
    triProjected.p[2].x *= 0.5 * screenWidth;
    triProjected.p[2].y *= 0.5 * screenHeight;

    // Rasterize triangle
    painter.fillTriangle(triProjected.p[0].x, triProjected.p[0].y,
      triProjected.p[1].x, triProjected.p[1].y,
      triProjected.p[2].x, triProjected.p[2].y, 10 * index % 255, 5 * index * index % 255, 2 * index * index % 255);
  });
}


document.addEventListener('DOMContentLoaded', () => {
  console.log("initializing ..."); // eslint-disable-line
  const frameBuffer = new FrameBuffer32(screenWidth, screenHeight);
  const painter = new Painter(frameBuffer);

  const drawFrame = () => {
  // draw stuff
    painter.clear();

    onUpdate(painter);
    // painter.fillTriangle(10, 10,100, 10,200, 200, 255,255,255);

    const canvas = document.getElementById('myCanvas');
    const ctx = canvas.getContext('2d');
    ctx.imageSmoothingEnabled = false;
    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const buf8 = new Uint8ClampedArray(frameBuffer.getBuffer());

    const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
    imageData.data.set(buf8);
    ctx.putImageData(imageData, 0, 0);

    // request frame
    window.requestAnimationFrame(drawFrame);
  };

  // start rendering
  drawFrame();
});

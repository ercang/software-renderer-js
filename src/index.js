// test code
import Painter from './Painter';
import FrameBuffer32 from './FrameBuffer32';


document.addEventListener('DOMContentLoaded', () => {
  console.log("initializing ..."); // eslint-disable-line
  const frameBuffer = new FrameBuffer32();
  const painter = new Painter(frameBuffer);

  // setInterval(() => {
  // draw stuff
  painter.clear();

  // update screen?
  const d = new Date() / 1000;
  const s = Math.sin(d);
  const c = Math.cos(d);
  const x1 = 160;
  const x2 = 160 + 60 * s;
  const y1 = 120;
  const y2 = 120 + 60 * c;
  // console.log(x1,y1,x2,y2); // eslint-disable-line
  painter.drawLine(x1, y1, x2, y2, 255, 0, 0);
  // painter.drawLine(160, 120, 100, 100);
  // painter.drawLine(100, 100, 160, 120);

  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const buf8 = new Uint8ClampedArray(frameBuffer.getBuffer());

  const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  imageData.data.set(buf8);
  ctx.putImageData(imageData, 0, 0);
  // }, 30);
});

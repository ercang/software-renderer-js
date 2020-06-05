// test code
import Painter from './Painter';
import FrameBuffer32 from './FrameBuffer32';


document.addEventListener('DOMContentLoaded', () => {
  console.log("initializing ..."); // eslint-disable-line
  const frameBuffer = new FrameBuffer32(400, 400);
  const painter = new Painter(frameBuffer);

  // draw stuff
  painter.clear();

  // update screen?

  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');
  const canvasWidth = canvas.width;
  const canvasHeight = canvas.height;
  const buf8 = new Uint8ClampedArray(frameBuffer.getBuffer());

  const imageData = ctx.getImageData(0, 0, canvasWidth, canvasHeight);
  imageData.data.set(buf8);
  ctx.putImageData(imageData, 0, 0);
});

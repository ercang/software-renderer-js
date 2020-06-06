// test code
import Painter from './Painter';
import FrameBuffer32 from './FrameBuffer32';


document.addEventListener('DOMContentLoaded', () => {
  console.log("initializing ..."); // eslint-disable-line
  const frameBuffer = new FrameBuffer32();
  const painter = new Painter(frameBuffer);

  const drawFrame = () => {
  // draw stuff
    painter.clear();

    // update screen?
    const d = new Date() / 500;
    const d2 = new Date() / 500 + 0.6;
    const s = Math.sin(d);
    const c = Math.cos(d);
    const s2 = Math.sin(d2);
    const c2 = Math.cos(d2);
    const x1 = 160;
    const x2 = 160 + 90 * s;
    const y1 = 120;
    const y2 = 120 + 90 * c;
    const x3 = 160 + 90 * s2;
    const y3 = 120 + 90 * c2;
    // console.log(x1,y1,x2,y2); // eslint-disable-line
    painter.fillTriangle(x1, y1, x2, y2, x3, y3, 255 * ((c + 1) / 2), 255 * ((s + 1) / 2), 255);
    // painter.drawTriangle(x1, y1, x2, y2, x3, y3, 255, 255, 255);
    // painter.drawLine(160, 120, 100, 100);
    // painter.drawLine(100, 100, 160, 120);

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

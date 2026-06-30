/*noise overlay used for the video intro portion*/

import { useEffect, useRef } from "react";
import "../../styles/IntroStyles/Donuts.css";

function NoiseOverlay({ enabled }) {
  if(!enabled) return;
  
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const size = 200;

    const resize = () => {
      canvas.width = size;
      canvas.height = size;
    };

    const draw = () => {
      const imageData = ctx.createImageData(size, size);
      const data = imageData.data;

      for (let i = 0; i < data.length; i += 4) {
        const v = Math.random() * 255;
        data[i] = v;
        data[i + 1] = v;
        data[i + 2] = v;
        data[i + 3] = 30;
      }

      ctx.putImageData(imageData, 0, 0);
    };

    let frame = 0;
    let id;

    const loop = () => {
      frame++;
      if (frame % 10 === 0) draw();
      id = requestAnimationFrame(loop);
    };

    resize();
    draw();
    loop();

    return () => cancelAnimationFrame(id);
  }, []);

  return <canvas className="noise-overlay" ref={canvasRef} />;
}

export default NoiseOverlay;
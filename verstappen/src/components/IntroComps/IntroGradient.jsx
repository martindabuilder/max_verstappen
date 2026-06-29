/*gradient overlay that follows the cursor around*/
import { useEffect } from "react";
import "../../styles/IntroStyles/Donuts.css";

function IntroGradient() {
  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let currentX = 0;
    let currentY = 0;
    let targetX = 0;
    let targetY = 0;
    let rafId = null;

    const lerp = (a, b, t) => a + (b - a) * t;

    const tick = () => {
      currentX = lerp(currentX, targetX, 0.05);
      currentY = lerp(currentY, targetY, 0.05);
      document.documentElement.style.setProperty("--posX", currentX);
      document.documentElement.style.setProperty("--posY", currentY);
      rafId = requestAnimationFrame(tick);
    };

    const onMouseMove = (e) => {
      targetX = (e.clientX - window.innerWidth / 2) / 3;
      targetY = (e.clientY - window.innerHeight / 2) / 3;
    };

    rafId = requestAnimationFrame(tick);
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return <div className="intro-gradient" />;
}

export default IntroGradient;
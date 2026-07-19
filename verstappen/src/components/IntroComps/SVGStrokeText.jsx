/*handles the logic behind the "drawn"-like effect for the text*/

import { motion, useMotionValue, useSpring } from "motion/react";
import { useState, useRef, useEffect } from "react";

function SVGStrokeText({ text, fontSize = "clamp(6rem, 18vw, 17.5rem)", delay = 1.5 }) {
  const [hovered, setHovered] = useState(false);
  const [mouseActive, setMouseActive] = useState(false);

  const svgRef = useRef(null);
  const hideTimer = useRef(null);

  const rawCx = useMotionValue(-999);
  const rawCy = useMotionValue(-999);

  const cx = useSpring(rawCx, { stiffness: 200, damping: 30 });
  const cy = useSpring(rawCy, { stiffness: 200, damping: 30 });

  {/* handles the mouse hover where portions of the text disappear */}
  const handleMouse = (e) => {
    const rect = svgRef.current.getBoundingClientRect();

    const svgWidth = rect.width || 1400;
    const svgHeight = rect.height || 200;

    rawCx.set((e.clientX - rect.left) * (1400 / svgWidth));
    rawCy.set((e.clientY - rect.top) * (200 / svgHeight));

    setMouseActive(true);

    clearTimeout(hideTimer.current);

    hideTimer.current = setTimeout(() => {
      setMouseActive(false);
    }, 70);
  };

  useEffect(() => {
    return () => clearTimeout(hideTimer.current);
  }, []);

  return (
    <svg
      ref={svgRef}
      viewBox="0 0 1400 200"
      preserveAspectRatio="xMidYMid meet"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: "100%",
        height: "auto",
        overflow: "visible",
        cursor: "default"
      }}

      onMouseEnter={() => { setHovered(true); setMouseActive(true); }}

      onMouseLeave={() => {
        setHovered(false);
        setMouseActive(false);
        rawCx.set(-999);
        rawCy.set(-999);
        clearTimeout(hideTimer.current);
      }}
      onMouseMove={handleMouse}>
        
      <defs>
        <filter id="blur-mask" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="12" />
        </filter>
        
{/*mask for the outline part of the text*/}
      <mask id = "outline-reveal-mask">
        <rect x = "-50%" y = "-200%" width = "200%" height = "500%" fill = "white" />
        <motion.circle
        cx = {cx} cy = {cy}
        fill = "black"
        filter = "url(#blur-mask)"
        animate = {{ r : hovered && mouseActive ? 40 : 0 }}
        transition = {{ duration: 0.2, ease: "easeOut" }}/>
      </mask>

{/*mask for the fill part of the text*/}
        <mask id = "reveal-mask">
          <rect x = "-50%" y = "-200%" width = "200%" height = "500%" fill = "white" />
          <motion.circle
            cx = {cx} cy = {cy}
            fill = "black"
            filter ="url(#blur-mask)"
            animate = {{ r: hovered && mouseActive ? 120 : 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }} />
        </mask>
      </defs>

{/*main text outline drawing portion*/}
      <motion.text
        x = "50%" y = "100"
        textAnchor = "middle"
        dominantBaseline = "middle"
        fontFamily = "Anton SC Static"
        fontSize = {fontSize}
        fill = "none"
        stroke = "rgb(255, 255, 255)"
        strokeWidth = "2.1"
        mask = "url(#outline-reveal-mask)"

        initial = {{ strokeDasharray: 3000, strokeDashoffset: 3000 }}
        animate = {{ strokeDashoffset: 0 }}
        transition = {{ duration: 3, ease: "easeInOut", delay }}>

          {text}

      </motion.text>

{/*fill in portion of the text*/}
      <motion.text
        x = "50%" y="100"
        textAnchor = "middle"
        dominantBaseline = "middle"
        fontFamily = "Anton SC Static"
        fontSize = {fontSize}
        fill = "rgb(255, 255, 255)"
        mask = "url(#reveal-mask)"

        initial = {{ opacity: 0 }}
        animate = {{ opacity: 1 }}
        transition = {{  duration: 0.5, delay: 4.5 }}>

          {text}

      </motion.text>
    </svg>
  );
}

export default SVGStrokeText;
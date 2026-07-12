/*handles the logic behind the "drawn"-like effect for the text*/

import { motion } from "motion/react"; 
import { useState, useRef } from "react";

function SVGStrokeText({ text, fontSize = "clamp(6rem, 18vw, 17.5rem)", delay = 1.5 }) { 

  const [mousePos, setMousePos] = useState({x: -999, y: -999});
  const [hovered, setHovered] = useState(false);
  const svgRef = useRef(null);

  const handleMouse = (e) => {
    const rect = svgRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return ( 
    <svg viewBox = "0 0 1400 160" 
    xmlns = "http://www.w3.org/2000/svg" 
    style = {{ 
      width: "100%", 
      height: "auto", 
      overflow: "visible", 
      cursor: "default" }}
      onMouseEnter = {() => setHovered(true)}
      onMouseLeave = {() => {setHovered(false); setMousePos({x: -999, y: -999}); }}
      onMouseMove = {handleMouse}>
      
      <defs>
        <mask id = "reveal-mask">
          <rect width = "100%" height = "100%" fill = "white" />

          <motion.circle 
            cx = {mousePos.x * (1400 / (svgRef.current?.getBoundingClientRect().width || 1400))}
            cy = {mousePos.y * (160 / (svgRef.current?.getBoundingClientRect().height || 160))}
            r = {hovered ? 200 : 0}
            fill = "black"
            style = {{ transition: "r 0.3 ease" }}
          />

        </mask>
      </defs>

      {/*handles the main text drawing portion, aswell as its outline*/}
      <motion.text 
        x = "50%" 
        y = "100" 
        textAnchor = "middle" 
        dominantBaseline="middle" 
        fontFamily = 'Anton SC Static' 
        fontSize = {fontSize} 
        fill = "none" 
        stroke = "rgb(239, 235, 199)" 
        strokeWidth = "2.1" 
       
        initial = {{ strokeDasharray: 3000, strokeDashoffset: 3000, }} 
        animate = {{ strokeDashoffset: 0, }} 
        transition = {{ duration: 3, ease: "easeInOut", delay, }}> 

        {text} 

      </motion.text> 
       
      {/*handles the "fill" animation*/}
      <motion.text 
        x = "50%" 
        y = "99" 
        textAnchor = "middle" 
        dominantBaseline="middle" 
        fontFamily = 'Anton SC Static' 
        fontSize = {fontSize} 
        fill = "rgb(239, 235, 199)" 
        mask = "url(#reveal-mask)"
        initial = {{ opacity: 0 }} 
        animate = {{ opacity: 1 }} 
        transition = {{ duration: 0.5, delay: 4.5, }}> 
        
        {text} 
     
      </motion.text> 
    </svg> 
  ); 
} 
    
export default SVGStrokeText;
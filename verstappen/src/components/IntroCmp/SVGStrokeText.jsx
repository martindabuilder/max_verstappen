/*handles the logic behind the "drawn"-like effect for the text*/

import { motion } from "motion/react"; 

function SVGStrokeText({ text, fontSize = 30, delay = 1.5 }) { 
  return ( 
    <svg viewBox = "0 0 1400 160" 
    xmlns = "http://www.w3.org/2000/svg" 
    style = {{ width: "100%", height: "auto", overflow: "visible", }}>
      <motion.text 
        x="50%" 
        y="100" 
        textAnchor = "middle" 
        dominantBaseline="middle" 
        fontFamily = 'Space Grotesk, sans-serif' 
        fontSize = {fontSize} 
        fill = "none" 
        stroke = "rgb(239, 235, 199)" 
        strokeWidth = "2.1" 
       
        initial = {{ strokeDasharray: 3000, strokeDashoffset: 3000, }} 
        animate = {{ strokeDashoffset: 0, }} 
        transition={{ duration: 3, ease: "easeInOut", delay, }}
      > 
        {text} 
      </motion.text> 
       
      <motion.text 
        x = "50%" 
        y = "99" 
        textAnchor = "middle" 
        dominantBaseline="middle" 
        fontFamily = 'Space Grotesk, sans-serif' 
        fontSize = {fontSize} 
        fill = "rgb(239, 235, 199)" 
        initial = {{ opacity: 0 }} 
        animate = {{ opacity: 1 }} 
        transition = {{ duration: 0.5, delay: 4.5, }}
      > 
        {text} 
      </motion.text> 
    </svg> 
  ); 
} 
    
export default SVGStrokeText;
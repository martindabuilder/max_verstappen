import { motion } from "motion/react";

function SVGStrokeText({ text, fontSize = 30, delay = 0.5 }) {
  return (
    <svg
      viewBox = "0 0 1400 160"
      xmlns = "http://www.w3.org/2000/svg"
      style = {{
        width: "100%",
        height: "auto",
        overflow: "visible",
      }}>

      <motion.text
        x="50%"
        y="100"
        textAnchor = "middle"
        dominantBaseline="middle"
        fontFamily = 'Space Grotesk, sans-serif'
        fontSize = {fontSize}
        fill = "none"
        stroke = "rgb(239, 235, 199)"
        strokeWidth = "1"
        initial = {{
          strokeDasharray: 2000,
          strokeDashoffset: 2000,
        }}
        animate = {{
          strokeDashoffset: 0,
        }}
        transition={{
          duration: 2.5,
          ease: "easeInOut",
          delay,
        }}>
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
        transition = {{
          duration: 0.5,
          delay: delay + 2.3,
        }}>
            
        {text}
      </motion.text>
    </svg>
  );
}

export default SVGStrokeText;
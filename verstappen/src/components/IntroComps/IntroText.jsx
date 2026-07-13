/*component containing the 2 flavor texts in the intro*/

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

import SVGStrokeText from "./SVGStrokeText";
import "../../styles/IntroStyles/IntroText.css";

function Intro_text() {
  const [showIntroText, setShowIntroText] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { setShowIntroText(false); }
      else { setShowIntroText(true); }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => { window.removeEventListener("scroll", handleScroll )};
  }, []);

  return (
    <AnimatePresence>
      {showIntroText && (
        <motion.div 
        className = "intro-text-container"
        exit = {{ 
          opacity: 0,
          y: -100,
          filter: "blur(20px)"
        }}
        transition={{ duration: 0.9, ease: "easeInOut" }} >

        <SVGStrokeText
          text="Max Verstappen"
          fontSize="clamp(6rem, 18vw, 17.5rem)"
          delay = {3}
        /> 

        <motion.p
          className = "intro-subtitle"
          initial = {{ opacity: 0, y: 10 }}
          animate = {{ opacity: 1, y: 0 }}
          transition = {{ duration: 1, delay: 4.3, }}
        >
          4 Time Formula 1 World Champion
        </motion.p>
     
        </motion.div>
      )}
    </AnimatePresence>
    
  );
}

export default Intro_text;
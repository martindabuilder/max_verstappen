/*component containing the 2 flavor texts in the intro*/

import { motion } from "motion/react";
import { useState, useEffect } from "react";

import SVGStrokeText from "./SVGStrokeText";
import "../../styles/IntroStyles/IntroText.css";

function Intro_text() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) { setHidden(true); } 
      else { setHidden(false); }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => { window.removeEventListener("scroll", handleScroll); };
  }, []);

  return (
    <motion.div
      className = "intro-text-container"
      animate = {{
        opacity: hidden ? 0 : 1,
        filter: hidden ? "blur(18px)" : "blur(0px)",
        marginTop: hidden ? "-30px" : "0px"
      }}
      transition = {{ duration: 1.5, ease: "easeInOut" }}
    >

      <SVGStrokeText
        text = "Max Verstappen"
        fontSize = "clamp(6rem, 17vw, 17rem)"
        delay = {3}
      />

      <motion.p
        className = "intro-subtitle"
        initial = {{ opacity: 0, y: 10 }}
        animate = {{ opacity: hidden ? 0 : 1, y: hidden ? -20 : 0 }}
        transition = {{ duration: 1, delay: 4.3 }}>
          4 Time Formula 1 World Champion
      </motion.p>

    </motion.div>
  );
}

export default Intro_text;
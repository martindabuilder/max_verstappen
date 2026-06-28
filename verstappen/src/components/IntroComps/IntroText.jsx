/*component containing the 2 flavor texts in the intro*/

import { motion } from "motion/react";
import SVGStrokeText from "./SVGStrokeText";
import "../../styles/IntroStyles/IntroText.css";

function Intro_text() {
  return (
    <div className = "intro-text-container">

      <SVGStrokeText
        text="Max Verstappen"
        fontSize = {230}
        delay = {3}/>

      <motion.p
        className = "intro-subtitle"
        initial = {{ opacity: 0, y: 10 }}
        animate = {{ opacity: 1, y: 0 }}
        transition = {{
          duration: 0.9,
          delay: 4.3,
        }}>
            
        4 Time Formula 1 World Champion
      </motion.p>

    </div>
  );
}

export default Intro_text;
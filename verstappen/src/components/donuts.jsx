import { useState, useRef } from "react";
import donuts from "../assets/videos/donuts.mp4";

import "../styles/Donuts.css";

import IntroText from "./IntroText";
import ScrollHint from "./ScrollHint";
import { AnimatePresence } from "motion/react";

function Donuts() {
  const videoRef = useRef(null);
  const [isFading, setIsFading] = useState(false);

  const handleVideoEnd = () => {
    setIsFading(true);
    setTimeout (() => {
      if (videoRef.current) {
        videoRef.current.currentTime = 0;
        videoRef.current.play();
      }

      setIsFading(false);
    }, 800);
  };

  return (
    <section className = "donuts">
      <video
        ref = {videoRef}
        autoPlay
        muted
        playsInLine
        onEnded = {handleVideoEnd}
        className = "bg-video">
          <source src = {donuts} type = "video/mp4" />
      </video>

      <AnimatePresence>
        {isFading && (
          <MotionConfig.div 
            className = "fade-overlay"
            initial = {{ opacity: 0}}
            animate = {{ opacity: 1}}
            exit = {{ opacity: 0}}
            transition = {{ duration: 0.4 }}
          />
        )}
      </AnimatePresence>

      <ScrollHint />
      <IntroText />
    </section>
  )

}

export default Donuts;
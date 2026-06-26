/*contains the main logic behind the first section*/
/*ie: the video loop, gradient and noise overlay, title text and transitions*/

import { useState, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

import donuts from "../assets/videos/donuts.mp4";

import "../styles/Donuts.css";

import IntroText from "./IntroText";
import ScrollHint from "./ScrollHint";
import IntroGradient from "./IntroGradient";
import NoiseOverlay from "./NoiseOverlay";

function Donuts() {
  const videoRef = useRef(null);
  const [isFading, setIsFading] = useState(false);
  const hasFaded = useRef(false);

  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || hasFaded.current) return;

    if (video.duration - video.currentTime <= 0.7){
      hasFaded.current = true;
      setIsFading(true);
    }
  };

  const handleVideoEnd = () => {
    const video = videoRef.current;

    if (!video) return;

    setTimeout(() => {
      video.currentTime = 0;

      video.play().catch(console.error);

      setIsFading(false);

      hasFaded.current = false;
    }, 1800);
  };

  return (
    <section className = "donuts">
      <video
        ref = {videoRef}
        autoPlay
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onEnded = {handleVideoEnd}
        className = "bg-video">
          <source src = {donuts} type = "video/mp4" />
      </video>

      <AnimatePresence>
        {isFading && (
          <motion.div 
            className = "fade-overlay"
            initial = {{ opacity: 0}}
            animate = {{ opacity: 1}}
            exit = {{ opacity: 0}}
            transition = {{ 
              duration: 0.6,
              ease: "easeInOut"
             }}
          />
        )}
      </AnimatePresence>

      <NoiseOverlay />
      <IntroGradient />
      
      <ScrollHint />
      <IntroText />
    </section>
  )

}

export default Donuts;
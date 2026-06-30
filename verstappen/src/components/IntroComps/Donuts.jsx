/*contains the main logic behind the first section*/
/*ie: the video loop, gradient and noise overlay, title text and transitions*/

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";

import donuts from "../../assets/videos/donuts.mp4";

import "../../styles/IntroStyles/Donuts.css";

import IntroText from "./IntroText";
import ScrollHint from "../../shared/ScrollHint";
import IntroGradient from "./IntroGradient";
import NoiseOverlay from "./NoiseOverlay";

function Donuts() {
  const videoRef = useRef(null);
  const [isFading, setIsFading] = useState(false);
  const hasFaded = useRef(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const [showRBLogo, setRBLogo] = useState(false);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {amount: 0.1,});

  /*handles the looping of the video*/
  const handleTimeUpdate = () => {
    const video = videoRef.current;

    if (!video || hasFaded.current) return;

    if (video.duration - video.currentTime <= 0.7){
      hasFaded.current = true;
      setIsFading(true);
    }
  };

  /*handles the video repeating and the black background that follows after it*/
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

  /*blur on scroll effect*/
  useEffect(() => {
    if (!isInView) return;

    const onScroll = () => {
      const video = videoRef.current;
      const progress = Math.min(window.scrollY / window.innerHeight, 1);

      if (video) {
        video.style.filter    = `blur(${progress * 12}px)`;
        video.style.transform = `scale(${1.3 + progress * 0.08})`;
        video.playbackRate    = Math.max(1 - progress * 0.9, 0.7);
      }

      setScrollOpacity(progress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, [isInView]);

  /*pause/plays the video whether the section is/is not in view*/
  useEffect(()=> {
    const video = videoRef.current;

    if (isInView) {
      video.play().catch(() => {});
    }
    else {
      video.pause();
    }
  }, [isInView]);

  return (
    <section ref = {sectionRef} className = "donuts">
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

      <div
        className="scroll-fade-overlay"
        style={{ opacity: scrollOpacity }}
      />

      <NoiseOverlay enabled = {isInView}/>
      <IntroGradient enabled = {isInView}/>
      
      <ScrollHint />
      <IntroText />
    </section>
  )

}

export default Donuts;
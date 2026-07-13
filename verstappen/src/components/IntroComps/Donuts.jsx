/*contains the main logic behind the first section*/
/*ie: the video loop, gradient and noise overlay, title text and transitions*/

import { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, useInView } from "motion/react";

import donuts from "../../assets/videos/donuts.mp4";
import RBLogo from "../../assets/images/Intro_images/RBLogo.png";

import "../../styles/IntroStyles/Donuts.css";

import IntroText from "./IntroText";
import ScrollHint from "../../shared/ScrollHint";
import IntroGradient from "./IntroGradient";
import NoiseOverlay from "./NoiseOverlay";

function Donuts() {
  const videoRef = useRef(null);
  const [isFading, setIsFading] = useState(false);
  const hasFaded = useRef(false);
  const [showRBLogo, setShowRBLogo] = useState(false);
  const [scrollOpacity, setScrollOpacity] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, {amount: 0.1});
  const isRBLogoInView = useInView(sectionRef, {amount: 0.9});
  const logoScrollCancelled = useRef(false);

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
  /*also includes the flag reset for the RB logo if the scroll gets canceled */
  const handleVideoEnd = () => {
    const video = videoRef.current;

    if (!video) return;

    setTimeout(() => {
      logoScrollCancelled.current =  false;

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
      const easedProgress = 1 - Math.pow(1 - progress, 2.2);

      if (video) {
        video.style.filter = `blur(${easedProgress * 12}px)`;
        video.style.transform = `scale(${1.3 + easedProgress * 0.08})`;
        video.playbackRate = Math.max(1 - easedProgress * 0.9, 0.7);
      }

      setScrollOpacity(easedProgress);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isInView]);

  /*pause/plays the video whether the section is/is not in view*/
  useEffect(()=> {
    const video = videoRef.current;
    if (isInView) { video.play().catch(() => {}); }
    else { video.pause(); }
  }, [isInView]);

  /*handles the RB logo flash effect when the video fades out*/
  useEffect(() =>{
    const handleScroll = () => {
      if (window.scrollY > 0) { logoScrollCancelled.current = true; setShowRBLogo(false); }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [])

  useEffect(() => {
    if (!isFading || !isRBLogoInView || logoScrollCancelled.current) return;
    setShowRBLogo(true);

    const timer = setTimeout(() => { setShowRBLogo(false) }, 1500);

    return () => clearTimeout(timer);
  }, [isFading, isRBLogoInView]);

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
        style={{ opacity: scrollOpacity }}/>

      <NoiseOverlay enabled = {isInView}/>
      <IntroGradient enabled = {isInView}/>

      {/* handles the rb logo fade in/out */}
      <AnimatePresence>
        {showRBLogo && (
          <motion.div
            className="rb-logo-flash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }} >
              <img src={RBLogo} className="rb-logo-img" 
          />

          <div
            className="rb-sweep-wrapper"
            style={{
              maskImage: `url(${RBLogo})`,
              maskSize: "100% 100%",
              maskRepeat: "no-repeat",
              WbkitMaskImage: `url(${RBLogo})`,
              WebkitMaskSize: "100% 100%",
              WebkitMaskRepeat: "no-repeat",
            }}
          >

          <motion.div
            className="rb-sweep"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 0.7, ease: "easeIn", delay: 0.4 }}/>
          </div>
        </motion.div>
        )}
      </AnimatePresence>
      
      <ScrollHint />
      <IntroText />
    </section>
  )
}

export default Donuts;
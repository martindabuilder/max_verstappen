/*Custom scrollbar component*/
import { motion, useScroll, useSpring, useTransform, } from "motion/react";
import "./ScrollBar.css";
import { useState, useEffect } from "react";

function ScrollBar() {
  const [visibleScroll, setVisibleScroll] = useState(true);
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {stiffness: 100, damping: 30, restDelta: 0.001, });
  const bubbleScroll = useTransform(
    smoothScroll,
    (progress) => {
      const trackHeight = window.innerHeight - 40;
      const bubbleHeight = 50;
      const maxY = trackHeight - bubbleHeight;
      return progress * maxY;
    }
  );

  useEffect(() => {
    let hideTimeout;

    const handleScroll = () => {
      setVisibleScroll(true);
      clearTimeout(hideTimeout);

      hideTimeout = setTimeout(() => {
        setVisibleScroll(false);
      }, 150);
    };
    
    window.addEventListener("scroll", handleScroll);
    return() => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(hideTimeout);
    };
  }, []);

  return (
    <motion.div className = "scroll-bar"
      animate = {{ opacity: visibleScroll ? 1 : 0,}}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className = "scroll-track" />
      <motion.div
        className = "scroll-bubble"
        style = {{ y: bubbleScroll, }}
      />
    </motion.div>
  );
}

export default ScrollBar;
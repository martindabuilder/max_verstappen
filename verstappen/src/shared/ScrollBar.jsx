/*Custom scrollbar component*/
import { motion, useScroll, useSpring, useTransform, } from "motion/react";
import "./ScrollBar.css";

function ScrollBar() {
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

  return (
    <div className = "scroll-bar">
      <div className = "scroll-track" />
      <motion.div
        className = "scroll-bubble"
        style = {{ y: bubbleScroll, }}
      />
    </div>
  );
}

export default ScrollBar;
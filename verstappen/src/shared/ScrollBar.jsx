/*Custom scrollbar component*/
import { motion, useScroll, useSpring } from "motion/react";

import "./ScrollBar.css";


function ScrollBar() {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001, });

    return(
        <motion.div className = "scroll-bar" style = {{ scaleX }} />
    );
};

export default ScrollBar;
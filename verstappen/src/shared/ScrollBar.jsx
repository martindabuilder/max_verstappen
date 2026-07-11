/*Custom scrollbar component*/
import { motion, useScroll, useSpring } from "motion/react";

import "./ScrollBar.css";


function ScrollBar() {

    return(
        <motion.div className = "scrollbar" />
    );
};

export default ScrollBar
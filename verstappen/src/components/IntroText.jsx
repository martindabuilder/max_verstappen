import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

import "../styles/IntroText.css";

function Intro_text() {
    return(
        <div className = "intro-text-container">
            <motion.h1 className = "intro-title"
            initial = {{ opacity: 0, y: 20 }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ duration: 0.5, delay: 1.5 }}
            >
                Max Verstappen
            </motion.h1>

            <motion.p className = "intro-subtitle"
            initial = {{ opacity: 0, y: 20 }}
            animate = {{ opacity: 1, y: 0 }}
            transition = {{ duration: 0.5, delay: 1.8 }}
            >
                4 Time Formula 1 World Champion
            </motion.p>
        </div>
    );
}

export default Intro_text;
import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

import "../styles/IntroText.css";

function Intro_text() {
    return(
        <div className = "intro-text-container">
            <motion.h1 className = "intro-title">
                Max Verstappen
            </motion.h1>

            <motion.p className = "intro-subtitle">
                4 Time Formula 1 World Champion
            </motion.p>
        </div>
    );
}

export default Intro_text;
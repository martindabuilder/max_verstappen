
import { AnimatePresence, motion } from "motion/react";
import "./RollingCounter.css";

function RollingCounter({value, duration = 0.55, suffix = "", className = ""}){
    const counterVariants = {
        initial: {
            opacity: 0,
        },

        animate: {
            opacity: 1,
        },
    };

    return (
        <div className={`rolling-counter-wrapper ${className}`}>
            <AnimatePresence>
                <motion.span
                key = {value}
                className = "counter-number"
                variants = {counterVariants}
                initial = "initial"
                animate = "animate"
                transition = {{
                    duration,
                    ease: "easeInOut",
                }}>
                    {value}
                    {suffix}
                </motion.span>
            </AnimatePresence>
        </div>
    )
}

export default RollingCounter;
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, use } from "react";
import "../styles/ScrollHint.css";

function ScrollHint() {
    const [showHint, setShowHint] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setShowHint(false);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return() => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <AnimatePresence>
            {showHint && (
                <motion.div
                    classname = "scroll-hint"
                    initial = {{ opacity: 0, y: -10 }}
                    animate = {{ opacity: 1, y: 0 }}
                    exit = {{ opacity: 0, y: 20 }}
                    transition = {{ duration: 0.4 }}>
                        <p>Scroll to continue</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ScrollHint;
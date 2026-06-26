/*scroll to continue hint logic*/

import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect} from "react";
import "../styles/ScrollHint.css";

function ScrollHint() {
    const [showHint, setShowHint] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHint(true);
        }, 5000)

        const handleScroll = () => {
            if (window.scrollY > 10) {
                setTimeout(() => setShowHint(false), 200);
            }
        }

        window.addEventListener("scroll", handleScroll);

        return() => {
            clearTimeout(timer);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <AnimatePresence>
            {showHint && (
                <motion.div
                    className = "scroll-hint"
                    initial = {{ opacity: 0, y: -10 }}
                    animate = {{ opacity: 1, y: 0 }}
                    exit = {{ opacity: 0, y: 20 }}
                    transition = {{ duration: 2 }}>

                        <p>Scroll to continue</p>

                    {/* scroll arrow code snippet */}
                    <motion.div
                        className = "arrow"
                        style = {{ rotate: 45 }}
                        animate = {{ y: [0, 7, 0] }}
                        transition = {{
                            repeat: Infinity,
                            ease: "easeInOut",
                            duration: 2,
                        }}>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ScrollHint;
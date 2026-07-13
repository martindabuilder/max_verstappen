/*scroll to continue hint logic*/

import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect, useRef} from "react";
import "./ScrollHint.css";

function ScrollHint() {
    const [showHint, setShowHint] = useState(false);
    const lastScrollY = useRef(0);

    /*delay after which the scroll hint will show up*/
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowHint(true);
        }, 5000)

        return() => {clearTimeout(timer);};
    }, []);

    /*handles the logic for the scroll hint when scrolling back up*/
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const last = lastScrollY.current;

            if (currentScrollY > last + 5) { setShowHint(false); }

            if (currentScrollY < last) { setShowHint(true); }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener("scroll", handleScroll, {passive: true});

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <AnimatePresence>
            {showHint && (
                <motion.div
                    className = "scroll-hint"
                    initial = {{ opacity: 0, y: -10, filter: "blur(10px)" }}
                    animate = {{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    exit = {{ opacity: 0, y: -40, filter: "blur(10px)" }}
                    transition = {{ duration: 2, ease: "easeOut" }}>

                        <p>Scroll to continue</p>

                    {/* scroll arrow code snippet */}
                    <motion.div
                        className = "arrow"
                        style = {{ rotate: 45 }}
                        animate = {{ y: [0, 7, 0] }}
                        transition = {{ repeat: Infinity, ease: "easeInOut", duration: 2, }}>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default ScrollHint;
/*contains the logic behind the black-out logo popping intro*/

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

import logo from "../../assets/images/Intro_images/MVLogo.png";

import "../../styles/IntroStyles/Intro.css";

function Intro() {
    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => { setShowLogo(false) }, 1300);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {showLogo && (
                <motion.div
                    className = "intro-screen"
                    initial = {{ opacity: 1 }}
                    exit = {{ opacity: 0 }}
                    transition = {{ duration: 1 }}>

                    <motion.div
                        className="logo-wrapper"
                        initial = {{ opacity: 0, scale: 0.8 }}
                        animate = {{ opacity: 1, scale: 1 }}
                        transition = {{ duration: 0.3, scale: { type: "spring", visualDuration: 0.3, bounce: 0.3 }}}>

                        <img src = {logo} alt = "Intro-Logo" className = "intro-logo" />

                        <div
                            className = "logo-sweep-wrapper"
                            style = {{
                                maskImage: `url(${logo})`,
                                maskSize: "100% 100%",
                                maskRepeat: "no-repeat",
                                WebkitMaskImage: `url(${logo})`,
                                WebkitMaskSize: "100% 100%",
                                WebkitMaskRepeat: "no-repeat",
                            }}>
                            <motion.div
                                className = "logo-sweep"
                                initial = {{ x: "-100%" }}
                                animate = {{ x: "200%" }}
                                transition = {{ duration: 0.8, ease: "easeInOut", delay: 0.4 }}
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Intro;
/*contains the logic behind the black-out logo popping intro*/

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

import logo from "../../assets/images/intro_images/logo.png";
import "../../styles/IntroStyles/Intro.css";

function Intro() {

    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 1300);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence> 
            {showLogo && (
                <motion.div 
                    className="intro-screen"
                    initial={{ opacity: 1 }}
                    exit = {{ opacity: 0}}
                    transition = {{ duration: 1.3 }}>

                    <motion.div
                        className = "logo-wrapper"
                        initial = {{ opacity: 0, scale: 0 }}
                        animate = {{ opacity: 1, scale: 1 }}
                        transition = {{
                            duration: 0.2,
                            scale: {
                                type: "spring",
                                visualDuration: 0.2,
                                bounce: 0.3
                            }
                        }}>

                        <img
                            src = {logo} 
                            alt = "Intro-Logo" 
                            className = "intro-logo"
                        />

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Intro;
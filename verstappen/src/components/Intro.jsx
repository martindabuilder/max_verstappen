import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

import logo from "../assets/images/intro_images/logo.png";
import "../styles/Intro.css";

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
                        
                    <motion.img
                    src = {logo}
                    alt = "Intro-Logo"
                    className = "intro-logo"

                    initial = {{ opacity: 0, scale: 0 }}
                    animate = {{ opacity: 1, scale: 1 }}

                    transition = {{
                        duration: 0.3,
                        scale: {
                            type: "spring",
                            bounce: 0.3,
                            visualDuration: 0.3
                        }
                    }}
                    />
                </motion.div>
            )}
            
        </AnimatePresence>
    );
}

export default Intro;
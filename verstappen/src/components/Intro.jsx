import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

import logo from "../assets/images/intro_images/logo.png";
import "../styles/Intro.css";

function Intro() {

    const [showLogo, setShowLogo] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowLogo(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence> 



        </AnimatePresence>
    );
}

export default Intro;
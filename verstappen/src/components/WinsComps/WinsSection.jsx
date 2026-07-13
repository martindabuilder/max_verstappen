/*third section, containing max's wins*/
import { useEffect, useState, useRef } from "react";
import {AnimatePresence, motion } from "motion/react";

import RollingCounter from "../../shared/RollingCounter.jsx";

import "../../styles/WinsStyles/WinsSection.css";

function WinsSection() {
    /*Handles the counter going to 71*/
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= 71) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        });
        return () => clearInterval(interval);
    }, []);

    return (
        <section id = "wins-section" className = "wins-section">

            <RollingCounter value={count} duration = {5} label = "Wins"/>
            
        </section>
    )
}

export default WinsSection;
/*fourth section, containing max's podiums*/
import { useEffect, useState, useRef } from "react";
import {AnimatePresence, motion } from "motion/react";

import RollingCounter from "../../shared/RollingCounter.jsx";

import "../../styles/PodiumsStyles/PodiumsSection.css";

function PodiumsSection() {
    /*Handles the counter going to 4*/
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= 128) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        });
        return () => clearInterval(interval);
    }, []);

    return (
        <section className = "podiums-section">

            <RollingCounter value={count} duration = {5} label = "Podiums"/>
            
        </section>
    )
}

export default PodiumsSection;
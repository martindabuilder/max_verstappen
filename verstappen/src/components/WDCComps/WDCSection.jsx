/*second section of the site, containing max's wdc*/
import { useEffect, useState, useRef } from "react";
import {AnimatePresence, motion } from "motion/react";

import championships from "../../data/Championships.jsx";

import RollingCounter from "../../shared/RollingCounter.jsx";

import "../../styles/WDCStyles/WDCSection.css";


function WDCSection() {
    /*Handles the counter going to 4*/
    const [count, setCount] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => {
                if (prev >= 4) {
                    clearInterval(interval);
                    return prev;
                }
                return prev + 1;
            });
        });
        return () => clearInterval(interval);
    }, []);

    
    return (

        <section className="wdc-section">
            
            <RollingCounter value={count} duration = {4} label = "Wins"/>

        </section>

    );

}

export default WDCSection;
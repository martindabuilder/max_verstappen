/*second section of the site, containing max's wdc*/
import { useEffect, useState, useRef } from "react";
import {AnimatePresence, motion } from "motion/react";

import championships from "../../data/Championships.jsx";

import RollingCounter from "../../shared/RollingCounter.jsx";

import "../../styles/WDCStyles/WDCSection.css";


function WDCSection() {

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
        }, 1050);
        return () => clearInterval(interval);

    }, []);

    return (

        <section className="wdc-section">
            
            <RollingCounter value={count} />

        </section>

    );

}

export default WDCSection;
import { useEffect, useRef, useCallback, useState } from "react";
import "./RollingCounter.css";

function RollingCounter({ value, duration = 0.8, suffix = "", className = "", label = "" }) {
    const ref = useRef(null);
    const [displayValue, setDisplayValue] = useState(0);

    const formatValue = useCallback((latest) => {
        return `${Math.round(latest)}${suffix}`;
    }, [suffix]);

    useEffect(() => {
        const startTime = performance.now();
        const startValue = 0;
        const endValue = value;

        const updateValue = (currentTime) => {
            const elapsed = (currentTime - startTime) / 1000;
            const progress = Math.min(elapsed / duration, 1);
            const currentValue = startValue + (endValue - startValue) * progress;

            setDisplayValue(currentValue);

            if (progress < 1) {
                requestAnimationFrame(updateValue);
            }
        };

        const frameId = requestAnimationFrame(updateValue);

        return () => cancelAnimationFrame(frameId);
    }, [value, duration]);

    useEffect(() => {
        if (ref.current) {
            ref.current.textContent = formatValue(displayValue);
        }
    }, [displayValue, formatValue]);

    return (
        <div className={`rolling-counter-wrapper ${className}`}>
            <div className="counter-content">
                <span ref={ref} className="counter-number" />
                {label ? <span className="counter-label">{label}</span> : null}
            </div>
        </div>
    );
}

export default RollingCounter;
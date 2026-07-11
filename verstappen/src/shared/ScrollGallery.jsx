/*Reusable scroll section component, 
will be used inebwteen the 3 major sections of the site*/

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./ScrollGallery.css";

function ScrollGallery({ images = [] }) {

    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"], });
    const x = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], ["100vw", "0vw", "0vw", "0vw"]);

    return (
        <section ref={sectionRef} className = "scroll-gallery-section">
            <div className = "scroll-gallery-sticky">
                <motion.div className = "scroll-gallery-canvas" style = {{ x }}>

                    {images.map((image) => (
                        <GalleryCard key = {image.id} image = {image} />
                    ))}

                </motion.div>
            </div>
        </section>
    );
}

function GalleryCard({ image }) {
  return (
    <div
      className = {`gallery-card-item ${image.size}`}
        style={{
          position: "absolute",
          top: image.top,
          left: image.left,
          width: image.width,
          transform: `rotate(${image.rotate || "0deg"})`,
        }}>

        {image.labelPosition === "top" && (
          <span className = "gallery-label gallery-label--top">
            {image.label}
          </span>
        )}

        <div className = "gallery-images">
          <img src = {image.src} alt = {image.label} />
        </div>

        {(!image.labelPosition || image.labelPosition === "bottom") && (
          <span className = "gallery-label gallery-label--bottom">
            {image.label}
          </span>
          )}
        </div>
    );
  }

export default ScrollGallery;
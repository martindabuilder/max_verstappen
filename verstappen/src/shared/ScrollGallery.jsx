/*Reusable scroll section component, 
will be used inebwteen the 3 major sections of the site*/

import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import "./ScrollGallery.css";

function ScrollGallery({ images = [] }){
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({target: sectionRef, offset: ["start start", "end end"]});
  
  const x = useTransform(scrollYProgress, [0, 0.5], ["100vw", "0vw"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  const left = images.filter(image => image.column === "left");
  const center = images.filter(image => image.column === "center");
  const right = images.filter(image => image.column === "right");

  return (
    <section ref = {sectionRef} className = "scroll-gallery-section">
      <motion.div className = "scroll-gallery-canvas" style = {{ x }}>
        
      </motion.div>
    </section>
  )
}

function GalleryCards({ image }) {
  return (
    <div className={`scroll-gallery-wrapper ${image.size}`}>

      {image.labelPosition === "top" && (
        <span className = "gallery-label gallery-label--top">
          {image.label}
        </span>
      )}

      <div className = "gallery-images">
        <img src = {image.src} alt = {image.label} />
      </div>

    </div>
  )
}


export default ScrollGallery;
/*Reusable scroll section component, 
will be used inebwteen the 3 major sections of the site*/

import { useRef } from "react";
import { motion, useInView, useTransform } from "motion/react";

import "./ScrollGallery.css";

function ScrollGallery({ images = [] }){
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({target: sectionRef, offset: ["start end", "end start"]});
  
  const x = useTransform(ScrollYProgress, [0, 0.6], ["80vw", "0vw"]);

  const left = images.filter(image => image.column === "left");
  const center = images.filter(image => image.column === "center");
  const right = images.filter(image => image.column === "right");

  return (
    <section ref = {sectionRef} className = "scroll-gallery-section">
      <motion.div className = "Scroll-gallery-grid" style = {{ x }}>
        
        <div className = "gallery-columns">
          {left.map(image => <GalleryCards key={image.id} image={image} />)}
          {center.map(image => <GalleryCards key={image.id} image={image} />)}
          {right.map(image => <GalleryCards key={image.id} image={image} />)}
        </div>

      </motion.div>
    </section>
  )
}

function GalleryCards({ image }) {
  return (
    <div className={`gallery-wrapper ${image.size}`}>

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
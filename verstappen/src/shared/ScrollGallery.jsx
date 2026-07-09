/*Reusable scroll section component, 
will be used inebwteen the 3 major sections of the site*/

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import "./ScrollGallery.css";

function GalleryCards({ image, direction, delay }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  const variants = {
    hidden: {
      opacity: 0,
      x: direction === "right" ? 80 : direction === "left" ? -80 : 0,
      y: direction === "bottom" ? 80 : 30,
    },

    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };

  return(
    <motion.div 
    ref = {ref}
    className = {`scroll-gallery-wrapper ${image.size}`}
    variants = {variants}
    initial = "hidden" 
    transition = {{ duration: 0.8, delay, ease: "easeInOut" }}
    animate = {isInView ? "visible" : "hidden"}>

      {image.labelPosition === "top" && (
        <span className = "gallery-label gallery-label--top">
          {image.label}
        </span>
      )}

      <div className = "gallery-images">
        <img src = {image.src} alt = {image.alt} />
      </div>

    </motion.div>
  )
}

function Columns({ images, direction }){

  return (
    <div className = "gallery-columns">
      {images.map((image, index) => (
        <GalleryCards
          key = {image.id} 
          image = {image} 
          direction = {direction} 
          delay = {index * 0.3}
        />
      ))}

    </div>
  )
}

function ScrollGallery({ images = [] }){
  
  const left = images.filter(image => image.column === "left");
  const center = images.filter(image => image.column === "center");
  const right = images.filter(image => image.column === "right");

  return (
    <section className = "scroll-gallery-section">

      <div className = "scroll-gallery-grid">

        <Columns images = {left} direction = "left" />
        <Columns images = {center} direction = "bottom" />
        <Columns images = {right} direction = "right" />

      </div>

    </section>
  )

}

export default ScrollGallery;
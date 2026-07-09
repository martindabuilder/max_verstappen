/*Reusable scroll section component, 
will be used inebwteen the 3 major sections of the site*/

import { useRef } from "react";
import { motion, useInView } from "motion/react";

import "./ScrollGallery.css";

function GalleryCards({ image, direction, delay }){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
    }
  };

  return(
    <motion.div 
    ref = {ref}
    className = {"scroll-gallery-wrapper ${image.size}"}
    variants = {variants}
    initial = "hidden" 
    transition = {{ duration: 0.8, delay, ease: "easeInOut" }}
    animate = {isInView ? "visible" : "hidden"}>

      <div className = "gallery-images">
        <img src = {image.src} alt = {image.alt} />
      </div>

    </motion.div>
  )
}

function Columns({ images, direction }){
  return (
    <div className = "gallery-columns">
      
    </div>
  )
}

function ScrollGallery(){
  return (
    <div className = "scroll-gallery-section">

    </div>
  )

}

export default ScrollGallery;
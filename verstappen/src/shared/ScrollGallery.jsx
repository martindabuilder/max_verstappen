/*Reusable scroll section component, 
will be used inbetween the 3 major sections of the site*/

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./ScrollGallery.css";

function ScrollGallery({ images = [] }) {

  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  const [shiftLeft, setShiftLeft] = useState(0);
  const sectionHeight = shiftLeft > 0 ? `${window.innerHeight + shiftLeft}px` : "100vh";

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"], });
  const x = useTransform(scrollYProgress, [0, 1], [window.innerWidth, -shiftLeft - 100]);

  useLayoutEffect(() => {
    if (!canvasRef.current || !sectionRef.current) return;

    const canvasWidth  = canvasRef.current.scrollWidth;
    const sectionWidth = sectionRef.current.offsetWidth;

    setShiftLeft(Math.max(0, canvasWidth - sectionWidth));
  }, [images]);

  return (
    <section ref={sectionRef} className="scroll-gallery-section" style={{ height: sectionHeight }}>
      <div className="scroll-gallery-sticky">
        <motion.div ref = {canvasRef} className="scroll-gallery-canvas" style={{ x }}>

          {images.map((image) => (
            <GalleryCard key={image.id} image={image} />
          ))}

        </motion.div>
      </div>
    </section>
  );
}

function GalleryCard({ image }) {
  return (
    <div className={`gallery-card-item ${image.size}`} style={{ width: image.width, alignSelf: image.alignSelf || "flex-start", marginRight: image.marginRight || "0px", }}>

      {image.labelPosition === "top" && (
        <span className="gallery-label gallery-label--top">{image.label}</span>
      )}

      <div className="gallery-images">
        <img src={image.src} alt={image.label} />
      </div>

      {(!image.labelPosition || image.labelPosition === "bottom") && (
        <span className="gallery-label gallery-label--bottom">{image.label}</span>
      )}
    </div>
  );
}

export default ScrollGallery;
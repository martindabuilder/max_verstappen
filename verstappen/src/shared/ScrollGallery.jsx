/*Reusable scroll section component, 
will be used inbetween the 3 major sections of the site*/

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./ScrollGallery.css";

function ScrollGallery({ images = [] }) {
  const sectionRef = useRef(null);
  const canvasRef = useRef(null);
  
  const [canvasWidth, setCanvasWidth] = useState(0);
  const [viewportWidth, setViewportWidth] = useState(0);

  const startOffset = viewportWidth * 1.98;
  const endOffset = Math.max( 0, canvasWidth - viewportWidth);
  const totalTravel = startOffset + endOffset;

  const sectionHeight = totalTravel > 0 ? `${window.innerHeight + totalTravel}px` : "300vh";
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"],});
  const x = useTransform( scrollYProgress, [0, 1], [startOffset, -endOffset]);

   useEffect(() => {
    const calculateDimensions = () => {
      if (!canvasRef.current || !sectionRef.current) return;

      const canvas = canvasRef.current;
      const section = sectionRef.current;

      setCanvasWidth(canvas.scrollWidth);
      setViewportWidth(section.clientWidth);
    };

    const imagesElements = Array.from( canvasRef.current?.querySelectorAll("img") ?? [] );

    const unloadedImages = imagesElements.filter((img) => !img.complete);

    if (unloadedImages.length === 0) {
       calculateDimensions();
    } else {
      let loadedImages = 0;

      const handleImageLoad = () => {
        loadedImages++;
        if (loadedImages === unloadedImages.length) {calculateDimensions(); }};
        unloadedImages.forEach((img) => { img.addEventListener("load", handleImageLoad); }
      );

      return () => {
        unloadedImages.forEach((img) => { img.removeEventListener("load", handleImageLoad);});
      };
    }

    window.addEventListener("resize", calculateDimensions);

    return () => {
      window.removeEventListener("resize", calculateDimensions);
    };
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
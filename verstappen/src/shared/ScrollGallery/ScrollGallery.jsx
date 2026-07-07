import { useRef, useEffect } from "react";
import { motion } from "motion/react";

import "./ScrollGallery.css";
import { scrollGallery1, scrollGallery2, scrollGallery3 } from "../../data/ScrollGalleryData.jsx";

function ScrollGalleryItems(){}

function ScrollGalleryQuotes(){}

function ScrollGallery() {
  const trackRef = useRef(null);
  
  useEffect(() => {
    const track = trackRef.current;
  }, []);

  return (
    <section className="scroll-gallery">
    </section>
  );
}

export default ScrollGallery;
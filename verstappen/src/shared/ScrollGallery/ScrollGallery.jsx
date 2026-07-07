import { useRef, useEffect } from "react";

import "./ScrollGallery.css";
import ".././data/ScrollGalleryData.js";

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
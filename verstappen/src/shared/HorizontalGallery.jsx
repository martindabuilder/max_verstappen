import { useRef, useEffect } from "react";

import "./HorizontalGallery.css";

function HorizontalGallery() {
  const trackRef = useRef(null);
  
  useEffect(() => {
    const track = trackRef.current;
  }, []);

  return (
    <section className="horizontal-gallery">
    </section>
  );
}

export default HorizontalGallery;
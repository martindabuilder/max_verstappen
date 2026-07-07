import "./ScrollGallery.css";

function GalleryCards(){
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return(
    <motion.div 
    ref = {ref}
    className = "scroll-gallery-wrapper"
    initial = "hidden" >
    </motion.div>
  )
}

function Columns(){
  return (
    <div className = "gallery-columns">
      
    </div>
  )
}

function ScrollGallery(){
  return (
    <div className = "scroll-gallery">

    </div>
  )

}

export default ScrollGallery;
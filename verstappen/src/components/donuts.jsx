import backgroundVideo from "../assets/videos/donuts.mp4";
import "../styles/Donuts.css";

import ScrollHint from "./ScrollHint";
import IntroText from "./IntroText";

function Donuts() {
  return (
    <section className = "donuts">
      <video 
      autoPlay 
      loop 
      muted 
      className = "bg-video">
        <source src = {backgroundVideo} type = "video/mp4" />
      </video>
      
        <IntroText />
        <ScrollHint />
    
    </section>
  );
}

export default Donuts;
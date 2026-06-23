import backgroundVideo from "../assets/videos/donuts.mp4";
import "../styles/Donuts.css";

import IntroText from "./IntroText";
import ScrollHint from "./ScrollHint";

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

        <ScrollHint />
        <IntroText />
    
    </section>
  );
}

export default Donuts;
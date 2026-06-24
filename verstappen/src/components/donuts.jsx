import { useState } from "react";
import clip1 from "../assets/videos/donuts.mp4";
import clip2 from "../assets/videos/donuts1.mp4";
import clip3 from "../assets/videos/donuts2.mp4";

import "../styles/Donuts.css";

import IntroText from "./IntroText";
import ScrollHint from "./ScrollHint";

function Donuts() {
  const videos = [clip1, clip2, clip3];

  const [currentVideo, SetCurrentVideo] = useState(0);

  const handleVideoEnd = () => {
    SetCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  return (
    <section className = "donuts">
      <video
        key = {currentVideo}
        autoPlay
        muted
        playsInline
        onEnded = {handleVideoEnd}
        className = "bg-video">

        <source src = {videos[currentVideo]} type = "video/mp4" />
      </video>

      <ScrollHint />
      <IntroText />
    </section>
  )

}

export default Donuts;
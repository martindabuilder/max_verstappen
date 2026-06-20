import backgroundVideo from "../assets/videos/donuts.mp4";
import "../styles/Donuts.css";

function Donuts() {
  return (
    <section className="donuts">
      <video 
      autoPlay 
      loop 
      muted 
      className="bg-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="donuts-content">
        <h1>Max Verstappen</h1>
      </div>
    </section>
  );
}

export default Donuts;
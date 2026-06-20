import backgroundVideo from "../assets/videos/donuts.mp4";
import "../Donuts.css";

function Donuts() {
  return (
    <section className="donuts">
      <video autoPlay loop muted className="bg-video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="donuts-content">
      </div>
    </section>
  );
}

export default Donuts;
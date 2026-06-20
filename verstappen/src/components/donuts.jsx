import backgroundVideo from "/assets/videos/donuts.mp4";

function HeroBG() {
    return (
        <section className = "donuts">
        <video 
        autoPlay 
        loop 
        muted
        className = "bg-video">

            <source src={backgroundVideo} type="video/mp4" />

            </video>
        </section>
    )


} export default HeroBG;
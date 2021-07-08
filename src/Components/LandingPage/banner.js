import "./banner.css";
import banner from "./banner.mp4";
import Home from "../Home/Home.js";

function Banner() {
  return (
    <div className="banner-page">
      <div className="banner">
        <video id="background-video" autoPlay loop muted>
          <source src={banner} type="video/mp4" />
        </video>
        <h2 className="responsive">HALCYON</h2>
      </div>
      <h3 className="black font-weight-bold text-uppercase text-dark">
        We make Websites, Mobile apps, Logos and Designs
      </h3>

      <button className="button-custom">View our website!</button>
    </div>
  );
}

export default Banner;

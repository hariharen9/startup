import "./banner.css";
import banner from "./banner.mp4";
import Home from "../Home/Home.js";

function Banner() {
  return (
    <div className="banner-page ">
      <div className="banner">
        <video id="background-video" autoPlay loop muted>
          <source src={banner} type="video/mp4" />
        </video>
        <h2>HALCYON</h2>
        <h3>We make Websites, Mobile apps, Logos and Designs</h3>
      </div>
      <button>View our website!</button>
    </div>
  );
}

export default Banner;

import "./banner.css";
import banner from "./banner.mp4";
import Home from "../Home/Home.js";
import { withRouter } from "react-router-dom";
function Banner() {
  return (
    <div>
      <div className="banner-page">
        <div className="banner">
          <video id="background-video" autoPlay loop muted>
            <source src={banner} type="video/mp4" />
          </video>
          <h2 className="responsive">HALCYON</h2>

          <h3 className="sub-text">
            We are Logo/Web/Mobile App developers in the Netherlands.
          </h3>
        </div>
      </div>
      <div className="button-div">
        <button className="button-custom">
          <h5>Continue to Website</h5>
        </button>
      </div>
    </div>
  );
}

export default Banner;

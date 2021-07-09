import "./banner.css";
import banner from "./banner.mp4";
import Home from "../Home/Home.js";
import { withRouter } from "react-router-dom";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
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
            We develop Web/Mobile Apps & design Logos.
          </h3>

          <h5 className="sub-text-location">
            <RoomOutlinedIcon />
            The Netherlands
          </h5>
        </div>
      </div>
      {/* <div className="button-div"> */}
      <button className="button-custom">Continue to Website</button>
      {/* </div> */}
    </div>
  );
}

export default Banner;

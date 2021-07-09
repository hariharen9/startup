import "./banner.css";
import banner from "./banner.mp4";
import RoomOutlinedIcon from "@material-ui/icons/RoomOutlined";
import { Link } from "react-router-dom";
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

      <Link to="/home">
        <button className="button-custom">Continue to Website </button>{" "}
      </Link>
    </div>
  );
}

export default Banner;

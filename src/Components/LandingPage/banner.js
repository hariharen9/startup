import "./banner.css";
import banner from "./banner.mp4";

function Banner() {
  return (
    <div className="banner">
      <video id="baclground-video" autoPlay loop muted>
        <source src={banner} type="video/mp4" />
      </video>
      <h2>HALCYON</h2>
    </div>
  );
}

export default Banner;

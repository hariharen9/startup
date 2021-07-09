import React, { Component } from "react";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousal.css";

class Carousell extends Component {
  render() {
    return (
      <div className="carousals">
        <Carousel width="100%" interval="1500">
          <div>
            <img
              alt="images"
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            />
            <p className="legend">Logos</p>
          </div>
          <div>
            <img
              alt="images"
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            />
            <p className="legend">Logos</p>
          </div>
          <div>
            <img
              alt="images"
              src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
            />
            <p className="legend">Logos</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default Carousell;

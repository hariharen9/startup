import React, { Component } from "react";
import "./Home.css";
import CustomizedAccordions from "../Grid/grid.js";
import About from "../About/About.js";
import Contact from "../Contact/Contact.js";
import Footer from "../Footer/Footer";
import Cards from "../Cards/Cards";
import Clients from "../Clients/Clients";
import BgVideo from "../../Assets/video.mp4";
import { HashLink as Link } from "react-router-hash-link";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        {/* HEADER OF THE LAYOUT: Consists of two div, one for ham menu and another for Company name. Float is used to make them appear side by side */}
        <div class="float-container">
          <div class="float-child-left">
            <div className="Logo-div">
              <nav role="navigation">
                <div id="menuToggle">
                  <input type="checkbox" />

                  <span></span>
                  <span></span>
                  <span></span>

                  <ul id="menu">
                    <Link to="/">
                      <li>Home</li>
                    </Link>
                    <Link to="/portfolio">
                      <li>Portfolio</li>
                    </Link>
                    <a href="#">
                      <li>About</li>
                    </a>
                    <a href="#">
                      <li>Contact Us</li>
                    </a>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
          <div class="float-child-right">
            <h2 className="companyName">Halcyon</h2>
          </div>
        </div>

        {/* CONTENT: A blank div is created at first to provide a blank space between header and the text. The intro text is then available inside the span*/}
        <div className="blankSpace"></div>

        <div className="text-left">
          <h1 className="intro-text">
            Make your small business standout
            <br /> in a crowd of competitors.
          </h1>
        </div>

        <video controls autoPlay loop muted>
          <source src={BgVideo} type="video/mp4" />
        </video>
        {/* A grid with two columns is created. Left is a bold text . Right is a collapsing text. Ref And.design components*/}
        <div class="row">
          <div class="col">
            <h2 className="services-text">
              Designs that are effective
              <br /> <s>or</s> and affordable.
            </h2>
          </div>
          <div class="col" id="accorditions">
            <CustomizedAccordions />
          </div>
        </div>
        <About />
        <Cards />
        <Clients />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Home;

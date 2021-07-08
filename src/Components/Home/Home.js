import React, { Component } from "react";
import { Layout } from "antd";

import { ReactComponent as ReactLogo } from "../../Assets/H_icon.svg";
import "./Home.css";

const { Header, Footer, Content } = Layout;

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Layout>
          <Header>
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
                        <a href="#">
                          <li>Home</li>
                        </a>
                        <a href="#">
                          <li>Portfolio</li>
                        </a>
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
          </Header>
          <Content>
            <div className="blankSpace"></div>
            <h1 className="intro-text">
              <div class="intro-text-div">
                <span data-index="1">
                  Make your small business standout<br></br>
                </span>
                <span data-index="2">in a crowd of competitors.</span>
              </div>
            </h1>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Home;

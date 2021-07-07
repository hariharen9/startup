import React, { Component } from "react";
import { Layout } from "antd";
import { ReactComponent as ReactLogo } from "../../Assets/H_icon.svg";
import { ReactComponent as Hamburger } from "../../Assets/hamburger.svg";

import "./Home.css";

const { Header, Footer, Content } = Layout;

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Layout>
          <Header>
            <div className="Logo-div">
              <ReactLogo />
            </div>
          </Header>
          <Content>
            <h1 id="intro-text">Make your small business rstandout.</h1>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Home;

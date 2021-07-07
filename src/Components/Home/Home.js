import React, { Component } from "react";
import { Layout } from "antd";
import { ReactComponent as ReactLogo } from "../../Assets/H_icon.svg";
import "./Home.css";

const { Header, Footer, Sider, Content } = Layout;

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <Layout>
          <Header style={{ alignItems: "flex-start" }}>
            <div className="Logo-div">
              <ReactLogo
                viewBox="0 0 200 200"
                className="Logo"
                id="Logo-header"
              />
            </div>
          </Header>
          <Layout>
            <Content>
              <h1 id="intro-text">Make your small business standout.</h1>
            </Content>
          </Layout>
          <Footer>footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Home;

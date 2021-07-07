import React, { Component } from "react";
import { Layout, Space } from "antd";
import { ReactComponent as ReactLogo } from "../../Assets/H_icon.svg";
import { ReactComponent as Hamburger } from "../../Assets/hamburger.svg";
import {
  Button,
  Nav,
  Navbar,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";

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
              <Hamburger />
            </div>
          </Header>
          <Content>
            <Navbar bg="light" expand="lg">
              <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                  <Nav.Link href="#home">Home</Nav.Link>
                  <Nav.Link href="#link">Link</Nav.Link>
                  <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <h1 id="intro-text">Make your small business rstandout.</h1>
          </Content>
          <Footer>footer</Footer>
        </Layout>
      </div>
    );
  }
}

export default Home;

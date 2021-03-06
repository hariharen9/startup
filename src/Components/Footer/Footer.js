import React, { Component } from "react";
import "./Footer.css";
export default function Footer() {
  return (
    <div class="row" id="row-footer">
      <div className="blankSpace-footer"></div>
      <div class="col">
        <h2 className="footer-text">Let's Talk.</h2>
        <p className="footer-content" align="left" color="white">
          Marconilaan 47
          <br />
          5612HN
          <br />
          Eindhover
          <br />
          The Netherlands
          <br />
        </p>
      </div>
      <div class="col" id="work-with-us">
        <h3 className="footer-sub-heading">Work with Us</h3>
        <h3 className="footer-sub-content">
          &nbsp; work@halcyon-netherlands.com &nbsp;
        </h3>

        <h3 className="footer-sub-heading">Contact Us</h3>
        <h3 className="footer-sub-content">
          &nbsp; hey@halcyon-netherlands.com&nbsp;
        </h3>
      </div>
      <div class="col">
        <h2 className="footer-text">Contact</h2>
        <p className="footer-content-phno" align="left" color="white">
          +31641777527
        </p>
      </div>
      <div className="blankSpace-footer"></div>
    </div>
  );
}

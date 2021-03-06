import React from "react";
import "./About.css";
export default function About() {
  return (
    <div class="row" id="row-about">
      <div class="col" id="row-col-l">
        <h2 className="about-text"> &nbsp; About Halcyon &nbsp;</h2>
        <p className="about-content" align="left" color="white">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident,
          similique sunt in culpa qui officia deserunt mollitia animi, id est
          laborum et dolorum fuga.
        </p>
      </div>
      <div class="col" id="row-col-r">
        <div class="row">
          <h3 className="sub-heading">Clients</h3>
          <h3 className="sub-content">100+</h3>
        </div>
        &nbsp;
        <div class="row">
          <h3 className="sub-heading">Projects</h3>
          <h3 className="sub-content">1000+</h3>
        </div>
      </div>
    </div>
  );
}

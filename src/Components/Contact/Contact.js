import React, { Component } from "react";
import "./Contact.css";
export default function Contact() {
  return (
    <div className="form-contact">
      <form>
        <div class="form-row">
          <div class="form-group col-md-6" id="form-data">
            <label for="input-Name">How can we reach out to you?</label>
            <input
              type="Name"
              class="form-control"
              id="input-Name"
              placeholder="Name"
            />
          </div>
          <div class="form-group col-md-6 " id="form-data">
            <input
              type="Email"
              class="form-control"
              id="Email"
              placeholder="Email ID"
            />
          </div>
          <div class="form-group col-md-6" id="form-data">
            <input
              type="Phone"
              class="form-control"
              id="Phone"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <label for="input-Name" id="form-data">
          What can we do for you?
        </label>
        <div class="form-group">
          <div class="form-check" id="form-data">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Websites
            </label>
          </div>
          <div class="form-check" id="form-data">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Logos
            </label>
          </div>
          <div class="form-check" id="form-data">
            <input class="form-check-input" type="checkbox" id="gridCheck" />
            <label class="form-check-label" for="gridCheck">
              Mobile Apps
            </label>
          </div>
        </div>
        <button class="btn-primary">Submit</button>
      </form>
    </div>
  );
}

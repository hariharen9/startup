import React, { Component } from "react";
import "./Mailchimp.css";
export default function Mailchimp() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us6.list-manage.com/subscribe/post?u=c56af95614ccaa17ba565f065&amp;id=f834765253"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <h2 id="Form-text">How can we reach you?</h2>
          <div class="mc-field-group">
            <input
              type="email"
              name="EMAIL"
              id="mce-EMAIL"
              autocomplete="off"
              placeholder="EMAIL"
            />
          </div>
          <div class="mc-field-group">
            <input
              type="text"
              name="NAME"
              id="mce-NAME"
              autocomplete="off"
              placeholder="NAME"
            />
          </div>
          <div class="mc-field-group">
            <input
              type="number"
              name="PHONE"
              id="mce-PHONE"
              autocomplete="off"
              placeholder="PHONE NO."
            />
          </div>
          &nbsp;
          <h2 id="Form-text">What can we do for you? &nbsp;</h2>
          <div>
            <ul>
              <li>
                <input
                  className="check-input"
                  type="checkbox"
                  value="1"
                  name="group[22962][1]"
                  id="mce-group[22962]-22962-0"
                />
                <label for="mce-group[22962]-22962-0">&nbsp; Websites</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="2"
                  name="group[22962][2]"
                  id="mce-group[22962]-22962-1"
                />
                <label for="mce-group[22962]-22962-1">&nbsp; Logos</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="4"
                  name="group[22962][4]"
                  id="mce-group[22962]-22962-2"
                />
                <label for="mce-group[22962]-22962-2">&nbsp; Mobile Apps</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="8"
                  name="group[22962][8]"
                  id="mce-group[22962]-22962-3"
                />
                <label for="mce-group[22962]-22962-3">
                  &nbsp; UI/UX Designs
                </label>
              </li>
            </ul>
          </div>
          <div id="mce-responses" class="clear">
            <div class="response" id="mce-error-response"></div>
            <div class="response" id="mce-success-response"></div>
          </div>
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_c56af95614ccaa17ba565f065_f834765253"
              tabindex="-1"
              value=""
            />
          </div>
          &nbsp;
          <div class="clear">
            <input
              type="submit"
              value="  Subscribe  "
              name="subscribe"
              id="mc-embedded-subscribe"
              class="button"
            />
          </div>
        </div>
      </form>
    </div>
  );
}

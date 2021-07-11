import React, { Component } from "react";
import "./Mailchimp.css";
export default function Mailchimp() {
  return (
    <div id="mc_embed_signup">
      <form
        action="https://gmail.us6.list-manage.com/subscribe/post?u=df8117da02e8d9a41e6f8c9ec&amp;id=e6e7e423d8"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        class="validate"
        target="_blank"
        novalidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>How can we reach you?</h2>

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
              name="PHONE"
              id="mce-PHONE"
              autocomplete="off"
              placeholder="PHONE NO."
            />
          </div>
          <div class="mc-field-group input-group">
            <strong>What can we do for you? &nbsp;</strong>

            <ul>
              <li>
                <input
                  type="checkbox"
                  value="1"
                  name="group[54133][1]"
                  id="mce-group[54133]-54133-0"
                />
                <label for="mce-group[54133]-54133-0">&nbsp; Websites</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="2"
                  name="group[54133][2]"
                  id="mce-group[54133]-54133-1"
                />
                <label for="mce-group[54133]-54133-1">&nbsp; Logos</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="4"
                  name="group[54133][4]"
                  id="mce-group[54133]-54133-2"
                />
                <label for="mce-group[54133]-54133-2">&nbsp; Mobile Apps</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="8"
                  name="group[54133][8]"
                  id="mce-group[54133]-54133-3"
                />
                <label for="mce-group[54133]-54133-3">
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
              name="b_df8117da02e8d9a41e6f8c9ec_e6e7e423d8"
              tabindex="-1"
              value=""
            />
          </div>
          <div class="clear">
            <input
              type="submit"
              value="Subscribe"
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

import React, { Component } from "react";

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
          <h2>How can we reach y0u?</h2>
          <div class="indicates-required">
            <span class="asterisk">*</span> indicates required
          </div>
          <div class="mc-field-group">
            <label for="mce-NAME">
              Name <span class="asterisk">*</span>{" "}
            </label>
            <input
              type="text"
              value=""
              name="NAME"
              class="required"
              id="mce-NAME"
            />
          </div>
          <div class="mc-field-group">
            <label for="mce-EMAIL">
              Email <span class="asterisk">*</span>
            </label>
            <input
              type="email"
              value=""
              name="EMAIL"
              class="required email"
              id="mce-EMAIL"
            />
          </div>
          <div class="mc-field-group">
            <label for="mce-PHONE">
              Phone <span class="asterisk">*</span>
            </label>
            <input
              type="text"
              value=""
              name="PHONE"
              class="required"
              id="mce-PHONE"
            />
          </div>
          <div class="mc-field-group input-group">
            <strong>What can we do for you? </strong>
            <ul>
              <li>
                <input
                  type="checkbox"
                  value="1"
                  name="group[54133][1]"
                  id="mce-group[54133]-54133-0"
                />
                <label for="mce-group[54133]-54133-0">Websites</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="2"
                  name="group[54133][2]"
                  id="mce-group[54133]-54133-1"
                />
                <label for="mce-group[54133]-54133-1">Logos</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="4"
                  name="group[54133][4]"
                  id="mce-group[54133]-54133-2"
                />
                <label for="mce-group[54133]-54133-2">Mobile Apps</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  value="8"
                  name="group[54133][8]"
                  id="mce-group[54133]-54133-3"
                />
                <label for="mce-group[54133]-54133-3">UI/UX Designs</label>
              </li>
            </ul>
          </div>
          <div id="mce-responses" class="clear">
            <div
              class="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              class="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
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

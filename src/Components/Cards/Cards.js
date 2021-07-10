import { Component } from "react";
import "./Cards.css";

class Cards extends Component {
  render() {
    return (
      <div>
        <div className="cards-heading-div">
          <h2 className="cards-heading"> &nbsp; Portfolio &nbsp;</h2>
        </div>
        <section class="hero-section">
          <div class="card-grid">
            <a
              class="card"
              href="https://play.google.com/store/apps/details?id=com.trouvaille.angst"
            >
              <div
                class="card__background"
                style={{
                  "background-image":
                    "url(https://images.unsplash.com/photo-1557177324-56c542165309?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80)",
                }}
              ></div>
              <div class="card__content">
                <p class="card__category"></p>
                <h3 class="card__heading">Angst</h3>
              </div>
            </a>
            <a
              class="card"
              href="https://play.google.com/store/apps/details?id=com.hariharen.cashtrack"
            >
              <div
                class="card__background"
                style={{
                  "background-image":
                    "url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                }}
              ></div>
              <div class="card__content">
                <p class="card__category"></p>
                <h3 class="card__heading">Cash Track</h3>
              </div>
            </a>
            <a class="card" href="#">
              <div
                class="card__background"
                style={{
                  "background-image":
                    "url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                }}
              ></div>
              <div class="card__content">
                <p class="card__category"></p>
                <h3 class="card__heading">Website-1</h3>
              </div>
            </a>
            <a class="card" href="#">
              <div
                class="card__background"
                style={{
                  "background-image":
                    "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                }}
              ></div>
              <div class="card__content">
                <p class="card__category"></p>
                <h3 class="card__heading">Website-2</h3>
              </div>
            </a>
            <a class="card" href="#">
              <div
                class="card__background"
                style={{
                  "background-image":
                    "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                }}
              ></div>
              <div class="card__content">
                <p class="card__category"></p>
                <h3 class="card__heading">Logos</h3>
              </div>
            </a>
            <a class="card" href="#">
              <div
                class="card__background"
                style={{
                  "background-image":
                    "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                }}
              ></div>
              <div class="card__content">
                <p class="card__category"></p>
                <h3 class="card__heading">Logos</h3>
              </div>
            </a>
            <a class="card" href="#">
              <div
                class="card__background"
                style={{
                  "background-image":
                    "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                }}
              ></div>
              <div class="card__content">
                <p class="card__category"></p>
                <h3 class="card__heading">Logos</h3>
              </div>
            </a>
            <a class="card" href="#">
              <div
                class="card__background"
                style={{
                  "background-image":
                    "url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)",
                }}
              ></div>
              <div class="card__content">
                <p class="card__category"></p>
                <h3 class="card__heading">Logos</h3>
              </div>
            </a>
          </div>
        </section>
      </div>
    );
  }
}

export default Cards;

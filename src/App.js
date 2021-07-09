import React from "react";
import "./App.css";
import Banner from "./Components/LandingPage/banner";
import Home from "./Components/Home/Home";
import Cards from "./Components/Cards/Cards";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Banner />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/portfolio" component={Cards}>
              <Cards />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;

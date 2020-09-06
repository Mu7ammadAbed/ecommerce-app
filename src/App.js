import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./containers/landingpage/landingPage.component";

const HatsPage = () => (
  <div>
    <h1>Hats</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;

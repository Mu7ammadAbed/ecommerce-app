import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import LandingPage from "./containers/landingpage/landingPage.component";
import ShopPage from "./containers/shop/shop.component";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;

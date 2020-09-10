import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/header.component";
import LandingPage from "./containers/landingpage/landingPage.component";
import ShopPage from "./containers/shop/shop.component";
import Login from "./containers/login/login.component";
import { auth } from "./firebase/firebase.utils";

class App extends Component {
  state = {
    user: null,
  };

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ user: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header user={this.state.user} />
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    );
  }
}

export default App;

import React from "react";
import { HomepageContainer } from "./Homepage";
import "./styles/styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Blackjack from "./Blackjack";
import Error from "./Error";
import NavBar from "./NavBar";

document.title = "www.TimothyParrish.com";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/website/" component={HomepageContainer} exact />
        <Route path="/website/blackjack" component={Blackjack} />
        <Route component={Error} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

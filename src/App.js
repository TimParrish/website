import React from "react";
import { Homepage, Blackjack, InvalidURL, NavBar } from "./WebpageComponents";
import "./styles/styles.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

document.title = "www.TimothyParrish.com";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/website/" component={Homepage} exact />
        <Route path="/website/blackjack" component={Blackjack} />
        <Route component={InvalidURL} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

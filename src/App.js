import React from "react";
import {
  Homepage,
  Blackjack,
  InvalidURL,
  NavBar,
  AboutMe
} from "./WebpageComponents";
import "./styles/globalStyle.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

document.title = "www.TimothyParrish.com";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/website/" component={Homepage} exact />
        <Route path="/website/blackjack" component={Blackjack} />
        <Route path="/website/about" component={AboutMe} />
        <Route component={InvalidURL} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

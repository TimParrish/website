import React from "react";
import { Homepage, GitHub, NavBar, AboutMe } from "./WebpageComponents";
import "./styles/globalStyle.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";

document.title = "Tim Parrish";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/website/" component={Homepage} exact />
        <Route path="/website/github" component={GitHub} />
        <Route path="/website/about" component={AboutMe} />
        <Route component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

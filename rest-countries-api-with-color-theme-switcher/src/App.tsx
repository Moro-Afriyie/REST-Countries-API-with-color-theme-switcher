import React from "react";
import "./App.scss";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
const url = "https://restcountries.com/v2/all";

function App() {
  return (
    <div className="container dark">
      <Header />
      <div className="display__countries">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/:country">
            <Details />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;

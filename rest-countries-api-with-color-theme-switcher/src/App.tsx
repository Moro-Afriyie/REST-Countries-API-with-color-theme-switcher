import React from "react";
import "./App.scss";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import { Theme } from "./interfaces/interface";

const url = "https://restcountries.com/v2/all";

function App() {
  const toggle = useSelector<Theme>((state) => state.toggleTheme);

  return (
    <div className={`container ${toggle ? "dark" : "light"}`}>
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

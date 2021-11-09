import React from "react";
import "./App.scss";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import { IRootState } from "./redux/reducers/rootReducer";

function App() {
  const toggle = useSelector(
    (state: IRootState) => state.toggleTheme.toggleTheme
  );

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

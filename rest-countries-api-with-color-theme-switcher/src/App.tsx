import React, { useEffect } from "react";
import "./App.scss";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IRootState } from "./redux/reducers/rootReducer";
import { toggleTheme } from "./redux/actions/toggleThemeActions";

function App() {
  const toggle = useSelector(
    (state: IRootState) => state.toggleTheme.toggleTheme
  );

  const dispatch = useDispatch();

  useEffect(() => {
    const matched = window.matchMedia("(prefers-color-scheme: dark)").matches;

    if (matched) dispatch(toggleTheme());
  }, []);

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

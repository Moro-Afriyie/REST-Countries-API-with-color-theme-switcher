import React from "react";
import "./App.scss";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
const url = "https://restcountries.com/v2/all";

function App() {
  return (
    <Provider store={store}>
      <div className="container light">
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
    </Provider>
  );
}

export default App;

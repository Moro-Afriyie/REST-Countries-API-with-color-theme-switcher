import React from "react";
import "./App.scss";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";

const url = "https://restcountries.com/v2/all";

function App() {
  return (
    <div className="container light">
      <Header />
      <div className="display__countries">
        <Home />
        {/* <Details /> */}
      </div>
    </div>
  );
}

export default App;

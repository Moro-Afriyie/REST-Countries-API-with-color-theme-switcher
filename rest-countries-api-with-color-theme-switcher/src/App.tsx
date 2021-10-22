import React from "react";
import "./App.scss";
import Details from "./components/Details";
import Header from "./components/Header";
import Home from "./components/Home";

function App() {
  return (
    <div className="container">
      <Header />
      <div className="display__countries">
        <Home />
        {/* <Details /> */}
      </div>
    </div>
  );
}

export default App;

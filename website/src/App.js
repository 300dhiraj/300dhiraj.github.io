import React from "react";
import "./css/App.css";
import Intro from "./Intro";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="container">
      <div className="row wrapper">
        <div className="col-md-3 text-center left-div">
          <Intro></Intro>
          <Navbar></Navbar>
        </div>
        <div className="col-md-9 right-div"></div>
      </div>
    </div>
  );
}

export default App;

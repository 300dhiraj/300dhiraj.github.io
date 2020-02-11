import React, { Component } from "react";
import "./css/App.css";
import Intro from "./Intro";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Experience from "./Experience";
import Contact from "./Contact";

export default class App extends Component {
  componentWillMount() {
    this.state = {
      show: "Home"
    };
  }

  linkClicked = link => {
    this.setState({ show: link });
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-3 text-center left-div">
            <Intro></Intro>
            <Navbar linkClicked={this.linkClicked}></Navbar>
          </div>
          <div className="col-md-9 right-div">
            {this.state.show === "Home" ? <Home></Home> : null}
            {this.state.show === "About" ? <About></About> : null}
            {this.state.show === "Skills" ? <Skills></Skills> : null}
            {this.state.show === "Education" ? <Education></Education> : null}
            {this.state.show === "Experience" ? (
              <Experience></Experience>
            ) : null}
            {this.state.show === "Contact" ? <Contact></Contact> : null}
          </div>
        </div>
      </div>
    );
  }
}

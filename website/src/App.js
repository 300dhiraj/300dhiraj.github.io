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
      showComponent: "Home",
      showMenu: "navMenuHide"
    };
  }

  linkClicked = link => {
    this.setState({ showComponent: link });
  };

  hamburgerClicked = () => {
    let cls = this.state.showMenu ? "" : "navMenuHide";
    this.setState({ showMenu: cls });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-3 text-center left-div">
            <div
              className="hamburger"
              onClick={() => {
                this.hamburgerClicked();
              }}
            >
              <span
                className="glyphicon glyphicon-menu-hamburger"
                aria-hidden="true"
              ></span>
            </div>
            <Intro></Intro>
            <Navbar
              navMenuCls={this.state.showMenu}
              linkClicked={this.linkClicked}
            ></Navbar>
          </div>
          <div className="col-md-9 right-div">
            {this.state.showComponent === "Home" ? <Home></Home> : null}
            {this.state.showComponent === "About" ? <About></About> : null}
            {this.state.showComponent === "Skills" ? <Skills></Skills> : null}
            {this.state.showComponent === "Education" ? (
              <Education></Education>
            ) : null}
            {this.state.showComponent === "Experience" ? (
              <Experience></Experience>
            ) : null}
            {this.state.showComponent === "Contact" ? (
              <Contact></Contact>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

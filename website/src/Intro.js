import React, { Component } from "react";
import img_1 from "./images/img_1.png";

export default class Intro extends Component {
  render() {
    return (
      <div className="introComp">
        <img src={img_1} className="img-circle" />
        <div className="myInfo">
          <h2>Dhairyasheel N</h2>
          <div className="myDesignation">UI/JavaScript Developer</div>
        </div>
      </div>
    );
  }
}

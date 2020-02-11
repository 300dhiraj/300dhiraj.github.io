import React, { Component } from "react";
import img_2 from "./images/img_2.png";

export default class Home extends Component {
  download = () => {
    window.location = "Dhairyasheel_CV.docx";
  };

  render() {
    return (
      <div className="homePic">
        <img src={img_2} />
        <div className="homeIntro">
          <div className="greetings">Hi !</div>
          <div className="myName">I'm Dhairyasheel</div>
          <div
            className="downloadCv"
            onClick={() => {
              this.download();
            }}
          >
            Download CV
            <span
              className="glyphicon glyphicon-download-alt"
              aria-hidden="true"
            ></span>
          </div>
        </div>
      </div>
    );
  }
}

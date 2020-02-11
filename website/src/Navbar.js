import React, { Component } from "react";
import LinkedIn from "../src/images/linkedin_icon.png";
import FaceBook from "../src/images/facebook_icon.png";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => this.props.linkClicked("Home")}
            >
              Home
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => this.props.linkClicked("About")}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => this.props.linkClicked("Skills")}
            >
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => this.props.linkClicked("Education")}
            >
              Education
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => this.props.linkClicked("Experience")}
            >
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              onClick={() => this.props.linkClicked("Contact")}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="socialMedia">
          <a
            className="nav-link"
            target="_blank"
            href="https://www.linkedin.com/in/dhairysheel/"
          >
            <img src={LinkedIn} className="img-circle linkedIn" />
          </a>
          <a
            className="nav-link"
            target="_blank"
            href="https://www.facebook.com/300DN"
          >
            <img src={FaceBook} className="img-circle faceBook" />
          </a>
        </div>
      </div>
    );
  }
}

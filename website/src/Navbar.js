import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <div>
        <ul className="nav flex-column">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Education
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Experience
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link linkedIn" href="#">
              LinkedIn
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

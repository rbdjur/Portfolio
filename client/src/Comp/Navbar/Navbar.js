import React, { Component } from 'react';
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
      // <div className="container">

        <nav id="navbar-example2" className="navbar navbar-light bg-light">

          <a className="navbar-brand" href="">My Portfolio</a>

          <ul className="nav nav-pills" id="pills">

            <li className="nav-item">
              <a className="nav-link" href="#fat">About Me</a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="#mdo">Work</a>
            </li>

            <li className="nav-item dropdown">

              <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>

              <div className="dropdown-menu">
                <a className="dropdown-item" href="#one">one</a>
                <a className="dropdown-item" href="#two">two</a>
                <div role="separator" className="dropdown-divider"></div>
                <a className="dropdown-item" href="#three">three</a>
              </div>

            </li>

          </ul>

        </nav>
      /* </div> */

    )
  }
}

export default Navbar



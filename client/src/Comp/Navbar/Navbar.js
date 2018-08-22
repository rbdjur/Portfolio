import React, { Component } from 'react';
import "./Navbar.css"

class Navbar extends Component {
  render() {
    return (
      // <div className="container">

        <nav id="navbar-example2" class="navbar navbar-light bg-light">

          <a class="navbar-brand" href="#">My Portfolio</a>

          <ul class="nav nav-pills" id="pills">

            <li class="nav-item">
              <a class="nav-link" href="#fat">About Me</a>
            </li>

            <li class="nav-item">
              <a class="nav-link" href="#mdo">Work</a>
            </li>

            <li class="nav-item dropdown">

              <a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>

              <div class="dropdown-menu">
                <a class="dropdown-item" href="#one">one</a>
                <a class="dropdown-item" href="#two">two</a>
                <div role="separator" class="dropdown-divider"></div>
                <a class="dropdown-item" href="#three">three</a>
              </div>

            </li>

          </ul>

        </nav>
      /* </div> */

    )
  }
}

export default Navbar



import React, { Component } from 'react';
import "./Header.css"
import ProfilePic from "./me.jpeg";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Header extends Component {
    render() {
        return (


            <header className="portfolio-hero-header">

                {/* beginning of Scrollspy html  */}


                {/* <div className="col-2" id="menu">
                    <div id="list-example-left" className="list-group-left">
                        <a className="list-group-item list-group-item-action" href="#list-item-1">Item 1</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-2">Item2</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-3">Item 3</a>
                        <a className="list-group-item list-group-item-action" href="#list-item-4">Item 4</a>
                    </div>
                </div> */}


                {/* end of Scrollspy html */}

                <img className="portfolio-hero-header-logo" src={ProfilePic} />
                <h1 className="portfolio-hero-header-h1">My Name Is Ronaldo</h1>

                {/* beginning of menu html */}


                {/* <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Regular link</a>
                    <a class="dropdown-item active" href="#">Active link</a>
                    <a class="dropdown-item" href="#">Another link</a>
                </div> */}


                {/* end of menu html  */}


                <ul className="portfolio-hero-header-description">
                    <li>Simplistic</li>
                    <li>Clean</li>
                    <li>Direct</li>
                </ul>
                
                <ul className="portfolio-hero-header-menu">
                    {/* For each link, remove each link, start each color out as the color of the background, fade to a different color other than teal. Maybe silver? */}
                    <li>
                        {/* <a className="button primary" href="#">About me</a> */}
                    </li>
                    <li id="icon">
                        
                        <i class="fab fa-github"></i>

                        <i class="fab fa-facebook"></i>
                        
                        <i class="fab fa-twitter-square"></i>

                        <i class="fab fa-linkedin"></i>
                    </li>
                    <li>
                        {/* <a className="button primary" href="#">Contact</a> */}
                    </li>
                </ul>
            </header>

        )
    }
}

export default Header
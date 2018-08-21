import React, { Component } from 'react';
import "./Jumbotron.css"
import ProfilePic from "./me.jpeg";
import Footer from "../Footer/Footer"



class Jumbotron extends Component {
    render() {
        return (
            // <div>
            <div class="jumbotron" id="jumbotron-div">

                <div className="container" >
                    <img className="portfolio-hero-header-logo" id="jumbotron-photo" src={ProfilePic} />
                </div>

                <h1 className="portfolio-hero-header-h1" id="jumbotron-name">
                My Name Is Ronaldo
                </h1>


                {/* <div className="wrapper" id="attr"> */}

                 {/* <ul>
                    <ul>Simplistic</ul>
                    <ul>Clean</ul>
                    <ul>Direct</ul>
                </ul> */}
                <ul id="attr">
                    Simplistic |
                    Clean |
                    Direct
                </ul>
                </div>

                /* <div className="" id="footer">
                <Footer/>
                </div> */










                        /* Contact Me */
                   

                    /* <div id="icon">
                        <i class="fab fa-github"></i>

                        <i class="fab fa-facebook"></i>

                        <i class="fab fa-twitter-square"></i>

                        <i class="fab fa-linkedin"></i>
                    </div> */

                    /* <ul> */

                /* <div className="" id="footer">
                <Footer/>
                </div> */

            // </div>
            // </div>

        )
    }
}

export default Jumbotron
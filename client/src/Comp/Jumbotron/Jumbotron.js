import React, { Component } from 'react';
import "./Jumbotron.css"
import ProfilePic from "./me.jpeg";
// import Footer from "../Footer/Footer"

import Attributes from "../Attributes/Atrributes";
import Namebanner from "../Namebanner/Namebanner";



class Jumbotron extends Component {
    render() {
        return (

            <div>
                <div className="jumbotron" id="jumbotron-div">

                    <Namebanner />

                    <div className="row">
                        {/* col 1 out of 3 */}
                        <div className="col-4" id="special">
                            <div className="col-12"
                                id="experience"> experience
        </div>
                            <div className="wrapper" id="experience-text">
                                <p>
                                    I have work experience in the health and medical industry working with patients, M.D.'s, and researchers. After several years of work experience, I want to expand my skillset and begin a career in the technology industry in the Bay Area.
                </p>
                            </div>

                            <div className="container" id="about-me-text">
                                <ul>
                                    <li>
                                        I lost 25 pounds at 9 years old      <i class="far fa-surprise"></i>
                                        (I know..)
                    </li>
                                    <li>
                                        I am a meal prep enthusiast
                    </li>
                                    <li>
                                        I am Art-c, not artsy.
                    </li>
                                    <li>
                                        Something random
                    </li>
                                </ul>
                            </div>

                            {/* <div className="col-12"
        id="about-me"> About Me
        </div> */}

                            <div className="container"
                                id="about-me"> About Me
        </div>
                        </div>

                        {/* col 2 out of 3 */}
                        <div className="col-4">
                            <div className="container">
                                <img className="portfolio-hero-header-logo" id="jumbotron-photo" src={ProfilePic} alt="" />
                            </div>
                        </div>

                        {/* col 3 out of 3 */}
                        <div className="col-4">
                            <div className="col-12"
                                id="page-tech"> Page Technology
        </div>

                            <div className="container" id="canvas-text">
                                <p>
                                    This is my portfolio built from scratch.
            <br />
                                    Here are the technologies utilized on this page:
                        
            <ul>
                                        <i class="fab fa-react" id="react"></i>
                                        React.Js
            </ul>
                                    <ul>
                                        <i class="fab fa-js" id="javascript"></i>
                                        Javascript
            </ul>
                                </p>
                            </div>

                            <div className="container" id="canvas-text">
                                <p>
                                    This is my canvas, similar to an artist experimenting with new techniques and colors while painting, I use this space to implement new CSS effects and animations I discover.
                    </p>
                            </div>

                            <div className="col-12"
                                id="canvas"> My Canvas AKA portfolio
        </div>

                        </div>
                    </div>
                    <div id="stuff">
                    <Attributes/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron
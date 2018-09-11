import React, { Component } from 'react';
import "./Jumbotron.css"
import ProfilePic from "./me.jpeg";
// import Footer from "../Footer/Footer"

import Attributes from "../Attributes/Atrributes";
import Namebanner from "../Namebanner/Namebanner";



class Jumbotron extends Component {

    constructor() {
        super();
        this.state = {
            showMe: true
        }
    }
    render(props) {
        return (

            <div>
                <div className="jumbotron"
                    id="jumbotron-div"
                >
                    <Namebanner />

                    <div className="row"
                    // onMouseEnter={this.props.mouse}
                    >
                        {/* col 1 out of 3 */}
                        <div className="col-12"
                            id="entire-column"
                        >

                            <div className="col-4" id="col1">
                                <div className="row">



                                    {/* Titles */}
                                    <div className="container" id="wow">
                                        {/* experience title */}
                                        <div className="col-12" id="ex">
                                            <p>
                                                Experience
                            </p>
                                        </div>


                                        {/* Details */}
                                        <div className="col-12" id="exp-text">
                                            <p>
                                                I have work experience in the health and medical industry working with patients, M.D.'s, and researchers. After several years of work experience, I want to expand my skillset and begin a career in the technology industry in the Bay Area.
                                </p>
                                        </div>

                                        {/* AboutMe Details */}
                                        <div className="col-12" id="about-me-text">
                                            <ul>
                                                <li>
                                                    I lost 25 pounds at 9 years old.
                                           {/* <i className="farfa-surprise"></i> */}

                                                    {/* (I know..) */}
                                                </li>
                                                <li>
                                                    I am a meal prep enthusiast.
                                    </li>
                                                <li>
                                                    I am "Art-C", not artsy.
                                    </li>

                                                <li>
                                                   I volunteer at A Meal With Dignity, a non-profit organization that feeds the homeless in San Francisco.
                                    </li>
                                                {/* <br /> */}
                                            </ul>
                                        </div>



                                        {/* AboutMe Title */}
                                        <div className="col-12"
                                            id="about-me">
                                            <p>
                                                About Me
                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>




                            {/* col 2 out of 3 */}
                            <div className="col-4" id="photo">
                                <div className="col-12">
                                    <img

                                        // className="portfolio-hero-header-logo" 

                                        className="col-12"

                                        id="jumbotron-photo" src={ProfilePic} alt="" />
                                </div>
                            </div>


                            {/* col 3 out of 3 */}
                            <div className="col-4" id="col3">
                                <div className="row">
                                    <div className="container" id="look">

                                        {/* </div>                                         */}
                                        <div className="col-12"
                                            id="page-tech">
                                            <p>
                                                Page Technology
                                </p>
                                        </div>

                                        {/* <div className="col-4"> */}
                                        <div className="col-12" id="page-tech-text">
                                            {/* <p>
                                    This is my portfolio built from scratch.
                                    <br />
                                    Here are the main technologies utilized on this page:
                                    </p> */}

                                            {/* <ul>
                                        <i className="fab fa-react" id="react"></i>
                                        React.Js
                                    </ul> */}

                                            {/* <ul>
                                        <i className="fab fa-js" id="javascript"></i>
                                        Javascript
                                    </ul> */}
                            <p>
                            React.Js
                            <i className="fab fa-react" id="react"></i>
                            &nbsp;
                            and  &nbsp; Javascript <i className="fab fa-js" id="javascript"></i> &nbsp;

                             are the two main libraries used to create my portfolio.  Other technologies used are parralax.js and bootstrap 4.
                            </p> 


{/*                             
                            <br/>
                            <br/>
                            <br/> */}


                                            {/* <p>
                                    This is my portfolio built from scratch.
                                    <br />
                                    Here are the main technologies utilized on this page:
                                    </p> */}



                                        </div>


                                        <div className="col-12" id="canvas-text">
                                            <p>
                                                This is my canvas, similar to an artist experimenting with new techniques and colors while painting, I use this space to implement new CSS effects and animations I discover.
                                </p>
                                        </div>


                                        <div className="col-12"
                                            id="canvas">
                                            <p>
                                                My Canvas AKA portfolio
                                </p>
                                        </div>
                                        {/* </div> */}
                                    </div>
                                    {/* </div>  */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Jumbotron

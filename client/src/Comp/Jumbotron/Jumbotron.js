import React, { Component } from 'react';
import "./Jumbotron.css"
import ProfilePic from "./me.jpeg";
// import Footer from "../Footer/Footer"

// import Attributes from "../Attributes/Atrributes";
import Namebanner from "../Namebanner/Namebanner";

import { Badge } from 'reactstrap';



class Jumbotron extends Component {

    constructor() {
        super();
        this.state = {
            showMe: true
        }
    }
    render(props) {
        return (

            // <div>
            //     <div className="jumbotron"
            //         id="jumbotron-div"
            //     >
            //         <Namebanner />

            //         <div className="row"
            //         >
            //             <div className="col-12"
            //                 id="entire-column"
            //             >

            //                 <div className="col-4" id="col1">
            //                     <div className="row">



            //                         <div className="container" id="wow">
            //                             <div className="col-12" id="ex">
            //                                 <p>
            //                                     Experience
            //                 </p>
            //                             </div>


            //                             <div className="col-12" id="exp-text">
            //                                 <p>
            //                                     I have work experience in the health and medical industry working with patients, M.D.'s, and researchers. After several years of work experience, I want to expand my skillset and begin a career in the technology industry in the Bay Area.
            //                     </p>
            //                             </div>

            //                             <div className="col-12" id="about-me-text">
            //                                 <ul>
            //                                     <li>
            //                                         I lost 25 pounds at 9 years old.

            //                                     </li>
            //                                     <li>
            //                                         I am a meal prep enthusiast.
            //                         </li>
            //                                     <li>
            //                                         I am "Art-C", not artsy.
            //                         </li>

            //                                     <li>
            //                                        I volunteer at A Meal With Dignity, a non-profit organization that feeds the homeless in San Francisco.
            //                         </li>
            //                                 </ul>
            //                             </div>

            //                             <div className="col-12"
            //                                 id="about-me">
            //                                 <p>
            //                                     About Me
            //                 </p>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>




            //                 <div className="col-4" id="photo">
            //                     <div className="col-12">
            //                         <img


            //                             className="col-12"

            //                             id="jumbotron-photo" src={ProfilePic} alt="" />
            //                     </div>
            //                 </div>


            //                 <div className="col-4" id="col3">
            //                     <div className="row">
            //                         <div className="container" id="look">

            //                             <div className="col-12"
            //                                 id="page-tech">
            //                                 <p>
            //                                     Page Technology
            //                     </p>
            //                             </div>

            //                             {/* </div> <div className="col-4"> */}
            //                             <div className="col-12" id="page-tech-text">
            //                 <p>
            //                 React.Js
            //                 <i className="fab fa-react" id="react"></i>
            //                 &nbsp;
            //                 and  &nbsp; Javascript <i className="fab fa-js" id="javascript"></i> &nbsp;

            //                  are the two main libraries used to create my portfolio.  Other technologies used are parralax.js and bootstrap 4.
            //                 </p> 

            //                             </div>


            //                             <div className="col-12" id="canvas-text">
            //                                 <p>
            //                                     This is my canvas, similar to an artist experimenting with new techniques and colors while painting, I use this space to implement new CSS effects and animations I discover.
            //                     </p>
            //                             </div>


            //                             <div className="col-12"
            //                                 id="canvas">
            //                                 <p>
            //                                     My Canvas AKA portfolio
            //                     </p>
            //                             </div>
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>

<div>

    <Namebanner />

    <div className="wrapper">
                <div className="one">
                {/* <div className="header">
                Experience / Background
                </div> */}
                <h1><Badge color="light">Experience / Background</Badge></h1>

                <p id="spacing">
                I have work experience in the health and medical industry working with patients, M.D.'s, and researchers. After several years of work experience, I want to expand my skillset and begin a career in the technology industry in the Bay Area.
                    </p>

                </div>
                <div className="two">
                <h1><Badge color="light">Page Technologies</Badge></h1>
                <p id="spacing">

                        React.Js
                             <i className="fab fa-react" id="react"></i>
                        &nbsp;
                            and  &nbsp; Javascript <i className="fab fa-js" id="javascript"></i> &nbsp;

                  are the two main libraries used to create my portfolio.  
                  <br/>
                  <br/>
                  Other technologies used:
                  <ul>
                      <li>
                        parralax.js
                      </li>
                      <li>
                      CSS Grid
                      </li>
                      <li>
                      React-Strap (currently implementing)
                      </li>
                      <li>
                      Bootstrap 4
                      </li>  
                      </ul>

                    </p>

                </div>
                <div className="three">
                <h1><Badge color="light">Fun Facts</Badge></h1>

                <p id="spacing">
                        <ul>
                            <li>
                                I lost 25 pounds at 9 years old.

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
                        </ul>

                    </p>

                </div>
                <div className="four">
                <h1><Badge color="light">Portfolio</Badge></h1>
                <p id="spacing">
                        This portolio is a space to showcase my projects.  Furthermore, this space is an area for me to experiment with new CSS (effects and animations) + HTML I discover.
                </p>

                </div>
                {/* <div class="five">Five</div>
                <div class="six">Six</div> */}
            </div>



</div>

            



        )
    }
}

export default Jumbotron

import React, { Component } from 'react';
import "./Jumbotron.css"
import "./J.css"

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
<div>
    <Namebanner />

    <div className="wrapper">
                <div className="one">
                {/* <div className="header">
                Experience / Background
                </div> */}
                <h1><Badge id="title" color="light">Experience / Background</Badge></h1>

                <p id="spacing">
                I have work experience in the health and medical industry working with patients, M.D.'s, and researchers. For further work experience please visit my LinkedIn page by clicking on the LinkedIn icon in the footer 
                    </p>

                </div>
                <div className="two">
                <h1><Badge id="title" color="light">Page Technologies</Badge></h1>
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
                <h1><Badge id="title" color="light">Fun Facts</Badge></h1>

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
                <h1><Badge id="title" color="light">Portfolio</Badge></h1>
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

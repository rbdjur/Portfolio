import React, { Component } from 'react';
import About from "./About"
import "./Body.css"

import Work from "./Work"
import "./Work"

// import PL1 from "./PL1.png";

// import GGB1 from "./GGB1.jpeg";

// import GGB2 from "./GGB2.jpeg";

// import SFSky from "./SFSky.png";

import SFSky2 from "./SFSky2.jpeg";






class Body extends Component {
    render() {
        return (
                
                 /* Contact  */
                 /* <div id="icon">
                    <i class="fab fa-github"></i>

                    <i class="fab fa-facebook"></i>

                    <i class="fab fa-twitter-square"></i>

                    <i class="fab fa-linkedin"></i>
                    </div> */
                
                /* <div className="wrapper" id="footer">
                <p>
                    Stuff
                    </p>


                   
                </div> */


                <div>
                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" id="body">

                <div className="wrapper" id="pic">

                {/* PL 1 */}

                {/* <img id="PL1" src={PL1}/> */}

                {/* GGB1 */}

                 {/* <img id="GGB1" src={GGB1}/> */}

                {/* GGB2 */}

                {/* <img id="GGB2" src={GGB2}/> */}

                {/* SFSky */}

                {/* <img id="SFSky" src={SFSky}/> */}

                {/* SFSky2 */}

                <img id="SFSky2" src={SFSky2} alt=""/>
                </div>


                {/* Insert pic of the painted lady houses in SF in this space.  */}

                    <h4 id="about">
                    <About/>
                    </h4>

                    <div className="container">
                    <p id="text">

                    I am a full stack web developer based out of the Bay Area, CA.  I have 2.5 years of healthcare and medical experience working with patients in physical therapy setting, Emergency Medical Services (EMT), and M.D.'s, and researchers at Neuroscape Lab at UCSF. 

                    <br/>
                    <br/>
                    
                    In addition to my health/medical background, I expanded my skillset, which now includes computer programming and hard skills operating and using SalesForce software.
                    <br/>

                    </p>
                    </div>

                    <h4 id="work">
                    Work Component
                    </h4>

                    <div className="row">
                    {/* <div className="row"  */}
                    {/* id="text" */}
                    >
                    <Work/>
                    </div>
                    {/* </div> */}

                    
                    
                    {/* <h4 id="one">one</h4>
                    <p>...</p>
                    <h4 id="two">two</h4>
                    <p>...</p>
                    <h4 id="three">three</h4>
                    <p>...</p> */}


                </div>
                </div>

            // </div>

        )
    }
}

export default Body
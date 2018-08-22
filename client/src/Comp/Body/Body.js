import React, { Component } from 'react';
import About from "./About"
import "./Body.css"

import Work from "./Work"
import "./Work"




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
                
                Insert pic of the painted lady houses in SF in this space. 

                    <h4 id="about">
                    <About/>
                    </h4>

                    <div className="container">
                    <p id="text">...</p>
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
                    </div>

                    
                    
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
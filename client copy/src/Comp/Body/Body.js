import React, { Component } from 'react';
import About from "./About"
import "./Body.css"

import Work from "./Work"
import "./Work"




class Body extends Component {
    render() {
        return (
            <div>
                
                 {/* Contact  */}
                 {/* <div id="icon">
                    <i class="fab fa-github"></i>

                    <i class="fab fa-facebook"></i>

                    <i class="fab fa-twitter-square"></i>

                    <i class="fab fa-linkedin"></i>
                    </div> */}
                
                {/* <div className="wrapper" id="footer">
                <p>
                    Stuff
                    </p>


                   
                </div> */}
                

                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" id="body">

                <div className="wrapper">

                    <h4 id="about">
                    <About/>
                    </h4>
                    <p id="text">...</p>

                    <h4 id="work">
                    <Work/>
                    </h4>
                    <p id="text">...</p>

                    <h4 id="one">one</h4>
                    <p>...</p>
                    <h4 id="two">two</h4>
                    <p>...</p>
                    <h4 id="three">three</h4>
                    <p>...</p>
                </div>
                </div>

            </div>

        )
    }
}

export default Body
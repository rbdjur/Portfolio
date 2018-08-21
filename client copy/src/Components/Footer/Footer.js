import React, { Component } from 'react';
import "./Footer.css"

// Components 
import BodyHeader from "../BodyHeader/BodyHeader"
import Work from "../Work/Work"
import About from "../About/About"

// Components' CSS
// import "../Work/Work.css";




class Footer extends Component {
    render() {
        return (
            <div className="container">

                <div className="row">

                    <div className="col-12" id="that">
                    <About/>
                    <Work/>
                        {/* <Work /> */}
                        {/* <About /> */}
                    </div>
                </div>

                <div className="sticky-footer-css" id="important">
                    <div className="row expanded flex-dir-column">

                        {/* <div className="col-12" id="contact-div">
                            <div className="container" id="contact">
                                <p>
                                    Contact information
                                </p>
                           </div>
                        </div> */}
                    </div>
                </div>
            </div>
            // </div>


        )
    }
}

export default Footer


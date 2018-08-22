import React, { Component } from 'react';
import "./Footer.css"


class Footer extends Component {
    render() {
        return (

            // <div className="">

                <div className="" id="footer">
                    Contact Me
     
               <div className="row">

               <div className="col-3" id="icon">
                        <i class="fab fa-github"></i>

                        <i class="fab fa-facebook"></i>

                        <i class="fab fa-twitter-square"></i>

                        <i class="fab fa-linkedin"></i>
                </div>


                {/* <div> */}
                  <div className="col-3" id="location">
                <p>
                    San Francisco, Bay Area
                </p>

                </div>
                {/* </div> */}

                <div className="col-3" id="full-stack">
                <p>
                    Full-Stack Web Developer
                    </p>
                </div>

                <div className="col-3" id="email">
                <p>
                    ronaldodeguzmanjr@gmail.com
                    </p>
                </div>


            </div>
            </div>
        )
    }
}
export default Footer
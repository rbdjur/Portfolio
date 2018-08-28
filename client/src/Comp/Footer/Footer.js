import React, { Component } from 'react';
import "./Footer.css"


class Footer extends Component {
    handleClick() {
        console.log("clicked");
    }


    constructor(props) {
        super(props);

        // this.handleClick = this.handleClick.bind(this);

        //State
        this.state = {
            github:"https://github.com/rbdjur",
            linkedin:"www.linkedin.com/in/ronaldodeguzman",
            twitter:"https://twitter.com/code_Ronaldo",
        };
    
    console.log("this.state.github", this.state.github);
    console.log("handleClick()", this.handleClick);
    }









    render() {
        return (

            // <div className="">

                <div className="" id="footer">
                    Contact Me
     
               <div className="row">

               <div className="col-3" id="icon">
                        <a>
                        <i class="fab fa-github"

                        //   value={this.state.github} 

                          onClick={this.handleClick}></i>

                        {/* <i class="fab fa-facebook"></i> */}

                        <i class="fab fa-twitter-square"></i>

                        <i class="fab fa-linkedin"></i>
                        </a>
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
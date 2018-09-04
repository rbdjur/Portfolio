import React, { Component } from 'react';
import "./Footer.css"

// import { BrowswerRouter as Router, Link } from 'react-router-dom'

// import Route from 'react-router-dom/Route';


class Footer extends Component {
    constructor(props) {
        super(props);

        this.handleGithubClick = this.handleGithubClick.bind(this);
        this.handleLinkedInClick = this.handleLinkedInClick.bind(this);
        this.handleTwitterClick = this.handleTwitterClick.bind(this);
        this.handleResumeClick = this.handleResumeClick.bind(this);


        //State
        this.state = {
            github:"https://github.com/rbdjur",
            linkedin:"https://www.linkedin.com/in/ronaldodeguzman",
            twitter:"https://twitter.com/code_Ronaldo",
            resume:"https://drive.google.com/file/d/1UFKFIkb0ivWzwLKLKyTGR3GkJYMKzqCg/view?usp=sharing",
            // github:"https://github.com/rbdjur",
            // linkedin:"www.linkedin.com/in/ronaldodeguzman",
            // twitter:"https://twitter.com/code_Ronaldo",
        };
    
    // console.log("this.state.resumegoogledrive + ", this.state.resume);
    // console.log("handleClick()", this.handleClick);
    }

    //GitHub Click
    handleGithubClick(e) {
        e.preventDefault();
        console.log("clicked");
        // console.log("inside handleClick - this.state.github should be assigning nothing", this.state.github);
        this.setState({github:"https://github.com/rbdjur"})

        console.log("this is the state of github after setState", this.state.github);

        window.location.href = this.state.github;
        // window.location(this.state.github);


        // console.log("this is the state of github after setState", this.setState({github}));

        // <Link to ={this.state.github}/>
    }



    //Twitter Click
    handleTwitterClick(e) {
        e.preventDefault();
        console.log("clicked");
        // console.log("inside handleClick - this.state.github should be assigning nothing", this.state.github);
        
        this.setState({twitter:"https://twitter.com/code_Ronaldo"})

        console.log("this is the state of github after setState", this.state.twitter);

        window.location.href = this.state.twitter;
        // window.location(this.state.github);


        // console.log("this is the state of github after setState", this.setState({github}));

        // <Link to ={this.state.github}/>
    }

    //LinkedIn Click
    handleLinkedInClick(e) {
        e.preventDefault();
        console.log("clicked");
        // console.log("inside handleClick - this.state.github should be assigning nothing", this.state.github);
        
        this.setState({linkedin:"www.linkedin.com/in/ronaldodeguzman"})

        console.log("this is the state of linkedin after setState", this.state.linkedin);

        window.location.href = this.state.linkedin;
        // window.location(this.state.github);


        // console.log("this is the state of github after setState", this.setState({github}));

        // <Link to ={this.state.github}/>
    }

    //Resume Click
    handleResumeClick(e) {
        e.preventDefault();
        console.log("clicked");
        // console.log("inside handleClick - this.state.github should be assigning nothing", this.state.github);
        
        this.setState({resume:"https://drive.google.com/open?id=1jylvbQxhLVVsJJhfRtEXmACXTSB8yyUG"})

        console.log("this is the state of resumegoogledrive after setState", this.state.resume);

        window.location.href = this.state.resume;
        // window.location(this.state.github);


        // console.log("this is the state of github after setState", this.setState({github}));

        // <Link to ={this.state.github}/>
    }




    render() {
        return (

            // <div className="">

                <div className="" id="footer">
                    Contact Me
     
               <div className="row">

               <div className="col-3" id="icon">

                        <i className="fab fa-github" 

                        // <Link to ={this.state.github}/>


                          onClick={this.handleGithubClick}

                        //   a href={this.state.github}
                        value={this.state.github}
                          
                          >
                          </i>

                        
                        <i className="fab fa-linkedin"

                        onClick={this.handleLinkedInClick}
                        value={this.state.linkedin}
                        ></i>

                        {/* <i class="fab fa-facebook"></i> */}

                        <i className="fab fa-twitter-square"
                            onClick={this.handleTwitterClick}
                            value={this.state.twitter}
                        
                        ></i>

                        <i className="far fa-file-alt"
                            onClick={this.handleResumeClick}
                            value={this.state.resumegoogledrive}
                            href="https://drive.google.com/open?id=1jylvbQxhLVVsJJhfRtEXmACXTSB8yyUG"
                        
                        ></i>

                        {/* </a> */}
                </div>


                {/* <div> */}
                  <div className="col-3" id="location">
                <p>
                    Bay Area, CA
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
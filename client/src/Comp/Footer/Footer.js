import React, { Component } from 'react';
import "./Footer.css"

class Footer extends Component {
    constructor(props) {
        super(props);

        this.handleGithubClick = this.handleGithubClick.bind(this);
        this.handleLinkedInClick = this.handleLinkedInClick.bind(this);
        this.handleTwitterClick = this.handleTwitterClick.bind(this);
        this.handleResumeClick = this.handleResumeClick.bind(this);


        //State
        this.state = {
            github: "https://github.com/rbdjur",
            linkedin: "https://www.linkedin.com/in/ronaldodeguzman",
            twitter: "https://twitter.com/code_Ronaldo",
            resume: "https://drive.google.com/open?id=1nLLD328W2KrJhMQ2hKsgGvzg4onhXro5",
        };
    }

    //GitHub Click
    handleGithubClick(e) {
        e.preventDefault();
        console.log("clicked inside handleGithubClick");


        this.setState({ github: "https://github.com/rbdjur" })


        // window.location.href = this.state.github;
        window.open(this.state.github)
        // window.location(this.state.github);
    }



    //Twitter Click
    handleTwitterClick(e) {
        e.preventDefault();
        console.log("clicked inside handleTwitterClick");

        this.setState({ twitter: "https://twitter.com/code_Ronaldo" })

        window.open(this.state.twitter)
    
    }

    //LinkedIn Click
    handleLinkedInClick(e) {
        e.preventDefault();
        console.log("clicked inside handleLinkedClick");

        this.setState({ linkedin: "www.linkedin.com/in/ronaldodeguzman" })

        window.open(this.state.linkedin)
        // window.location.href = this.state.linkedin;
        // window.location(this.state.github);
    }

    //Resume Click
    handleResumeClick(e) {
        e.preventDefault();
        console.log("clicked inside handleResumeClick");
       
        this.setState({ resume: "https://drive.google.com/open?id=1jylvbQxhLVVsJJhfRtEXmACXTSB8yyUG" })

        window.open(this.state.resume)
        // window.location.href = this.state.resume;
        // window.location(this.state.github);
    }

    render() {
        return (
            <div className="f-container"
            // id="footer"
             >
                <div className="left-header-1">
                left-header row 1
                </div>

                <div className="middle-header-1">
                    <div className="text">
                    Outlets To Contact Me
                    </div> 
                </div>

                <div className="right-header-1">
                right-header row 1
                </div>

                <div className="left-header-2">
                left-header row 2
                </div>

                <div className="middle-header-2">
                    {/* <div className="symbols"> */}
                    <i className="fab fa-github" 
                    onClick={this.handleGithubClick}
                    // id="i" 
                    value={this.state.github}
                    target="_blank">
                    </i>

                    <i className="fab fa-linkedin" 
                    onClick={this.handleLinkedInClick} 
                    // id="i" 
                    value={this.state.linkedin}
                    target="_blank">
                    </i>

                    <i className="fab fa-twitter-square"
                    onClick={this.handleTwitterClick}
                    // id="i"
                    value={this.state.twitter}
                    target="_blank">
                    </i>

                    <i className="far fa-file-alt"
                    onClick={this.handleResumeClick}
                    // id="i"
                    value={this.state.resumegoogledrive}
                    href="https://drive.google.com/open?id=1jylvbQxhLVVsJJhfRtEXmACXTSB8yyUG"
                    target="_blank">
                    </i>
                    {/* </div> */}
                </div>

                <div className="right-header-2">
                right-header row 2
                </div>

            </div>
        )
    }
}
export default Footer
















/* <div className="f-container" id="footer">

<div className="header-one">
</div>

<div className="header-two"  */

// id="contact-cont"

/* >
    <p 
    id="contact-cont"
    >


        Full-Stack Web Developer
         &nbsp; &nbsp;
         <br/>
        Bay Area, CA 
        &nbsp; &nbsp; 
        <br/>
        ronaldodeguzmanjr@gmail.com

        
    </p> */
/* </div> */

/* <div className="header-three">
</div>

<div className="social">
    <i className="fab fa-github" 
    onClick={this.handleGithubClick}
    id="i" 
    value={this.state.github}
    target="_blank">
    </i>

    <i className="fab fa-linkedin" 
    onClick={this.handleLinkedInClick} 
    id="i" 
    value={this.state.linkedin}
    target="_blank">
    </i>

    <i className="fab fa-twitter-square"
    onClick={this.handleTwitterClick}
    id="i"
    value={this.state.twitter}
    target="_blank">
    </i>

    <i className="far fa-file-alt"
    onClick={this.handleResumeClick}
    id="i"
    value={this.state.resumegoogledrive}
    href="https://drive.google.com/open?id=1jylvbQxhLVVsJJhfRtEXmACXTSB8yyUG"
    target="_blank">
    </i>
</div> 
</div>
</div> */
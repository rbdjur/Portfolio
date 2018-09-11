import React, { Component } from 'react';

import About from "./About"
import "./Body.css"

import Work from "../Work/Work"
import "../Work/Work.css"

import projects from "../../Project.json"
// import projects from "../Navbar/Navbar"

// import salad from "../../Tasteful-Salad.png"
// import sc from "../../socialpic.jpg"
// import equip from "../../equiprent.jpeg"





// import PL1 from "./PL1.png";

// import GGB1 from "./GGB1.jpeg";

// import GGB2 from "./GGB2.jpeg";

// import SFSky from "./SFSky.png";

import SFSky2 from "./SFSky2.jpeg";


class Body extends Component {
    constructor(props) {
        super(props);

    this.clickEquip = this.clickEquip.bind(this)
    this.clickSocial = this.clickSocial.bind(this)
    this.clickTasteful = this.clickTasteful.bind(this)
    this.clickSite = this.clickSite.bind(this);

    this.state = {
        projects,
        equiprent: "",
        socialceleb: "",
        tasteful: "",

        // equiprent: "https://equiprent.herokuapp.com/",
        // socialceleb: "https://nameless-wave-15422.herokuapp.com/",
        // tasteful: "https://tastefulteam.github.io/TastefulApp/",
        // pics: equip,sc,salad
        // pic: project.image
    };

        console.log("this is console.log for tasteful with image ", this.state.pics);
        console.log("projects", this.state.projects);

        console.log("experimenting to extract projects data", this.state.projects[0].image)

        // console.log("props.image", props.image);
        console.log("this.state.pic for prop.image", this.state.pic); 
    }

    clickSite(e, props) {
        console.log("Title clicked");
        {this.state.projects.map(project => (
            console.log("urls to site - project.site", project.site)
        ))}

    }

    clickEquip(e) {
        console.log("equiprent click - this.state", this.state.equiprent);
        window.location.href = this.state.equiprent;
    }

    clickSocial(e) {
        console.log("equiprent click - this.state", this.state.equiprent);
        window.location.href = this.state.socialceleb;
    }

    clickTasteful(e) {
        console.log("equiprent click - this.state", this.state.equiprent);
        window.location.href = this.state.tasteful;
    }


    render() {
        return (

            <div id="hey">
                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" id="body">



                    <h4 id="work">
                        Projects 
                    </h4>

                    <div className="col-12" id="idk">
                        {/* <div className="row"  */}
                        {/* id="text" */}

                        {this.state.projects.map(project => (
                            <Work

                                id={project.id}
                                key={project.id}
                                name={project.name}
                                image={project.image}
                                description={project.description}

                                page={project.site}

                                click={this.clickSite}


                                // equipsite={this.clickEquip}
                                // socialsite={this.clickSocial}
                                // tastefulsite={this.clickTasteful}



                                // equiprentImage={this.state.projects[0].image}
                            
                            />


                        ))}

                        {/* <Work/> */}

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
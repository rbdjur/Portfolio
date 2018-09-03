import React, { Component } from 'react';

import About from "./About"
import "./Body.css"

import Work from "../Work/Work"
import "../Work/Work.css"

import projects from "../../Project.json"
// import projects from "../Navbar/Navbar"


// /Users/deguzman714/React-Portfolio/client/src/Project.json



// import PL1 from "./PL1.png";

// import GGB1 from "./GGB1.jpeg";

// import GGB2 from "./GGB2.jpeg";

// import SFSky from "./SFSky.png";

import SFSky2 from "./SFSky2.jpeg";


class Body extends Component {
    state = {
        projects,
    };


    render() {
        return (

            <div id="hey">
                <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" id="body">



                    <h4 id="work">
                        Work Component
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




                            />


                        ))}

                        {/* <Work/> */}

                    </div>
                    {/* </div> */}



                    <h4 id="one">one</h4>
                    <p>...</p>
                    <h4 id="two">two</h4>
                    <p>...</p>
                    <h4 id="three">three</h4>
                    <p>...</p>


                </div>
            </div>

            // </div>

        )
    }
}

export default Body
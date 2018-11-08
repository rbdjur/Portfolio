import React, { Component } from 'react';

// import About from "./About"
import "./Body.css"

// import Work from "../Work/Work"
// import "../Work/Work.css"

import projects from "../../Project.json"





class Body extends Component {
    constructor(props) {
        super(props);

        this.clickEquip = this.clickEquip.bind(this)
        this.clickSocial = this.clickSocial.bind(this)
        this.clickTasteful = this.clickTasteful.bind(this)
        this.click = this.click.bind(this);

        this.state = {
            projects,
            equiprent: "https://equiprent.herokuapp.com/",
            socialceleb: "https://nameless-wave-15422.herokuapp.com/",
            tasteful: "https://tastefulteam.github.io/TastefulApp/",
            stuff: "",
        };

        console.log("projects", this.state.projects[0]);

        console.log("projects - equiprent- images", this.state.projects[0].image);

        console.log("projects - tasteful- images", this.state.projects[1].image);



    }

    click(e) {
        e.preventDefault();
        console.log("Title clicked");


        //        let sites = [];
        //         {this.state.projects.map(project => (
        //             // console.log("urls to site - project.site", project.site)
        //             // let project.site = project.site
        //             sites.push(project.site)
        //         )
        //     ); 
        //     console.log("sites array", sites);
        //     console.log("sites array 0 + ", sites[0])
        //     console.log("sites array 1 + ", sites[1])
        //     console.log("sites array 2 + ", sites[2])
        //     console.log("this.state.stuff", this.state.stuff);
        //     this.setState({stuff:sites});
        //     console.log("this.state.stuff", this.state.stuff);
        // }


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
            <div>
                {/* <Work/> */}

                <div className="work">
                    <div className="p-title">
                    Projects
                    </div>

                    {this.state.projects.map((stuff, index) => (
                        <div className="p-one" id="projects">
    
                        <img src={stuff.image} alt={stuff.name} id="image"/>
                        
                        <p key={index} id="name">{stuff.name}</p>


                        <div key={index}> 
                        {stuff.description}
                        </div>
                        {/* <p key={index}>{stuff.description}</p> */}
                        </div>
                         ))}
    
                        </div>

                 </div>
            


                /* <div className="work">
                    <div className="p-title">
                        Projects
                    </div>

                    <div className="p-one">
                        One
                    </div>


                    <div className="p-two">
                        Two
                    </div>

                    <div className="p-three">
                        three
                    </div>
                </div>  */

            // </div>


            














            // <div id="hey">
            //     <div data-spy="scroll" data-target="#navbar-example2" data-offset="0" id="body">



            //         <h4 id="work">
            //             Projects 
            //         </h4>

            //         <div className="col-12" id="idk">


            //             {this.state.projects.map(project => (
            //                 <Work

            //                     id={project.id}
            //                     key={project.id}
            //                     name={project.name}
            //                     image={project.image}
            //                     description={project.description}

            //                     page={project.site}


            //                     equipsite={this.clickEquip}
            //                     socialsite={this.clickSocial}
            //                     tastefulsite={this.clickTasteful}

            //                 />


            //             ))}


            //         </div>


            //     </div>
            // </div>


        )
    }
}

export default Body
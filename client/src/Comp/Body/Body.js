import React, { Component } from 'react';

// import About from "./About"
import "./Body.css"

import Work from "../Work/Work"
import "../Work/Work.css"

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

        console.log("this is console.log for tasteful with image ", this.state.pics);
        console.log("projects", this.state.projects);

        console.log("experimenting to extract projects data", this.state.projects[0].image)

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

                                // click={this.clickSite}
                                // need={this.click}



                                equipsite={this.clickEquip}
                                socialsite={this.clickSocial}
                                tastefulsite={this.clickTasteful}



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
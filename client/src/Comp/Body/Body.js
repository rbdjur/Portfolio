import React, { Component } from 'react';

import "./Body.css"
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

                <div className="work">
                    <div className="p-title">
                    Projects
                    </div>

                    {this.state.projects.map((stuff, i) => (
                        <div className="p-one" id="projects" key={stuff.id}>
                        
                        <div id="image">
                            <img src={stuff.image} alt={stuff.name} />
                        </div>
                        
                        <div id="name">
                            <p>
                                <a href={stuff.site} target="_blank">
                                {stuff.name}
                                </a>
                            </p>
                        </div>
                       
                        <div id="description">
                            {stuff.description}
                        </div>
                        
                        </div>
                         ))}
                        <div>
                        </div> 
                </div>

                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
                            <br/>
            </div>
        )
    }
}

export default Body
import React, { Component } from 'react';
import "./site.css"

class Site extends Component {
    constructor(props) {
        super(props);
        // console.log("props.page", props.thing)
        // console.log("equiprent", props.one)
        // console.log("socialceleb", props.two)
        // console.log("tasteful", props.three)

        // List the this.functions
        this.clickSite = this.clickSite.bind(this);
        let sites = [];

        // State
        // 
        this.state = {
            // Functions
            equipFnx: props.one,
            socialFnx: props.two,
            tastefulFnx: props.three,


            // Data
            pageUrl: props.thing,
            sitesArray: sites,

            // Sites
            tasteful: "https://tastefulteam.github.io/TastefulApp/",
            social: "https://nameless-wave-15422.herokuapp.com/" ,
            equip: "https://equiprent.herokuapp.com/",
        };

        // equipFnx, socialFnx, tastefulFnx
        // console.log("this.state.equipFnx", this.state.equipFnx);
        // console.log("this.state.socialFnx", this.state.socialFnx);
        // console.log("this.state.tastefulFnx", this.state.tastefulFnx);


        // console.log("this.state.pageUrl ", this.state.pageUrl);
        // sites.push(this.state.pageUrl);
        sites.push(props.thing);
        console.log("sites", sites);
        console.log("sitesArray", this.state.sitesArray);

        }

        clickSite(e) {
            e.preventDefault();
            console.log("clicked");
            // window.location.href = sites;
        }






        render() {
            return (
                <div>

                    <div className="row">
                        <div className="col-12" onClick={this.state.clickSite} value={this.state.sitesArray}>

                            <a href={this.state.pageUrl} target="_blank">
                                site
                        </a>

                        </div>
                    </div>


                </div>
            )
        }
    }

export default Site
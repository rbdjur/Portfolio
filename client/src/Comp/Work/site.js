import React, { Component } from 'react';
import "./site.css"

class Site extends Component {
    constructor(props) {
        super(props);
        console.log("props.page", props.thing)

        // List the this.functions = this.functions.bind(this)


        // State
        // 
        this.state = {

        };

    }



        render(props) {
            return (
                <div>

                    <div className="row">
                        <div className="col-12">

                            <a href={props.thing} target="_blank">
                                site
                        </a>

                        </div>
                    </div>


                </div>
            )
        }
    }

export default Site
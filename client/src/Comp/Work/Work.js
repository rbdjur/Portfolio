import React from 'react';
// import React, { Component } from 'react';
import "./Work.css"

import Site from "./site"
import "./site.css"


// import Image from "./image"
// import Name from "./name"
// import Description from "./description"

// import Project from "../../Project"




// class Work extends Component {

//     state = {
//         // equiprent: ,
//         // socialceleb: ,
//         // tasteful: salad
//     }

//     consoleLog() {
//         console.log("this is console.log for tasteful with image ", this.state.tasteful);
//     }


// render(props) {
//     return (

// clickSite(e,props) {
//     console.log("blank");
// }



const Work = props => (

    <div className="row" id="ha">
        <div className="col-12" id="day">

            <div className="col-12 portfolio-item" id="box">
                {/* <div className="card h-100" id="card"> */}
                <div className="col-12" id="n">

                    {/* <div className="card h-100" id="card"> */}
                    <div className="col-12" id="card">

                        {/* <Image/> */}

                        <div className="col-12" id="pic-row" onClick={props.need}>

                            <a href="">
                                <img src={props.image} alt={props.id}  id="image"/>
                            </a>
                        </div>


                        <div className="row" id="desc">

                        {/* <div className="card-body w-100"  */}
                         <div className="col-12" 
                        
                        id="card-body">
                            <h4 className="card-title">
                                <a href={props.page}>{props.id}. {props.name}</a>
                                <Site thing={props.page}/>
                            </h4>

                            {/* <div className="row">
                                <div className="col-12">

                                        <a href={props.page} target="_blank">
                                        site
                                        </a>

                                </div>
                            </div> */}


                            {/* </div> */}


                            <div className="col-12" id="writing">
                            {/* <p className="card-text">{props.description}</p>
                         */}

                         <p>{props.description}</p>
                            </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    //         )
    //     }
    // }
)

export default Work 
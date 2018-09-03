import React, { Component } from 'react';
import "./Work.css"


import Image from "./image"
import Name from "./name"
import Description from "./description"


// class Work extends Component {
//     render() {
//         return (

const Work = props => (

            <div className="row">

                {/* <div className="container" id="work">
                    Work component
                 </div> */}


                {/* <!-- Page Content --> */}
                {/* <div className="row"> */}

                {/* <!-- Page Heading --> */}
                {/* <h1 class="my-4">Page Heading
                    <small>Secondary Text</small>
                    </h1> */}






                <div className="row">

                    {/* <div className="col-sm-1" 
                    id="xob"
                    >
                    </div> */}


                    <div className="col-6 portfolio-item" id="box">
                        <div className="card h-100" id="card">

                        {/* <Image/> */}


                            {/* <a href=""><img className="card-img-top" src="http://placehold.it/700x400" alt="" />
                            </a> */}

                            <a href=""><img className="card-img-top" src={props.image} alt={props.name} />
                            </a>


                            <div className="card-body">


                                <h4 className="card-title">
                                    <a href="">{props.name}</a>
                                </h4>

                                {/* <Name
                                title={props.name}
                                /> */}


                                <p className="card-text">{props.description}</p>

                                {/* <Description
                                description={props.description}/> */}


                            </div>
                        </div>
                    </div>


                    {/* <div className="col-sm-1" >
                    </div> */}


                    {/* <div className="col-sm-1" id="box">
                    </div> */}

                    {/* <div className="col-sm-4 portfolio-item" id="box">
                        <div className="card h-100">
                            <a href=""><img className="card-img-top" src="http://placehold.it/700x400" alt="" />
                            </a>
                            <div className="card-body">
                                <h4 className="card-title">
                                    <a href="">Project One</a>
                                </h4>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra euismod odio, gravida pellentesque urna varius vitae.</p>
                            </div>
                        </div>
                    </div> */}

                    {/* <div className="col-sm-1" 
                    id="box"
                    >
                    </div> */}
                    
                    {/* <div className="col-sm-1" id="box">
                    </div> */}

                </div>
             </div>


//         )
//     }
// }
                )

export default Work 
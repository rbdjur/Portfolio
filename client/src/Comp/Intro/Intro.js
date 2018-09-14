import React, { Component } from 'react';
import "./Intro.css"

// import Pic from "../../../public/img/ProPic.jpg"
// import Pic from "../../"

// class Intro extends Component {

//     render() {
//         return (

//     <div className="wrapper">
//     <div className="picture">
//     One
//     {/* {Pic} */}
//     </div>

//     <div className="two">
//     Two
//     </div>

//     </div>

//     )
// }
// }

function Intro(props) {
    return (

            <div className="wrapper">

            <div className="picture">
            <img src={props.pic} alt="Ronaldo DeGuzman" id="pic"></img>
            {/* One */}
            {/* {Pic} */}
            </div>
        
            <div className="two">
            Two
            </div>
            </div>
    )
}

export default Intro
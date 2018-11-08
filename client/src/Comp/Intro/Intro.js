// import React, { Component } from 'react';
import React from 'react';



// import "./Intro.css"
// import { Media } from 'reactstrap';
// import Pic from "../../img/ProPic.jpg"

// const Intro = (props) => {
//   return (
//     <Media>
//       <Media left href="#">
//         {/* <Media object data-src={Pic} alt="" /> */}
//         <Media src={Pic} alt="" />
//       </Media>
//       <Media body>
//         <Media heading>
//           Media heading
//         </Media>
//         Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
//       </Media>
//     </Media>
//   );
// };

// export default Example;

function Intro(props) {
    return (

            <div className="wrapper">

            <div className="picture">
            <img src={props.pic} alt="Ronaldo DeGuzman" id="pic"></img>
            Me
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
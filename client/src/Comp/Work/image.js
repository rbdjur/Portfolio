import React, { Component } from 'react';
import "./image.css"



// class Image extends Component {
//     render() {
//         return (


const Image = props => (
    <a href=""><img className="card-img-top" src={props.image} alt={props.name} />
    </a>
)

//         )
//     }
// }

export default Image
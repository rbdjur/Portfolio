import React, { Component } from 'react';
import "./Body.css"
import BodyHeader from '../BodyHeader/BodyHeader';
import Contact from "../Contact/Contact";
import About from "../About/About";
import Work from "../Work/Work";


class Body extends Component {
    render() {
        return (
            <div>
                <BodyHeader />
            </div>
        )
    }
}

export default Body
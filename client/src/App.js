import React, { Component } from 'react';
import "./App.css"

import { Button } from 'reactstrap';
// import { BrowswerRouter as Router, Link } from 'react-router-dom'
// import Route from 'react-router-dom/Route';


/* New Components */
// import Navbar from "./Comp/Navbar/Navbar"
import Body from "./Comp/Body/Body"
import Jumbotron from './Comp/Jumbotron/Jumbotron';
import Footer from "./Comp/Footer/Footer";
// import Attributes from "./Comp/Attributes/Atrributes";
// import NameBanner from "./Comp/Namebanner/Namebanner";
import Para from "./Comp/Parallax/Parallax";
import projects from "./Project.json"
import profiles from "./Profile.json"
import Intro from "./Comp/Intro/Intro";





/* 
FONT 
*/


// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// library.add(faStroopwafel)

class App extends Component {
  constructor(props) {
    super(props);
    this.equipClick = this.equipClick.bind(this);
    this.socialClick = this.socialClick.bind(this);
    this.tastefulClick = this.tastefulClick.bind(this);
  }



  equipClick(e) {
    e.preventDefault();
    console.log("equiprent clicked");
  };

  socialClick(e) {
    e.preventDefault();
    console.log("social clicked");
  };

  tastefulClick(e) {
    e.preventDefault();
    console.log("tasteful clicked");
  };


 showText(e) {
    e.preventDefault();
    console.log("onMouseMove");
    alert("Mouse moved");
  }

  state = {
    // projects,
    profiles
  };


  render() {
    return (
      <div >

      {/* {this.state.profiles.map(profile => (
      <Intro
      id={profile.id}
      pic={profile.pic}
      exp={profile.exp}
      port={profile.port}
      />
      ))} */}

        {/* <Intro/> */}
        <Jumbotron mouse={this.showText}/>
        <Para/>

        {/* <div className="" id="lol">
        <Footer equip={this.equipClick} social={this.socialClick} tasteful={this.tastefulClick}/>
        </div> */}

        {/* {this.state.projects.map(project => (
           <Body
           id={project.id}
           key={project.id}
           name={project.name}
           image={project.image}
           description={project.description}
           />
        ))} */}
        <Body/>
        <Footer/>

        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;

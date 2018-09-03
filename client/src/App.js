import React, { Component } from 'react';

// import { BrowswerRouter as Router, Link } from 'react-router-dom'

// import Route from 'react-router-dom/Route';


//New Components
import Navbar from "./Comp/Navbar/Navbar"
import Body from "./Comp/Body/Body"
import Jumbotron from './Comp/Jumbotron/Jumbotron';
import Footer from "./Comp/Footer/Footer";
import Attributes from "./Comp/Attributes/Atrributes";
import NameBanner from "./Comp/Namebanner/Namebanner";
import Para from "./Comp/Parallax/Parallax";
// import projects from "./Project.json"




// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// library.add(faStroopwafel)

class App extends Component {

 showText(e) {
    e.preventDefault();
    console.log("onMouseMove");
    alert("Mouse moved");
  }

  // state = {
  //   projects,
  // };


  render() {
    return (
      <div 
      // id="main"
      >
        {/* <Navbar/> */}

        {/* <NameBanner/> */}
        <Jumbotron mouse={this.showText}/>
        <Para/>

        {/* <Attributes/> */}

        {/* <div className="" id="lol"> */}
        <Footer/>
        {/* </div> */}

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

        

      {/* <Menu/>
      <Header linkedin={this.state.linkedin}/>
      <Body/>
      <Footer/> */}
      </div>
    );
  }
}

export default App;

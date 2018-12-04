import React, { Component } from 'react';
import "./App.css"


/* New Components */
import Body from "./Comp/Body/Body"
import Jumbotron from './Comp/Jumbotron/Jumbotron';
// import Info from './Comp/Jumbotron/Jumbotron';
import Footer from "./Comp/Footer/Footer";
import Para from "./Comp/Parallax/Parallax";
import projects from "./Project.json"
import profiles from "./Profile.json"

/* 
FONT 
*/

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles
    };
    this.equipClick = this.equipClick.bind(this);
    this.socialClick = this.socialClick.bind(this);
    this.tastefulClick = this.tastefulClick.bind(this);
    this.onImage = this.onImage.bind(this);

    console.log("This is profiles imported", profiles)
    console.log("accessing the parralax property of the first index of the profiles array", profiles[0].parralax)

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

  onImage(e) {
    console.log("mouse over onImage fxn - inside fxn.");
    alert("did it");
  }

  render() {
    return (
      <div >
        <Jumbotron mouse={this.showText}/>
        {/* <Info mouse={this.showText} /> */}
        <Footer/>
        <Para background={this.state.profiles[0].parralax} />  
        <Body projects={projects} img={this.onImage}/>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default App;

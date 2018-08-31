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



// import { library } from '@fortawesome/fontawesome-svg-core'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

// library.add(faStroopwafel)

class App extends Component {

  state = {
    github: "",
    twitter: "",
    linkedin: "www.linkedin.com/in/ronaldodeguzman"
  }

  render() {
    return (
      <div 
      // id="main"
      >
        <Navbar/>
        {/* <NameBanner/> */}
        <Jumbotron/>
        <Attributes/>
        <div className="" id="lol">
        <Footer/>
        </div>
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

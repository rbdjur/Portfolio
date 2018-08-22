import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

//OG Components
// import Header from "./Components/Header/Header"
// import Body from "./Components/Body/Body"
// import Footer from "./Components/Footer/Footer"
// import Menu from "./Components/Menu/Menu"


//New Components
import Navbar from "./Comp/Navbar/Navbar"
import Body from "./Comp/Body/Body"
import Jumbotron from './Comp/Jumbotron/Jumbotron';
import Footer from "./Comp/Footer/Footer";



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
        <Jumbotron/>
        <Footer/>
        <Body/>
        

      {/* <Menu/>
      <Header linkedin={this.state.linkedin}/>
      <Body/>
      <Footer/> */}
      </div>
    );
  }
}

export default App;

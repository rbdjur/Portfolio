import React from 'react';
import { Parallax } from 'react-parallax';
// import { Parallax, Background } from 'react-parallax';
import "./Parallax.css";

// import pic from "./ChosenOne.jpeg"
import picture from "./SFnew.png"


// import pic from "./SFSky.jpeg"

// class Parallax extends Component {
//     render() {
//         return (
            // <div className="row">
            // hi
            // </div>

            const Para = () => (
                <div id="p">
                  {/* <Parallax
                    blur={10}
                    bgImage={require('path/to/image.jpg')}
                    bgImageAlt="the cat"
                    strength={200}
                  >
                    Put some text content here
                    or even an empty div with fixed dimensions
                    to have a height for the parallax.
                    <div style={{ height: '200px' }} />
                  </Parallax> */}
                    <Parallax
                    
                    blur={0}
                    bgImage={picture}
                    bgImageAlt="San Francisco Skyline"
                    strength={45}
                  >
                    {/* Put some text content here
                    or even an empty div with fixed dimensions
                    to have a height for the parallax. */}

                    <div style={{ height: '665px' }} />
                  </Parallax>
                   


                  {/* <Parallax
                    blur={{ min: -15, max: 15 }}
                    bgImage={require('path/to/another/image.jpg')}
                    bgImageAlt="the dog"
                    strength={200}
                  >
                    Blur transition from min to max
                    <div style={{ height: '200px' }} />
                  </Parallax> */}


                  {/* <Parallax strength={300}>
                    <Background className="custom-bg">
                      <img src="./ChosenOne.jpeg" alt="fill murray" />
                    </Background>
                  </Parallax> */}

                  {/* <Parallax strength={300}>
                    <Background className="custom-bg">
                      <img src="" alt="fill murray" />
                    </Background>
                  </Parallax> */}


                </div>

            )


//         )
//     }
// }

export default Para
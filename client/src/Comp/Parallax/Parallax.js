import React from 'react';
import { Parallax } from 'react-parallax';
import "./Parallax.css";

const Para = (props) => (
  <div id="p">
    <Parallax
      blur={0}
      bgImage={props.background}
      bgImageAlt="San Francisco Skyline"
      strength={140}
    >

    <div>
      <p id="local">
      Bay Area, CA
      </p>
    </div>
    {/* <div style={{ height: '665px' }} /> */}
    <div style={{ height: '1000px' }} />
      </Parallax>
    </div>
    );
    
export default Para
import React from 'react';
import { Parallax } from 'react-parallax';
import "./Parallax.css";

const Para = (props) => (
  <div id="p">
    <Parallax
      blur={0}
      bgImage={props.background}
      bgImageAlt="San Francisco Skyline"
      strength={120}
    >
    
    <div style={{ height: '665px' }} />
      </Parallax>
    </div>
    );
    
export default Para
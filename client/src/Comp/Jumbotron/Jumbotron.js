import React, { Component } from 'react';
import "./Jumbotron.css"
import ProfilePic from "./me.jpeg";
// import Footer from "../Footer/Footer"

import Attributes from "../Attributes/Atrributes";
import Namebanner from "../Namebanner/Namebanner";



class Jumbotron extends Component {
    render() {
        return (

            <div>
                <div className="jumbotron" id="jumbotron-div">

                <Namebanner/>

                    {/* <div className="container"> */}
                        <div className="row">
                            {/* col 1 out of 3 */}
                            <div className="col-4"
                                id="experience"> experience
                  </div>

                            {/* col 2 out of 3 */}
                            <div className="col-4">
                            </div>

                            {/* col 3 out of 3 */}
                            <div className="col-4"
                                id="page-tech"> Page Technology
                  </div>

                        </div>
                    {/* </div> */}


                    <div className="row">

{/* col 1 out of 3 */}
<div className="col-4">
    <div className="wrapper" id="experience-text">
        <p> 
        I have work experience in the health and medical industry working with patients, M.D.'s, and researchers. After several years of work experience, I want to expand my skillset and begin a career in the technology industry in the Bay Area. 
        </p>

    </div>
</div>

{/* col 2 out of 3 */}

<div className="col-4">
    <div className="container">
 <img className="portfolio-hero-header-logo" id="jumbotron-photo" src={ProfilePic} alt="" />
 </div>

</div>

{/* col 3 out of 3 */}
<div className="col-4">
    <div className="container" id="canvas-text">
        <p>
            This is my portfolio built from scratch.  
            <br/>
            Here are the technologies utilized on this page:
            <ul>
            <i class="fab fa-react" id="react"></i>
                React.Js 
            </ul>

            <ul>
            <i class="fab fa-js" id="javascript"></i>
                Javascript
            </ul>

            {/* <ul>
            <h1 class="text-hide" style="background-image: url('/docs/4.1/assets/brand/bootstrap-solid.svg'); width: 50px; height: 50px;">Bootstrap</h1>
            </ul> */}
        </p>
    </div>
</div>
</div>



                    {/* <div className="container"> */}
                        {/* <img className="portfolio-hero-header-logo" id="jumbotron-photo" src={ProfilePic} alt="" /> */}


                        <div className="row">

                            {/* col 1 out of 3 */}
                            <div className="col-4">
                                <div className="wrapper" id="about-me-text">
                                    {/* <p> */}

                                    <ul>
                                        <li>
                                            I lost 25 pounds at 9 years old                         <i class="far fa-surprise"></i>
                                            (I know..)
                                           
                                           
                            </li>

                                        <li>

                                            I am a meal prep enthusiast
                
                            </li>

                                        <li>
                                            I am Art-c, not artsy.
                        </li>


                                    </ul>
                                    {/* </p> */}

                                </div>
                            </div>

                            {/* col 2 out of 3 */}

                            <div className="col-4">
                            </div>

                            {/* col 3 out of 3 */}
                            <div className="col-4">
                                <div className="container" id="canvas-text">
                                    <p>
                                        This is my canvas, similar to an artist experimenting with new techniques and colors while painting, I use this space to implement new CSS effects and animations I discover.
                    </p>
                                </div>
                            </div>

                        </div>

                        <div className="row">
                            {/* col 1 out of 3 */}
                            <div className="col-4"
                                id="about-me"> About Me
                    </div>

                            {/* col 2 out of 3 */}
                            <div className="col-4">
                            </div>

                            {/* col 3 out of 3 */}

                            <div className="col-4"
                                id="canvas"> My Canvas AKA portfolio
                    </div>



                        </div>


                    {/* </div> */}

                    {/* <h1 className="portfolio-hero-header-h1" id="jumbotron-name">
                        My Name Is Ronaldo
                    </h1> */}


                    {/* <div className="wrapper" id="attr"> */}

                    {/* <ul>
                    <ul>Simplistic</ul>
                    <ul>Clean</ul>
                    <ul>Direct</ul>
                </ul> */}

                    {/* <div>
                        <Attributes />
                    </div> */}


                    {/* <ul
                //  id="attr"
                 >
                <div className="row" 
                id="symbols"
                >

                <div className="col-4" id="simp">
                    Simplistic
                </div>

                <div className="col-4" id="clean">
                Clean 
                </div>  

                <div className="col-4" id="direct">
                Direct
                </div>

                </div>

                <div className="row" id="symbols">

                <div className="" id="horizontal">
                <i className="fas fa-grip-horizontal"></i>
                </div>

                <div className="" id="rec">
                <i className="fas fa-recycle"></i>
                </div>
                
                <div className="" id="dir">
                <i className="fas fa-project-diagram"></i>

                </div>
                </div>

                </ul> */}

                </div>
            </div>










            /* <div className="" id="footer">
            <Footer/>
            </div> */

            /* Contact Me */


            /* <div id="icon">
                <i class="fab fa-github"></i>

                <i class="fab fa-facebook"></i>

                <i class="fab fa-twitter-square"></i>

                <i class="fab fa-linkedin"></i>
            </div> */

            /* <ul> */

            /* <div className="" id="footer">
            <Footer/>
            </div> */

            // </div>
            // </div>

        )
    }
}

export default Jumbotron
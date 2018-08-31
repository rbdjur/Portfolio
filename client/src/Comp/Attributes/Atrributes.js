import React, { Component } from 'react';
import "./Attributes.css"


class Attributes extends Component {
    render() {
        return (



            <ul>
            {/* //  id="attr" */}
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

            </ul>

        )
    }
}

export default Attributes 
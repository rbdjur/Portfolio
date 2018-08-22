import React, { Component } from 'react';
import "./Menu.css"


class Menu extends Component {
    render() {
        return (
            <div>

            <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical" id="menu">

                {/* <a className="nav-link"  */}
                
                <div className=""
                id="v-pills-home-tab" data-toggle="pill" href="#v-pills-home" role="tab" aria-controls="v-pills-home" aria-selected="false">Menu
                </div>

                {/* </a> */}


                {/* <a className="nav-link"  */}
                
                <div className=""
                id="v-pills-profile-tab" data-toggle="pill" href="#v-pills-profile" role="tab" aria-controls="v-pills-profile" aria-selected="false">Projects
                </div>

                {/* </a> */}


                {/* <a className="nav-link"  */}
                <div className=""
                id="v-pills-messages-tab" data-toggle="pill" href="#v-pills-messages" role="tab" aria-controls="v-pills-messages" aria-selected="false">About me
                </div>

                {/* </a> */}


                {/* <a className="nav-link" id="v-pills-settings-tab" data-toggle="pill" href="#v-pills-settings" role="tab" aria-controls="v-pills-settings" aria-selected="false">Settings
                </a> */}


            </div>

            {/* <div className="tab-content" id="v-pills-tabContent">
                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">...</div>
                <div className="tab-pane fade" id="v-pills-profile" role="tabpanel" aria-labelledby="v-pills-profile-tab">...</div>
                <div className="tab-pane fade" id="v-pills-messages" role="tabpanel" aria-labelledby="v-pills-messages-tab">...</div>
                <div className="tab-pane fade" id="v-pills-settings" role="tabpanel" aria-labelledby="v-pills-settings-tab">...</div>
            </div> */}

        </div>
        )
    }
}



export default Menu

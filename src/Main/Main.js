import React from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {BrowserRouter as Router} from "react-router-dom";
import BrowserApp from "./Browser/BrowserApp";
import MobileApp from "./Mobile/MobileApp";


const Main = (props) => {

    return (
        <Router basename={"devax"}>
            <BrowserView>
                <BrowserApp/>
            </BrowserView>
            <MobileView>
                <MobileApp/>
            </MobileView>
        </Router>
    );
};

export default Main;
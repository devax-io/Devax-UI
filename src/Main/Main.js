import React, {Fragment, useEffect, useState} from "react";
import {BrowserView, MobileView} from "react-device-detect";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import BrowserApp from "./Browser/BrowserApp";
import MobileApp from "./Mobile/MobileApp";



const Main = (props) => {

    return (
        /*basename={"demo"}*/
        /*"homepage":"https://opex.dev/demo"*/
        <Router>
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
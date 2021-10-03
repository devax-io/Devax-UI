import React, {Fragment, useEffect, useState} from "react";
import classes from "./BrowserApp.module.css";
import Header from "./Sections/Header/Header";
import Body from "./Sections/Body/Body";
import {images} from "../../assets/images/images";

const BrowserApp = (props) => {

    return (
        <div className={`container ${classes.container}`} style={{backgroundImage: `url("${images.mainBgWeb}")`}}>
            <Header/>
            <Body/>
        </div>
    );
};

export default BrowserApp;
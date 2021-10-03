import React from "react";
import classes from "./MobileApp.module.css";
import Header from "./Sections/Header/Header";
import Body from "./Sections/Body/Body";
import {images} from "../../assets/images/images";

const MobileApp = (props) => {

    return (
        <div className={`container ${classes.container} column px-5 py-2`} style={{backgroundImage: `url("${images.mainBgMob}")`}}>
            <Header/>
            <Body/>
        </div>
    );
};

export default MobileApp;
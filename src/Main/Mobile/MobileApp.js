import React, {Fragment, useEffect, useState} from "react";
import classes from "./MobileApp.module.css";
import Header from "./Sections/Header/Header";
import Body from "./Sections/Body/Body";



const MobileApp = (props) => {

    return (
        <div className={`container ${classes.container} column px-5 py-3`}>
            <Header/>
            <Body/>

        </div>
    );
};

export default MobileApp;
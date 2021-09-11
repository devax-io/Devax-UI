import React, {Fragment, useEffect, useState} from "react";
import classes from "./Body.module.css";
import Explorer from "../../Components/Explorer/Explorer";
import {images} from "../../../../assets/images/images";
import ScrollBar from "../../../../Components/ScrollBar";
import Overview from "../../Components/Overview/Overview";
import Latest from "../../Components/Latest/Latest";


const Body = (props) => {

    return (
        <div className={`container ${classes.container}`}
             style={{backgroundImage: `url("${images.landing_lightning}")`}}>
            <ScrollBar>
                <Explorer/>
                <Overview/>
                <Latest/>
            </ScrollBar>
        </div>
    );
};

export default Body;
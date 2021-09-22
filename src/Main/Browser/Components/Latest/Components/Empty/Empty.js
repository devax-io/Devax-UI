import React, {Fragment, useEffect, useState} from "react";
import classes from "./Empty.module.css";
import {images} from "../../../../../../assets/images/images";



const Empty = (props) => {

    return (
        <div className={`container ${classes.container} column jc-center ai-center`} style={{height:"100%"}}>
            <img src={images.emptyBox} alt="emptyBox" style={{width: "7vw"}}/>
            <span className={`mt-1`}>There is nothing to display</span>
        </div>
    );
};

export default Empty;
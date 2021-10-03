import React from "react";
import classes from "./Empty.module.css";
import {images} from "../../../../../../assets/images/images";

const Empty = (props) => {

    return (
        <div className={`container ${classes.container} column jc-center ai-center`}>
            <img src={images.emptyBox} alt="emptyBox" className={`${classes.thisImage}`}/>
            <span className={`mt-1`}>There is nothing to display</span>
        </div>
    );
};

export default Empty;
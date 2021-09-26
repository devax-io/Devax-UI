import React, {Fragment, useEffect, useState} from "react";
import classes from "./Header.module.css";
import {images} from "../../../../assets/images/images";



const Header = (props) => {

    return (
        <div className={`container ${classes.container} flex jc-center ai-center`}>

            <img className={`${classes.thisImage}`} src={images.DeVaxLOGO2Blue} alt="DeVaxLOGO2Blue"/>






        </div>
    );
};

export default Header;
import React, {Fragment, useEffect, useState} from "react";
import classes from "./Header.module.css";



const Header = (props) => {

    return (
        <div className={`container ${classes.container} row jc-between ai-center px-7`}>
            <div className={`row`}>
                <span>DeVax</span>
            </div>
            <div className={`row font-size-sm`}>
                <span className={`mx-1 hover-text cursor-pointer`}>Home</span>
                <span className={`mx-1 hover-text cursor-pointer`}>About us</span>
                <span className={`mx-1 hover-text cursor-pointer`}>Contact us</span>
            </div>

        </div>
    );
};

export default Header;
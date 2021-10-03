import React from "react";
import classes from "./Header.module.css";
import {images} from "../../../../assets/images/images";
import * as Routes from "../../../../Routes/Routes";
import {NavLink} from "react-router-dom";

const Header = (props) => {

    return (
        <div className={`container ${classes.container} row jc-between ai-center`}>
            <img style={{width:"30vw"}} src={images.devaxLogoWeb} alt="devaxLogoWeb"/>
            <div className={`row`}>
                <NavLink exact={true} to={Routes.Home} className={`mx-1 hover-text cursor-pointer`}>
                    <span>Home</span>
                </NavLink>
                <NavLink exact={true} to={Routes.Explorer} className={`mx-1 hover-text cursor-pointer px-1`}>
                    <span>Explorer</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
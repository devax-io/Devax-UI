import React from "react";
import classes from "./Header.module.css";
import * as Routes from "../../../../Routes/Routes";
import {NavLink} from "react-router-dom";



const Header = (props) => {

    return (
        <div className={`container ${classes.container} row jc-end ai-center px-7`}>
            <div className={`row font-size-sm`}>
                <NavLink exact={true} to={Routes.Home} className={`mx-1 hover-text cursor-pointer`}>
                    <span>Home</span>
                </NavLink>
                <span className={`mx-1 hover-text cursor-pointer`}>About us</span>
                <span className={`mx-1 hover-text cursor-pointer`}>Contact us</span>
                <NavLink exact={true} to={Routes.Explorer} className={`mx-1 hover-text cursor-pointer ${classes.explorer} px-1`}>
                    <span>Explorer</span>
                </NavLink>
            </div>
        </div>
    );
};

export default Header;
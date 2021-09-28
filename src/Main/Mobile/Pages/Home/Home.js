import React, {Fragment, useEffect, useState} from "react";
import classes from "./Home.module.css";
import {images} from "../../../../assets/images/images";
import Overview from "../../Components/Overview/Overview";





const Home = (props) => {

    return (
        <div className={`container ${classes.container} column jc-around ai-center`}>
            <img className={`my-4`} style={{width:"70vw"}} src={images.destroyingCoronavirus} alt="destroyingCoronavirus"/>
            <Overview/>
        </div>
    );
};

export default Home;
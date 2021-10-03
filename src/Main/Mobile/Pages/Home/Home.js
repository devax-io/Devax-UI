import React from "react";
import classes from "./Home.module.css";
import {images} from "../../../../assets/images/images";
import Overview from "../../Components/Overview/Overview";

const Home = (props) => {

    return (
        <div className={`container ${classes.container} column jc-around ai-center`}>
            <img className={`${classes.thisImage} my-4`} src={images.destroyingCoronavirus} alt="destroyingCoronavirus"/>
            <Overview/>
        </div>
    );
};

export default Home;
import React, {Fragment, useEffect, useState} from "react";
import classes from "./ExplorerPage.module.css";
import {images} from "../../../../assets/images/images";
import Overview from "../../Components/Overview/Overview";
import Explorer from "../../Components/Explorer/Explorer";
import Latest from "../../Components/Latest/Latest";





const ExplorerPage = (props) => {

    return (
        <div className={`container ${classes.container} column jc-around ai-center`}>
            <div className={`container`} style={{height:"10%",backgroundColor:"red"}}>
                {/*<Explorer/>*/}
            </div>
            <div className={`container`} style={{height:"90%",backgroundColor:"orange"}}>

                <Latest/>


            </div>




        </div>
    );
};

export default ExplorerPage;
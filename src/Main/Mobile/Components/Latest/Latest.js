import React, {Fragment, useEffect, useState} from "react";
import classes from "./Latest.module.css";
import LotsStep from "./Components/LotsStep/LotsStep";



const Latest = (props) => {


    return (
        <div className={`container ${classes.container} flex jc-center ai-center`}>

            <LotsStep/>




        </div>
    );
};

export default Latest;
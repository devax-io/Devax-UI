import React, {Fragment, useEffect, useState} from "react";
import classes from "./Latest.module.css";
import LatestCard from "./Components/LatestCard/LatestCard";



const Latest = (props) => {

    return (
        <div className={`container flex jc-center ai-center ${classes.container} py-3`}>
            <div className={`${classes.content} py-2 row jc-between `}>
                <div className={`col-49`}>
                    <LatestCard title="Latest Lots"/>
                </div>
                <div className={`col-49`}>
                    <LatestCard title="Latest Vials"/>
                </div>


            </div>

        </div>
    );
};

export default Latest;
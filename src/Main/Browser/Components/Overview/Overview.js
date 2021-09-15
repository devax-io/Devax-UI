import React, {Fragment, useEffect, useState} from "react";
import classes from "./Overview.module.css";
import Card from "./Components/Card/Card";



const Overview = (props) => {

    return (
        <div className={`container flex jc-center ai-center ${classes.container} my-5`}>
            <div className={`${classes.content} py-2 row`}>
                <Card title="Total Bought Vac" amount="1,526,789,256,254"/>
                <Card title="Total Vaccinated People" amount="1,586,824,551,4425"/>
                <Card title="Total Raise" amount="1,526,789,256"/>
                <Card title="Total Injections" amount="1,2578,256,254"/>
            </div>

        </div>
    );
};

export default Overview;
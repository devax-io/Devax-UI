import React, {Fragment, useEffect, useState} from "react";
import classes from "./Card.module.css";



const Card = (props) => {
    const {title , amount} = props

    return (
        <div className={`container column ai-center jc-center px- py-2 ${classes.container}`}>
            <span className={`font-weight-bold`}>{title}</span>
            <span className={` font-size-sm text-color-gray`}>{amount}</span>


        </div>
    );
};

export default Card;
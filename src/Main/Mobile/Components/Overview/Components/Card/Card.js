import React, {Fragment, useEffect, useState} from "react";
import classes from "./Card.module.css";
import {images} from "../../../../../../assets/images/images";



const Card = (props) => {
    const {icon , title , amount} = props

    return (
        <div className={`container column ai-center jc-center text-center ${classes.container} py-2 px-05`}>
            <img className={`my-1`} style={{width:"10vw"}} src={icon} alt="title"/>
            <span className={`font-weight-bold`}>{title}</span>
            <span className={`font-size-sm-mb text-color-gray`}>{amount}</span>
        </div>
    );
};

export default Card;
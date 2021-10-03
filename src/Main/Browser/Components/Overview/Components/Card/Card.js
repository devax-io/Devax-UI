import React from "react";
import classes from "./Card.module.css";



const Card = (props) => {
    const {icon , title , amount} = props

    return (
        <div className={`container column ai-center jc-center px- py-2 ${classes.container}`}>
            <img className={`my-2`} style={{width:"5vw"}} src={icon} alt="title"/>
            <span className={`font-weight-bold`}>{title}</span>
            <span className={` font-size-sm text-color-gray`}>{amount}</span>
        </div>
    );
};

export default Card;
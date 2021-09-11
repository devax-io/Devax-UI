import React, {Fragment, useEffect, useState} from "react";
import classes from "./LatestCard.module.css";
import Button from "../../../../../../Components/Button/Button";



const LatestCard = (props) => {

    const {title , } = props

    return (
        <div className={`container ${classes.container}`}>
            <div className={`${classes.header} flex jc-start ai-center px-2`}>
                {title}
            </div>
            <div className={`${classes.content}`}>

            </div>
            <div className={`${classes.footer} flex jc-center ai-center`}>
                <Button
                    type="button"
                    buttonClass={`${classes.thisButton} cursor-pointer`}
                    buttonTitle="View All"
                />

            </div>
        </div>
    );
};

export default LatestCard;
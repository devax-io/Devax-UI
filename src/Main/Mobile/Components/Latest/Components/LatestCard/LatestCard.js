import React from "react";
import classes from "./LatestCard.module.css";
import ScrollBar from "../../../../../../Components/ScrollBar";
import Button from "../../../../../../Components/Button/Button";


const LatestCard = (props) => {

    const {title , buttonTitle , children , onClick} = props

    return (
        <div className={`container ${classes.container}`}>
            <div className={`${classes.header} flex jc-center ai-center px-2`}>
                {title}
            </div>
            <div className={`${classes.content}`}>
                <ScrollBar>
                    {children}
                </ScrollBar>
            </div>
            <div className={`${classes.footer} flex jc-center ai-center`}>
                <Button
                    type="button"
                    buttonClass={`${classes.thisButton} cursor-pointer`}
                    buttonTitle={buttonTitle}
                    onClick={onClick}
                />

            </div>
        </div>
    );
};

export default LatestCard;

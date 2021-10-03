import React from "react";
import classes from "./LatestCard.module.css";
import Button from "../../../../../../Components/Button/Button";
import ScrollBar from "../../../../../../Components/ScrollBar";


const LatestCard = (props) => {

    const {title, children} = props

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
                    buttonTitle="View All"
                />
            </div>
        </div>
    );
};

export default LatestCard;
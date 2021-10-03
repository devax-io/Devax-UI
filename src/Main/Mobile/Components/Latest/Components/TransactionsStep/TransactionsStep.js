import React from "react";
import classes from "./TransactionsStep.module.css";
import moment from "moment";
import {images} from "../../../../../../assets/images/images";


const TransactionsStep = (props) => {

    const {data} = props

    return (
        <div className={`container ${classes.container} flex jc-center ai-center px-1 py-1`}>
            <div className={`${classes.icon} flex jc-center ai-center`}>
                <img src={images.recurringSubscription} alt="recurringSubscription"/>
            </div>
            <div className={`${classes.content} row jc-between ai-center pr-2`}>
                <div className={`column`}>
                    <span>From : {data.fromName}</span>
                    <span>To : {data.toName}</span>
                </div>

                <div className={`column jc-center ai-end font-size-sm-mini-mb`} style={{color:"#b0b5b9f2"}}>
                    <span>{moment(data.createDate).format("YY/MM/DD")}</span>
                    <span>{moment(data.createDate).format("HH:mm:ss")}</span>
                </div>
            </div>
        </div>
    );
};

export default TransactionsStep;
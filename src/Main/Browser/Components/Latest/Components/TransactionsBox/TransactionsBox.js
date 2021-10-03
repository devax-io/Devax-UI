import React from "react";
import classes from "./TransactionsBox.module.css";
import {images} from "../../../../../../assets/images/images";
import moment from "moment";



const TransactionsBox = (props) => {

    const {data} = props

    return (
        <div className={`container ${classes.container} row  py-1`}>
            <div className={`${classes.icon} flex jc-center ai-center`}>
                <img src={images.recurringSubscription} alt="cube"/>
            </div>
            <div className={`${classes.content} row  jc-between ai-center pr-1 font-size-sm`}>
                <div className={`column ai-start`}>
                    <span>From : {data.fromName}</span>
                    <span>To : {data.toName}</span>
                </div>
                <div className={`column jc-center ai-end font-size-sm-mini`} style={{color:"#b0b5b9f2"}}>
                    <span>{moment(data.createDate).format("YY/MM/DD")}</span>
                    <span>{moment(data.createDate).format("HH:mm:ss")}</span>
                </div>
            </div>
        </div>
    );
};

export default TransactionsBox;
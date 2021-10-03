import React, {Fragment, useEffect, useState} from "react";
import classes from "./LotsStep.module.css";
import {images} from "../../../../../../assets/images/images";
import moment from "moment";
import Button from "../../../../../../Components/Button/Button";



const LotsStep = (props) => {

    const {data , setLot , active} = props


    return (
        <div className={`container ${classes.container} flex jc-center ai-center font-size-sm-mb px-1 py-1`}>
            <div className={`${classes.icon} flex jc-center ai-center`}>
                <img src={images.cube} alt="cube"/>
            </div>
            <div className={`${classes.content} row jc-between ai-center pl-1 pr-2`}>
                <div className={`column`}>
                    <span>{data.refId}</span>
                    <span className={`font-size-sm-mini-mb`} style={{color:"#b0b5b9f2"}}>{moment(data.createDate).format("YY/MM/DD , HH:mm:ss")}</span>
                </div>
                <div className={`flex jc-center ai-center`}>
                    <Button
                        buttonClass={`${classes.thisButton}`}
                        type="button"
                        onClick={() => setLot(data.id)}
                        buttonTitle="Vials"
                    />
                </div>
            </div>
        </div>
    );
};

export default LotsStep;
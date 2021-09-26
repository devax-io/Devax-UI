import React, {Fragment, useEffect, useState} from "react";
import classes from "./VialsBox.module.css";
import {images} from "../../../../../../assets/images/images";
import moment from "moment";
import Button from "../../../../../../Components/Button/Button";



const VialsBox = (props) => {

    const {data , setTr} = props

    return (
        <div className={`container ${classes.container} row`}>
            <div className={`${classes.icon} flex jc-center ai-center`}>
                <img src={images.homeopathicMedicine} alt="cube"/>
            </div>
            <div className={`${classes.content} row ai-center  jc-between pr-1 font-size-sm`}>
                <div className={`column ai-center`}>
                    <span>{data.refId}</span>
                    <span className={`font-size-sm-mini`} style={{color:"#4c4545"}}>{moment(data.createDate).format("YY/MM/DD , HH:mm:ss")}</span>
                </div>


                {/*<div className={`flex jc-center ai-center`}>
                    <span>{data.manufactureName}</span>
                </div>*/}


                <div className={`flex jc-center ai-center`}>
                    <Button
                        buttonClass={`${classes.thisButton}`}
                        type="button"
                        onClick={() => setTr(data.id , data.refId)}
                        buttonTitle="Transaction"
                    />
                </div>

            </div>



        </div>
    );
};

export default VialsBox;
import React, {Fragment, useEffect, useState} from "react";
import classes from "./LotsBox.module.css";
import {images} from "../../../../../../assets/images/images";
import moment from "moment";
import Button from "../../../../../../Components/Button/Button";
;



const LotsBox = (props) => {

    const {data , setLot , active} = props

    return (
            <div className={`container ${classes.container} jc-center  font-size-sm column`}>
                <div className={`row`}>
                    <div className={`${classes.icon} flex jc-center ai-center`}>
                        <img src={images.cube} alt="cube"/>
                    </div>
                    <div className={`${classes.content} row  jc-between ai-center pr-1 font-size-sm`}>
                        <div className={`column`}>
                            <span>{data.refId}</span>
                            <span className={`font-size-sm-mini`} style={{color:"#4c4545"}}>{moment(data.createDate).format("YY/MM/DD , HH:mm:ss")}</span>
                        </div>


                        <div className={`flex jc-center ai-center`}>
                            <span>{data.manufactureName}</span>
                        </div>


                        <div className={`flex jc-center ai-center`}>
                            {active ?

                                "":
                                <div className={`column px-2 py-1`}>
                                    <span>pod : {moment.unix(data.pod).format("YY/MM/DD , HH:mm:ss")}</span>
                                    <span>exp : {moment.unix(data.exp).format("YY/MM/DD , HH:mm:ss")}</span>
                                </div>

                            }
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


                {active && active.refId === data.refId  ?
                    <div className={`${classes.navbar} column px-2 py-1`}>
                        <span>pod : {moment.unix(data.pod).format("YY/MM/DD , HH:mm:ss")}</span>
                        <span>exp : {moment.unix(data.exp).format("YY/MM/DD , HH:mm:ss")}</span>
                    </div>:""

                }


            </div>
    );
};

export default LotsBox;
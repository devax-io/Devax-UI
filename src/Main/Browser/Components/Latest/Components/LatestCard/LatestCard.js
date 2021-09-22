import React, {Fragment, useEffect, useState} from "react";
import classes from "./LatestCard.module.css";
import Button from "../../../../../../Components/Button/Button";
import LatestTable from "../LatestTable/LatestTable";
import LotsBox from "../LotsBox/LotsBox";
import ScrollBar from "../../../../../../Components/ScrollBar";
import VialsBox from "../VialsBox/VialsBox";


const LatestCard = (props) => {

    const {title, tableData , children} = props

   /* let Content = <div/>

    if(title === )*/





    return (
        <div className={`container ${classes.container}`}>
            <div className={`${classes.header} flex jc-center ai-center px-2`}>
                {title}
            </div>
            <div className={`${classes.content}`}>
                {/*<LatestTable data={tableData}/>*/}
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
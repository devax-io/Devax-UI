import React, {Fragment, useEffect, useState} from "react";
import classes from "./Latest.module.css";
import LatestCard from "./Components/LatestCard/LatestCard";



const Latest = (props) => {

    const tableData =
        {
            "headerData": ["LotNo", "TotalVial", "ManuFacture", "Date"],
            "contentData": [
                ["123", "125.25", "555", "20"],
                ["123", "582.25", "694", "200"],
                ["123", "582.25", "694", "200"],
                ["123", "582.25", "694", "200"],
            ]
        };

    return (
        <div className={`container flex jc-center ai-center ${classes.container} py-3`}>
            <div className={`${classes.content} py-2 column jc-between `}>
                <div className={`container row jc-between ai-center`}>
                    <div className={`col-49`}>
                        <LatestCard title="Latest Lots" tableData={tableData} />
                    </div>
                    <div className={`col-49`}>
                        <LatestCard title="Latest Vials"/>
                    </div>
                </div>
                <div className={`container row jc-between ai-center mt-3`}>
                    <div className={`col-32`}>
                        <LatestCard title="Latest Transfer"/>
                    </div>
                    <div className={`col-32`}>
                        <LatestCard title="Latest Injection"/>
                    </div>
                    <div className={`col-32`}>
                        <LatestCard title="Latest Affirmation"/>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Latest;
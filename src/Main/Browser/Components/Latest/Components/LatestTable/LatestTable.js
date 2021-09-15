import React, {Fragment, useEffect, useState} from "react";
import classes from "./LatestTable.module.css";
import ScrollBar from "../../../../../../Components/ScrollBar";



const LatestTable = ({data}) => {

    let headerData = []
    let contentData = []

    if(typeof data !== "undefined"){
         headerData = data.headerData
         contentData = data.contentData
    }


    console.log("headerData : " , headerData)
    console.log("contentData : " , contentData)

    let header = (
         <tr>
             {
                 headerData.map((tr, index) => {
                 return <th key={index}>{tr}</th>
             }
             )}
         </tr>


    );

    let content = (
        contentData.map((tr, index) => {
                return <tr key={index}>
                    {tr.map((td, index) => {
                        return <td key={index}>{td}</td>
                    })}
                </tr>
            })
    );

    return (
        <div className={`column container ${classes.container}`}>
            <ScrollBar>
                <table className="container text-center font-size-sm" cellSpacing="0" cellPadding="0">
                    <thead className="th-border-y">{header}</thead>
                    <tbody className={`striped font-weight-200`}>{content}</tbody>
                </table>
            </ScrollBar>
        </div>
    );
};

export default LatestTable;
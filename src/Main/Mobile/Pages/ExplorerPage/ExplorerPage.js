import React from "react";
import classes from "./ExplorerPage.module.css";
import Latest from "../../Components/Latest/Latest";

const ExplorerPage = (props) => {

    return (
        <div className={`container ${classes.container} column jc-around ai-center`}>
            {/*<div className={`container`} style={{height:"10%"}}>
                <Explorer/>
            </div>*/}
            <div className={`container`} style={{height:"100%"}}>
                <Latest/>
            </div>
        </div>
    );
};

export default ExplorerPage;
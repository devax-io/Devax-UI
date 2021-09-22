import React, {Fragment, useEffect, useState} from "react";
import Header from "./Sections/Header/Header";
import Body from "./Sections/Body/Body";



const BrowserApp = (props) => {


    return (<div className={`container`}>
            <Header/>
            <Body/>
        </div>
    );
};

export default BrowserApp;
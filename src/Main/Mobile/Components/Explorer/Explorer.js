import React, {Fragment, useEffect, useState} from "react";
import classes from "./Explorer.module.css";
import {images} from "../../../../assets/images/images";
import TextInput from "../../../../Components/TextInput/TextInput";
import Icon from "../../../../Components/Icon/Icon";



const Explorer = (props) => {

    const [explorer, setExplorer] = useState({
        search:"",
        select:"",
    });

    const [personalization, setPersonalization] = useState({
        defaultLanguage: "",
        defaultTheme: "",
        calendarSystem: "",
        timeZone: "",
        referenceCurrency: "",
        referenceCryptoCurrency: "",
    });

    const Options = [
        {value: "persian", label: "فارسی"},
        {value: "english", label: "انگلیسی"},
        {value: "arabic", label: "عربی"},
    ];

    return (


        <div className={`container row jc-between ai-center`}>
            <TextInput
                select={true}
                placeholder="Select"
                lead="accounts"
                customClass={`${classes.selectInput}`}
                type="text"
                options={Options}
                onchange={(e) => setExplorer({...explorer, select: e.value,})}
            />
            <TextInput
                placeholder="Lot No / Vial No "
                type="text"
                customClass={`${classes.searchInput}`}
                value={explorer.search}
                onchange={(e) => setExplorer({...explorer, search: e.target.value})}
                after={<Icon iconName="icon-search font-size-md-mb"/>}
            />
        </div>

    );
};

export default Explorer;
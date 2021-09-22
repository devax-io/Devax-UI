    import React, {Fragment, useEffect, useState} from "react";
    import classes from "./Explorer.module.css";
    import TextInput from "../../../../Components/TextInput/TextInput";
    import Icon from "../../../../Components/Icon/Icon";
    import {images} from "../../../../assets/images/images";



    const Explorer = (props) => {
        const [explorer, setExplorer] = useState("");


        return (
            <div className={`container row jc-between ai-center my-5 px-7`}>
                <div className={`column`}>
                    <span className={`mb-1`}>Vaccine Explorer :</span>
                    <TextInput
                        placeholder="Lot No / Vial No "
                        type="text"
                        customClass={`${classes.thisInput}`}
                        value={explorer}
                        onchange={(e) => setExplorer(e.target.value)}
                        after={<Icon iconName="icon-search font-size-sm"/>}
                    />
                </div>

                <img className={`${classes.thisImage}`} src={images.devaxExp} alt="vax"/>
            </div>
        );
    };

    export default Explorer;
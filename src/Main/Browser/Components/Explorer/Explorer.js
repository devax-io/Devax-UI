    import React, {useState} from "react";
    import classes from "./Explorer.module.css";
    import TextInput from "../../../../Components/TextInput/TextInput";
    import Icon from "../../../../Components/Icon/Icon";



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
            </div>
        );
    };

    export default Explorer;
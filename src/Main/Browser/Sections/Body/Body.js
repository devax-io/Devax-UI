    import React, {Fragment, useEffect, useState} from "react";
    import classes from "./Body.module.css";
    import Explorer from "../../Components/Explorer/Explorer";
    import {images} from "../../../../assets/images/images";
    import ScrollBar from "../../../../Components/ScrollBar";
    import Overview from "../../Components/Overview/Overview";
    import Latest from "../../Components/Latest/Latest";
    import {getAccount} from "../../../../Api/Accounts";
    import {getLots} from "../../../../Api/Lots";
    import Description from "../../Components/Description/Description";
    import {Redirect, Route, Switch} from "react-router-dom";
    import * as Routes from "./../../../../Routes/Routes";





    const Body = (props) => {




        return (
            <div className={`container ${classes.container}`}>
                <div className={`${classes.wrapper}`}/>
                <ScrollBar>

                    <Switch>
                        <Route exact path={Routes.Home}>
                            <Overview/>
                        </Route>
                        <Route exact path={Routes.Explorer}>
                            <Latest/>
                        </Route>

                        <Route path="*">
                            <Redirect
                                to={{
                                    pathname: `${Routes.Home}`,
                                }}
                            />
                        </Route>
                    </Switch>

                    {/*<Explorer/>*/}
                    {/*<div className={`row  px-7`} style={{height: "90vh"}}>
                        <Description/>

                    </div>*/}



                </ScrollBar>
            </div>
        );
    };

    export default Body;
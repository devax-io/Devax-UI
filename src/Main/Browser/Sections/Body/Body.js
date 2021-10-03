    import React from "react";
    import classes from "./Body.module.css";
    import ScrollBar from "../../../../Components/ScrollBar";
    import Overview from "../../Components/Overview/Overview";
    import Latest from "../../Components/Latest/Latest";
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
                </ScrollBar>
            </div>
        );
    };

    export default Body;
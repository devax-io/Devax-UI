import React, {Fragment, useEffect, useState} from "react";
import classes from "./Body.module.css";
import {images} from "../../../../assets/images/images";
import {Redirect, Route, Switch} from "react-router-dom";
import * as Routes from "../../../../Routes/Routes";
import ScrollBar from "../../../../Components/ScrollBar";
import Overview from "../../Components/Overview/Overview";
import Home from "../../Pages/Home/Home";
import ExplorerPage from "../../Pages/ExplorerPage/ExplorerPage";



const Body = (props) => {

    return (
        <div className={`container ${classes.container} flex jc-center ai-center`}>
            <ScrollBar>

                <Switch>
                    <Route exact path={Routes.Home}>
                        <Home/>
                    </Route>
                    <Route exact path={Routes.Explorer}>
                        <ExplorerPage/>
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
import React, {Fragment, useEffect, useState} from "react";
import classes from "./Description.module.css";
import {images} from "../../../../assets/images/images";
import Typewriter from "typewriter-effect";
import Button from "../../../../Components/Button/Button";



const Description = (props) => {


    return (
        <div className={`container ${classes.container} column jc-center ai-start px-3 py-7`}>


                <h1 className={` ${classes.topic}  mb-7`}>DeVaX</h1>

                <span className={`${classes.writer}`}>
                    <Typewriter
                        options={{
                            strings: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure',
                            autoStart: true,
                            loop: true,
                            deleteSpeed: 10,
                            pauseFor: 2500
                        }}
                    />
                </span>

            <Button
                buttonClass={`${classes.thisButton}`}
                type="button"
                /*onClick={() => setLot(data.id)}*/
                buttonTitle="Explorer"
            />




        </div>
    );
};

export default Description;
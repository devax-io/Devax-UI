import React, {Fragment, useEffect, useState} from "react";
import classes from "./Overview.module.css";
import Card from "./Components/Card/Card";
import {images} from "../../../../assets/images/images";
import {getGeneral} from "../../../../Api/General";



const Overview = (props) => {

    const [general , setGeneral] = useState({

        "totalLots": 0,
        "totalVials": 0,
        "totalInjections": 0,
        "totalAccounts": 0,
        "totalTransactions": 0

    })
    const [loading , setLoading] = useState([])


    const getData = async ()=> {
        const datas = await getGeneral()
        if(!datas || datas.status !== 200) return false
        return datas.data.data
    }

    useEffect(() => {
        getData().then( (general) => {
            if(general) setGeneral(general)
        } )
    }, []);


    return (
        <div className={`container flex jc-center ai-center ${classes.container} my-5`}>
            <div className={`${classes.content} py-2 row`}>
                <Card icon={images.vaccine} title="Total Bought Vac" amount={general.totalVials}/>
                <Card icon={images.people} title="Total Vaccinated People" amount="0"/>
                <Card icon={images.payrollSalary} title="Total Raise" amount="0"/>
                <Card icon={images.immunity} title="Total Injections" amount={general.totalInjections}/>
            </div>

        </div>
    );
};

export default Overview;
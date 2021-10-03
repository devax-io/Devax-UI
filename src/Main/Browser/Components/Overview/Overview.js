import React, {useEffect, useState} from "react";
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
        <div className={`container  flex jc-between ai-center ${classes.container} my-5 px-7 py-2`}>
            <div className={`${classes.imageBox} column jc-start ai-center py-7`}>
                <img src={images.devaxLogoWeb} alt="devaxLogoWeb"/>
                <img src={images.devaxfill} alt="devaxLogoWeb"/>
            </div>
            <div className={`${classes.content} px-1 py-2`}>
                <div className={`row`}>
                    <Card icon={images.vaccine} title="Total Bought Vac" amount={general.totalVials}/>
                    <Card icon={images.people} title="Total Vaccinated People" amount="0"/>
                </div>
                <div className={`row`}>
                    <Card icon={images.payrollSalary} title="Total Raise" amount="0"/>
                    <Card icon={images.immunity} title="Total Injections" amount={general.totalInjections}/>
                </div>
            </div>
        </div>
    );
};

export default Overview;
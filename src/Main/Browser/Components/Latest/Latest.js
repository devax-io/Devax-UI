import React, {useEffect, useState} from "react";
import classes from "./Latest.module.css";
import LatestCard from "./Components/LatestCard/LatestCard";
import LotsBox from "./Components/LotsBox/LotsBox";
import VialsBox from "./Components/VialsBox/VialsBox";
import {getLots} from "../../../../Api/Lots";
import {getManufacture} from "../../../../Api/Manufacture";
import {getVialsOfSpecificLot} from "../../../../Api/VialsOfSpecificLot";
import moment from "moment";
import {getSpecificAccount} from "../../../../Api/SpecificAccount";
import TransactionsBox from "./Components/TransactionsBox/TransactionsBox";
import {getTransactionsOfVial} from "../../../../Api/TransactionsOfVial";
import {getAccount} from "../../../../Api/Accounts";
import Empty from "./Components/Empty/Empty";


const Latest = (props) => {


    const [accountData , setAccountData] = useState([])
    const [lotsData , setLotsData] = useState([])
    const [vialsOfLotsData , setVialsOfLotsData] = useState(null)
    const [loading , setLoading] = useState([])
    const [error , setError] = useState([])
    const [selectedLot , setSelectedLot] = useState(null)


    const [transactionOfVialData , setTransactionOfVialData] = useState(null)
    const [selectedVial , setSelectedVial] = useState(null)



    const getData = async ()=> {
        const manufacture = await getManufacture()
        if(!manufacture || manufacture.status !== 200) return false
        const lots = await getLots()
        if(!lots || lots.status !== 200) return false
        return lots.data.data.map((lot => {
            lot.manufactureName = manufacture.data.data.find((m) => m.id === lot.manufacture)?.name
            lot.manufactureImage = manufacture.data.data.find((m) => m.id === lot.manufacture)?.moreInfo
            return lot
        }))
    }

    useEffect(() => {
        getData().then((lots)=>setLotsData(lots))


    }, []);


    const getVialsHandler = async (lot) => {
        setTransactionOfVialData(null)
        setVialsOfLotsData([]);
        setSelectedLot(lot)
        const vials = await getVialsOfSpecificLot(lot.manufacture , lot.refId)
        if(!vials || vials.status !== 200) return false
        setVialsOfLotsData(vials.data.data)

    }


    const getTransactions = async (vial)=> {

        setSelectedVial(vial)

        const accounts = await getAccount()
        if(!accounts || accounts.status !== 200) return false


        const transactions = await getTransactionsOfVial(vial.id , vial.refId)
        if(!transactions || transactions.status !== 200) return false
        const Txs = transactions.data.data.map((tx => {
            tx.fromName = accounts.data.data.find((m) => m.id === tx.from)?.name
            tx.toName = accounts.data.data.find((m) => m.id === tx.to)?.name
            return tx
        }))
        setTransactionOfVialData(Txs)
    }

    return (
        <div className={`container flex jc-center ai-center ${classes.container} py-3`}>
            <div className={`${classes.content} py-2 column jc-between `}>
                <div className={`container row jc-between ai-center`}>
                    <div className={`col-100  ${vialsOfLotsData != null ? "pr-05" : ""}`}>
                        <LatestCard title="Latest Lots">
                            {
                                lotsData.map((data, index) => {
                                    return <LotsBox
                                        key={index}
                                        data={data} setLot={()=>getVialsHandler(data)} active={selectedLot}/>
                                })
                            }
                        </LatestCard>
                    </div>
                    {vialsOfLotsData != null ?
                    <div className={`col-100 pl-05  ${transactionOfVialData != null ? "pr-05" : ""}`}>
                        <LatestCard title={`Vials Of ${selectedLot.refId}`}>
                            {
                                vialsOfLotsData.length === 0 ? <Empty/>:
                                vialsOfLotsData.map((data, index) => {
                                    return <VialsBox
                                        key={index}
                                        data={data}
                                        setTr={()=>getTransactions(data)} active={selectedVial && selectedVial.refId === data.refId}
                                    />
                                })
                            }
                        </LatestCard>

                    </div>
                     :
                     ""
                    }
                    {transactionOfVialData != null ?
                    <div className={`col-100 pl-05`}>
                        <LatestCard title={`Transactions Of ${selectedVial.refId}`}>
                            {
                                transactionOfVialData.length === 0 ? <Empty/>:
                                    transactionOfVialData.map((data, index) => {
                                    return <TransactionsBox key={index} data={data}/>
                                })
                            }
                        </LatestCard>
                    </div>
                     :
                     ""
                    }
                </div>
                {/*<div className={`container row jc-between ai-center mt-3`}>
                    <div className={`col-32`}>
                        <LatestCard title="Latest Transfer"/>
                    </div>
                    <div className={`col-32`}>
                        <LatestCard title="Latest Injection"/>
                    </div>
                    <div className={`col-32`}>
                        <LatestCard title="Latest Affirmation"/>
                    </div>
                </div>*/}
            </div>

        </div>
    );
};

export default Latest;
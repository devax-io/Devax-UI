import React, {useEffect, useState} from "react";
import classes from "./Latest.module.css";
import LotsStep from "./Components/LotsStep/LotsStep";
import {getManufacture} from "../../../../Api/Manufacture";
import {getLots} from "../../../../Api/Lots";
import {getVialsOfSpecificLot} from "../../../../Api/VialsOfSpecificLot";
import {getAccount} from "../../../../Api/Accounts";
import {getTransactionsOfVial} from "../../../../Api/TransactionsOfVial";
import VialsStep from "./Components/VialsStep/VialsStep";
import LatestCard from "./Components/LatestCard/LatestCard";
import TransactionsStep from "./Components/TransactionsStep/TransactionsStep";
import Empty from "./Components/Empty/Empty";


const Latest = (props) => {

    const [accountData, setAccountData] = useState([])
    const [step, setStep] = useState(1)
    const [lotsData, setLotsData] = useState([])
    const [vialsOfLotsData, setVialsOfLotsData] = useState(null)
    const [loading, setLoading] = useState([])
    const [error, setError] = useState([])
    const [selectedLot, setSelectedLot] = useState(null)
    const [transactionOfVialData, setTransactionOfVialData] = useState(null)
    const [selectedVial, setSelectedVial] = useState(null)

    const getData = async () => {
        const manufacture = await getManufacture()
        if (!manufacture || manufacture.status !== 200) return false
        const lots = await getLots()
        if (!lots || lots.status !== 200) return false
        const lotsData = lots.data.data.map((lot => {
            lot.manufactureName = manufacture.data.data.find((m) => m.id === lot.manufacture)?.name
            lot.manufactureImage = manufacture.data.data.find((m) => m.id === lot.manufacture)?.moreInfo
            return lot
        }))
        setLotsData(lotsData)
    }

    useEffect(() => {
        getData()
    }, []);

    const getVialsHandler = async (lot) => {
        setSelectedLot(lot)
        const vials = await getVialsOfSpecificLot(lot.manufacture, lot.refId)
        if (!vials || vials.status !== 200) return false
        setVialsOfLotsData(vials.data.data)
        setStep(2)
    }

    const getTransactions = async (vial) => {
        setSelectedVial(vial)
        const accounts = await getAccount()
        if (!accounts || accounts.status !== 200) return false
        const transactions = await getTransactionsOfVial(vial.id, vial.refId)
        if (!transactions || transactions.status !== 200) return false
        const Txs = transactions.data.data.map((tx => {
            tx.fromName = accounts.data.data.find((m) => m.id === tx.from)?.name
            tx.toName = accounts.data.data.find((m) => m.id === tx.to)?.name
            return tx
        }))
        setTransactionOfVialData(Txs)
        setStep(3)
    }

    return (
        <div className={`container ${classes.container} column jc-center ai-center`}>
            {step === 1 ?
                <LatestCard title="Latest Lots" buttonTitle="Reload Lots" onClick={getData()}>
                    {
                        lotsData.map((data, index) => {
                            return <LotsStep
                                key={index}
                                data={data} setLot={() => getVialsHandler(data)} active={selectedLot}/>
                        })
                    }
                </LatestCard> : ""}
            {step === 2 ?
                <LatestCard title={`Vials Of ${selectedLot.refId}`} buttonTitle="Back" onClick={() => setStep(1)}>
                    {
                        vialsOfLotsData.length === 0 ? <Empty/> :
                            vialsOfLotsData.map((data, index) => {
                                return <VialsStep
                                    key={index}
                                    data={data}
                                    setTr={() => getTransactions(data)}
                                    active={selectedVial && selectedVial.refId === data.refId}
                                />
                            })
                    }
                </LatestCard>
                :
                ""
            }
            {step === 3 ?
                <LatestCard title={`Transactions Of ${selectedVial.refId}`} buttonTitle="Back"
                            onClick={() => setStep(2)}>
                    {
                        transactionOfVialData.length === 0 ? <Empty/> :
                            transactionOfVialData.map((data, index) => {
                                return <TransactionsStep key={index} data={data}/>
                            })
                    }
                </LatestCard>
                :
                ""
            }
        </div>
    );
};

export default Latest;
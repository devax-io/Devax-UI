import axios from "axios";

const TransactionsOfVial = axios.create({
    baseURL: "http://185.236.37.254:9898",
});

export const getTransactionsOfVial = async (id , refId) => {


    return await TransactionsOfVial.get(`/vaccine/trader/query/tx/1/${refId}`, {
        headers:{
            'Api-Key': '8207604114254595687011388696731',
            'Authorization': 'sabin'
        }

    }).then((res) => {
        return res;
    }).catch((e) => {
        if (!e.response) {
            return false;
        }
        return e.response;
    })

}

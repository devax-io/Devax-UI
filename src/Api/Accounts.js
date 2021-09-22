import axios from "axios";

const Account = axios.create({
    baseURL: "http://185.236.37.254:9898",
});

export const getAccount = async () => {


    return await Account.get(`/vaccine/trader/query/accounts`, {
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

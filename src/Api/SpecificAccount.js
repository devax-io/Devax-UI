import axios from "axios";

const SpecificAccount = axios.create({
    baseURL: "http://185.236.37.254:9898",
});

export const getSpecificAccount = async (id) => {


    return await SpecificAccount.get(`/vaccine/trader/query/account${id}`, {
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

import axios from "axios";

const Vials = axios.create({
    baseURL: "http://185.236.37.254:9898",
});

export const getVials = async () => {


    return await Vials.get(`/vaccine/trader/query/lots`, {
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

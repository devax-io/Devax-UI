import axios from "axios";

const VialsOfSpecificLot = axios.create({
    baseURL: "http://185.236.37.254:9898",
});

export const getVialsOfSpecificLot = async (manufacture , refId) => {


    return await VialsOfSpecificLot.get(`/vaccine/trader/query/lot/${manufacture}/${refId}/vials`, {
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

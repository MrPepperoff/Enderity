
import axios from 'axios';
import { URL_BACK } from '../config';



export function request(method : string, url : string, callback : any, data = {}){
    axios({
        "method": method,
        "url": `${URL_BACK}${url}`,
        "data": data
    })
    .then(function (response) {
        //return response;
        callback(response);
    })
    .catch(function (error) {
        // console.log(error);
    });
}

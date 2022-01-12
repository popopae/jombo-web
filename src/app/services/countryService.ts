// import axios from 'axios';
import { ApiConstant } from '../utils/constants/apiConstant';
import { httpClient } from '../middleware/axiosInterceptor';

const CountryService = {

    getCountry(callback: Function) {

        httpClient.get(`${ApiConstant.Country}/countries`).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {

            callback(true, error);
        });
    }
}

export default CountryService;

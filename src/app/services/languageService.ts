// import axios from 'axios';
import { ApiConstant } from '../utils/constants/apiConstant';
import { httpClient } from '../middleware/axiosInterceptor';

const LanguageService = {

    getLanguage(callback: Function) {

        httpClient.get(`${ApiConstant.Language}/languages`).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {

            callback(true, error);
        });
    }
}

export default LanguageService;

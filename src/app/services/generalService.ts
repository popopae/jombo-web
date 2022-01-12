// import axios from 'axios';
import { ApiConstant } from '../utils/constants/apiConstant';
import { httpClient } from '../middleware/axiosInterceptor';
import { DataTableRequest } from 'app/models/payload/datatable/dataTableRequest';

const GeneralService = {

    getGeneral(request: DataTableRequest, callback: Function) {

        httpClient.post(`${ApiConstant.General}/generals`, request).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {

            callback(true, error);
        });
    }
}

export default GeneralService;

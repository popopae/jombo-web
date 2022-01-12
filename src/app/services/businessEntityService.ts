// import axios from 'axios';
import { ApiConstant } from '../utils/constants/apiConstant';
import { httpClient } from '../middleware/axiosInterceptor';
import { DataTableRequest } from 'app/models/payload/datatable/dataTableRequest';

const BusinessEntityService = {

    getBusinessEntity(request: DataTableRequest, callback: Function) {

        httpClient.post(`${ApiConstant.Business}/businesses`, request).then(function (response) {

            callback(false, response.data);
        }).catch(function (error: any) {

            callback(true, error);
        });
    }
}

export default BusinessEntityService;

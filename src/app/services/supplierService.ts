import { ApiConstant } from '../utils/constants/apiConstant';
import { httpClient } from '../middleware/axiosInterceptor';

const SupplierService = {
    getHistory(supplierId: string, callback: Function) {
        httpClient.get(`${ApiConstant.Supplier}/${supplierId}/history`).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {
            callback(true, error.response.data);
        });
    }
};

export default SupplierService;

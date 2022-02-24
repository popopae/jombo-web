import { ApiConstant } from "../utils/constants/apiConstant";
import { httpClient } from "../middleware/axiosInterceptor";
import { DataTableRequest } from "app/models/payload/datatable/dataTableRequest";

const DeviceService = {
    searchDevice(request: DataTableRequest, callback: Function) {
        httpClient
            .post(`${ApiConstant.Device}/search`, request)
            .then(function (response) {
                callback(false, response.data.data);
            })
            .catch(function (error) {
                callback(true, error);
            });
    },
};
export default DeviceService;

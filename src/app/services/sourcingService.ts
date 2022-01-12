import { ApiConstant } from '../utils/constants/apiConstant';
import { httpClient } from '../middleware/axiosInterceptor';
import {SourcingEventRequest} from "app/models/payload/sourcing/sourcingEventRequest";

const SourcingService = {

    getErfxSourcingEventList(request: SourcingEventRequest, callback: Function) {
        httpClient.post(`${ApiConstant.Erfx}/sourcing`, request).then(function (response) {
            callback(false, response.data.data);
        }).catch(function (error) {
            callback(true, error);
        });
    },

    getAuctionSourcingEventList(request: SourcingEventRequest, callback: Function) {
        httpClient.post(`${ApiConstant.Auction}/sourcing`, request).then(function (response) {
            callback(false, response.data.data);
        }).catch(function (error) {
            callback(true, error);
        });
    }
}

export default SourcingService;

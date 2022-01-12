// import axios from 'axios';
import { ApiConstant } from '../utils/constants/apiConstant';
import { httpClient } from '../middleware/axiosInterceptor';
import { UpdateFavoriteRequest } from 'app/models/payload/favorite/updateFavoriteRequest';
import { DataTableRequest } from 'app/models/payload/datatable/dataTableRequest';
import { SuggestionSearchRequest } from 'app/models/payload/suggestionSearch/suggestionSearchRequest';
import { UnqualifiedRequest } from 'app/models/payload/unqualified/unqualifiedRequest';
import { InvitationRequest } from 'app/models/payload/invitation/invitationRequest';

const OrganizationService = {

    getSupplierRegisteredCapital(callback: Function) {

        httpClient.get(`${ApiConstant.Supplier}/capital/range`).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {

            callback(true, error);
        });
    },

    getCountryOfOrganization(callback: Function) {

        httpClient.get(`${ApiConstant.Supplier}/group/supplier`).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {

            callback(true, error);
        });
    },

    updateFavorite(request: UpdateFavoriteRequest, callback: Function) {

        httpClient.post(`${ApiConstant.Supplier}/mgmt/favorite`, request).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {

            callback(true, error);
        });
    },

    getBusinessType(request: DataTableRequest, callback: Function) {

        httpClient.post(`${ApiConstant.Supplier}/business/types`, request).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {

            callback(true, error);
        });
    },

    getSuggestion(request: SuggestionSearchRequest, callback: Function) {

        httpClient.post(`${ApiConstant.Supplier}/suggestion`, request).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {

            callback(true, error);
        });
    },

    searchOrganization(request: DataTableRequest, callback: Function) {
        httpClient.post(`${ApiConstant.Supplier}/searching`, request).then(function (response) {
            callback(false, response.data);
        }).catch(function (error) {

            callback(true, error);
        });
    },

    unqualifiedApprove(request: UnqualifiedRequest, callback: Function) {

        httpClient.post(`${ApiConstant.Supplier}/supplierList/approve`, request).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {
            if (error.status === undefined) {
                callback(true, null);
            } else {
                callback(true, error);
            }
        });
    },

    unqualifiedReject(request: UnqualifiedRequest, callback: Function) {

        httpClient.post(`${ApiConstant.Supplier}/supplierList/reject`, request).then(function (response) {
            callback(false, response.data);
        }).catch(function (error) {
            if (error.status === undefined) {
                callback(true, null);
            } else {
                callback(true, error);
            }
        });
    },

    sendInvitationEmail(request: InvitationRequest, callback: Function) {
  
        httpClient.post(`${ApiConstant.Supplier}/invitation`, request).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {
            if (error.status === undefined) {
                callback(true, null);
            } else {
                callback(true, error);
            }
        });
    }
}

export default OrganizationService;

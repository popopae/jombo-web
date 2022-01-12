import { ApiConstant } from '../../app/utils/constants/apiConstant';
import { httpClient } from '../../app/middleware/axiosInterceptor';

const uaaBffService = {
    getToken(authCode: string, callback: Function) {
        const request = new URLSearchParams();
        request.append('auth_code', authCode);

        httpClient.post(ApiConstant.Token, request)
            .then(function (response) {
                callback(false, response.data);
            }).catch(function (error) {
                callback(true, error.response.data);
            });
    },

    renewToken(refreshToken: string, idp: string, callback: Function) {
        const request = new URLSearchParams();
        request.append('refresh_token', refreshToken);

        httpClient.post(`${ApiConstant.RenewToken}?idp=${idp}`, request)
            .then(function (response) {
                callback(false, response.data);
            }).catch(function (error) {
                callback(true, error.response.data);
            });
    },

    getUserProfile(username: string, callback: Function) {

        httpClient.get(`${ApiConstant.UaaBff}/user/${username}/profile`,)
            .then(function (response) {
                callback(false, response.data.data);
            }).catch(function (error) {
                callback(true, error);
            });
    }
}

export default uaaBffService;
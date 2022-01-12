import { BusinessEntityActions } from 'app/actions/businessEntity.action';
import { SupplierManagementToken } from 'app/models/localStorage/supplierManagementToken';
import { TokenResponse } from 'app/models/payload/uaaBff/tokenResponse';
import { ApiConstant } from 'app/utils/constants/apiConstant';
import { CommonConstant } from 'app/utils/constants/commonConstant';
import { ApiResponseEnum } from 'app/utils/enums/apiResponseEnum';
import { PageEnum } from 'app/utils/enums/pageEnum';
import { CommonHelper } from 'app/utils/helpers/commonHelper';
import { TokenHelper } from 'app/utils/helpers/tokenHelper';
import axios from 'axios';


let store: any = undefined;
export const injectStore = (_store: any) => {
    store = _store
}

axios.defaults.timeout = 1000 * 60 * 2;

axios.interceptors.request.use(async function (config) {
    config.url = `${process.env["GATEWAY_URL"]}${config.url}`
    store.dispatch(BusinessEntityActions.getBusinessEntityFail)
    
    const token: SupplierManagementToken = CommonHelper.getSessionStorageByName(CommonConstant.jwtToken);
    if (token !== null) {
        if (TokenHelper.isAccessTokenExpire(token.access_token)) {
            if (!TokenHelper.isRefreshTokenExpire(token.refresh_token)) {
                await renewToken(token);
                const newToken: SupplierManagementToken = CommonHelper.getSessionStorageByName(CommonConstant.jwtToken);
                config.headers.Authorization = `Bearer ${newToken.access_token}`;
            } else {
                // Do something if refersh_token is expired.
            }
        } else {
            config.headers.Authorization = `Bearer ${token.access_token}`;
        }
    }
    return config;
}, function (error) {
    console.error('Error:', error);
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response;
}, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    console.error('Error:', error);
    window.location.href = PageEnum.NO_PERMISSION;
    return Promise.reject(error);
});

async function renewToken(token: SupplierManagementToken) {

    try {
        const decodedAccessToken = TokenHelper.decodeToken(token.access_token);
        const request = new URLSearchParams();
        request.append('refresh_token', token.refresh_token);

        const response = await fetch(`${process.env["GATEWAY_URL"]}` + ApiConstant.RenewToken + `?idp=${decodedAccessToken.idp}`,
            {
                method: "POST",
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: request
            }
        );

        const json: TokenResponse = await response.json();

        if (json.status.code === ApiResponseEnum.SUCCESS_CODE) {

            const data = json.data;
            const newToken: SupplierManagementToken =
            {
                access_token: data!.access_token,
                refresh_token: data!.refresh_token,
                expires_in: data!.expires_in
            }

            CommonHelper.setSessionStorage(CommonConstant.jwtToken, newToken);
            CommonHelper.setSessionStorage(CommonConstant.jwtUserDetail, TokenHelper.decodeToken(data!.access_token));
            CommonHelper.setCookie(CommonConstant.authCodeCookie, CommonHelper.encodeBase64(CommonHelper.encryptData(data.auth_code)));
        } else {
            CommonHelper.clearLocalStorageByName(CommonConstant.jwtToken);
            window.location.href = PageEnum.NO_PERMISSION;
            // Do something if ApiResponseStatus is not success
        }

    } catch (error) {
        console.error('Error:', error);
        CommonHelper.clearLocalStorageByName(CommonConstant.jwtToken);
        // Do something if renewToken api is error
        window.location.href = PageEnum.NO_PERMISSION;
    }
}

export const httpClient = axios
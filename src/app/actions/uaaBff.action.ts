import { createAction } from "redux-actions";
import uaaBffService from "app/services/uaaBffService";
import { TokenResponse } from "app/models";
import { UserProfile } from "app/models/userProfile";

export namespace UaaBffActions {
    export enum Type {
        UAA_BFF_AUTH_CODE_SUCCESS = 'uaa_bff_auth_code_success',
        UAA_BFF_AUTH_CODE_FAIL = 'uaa_bff_auth_code_fail',
        RENEW_TOKEN_SUCCESS = 'renew_token_success',
        RENEW_TOKEN_FAIL = 'renew_token_fail',

        GET_USER_PROFILE_SUCCESS = 'get_user_profile_success',
        GET_USER_PROFILE_FAIL = 'get_user_profile_fail',
        GET_USER_PROFILE_INITIAL = 'get_user_profile_initial',
    }

    export const UaaBffAuthCodeSuccess = createAction<TokenResponse>(Type.UAA_BFF_AUTH_CODE_SUCCESS);
    export const UaaBffAuthCodeFail = createAction<TokenResponse>(Type.UAA_BFF_AUTH_CODE_FAIL);
    export function getToken(authCode: string) {
        return (dispatch: any) => {
            uaaBffService.getToken(authCode, (isError: boolean, newState: TokenResponse) => {
                if (!isError) {
                    dispatch(UaaBffAuthCodeSuccess(newState));
                } else {
                    dispatch(UaaBffAuthCodeFail(newState));
                }
            });
        }
    }

    export const RenewTokenSuccess = createAction<TokenResponse>(Type.RENEW_TOKEN_SUCCESS);
    export const RenewTokenFail = createAction<TokenResponse>(Type.RENEW_TOKEN_FAIL);
    export function renewToken(refreshToken: string, idp: string) {
        return (dispatch: any) => {
            uaaBffService.renewToken(refreshToken, idp, (isError: boolean, newState: TokenResponse) => {
                if (!isError) {
                    dispatch(RenewTokenSuccess(newState));
                } else {
                    dispatch(RenewTokenFail(newState));
                }
            });
        }
    }

    export const GetUserProfileSuccess = createAction<UserProfile>(Type.GET_USER_PROFILE_SUCCESS);
    export const GetUserProfileFail = createAction<UserProfile>(Type.GET_USER_PROFILE_FAIL);
    export const GetUserProfileInitial = createAction<UserProfile>(Type.GET_USER_PROFILE_INITIAL);
    export function getUserProfile(username: string) {
        return (dispatch: any) => {
            uaaBffService.getUserProfile(username, (isError: boolean, newState: UserProfile) => {
                if (!isError) {
                    dispatch(GetUserProfileSuccess(newState));
                } else {
                    dispatch(GetUserProfileFail({}));
                }
            });
        }
    }

    export function setUnqualifiedInitial() {
        return (dispatch: any) => {
            dispatch(GetUserProfileInitial({}));
        }
    }
}

export type UaaBffActions = Omit<typeof UaaBffActions, 'Type'>;
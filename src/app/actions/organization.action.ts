import { createAction } from 'redux-actions';

import OrganizationService from '../services/organizationService'
import { DataTableRequest } from 'app/models/payload/datatable/dataTableRequest';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CoreCountry } from 'app/models/entity/coreCountry';
import { RegisteredCapitalResponse } from 'app/models/payload/registeredCapital/registeredCapitalResponse';
import { CoreBusinessType } from 'app/models/entity/coreBusinessType';
import { SuggestionSearchRequest } from 'app/models/payload/suggestionSearch/suggestionSearchRequest';
import { CoreOrganization } from 'app/models/entity/coreOrganization';
import { UpdateFavoriteResponse } from 'app/models/payload/favorite/updateFavoriteResponse';
import { UpdateFavoriteRequest } from 'app/models/payload/favorite/updateFavoriteRequest';
import { UnqualifiedRequest } from 'app/models/payload/unqualified/unqualifiedRequest';
import { UnqualifiedResponse } from 'app/models/payload/unqualified/UnqualifiedResponse';
import { CommonConstant } from 'app/utils/constants/commonConstant';
import { ApiResponseEnum } from 'app/utils/enums/apiResponseEnum';
import { InvitationResponse } from 'app/models/payload/invitation/InvitationResponse';
import { InvitationRequest } from 'app/models/payload/invitation/invitationRequest';

export namespace OrganizationActions {
    export enum Type {
        GET_REGISTERED_CAPITAL_SUCCESS = 'get_registered_capital_success',
        GET_REGISTERED_CAPITAL_FAIL = 'get_registered_capital_fail',

        GET_COUNTRY_ORGANIZATION_SUCCESS = 'get_country_organization_success',
        GET_COUNTRY_ORGANIZATION_FAIL = 'get_country_organization_fail',

        GET_BUSINESS_TYPE_SUCCESS = 'get_business_type_success',
        GET_BUSINESS_TYPE_FAIL = 'get_business_type_fail',

        GET_SUGGESTION_SUCCESS = 'get_suggestion_success',
        GET_SUGGESTION_FAIL = 'get_suggestion_fail',

        SEARCH_ORGANIZATION_SUCCESS = 'search_organization_success',
        SEARCH_ORGANIZATION_FAIL = 'search_organization_fail',

        UPDATE_FAVORITE_SUCCESS = 'update_favorite_success',
        UPDATE_FAVORITE_FAIL = 'update_favorite_fail',

        UNQUALIFIED_APPROVE_SUCCESS = 'unqualified_approve_success',
        UNQUALIFIED_APPROVE_FAIL = 'unqualified_approve_fail',

        UNQUALIFIED_REJECT_SUCCESS = 'unqualified_reject_success',
        UNQUALIFIED_REJECT_FAIL = 'unqualified_reject_fail',

        UNQUALIFIED_INITIAL = 'unqualified_initial',

        INVITATION_SUCCESS = 'invitation_success',
        INVITATION_FAIL = 'invitation_fail',
    }

    export const getRegisterCapitalSuccess = createAction<DataTableResponse<RegisteredCapitalResponse>>(Type.GET_REGISTERED_CAPITAL_SUCCESS);
    export const getRegisterCapitalFail = createAction<DataTableResponse<RegisteredCapitalResponse>>(Type.GET_REGISTERED_CAPITAL_FAIL);

    export const getCountryOrganizationSuccess = createAction<CoreCountry[]>(Type.GET_COUNTRY_ORGANIZATION_SUCCESS);
    export const getCountryOrganizationFail = createAction<CoreCountry[]>(Type.GET_COUNTRY_ORGANIZATION_FAIL);

    export const getBusinessTypeSuccess = createAction<DataTableResponse<CoreBusinessType>>(Type.GET_BUSINESS_TYPE_SUCCESS);
    export const getBusinessTypeFail = createAction<DataTableResponse<CoreBusinessType>>(Type.GET_BUSINESS_TYPE_FAIL);

    export const getSuggestionSuccess = createAction<DataTableResponse<String>>(Type.GET_SUGGESTION_SUCCESS);
    export const getSuggestionFail = createAction<DataTableResponse<String>>(Type.GET_SUGGESTION_FAIL);

    export const searchOrganizationSuccess = createAction<DataTableResponse<CoreOrganization>>(Type.SEARCH_ORGANIZATION_SUCCESS);
    export const searchOrganizationFail = createAction<DataTableResponse<CoreOrganization>>(Type.SEARCH_ORGANIZATION_FAIL);

    export const updateFavoriteSuccess = createAction<UpdateFavoriteResponse>(Type.UPDATE_FAVORITE_SUCCESS);
    export const updateFavoriteFail = createAction<UpdateFavoriteResponse>(Type.UPDATE_FAVORITE_FAIL);

    export const unqualifiedApproveSuccess = createAction<UnqualifiedResponse>(Type.UNQUALIFIED_APPROVE_SUCCESS);
    export const unqualifiedApproveFail = createAction<UnqualifiedResponse>(Type.UNQUALIFIED_APPROVE_FAIL);

    export const unqualifiedRejectSuccess = createAction<UnqualifiedResponse>(Type.UNQUALIFIED_REJECT_SUCCESS);
    export const unqualifiedRejectFail = createAction<UnqualifiedResponse>(Type.UNQUALIFIED_REJECT_FAIL);

    export const unqualifiedInitial = createAction<UnqualifiedResponse>(Type.UNQUALIFIED_INITIAL);

    export const invitationSuccess = createAction<InvitationResponse>(Type.INVITATION_SUCCESS);
    export const invitationFail = createAction<InvitationResponse>(Type.INVITATION_FAIL);

    export function getSupplierRegisteredCapital() {
        return (dispatch: any) => {

            OrganizationService.getSupplierRegisteredCapital((isError: boolean, newState: DataTableResponse<RegisteredCapitalResponse>) => {
                if (!isError && newState.data.length > 0) {
                    dispatch(getRegisterCapitalSuccess(newState));
                } else {
                    dispatch(getRegisterCapitalFail(newState));
                }
            });
        }
    }

    export function getCountryOfOrganization() {
        return (dispatch: any) => {

            OrganizationService.getCountryOfOrganization((isError: boolean, newState: CoreCountry[]) => {
                if (!isError && newState !== null) {
                    dispatch(getCountryOrganizationSuccess(newState));
                } else {
                    dispatch(getCountryOrganizationFail(newState));
                }
            });
        }
    }

    export function getBusinessType(request: DataTableRequest) {
        return (dispatch: any) => {

            OrganizationService.getBusinessType(request, (isError: boolean, newState: DataTableResponse<CoreBusinessType>) => {
                if (!isError && newState.data.length > 0) {
                    dispatch(getBusinessTypeSuccess(newState));
                } else {
                    dispatch(getBusinessTypeFail(newState));
                }
            });
        }
    }

    export function getSuggestion(request: SuggestionSearchRequest) {
        return (dispatch: any) => {

            OrganizationService.getSuggestion(request, (isError: boolean, newState: DataTableResponse<String>) => {
                if (!isError && newState.data.length > 0) {
                    dispatch(getSuggestionSuccess(newState));
                } else {
                    dispatch(getSuggestionFail(newState));
                }
            });
        }
    }

    export function searchOrganization(request: DataTableRequest) {
        return (dispatch: any) => {

            OrganizationService.searchOrganization(request, (isError: boolean, newState: DataTableResponse<CoreOrganization>) => {
                if (!isError) {
                    dispatch(searchOrganizationSuccess(newState));
                } else {
                    dispatch(searchOrganizationFail(newState));
                }
            });
        }
    }

    export function updateFavorite(request: UpdateFavoriteRequest) {
        return (dispatch: any) => {

            OrganizationService.updateFavorite(request, (isError: boolean, newState: UpdateFavoriteResponse) => {
                if (!isError && newState !== null) {
                    dispatch(updateFavoriteSuccess(newState));
                } else {
                    dispatch(updateFavoriteFail(newState));
                }
            });
        }
    }

    export function unqualifiedApprove(request: UnqualifiedRequest) {
        return (dispatch: any) => {

            OrganizationService.unqualifiedApprove(request, (isError: boolean, newState: UnqualifiedResponse) => {
                if (!isError && newState !== null) {
                    dispatch(unqualifiedApproveSuccess(newState));
                } else {
                    const errorCode = newState === null ? ApiResponseEnum.INTERNAL_ERROR_CODE : newState.status.code;
                    dispatch(unqualifiedApproveFail({
                        data: CommonConstant.ResponseError,
                        errorMessage: CommonConstant.ErrorInternalMsg1Arg.replace('{0}', errorCode)
                    }));
                }
            });
        }
    }

    export function unqualifiedReject(request: UnqualifiedRequest) {
        return (dispatch: any) => {

            OrganizationService.unqualifiedReject(request, (isError: boolean, newState: UnqualifiedResponse) => {
                if (!isError && newState !== null) {
                    dispatch(unqualifiedRejectSuccess(newState));
                } else {
                    const errorCode = newState === null ? ApiResponseEnum.INTERNAL_ERROR_CODE : newState.status.code;
                    dispatch(unqualifiedRejectFail({
                        data: CommonConstant.ResponseError,
                        errorMessage: CommonConstant.ErrorInternalMsg1Arg.replace('{0}', errorCode)
                    }));
                }
            });
        }
    }

    export function setUnqualifiedInitial() {
        return (dispatch: any) => {
            dispatch(unqualifiedInitial({}));
        }
    }

    export function sendInvitationEmail(request: InvitationRequest) {
        return (dispatch: any) => {
                    
            OrganizationService.sendInvitationEmail(request, (isError: boolean, newState: InvitationResponse) => {
                if (!isError && newState !== null) {
                    dispatch(invitationSuccess(newState));
                } else {
                    const errorCode = newState === null ? ApiResponseEnum.INTERNAL_ERROR_CODE : newState.status.code;
                    dispatch(invitationFail({
                        data: CommonConstant.ResponseError,
                        errorMessage: CommonConstant.ErrorInternalMsg1Arg.replace('{0}', errorCode)
                    }));
                }
            });
        }
    }
}
export type OrganizationActions = Omit<typeof OrganizationActions, 'Type'>;

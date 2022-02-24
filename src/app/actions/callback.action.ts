import { createAction } from 'redux-actions';

import CallBackService from '../../app/services/callback.service'
import { LastedUplinkResponse } from 'app/models/payload/callback/lastedUplinkResponse';

export namespace CallBackAction {
    export enum Type {
        GET_CALLBACK_DATA_SUCCESS = 'get_callback_data_success',
        GET_CALLBACK_DATA_FAIL = 'get_callback_data_fail'
    }

    export const getCallBackDataSuccess = createAction<LastedUplinkResponse>(Type.GET_CALLBACK_DATA_SUCCESS);
    export const getCallBackDataFail = createAction<LastedUplinkResponse>(Type.GET_CALLBACK_DATA_FAIL);

    export function getUplinkLastedData(deviceCode: string) {
        return (dispatch: any) => {

            CallBackService.getUplinkData(deviceCode, (isError: boolean, newState: LastedUplinkResponse) => {
                if (!isError) {
                    dispatch(getCallBackDataSuccess(newState));
                } else {
                    dispatch(getCallBackDataFail(newState));
                }
            });
        }
    }
}

export type CallBackAction = Omit<typeof CallBackAction, 'Type'>;

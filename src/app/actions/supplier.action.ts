import { ApiResponse } from 'app/models/apiResponse';
import SupplierService from 'app/services/supplierService';
import { createAction } from 'redux-actions';

export namespace SupplierActions {
    export enum Type {
        GET_HISTORY_SUCCESS = 'get_history_success',
        GET_HISTORY_FAIL = 'get_history_fail'
    }
    export const getHistorySuccess = createAction<ApiResponse>(Type.GET_HISTORY_SUCCESS);
    export const getHistoryFail = createAction<ApiResponse>(Type.GET_HISTORY_FAIL);

    export function getHistory(supplierId: string) {
        return (dispatch: any) => {

            SupplierService.getHistory(supplierId, (isError: boolean, newState: ApiResponse) => {
                if (!isError) {
                    dispatch(getHistorySuccess(newState));
                } else {
                    dispatch(getHistoryFail(newState));
                }
            });
        }
    }
}

export type SupplierActions = Omit<typeof SupplierActions, 'Type'>;
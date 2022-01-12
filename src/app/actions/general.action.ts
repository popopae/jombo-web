import { createAction } from 'redux-actions';

import GeneralService from '../services/generalService'
import { DataTableRequest } from 'app/models/payload/datatable/dataTableRequest';
import { CoreGeneral } from 'app/models/entity/coreGeneral';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';

export namespace GeneralActions {
    export enum Type {
        GET_GENERAL_SUCCESS = 'get_general_success',
        GET_GENERAL_FAIL = 'get_general_fail'
    }

    export const getGeneralSuccess = createAction<DataTableResponse<CoreGeneral>>(Type.GET_GENERAL_SUCCESS);
    export const getGeneralFail = createAction<DataTableResponse<CoreGeneral>>(Type.GET_GENERAL_FAIL);

    export function getGeneral(request: DataTableRequest) {
        return (dispatch: any) => {

            GeneralService.getGeneral(request, (isError: boolean, newState: DataTableResponse<CoreGeneral>) => {
                if (!isError && newState !== null) {
                    dispatch(getGeneralSuccess(newState));
                } else {
                    dispatch(getGeneralFail(newState));
                }
            });
        }
    }
}

export type GeneralActions = Omit<typeof GeneralActions, 'Type'>;

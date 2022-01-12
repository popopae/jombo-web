import { createAction } from 'redux-actions';

import BusinessEntityService from '../../app/services/businessEntityService'
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CoreBusinessEntity } from 'app/models/entity/coreBusinessEntity';
import { DataTableRequest } from 'app/models/payload/datatable/dataTableRequest';

export namespace BusinessEntityActions {
    export enum Type {
        GET_BUSINESS_ENTITY_SUCCESS = 'get_business_entity_success',
        GET_BUSINESS_ENTITY_FAIL = 'get_business_entity_fail'
    }

    export const getBusinessEntitySuccess = createAction<DataTableResponse<CoreBusinessEntity>>(Type.GET_BUSINESS_ENTITY_SUCCESS);
    export const getBusinessEntityFail = createAction<DataTableResponse<CoreBusinessEntity>>(Type.GET_BUSINESS_ENTITY_FAIL);

    export function getBusinessEntity(request: DataTableRequest) {
        return (dispatch: any) => {

            BusinessEntityService.getBusinessEntity(request, (isError: boolean, newState: DataTableResponse<CoreBusinessEntity>) => {
                if (!isError && newState.data.length > 0) {
                    dispatch(getBusinessEntitySuccess(newState));
                } else {
                    dispatch(getBusinessEntityFail(newState));
                }
            });
        }
    }
}

export type BusinessEntityActions = Omit<typeof BusinessEntityActions, 'Type'>;

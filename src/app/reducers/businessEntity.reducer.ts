import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { BusinessEntityActions } from 'app/actions/businessEntity.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CoreBusinessEntity } from 'app/models/entity/coreBusinessEntity';


const initialState: RootState.BusinessEntityState = null;

export const businessEntityReducer = handleActions<RootState.BusinessEntityState, DataTableResponse<CoreBusinessEntity>>(
    {
        [BusinessEntityActions.Type.GET_BUSINESS_ENTITY_SUCCESS]: (state, action: Action<DataTableResponse<CoreBusinessEntity>>) => {

            return state = action.payload;
        },
        [BusinessEntityActions.Type.GET_BUSINESS_ENTITY_FAIL]: (state, action: Action<DataTableResponse<CoreBusinessEntity>>) => {

            return state = null;
        }
    },
    initialState
);
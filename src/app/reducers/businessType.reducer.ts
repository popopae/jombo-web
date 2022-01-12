import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { OrganizationActions } from 'app/actions/organization.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CoreBusinessType } from 'app/models/entity/coreBusinessType';


const initialState: RootState.BusinessTypeState = null;

export const businessTypeReducer = handleActions<RootState.BusinessTypeState, DataTableResponse<CoreBusinessType>>(
    {
        [OrganizationActions.Type.GET_BUSINESS_TYPE_SUCCESS]: (state, action: Action<DataTableResponse<CoreBusinessType>>) => {

            return state = action.payload;
        },
        [OrganizationActions.Type.GET_BUSINESS_TYPE_FAIL]: (state, action: Action<DataTableResponse<CoreBusinessType>>) => {

            return state = null;
        }
    },
    initialState
);
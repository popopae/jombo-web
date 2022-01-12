import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { OrganizationActions } from 'app/actions/organization.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { RegisteredCapitalResponse } from 'app/models/payload/registeredCapital/registeredCapitalResponse';


const initialState: RootState.RegisteredCapitalState = null;

export const registerCapitalReducer = handleActions<RootState.RegisteredCapitalState, DataTableResponse<RegisteredCapitalResponse>>(
    {
        [OrganizationActions.Type.GET_REGISTERED_CAPITAL_SUCCESS]: (state, action: Action<DataTableResponse<RegisteredCapitalResponse>>) => {

            return state = action.payload;
        },
        [OrganizationActions.Type.GET_REGISTERED_CAPITAL_FAIL]: (state, actionC: Action<DataTableResponse<RegisteredCapitalResponse>>) => {

            return state = null;
        }
    },
    initialState
);
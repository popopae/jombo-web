import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { OrganizationActions } from 'app/actions/organization.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CoreOrganization } from 'app/models/entity/coreOrganization';


const initialState: RootState.OrganizationListState = null;

export const organizationReducer = handleActions<RootState.OrganizationListState, DataTableResponse<CoreOrganization>>(
    {
        [OrganizationActions.Type.SEARCH_ORGANIZATION_SUCCESS]: (state, action: Action<DataTableResponse<CoreOrganization>>) => {

            return state = action.payload;
        },
        [OrganizationActions.Type.SEARCH_ORGANIZATION_FAIL]: (state, actionC: Action<DataTableResponse<CoreOrganization>>) => {

            return state = null;
        }
    },
    initialState
);
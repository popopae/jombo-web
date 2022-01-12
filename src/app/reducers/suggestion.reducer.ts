import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { OrganizationActions } from 'app/actions/organization.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';


const initialState: RootState.SuggestionListState = null;

export const suggestionReducer = handleActions<RootState.SuggestionListState, DataTableResponse<String>>(
    {
        [OrganizationActions.Type.GET_SUGGESTION_SUCCESS]: (state, action: Action< DataTableResponse<String>>) => {

            return state = action.payload;
        },
        [OrganizationActions.Type.GET_SUGGESTION_FAIL]: (state, actionC: Action< DataTableResponse<String>>) => {

            return state = null;
        }
    },
    initialState
);
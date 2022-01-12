import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { ContactActions } from 'app/actions/contact.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { ContactListManagementResponse } from 'app/models/payload/contact/ContactListManagementResponse';


const initialState: RootState.ContactListState = null;

export const contactReducer = handleActions<RootState.ContactListState, DataTableResponse<ContactListManagementResponse>>(
    {
        [ContactActions.Type.GET_CONTACT_LIST_SUCCESS]: (state, action: Action<DataTableResponse<ContactListManagementResponse>>) => {

            return state = action.payload;
        },
        [ContactActions.Type.GET_CONTACT_LIST_FAIL]: (state, action: Action<DataTableResponse<ContactListManagementResponse>>) => {

            return state = null;
        },
        [ContactActions.Type.SET_CONTACT_LIST_INITIAL]: (state, action: Action<DataTableResponse<ContactListManagementResponse>>) => {

            return state = null;
        }
    },
    initialState
);
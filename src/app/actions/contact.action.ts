import { createAction } from 'redux-actions';
import ContactListService from '../services/contactListService'
import { ContactListManagementRequest } from 'app/models/payload/contact/ContactListManagementRequest';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { ContactListManagementResponse } from 'app/models/payload/contact/ContactListManagementResponse';

export namespace ContactActions {
    export enum Type {
        GET_CONTACT_LIST_SUCCESS = 'get_contact_list_success',
        GET_CONTACT_LIST_FAIL = 'get_contact_list_fail',

        SET_CONTACT_LIST_INITIAL = 'set_contact_list_initial'
    }

    export const getContactListSuccess = createAction<DataTableResponse<ContactListManagementResponse>>(Type.GET_CONTACT_LIST_SUCCESS);
    export const getContactListFail = createAction<DataTableResponse<ContactListManagementResponse>>(Type.GET_CONTACT_LIST_FAIL);
    export function getContactListFavorite(request: ContactListManagementRequest) {
        return (dispatch: any) => {

            ContactListService.getContactListFavorite(request, (isError: boolean, newState: DataTableResponse<ContactListManagementResponse>) => {
                if (!isError && newState !== null) {
                    dispatch(getContactListSuccess(newState));
                } else {
                    dispatch(getContactListFail(null));
                }
            });
        }
    }

    export const setContactListInitial = createAction<DataTableResponse<ContactListManagementResponse>>(Type.SET_CONTACT_LIST_INITIAL);
    export function setInitial() {
        return (dispatch: any) => {
            dispatch(getContactListSuccess(null));
        }
    }
}

export type ContactActions = Omit<typeof ContactActions, 'Type'>;

import { createAction } from 'redux-actions';

import { AdvanceSearch } from "../models/payload/datatable/dataTableRequest";

export namespace AdvanceSearchFilterAction {
    export enum Type {
        SET_ADVANCE_SEARCH_FILTER = 'set_advance_search_filter',
        REMOVE_ADVANCE_SEARCH_FILTER = 'remove_advance_search_filter',
        CLEAR_ADVANCE_SEARCH_FILTER = 'clear_advance_search_filter'
    }

    export const setAdvanceSearchFilter = createAction<AdvanceSearch[]>(Type.SET_ADVANCE_SEARCH_FILTER);
    export const removeAdvanceSearchFilter = createAction<AdvanceSearch>(Type.REMOVE_ADVANCE_SEARCH_FILTER);
    export const clearAdvanceSearchFilter = createAction(Type.CLEAR_ADVANCE_SEARCH_FILTER);
    
    export function setAdvanceSearch(request: AdvanceSearch[]) {
        return (dispatch: any) => {
            dispatch(setAdvanceSearchFilter(request));
        }
    }

    export function removeAdvanceSearch(request: AdvanceSearch) {
        return (dispatch: any) => {
            dispatch(removeAdvanceSearchFilter(request));
        }
    }

    export function clearAdvanceSearch() {
        return (dispatch: any) => {
            dispatch(clearAdvanceSearchFilter());
        }
    }
}

export type AdvanceSearchFilterAction = Omit<typeof AdvanceSearchFilterAction, 'Type'>;

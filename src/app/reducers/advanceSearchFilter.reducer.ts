import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { AdvanceSearchFilterAction } from 'app/actions/advanceSearchFilter.action';
import { AdvanceSearch } from "../models/payload/datatable/dataTableRequest";
import { CommonHelper } from 'app/utils/helpers/commonHelper';


const initialState: RootState.AdvanceSearchFilterState = new Array<AdvanceSearch>();

export const advanceSearchRequestReducer = handleActions<RootState.AdvanceSearchFilterState, AdvanceSearch[]>(
    {
        [AdvanceSearchFilterAction.Type.SET_ADVANCE_SEARCH_FILTER]: (state, action: Action<AdvanceSearch[]>) => {
            return action.payload;
        },
        [AdvanceSearchFilterAction.Type.REMOVE_ADVANCE_SEARCH_FILTER]: (state, action: Action<AdvanceSearch[]>) => {
            let findRemove = action.payload.pop();
            return state.filter((filter) => { 
                return filter.key !== findRemove.key 
                && filter.condition !== findRemove.condition
                && !CommonHelper.isArrayEqual(filter.multiValue, findRemove.multiValue)
                && filter.value !== findRemove.value;
            });
        },
        [AdvanceSearchFilterAction.Type.CLEAR_ADVANCE_SEARCH_FILTER]: () => {
            return new Array<AdvanceSearch>();
        },
    },
    initialState
);
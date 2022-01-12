import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import {SourcingEventResponse} from "app/models/payload/sourcing/sourcingEventResponse";
import {SourcingEventActions} from "app/actions/sourcing.action";
import {CommonDataTable} from "app/models/payload/datatable/commonDataTableResponse";


const initialState: RootState.SourcingEventListState = null;

export const sourcingReducer = handleActions<RootState.SourcingEventListState, CommonDataTable<SourcingEventResponse>>(
    {
        [SourcingEventActions.Type.GET_SOURCING_EVENT_LIST_SUCCESS]: (state, action: Action<CommonDataTable<SourcingEventResponse>>) => {

            return state = action.payload;
        },
        [SourcingEventActions.Type.GET_SOURCING_EVENT_LIST_FAIL]: (state, action: Action<CommonDataTable<SourcingEventResponse>>) => {

            return state = null;
        },
        [SourcingEventActions.Type.SET_SOURCING_EVENT_LIST_INITIAL]: (state, action: Action<CommonDataTable<SourcingEventResponse>>) => {

            return state = null;
        }
    },
    initialState
);

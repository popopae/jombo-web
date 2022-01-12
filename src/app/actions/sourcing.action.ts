import { createAction } from 'redux-actions';
import SourcingService from '../services/sourcingService'
import { SourcingEventResponse } from 'app/models/payload/sourcing/sourcingEventResponse';
import { SourcingEventRequest } from 'app/models/payload/sourcing/sourcingEventRequest';
import {CommonDataTable} from "app/models/payload/datatable/commonDataTableResponse";

export namespace SourcingEventActions {
    export enum Type {
        GET_SOURCING_EVENT_LIST_SUCCESS = 'get_sourcing_event_list_success',
        GET_SOURCING_EVENT_LIST_FAIL = 'get_sourcing_event_list_fail',
        SET_SOURCING_EVENT_LIST_INITIAL = 'set_sourcing_event_list_initial'
    }

    export const getSourcingEventListSuccess = createAction<CommonDataTable<SourcingEventResponse>>(Type.GET_SOURCING_EVENT_LIST_SUCCESS);
    export const getSourcingEventListFail = createAction<CommonDataTable<SourcingEventResponse>>(Type.GET_SOURCING_EVENT_LIST_FAIL);
    export function getErfxSourcingEventList(request: SourcingEventRequest) {
        return (dispatch: any) => {

            SourcingService.getErfxSourcingEventList(request, (isError: boolean, newState: CommonDataTable<SourcingEventResponse>) => {
                if (!isError && newState !== null) {
                    dispatch(getSourcingEventListSuccess(newState));
                } else {
                    dispatch(getSourcingEventListFail(null));
                }
            });
        }
    }
    export function getAuctionSourcingEventList(request: SourcingEventRequest) {
        return (dispatch: any) => {

            SourcingService.getAuctionSourcingEventList(request, (isError: boolean, newState: CommonDataTable<SourcingEventResponse>) => {
                if (!isError && newState !== null) {
                    dispatch(getSourcingEventListSuccess(newState));
                } else {
                    dispatch(getSourcingEventListFail(null));
                }
            });
        }
    }

    export const setSourcingEventListInitial = createAction<CommonDataTable<SourcingEventResponse>>(Type.SET_SOURCING_EVENT_LIST_INITIAL);
    export function setInitial() {
        return (dispatch: any) => {
            dispatch(getSourcingEventListSuccess(null));
        }
    }
}

export type SourcingEventActions = Omit<typeof SourcingEventActions, 'Type'>;

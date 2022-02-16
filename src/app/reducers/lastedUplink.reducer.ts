import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { LastedUplinkResponse } from 'app/models/payload/callback/lastedUplinkResponse';
import { CallBackAction } from 'app/actions/callback.action';


const initialState: RootState.LastedUplinkState = null;

export const lastedUplinkReducer = handleActions<RootState.LastedUplinkState, LastedUplinkResponse>(
    {
        [CallBackAction.Type.GET_CALLBACK_DATA_SUCCESS]: (state, action: Action<LastedUplinkResponse>) => {

            return state = action.payload;
        },
        [CallBackAction.Type.GET_CALLBACK_DATA_FAIL]: (state, action: Action<LastedUplinkResponse>) => {

            return state = null;
        }
    },
    initialState
);
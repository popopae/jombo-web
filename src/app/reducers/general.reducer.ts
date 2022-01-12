import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { GeneralActions } from 'app/actions/general.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CoreGeneral } from 'app/models/entity/coreGeneral';


const initialState: RootState.GeneralListState = null;

export const generalReducer = handleActions<RootState.GeneralListState, DataTableResponse<CoreGeneral>>(
    {
        [GeneralActions.Type.GET_GENERAL_SUCCESS]: (state, action: Action<DataTableResponse<CoreGeneral>>) => {

            return state = action.payload;
        },
        [GeneralActions.Type.GET_GENERAL_FAIL]: (state, action: Action<DataTableResponse<CoreGeneral>>) => {

            return state = null;
        }
    },
    initialState
);
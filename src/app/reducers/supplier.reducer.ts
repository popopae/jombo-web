import { handleActions, Action } from "redux-actions";
import { RootState } from "./state";
import { SupplierActions } from "app/actions/supplier.action";
import { ApiResponse } from "app/models/apiResponse";

const initialState: RootState.HistoryListState = null;

export const historyReducer = handleActions<RootState.HistoryListState, ApiResponse>(
  {
      [SupplierActions.Type.GET_HISTORY_SUCCESS]: (state, action: Action<ApiResponse>) => {
        return state = action.payload;
      },
      [SupplierActions.Type.GET_HISTORY_FAIL]: (state, action: Action<ApiResponse>) => {
        return state = action.payload;
      }
  } ,
  initialState
);

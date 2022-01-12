import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { CategoryAVLAction } from 'app/actions/categoryAVL.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CategoryAVLResponse } from 'app/models/payload/category/categoryAVLResponse';


const initialState: RootState.CategoryAVLListState = null;

export const categoryAVLReducer = handleActions<RootState.CategoryAVLListState, DataTableResponse<CategoryAVLResponse>>(
    {
        [CategoryAVLAction.Type.GET_CATEGORY_AVL_SUCCESS]: (state, action: Action<DataTableResponse<CategoryAVLResponse>>) => {
            return state = action.payload;
        },
        [CategoryAVLAction.Type.GET_CATEGORY_AVL_FAIL]: (state, action: Action<DataTableResponse<CategoryAVLResponse>>) => {
            return state = null;
        }
    },
    initialState
);
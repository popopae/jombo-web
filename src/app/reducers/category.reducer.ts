import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { CategoryAction } from 'app/actions/category.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CategoryResponse } from 'app/models/payload/category/categoryResponse';


const initialState: RootState.CategoryListState = null;

export const categoryReducer = handleActions<RootState.CategoryListState, DataTableResponse<CategoryResponse>>(
    {
        [CategoryAction.Type.GET_CATEGORY_SUCCESS]: (state, action: Action<DataTableResponse<CategoryResponse>>) => {

            return state = action.payload;
        },
        [CategoryAction.Type.GET_CATEGORY_FAIL]: (state, action: Action<DataTableResponse<CategoryResponse>>) => {

            return state = null;
        }
    },
    initialState
);
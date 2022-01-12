import { createAction } from 'redux-actions';

import CategoryService from '../../app/services/categoryService'
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CategoryResponse } from 'app/models/payload/category/categoryResponse';

export namespace CategoryAction {
    export enum Type {
        GET_CATEGORY_SUCCESS = 'get_category_success',
        GET_CATEGORY_FAIL = 'get_category_fail'
    }

    export const getCategorySuccess = createAction<DataTableResponse<CategoryResponse>>(Type.GET_CATEGORY_SUCCESS);
    export const getCategoryFail = createAction<DataTableResponse<CategoryResponse>>(Type.GET_CATEGORY_FAIL);

    export function getCategory() {
        return (dispatch: any) => {

            CategoryService.getCategory((isError: boolean, newState: DataTableResponse<CategoryResponse>) => {
                if (!isError && newState.data.length > 0) {
                    dispatch(getCategorySuccess(newState));
                } else {
                    dispatch(getCategoryFail(newState));
                }
            });
        }
    }
}

export type CategoryAction = Omit<typeof CategoryAction, 'Type'>;

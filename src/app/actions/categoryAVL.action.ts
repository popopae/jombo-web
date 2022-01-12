import { createAction } from 'redux-actions';

import CategoryAVLService from '../../app/services/categoryAVLService'
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CategoryAVLResponse } from 'app/models/payload/category/categoryAVLResponse';

export namespace CategoryAVLAction {
    export enum Type {
        GET_CATEGORY_AVL_SUCCESS = 'get_category_avl_success',
        GET_CATEGORY_AVL_FAIL = 'get_category_avl_fail'
    }

    export const getCategorySuccess = createAction<DataTableResponse<CategoryAVLResponse>>(Type.GET_CATEGORY_AVL_SUCCESS);
    export const getCategoryFail = createAction<DataTableResponse<CategoryAVLResponse>>(Type.GET_CATEGORY_AVL_FAIL);

    export function getCategory() {
        return (dispatch: any) => {

            CategoryAVLService.getCategory((isError: boolean, newState: DataTableResponse<CategoryAVLResponse>) => {
                if (!isError && newState.data.length > 0) {
                    dispatch(getCategorySuccess(newState));
                } else {
                    dispatch(getCategoryFail(newState));
                }
            });
        }
    }
}

export type CategoryAVLAction = Omit<typeof CategoryAVLAction, 'Type'>;

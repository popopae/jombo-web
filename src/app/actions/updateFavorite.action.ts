import { createAction } from 'redux-actions';
import OrganizationService from '../services/organizationService'
import { UpdateFavoriteRequest } from 'app/models/payload/favorite/updateFavoriteRequest';
import { UpdateFavoriteResponse } from 'app/models/payload/favorite/updateFavoriteResponse';

export namespace UpdateFavoriteActions {
    export enum Type {
        GET_UPDATE_FAVORITE_SUCCESS = 'get_update_favorite_success',
        GET_UPDATE_FAVORITE_FAIL = 'get_update_favorite_fail',

        SET_UPDATE_FAVORITE_INITIAL = 'set_update_favorite_initial',
    }

    export const getUpdateFavoriteSuccess = createAction<UpdateFavoriteResponse>(Type.GET_UPDATE_FAVORITE_SUCCESS);
    export const getUpdateFavoriteFail = createAction<UpdateFavoriteResponse>(Type.GET_UPDATE_FAVORITE_FAIL);
    export function updateFavorite(request: UpdateFavoriteRequest) {
        return (dispatch: any) => {

            OrganizationService.updateFavorite(request, (isError: boolean, newState: UpdateFavoriteResponse) => {
                if (!isError && newState !== null) {
                    dispatch(getUpdateFavoriteSuccess(newState));
                } else {
                    dispatch(getUpdateFavoriteFail(newState));
                }
            });
        }
    }

    export const setUpdateFavoriteInitial = createAction<UpdateFavoriteResponse>(Type.SET_UPDATE_FAVORITE_INITIAL);
    export function initialUpdateFavorite() {
        return (dispatch: any) => {
            dispatch(setUpdateFavoriteInitial(null));
        }
    }
}

export type UpdateFavoriteActions = Omit<typeof UpdateFavoriteActions, 'Type'>;

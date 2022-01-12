import { Action, handleActions } from "redux-actions";
import { RootState } from "./state";
import { UpdateFavoriteActions } from "app/actions/updateFavorite.action";
import { UpdateFavoriteResponse } from "app/models/payload/favorite/updateFavoriteResponse";

const initialState: RootState.UpdateFavoriteState = null;

export const updateFavoriteReducer = handleActions<RootState.UpdateFavoriteState, UpdateFavoriteResponse>(
    {
        [UpdateFavoriteActions.Type.GET_UPDATE_FAVORITE_SUCCESS]: (state, action: Action<UpdateFavoriteResponse>) => {

            return state = action.payload;
        },
        [UpdateFavoriteActions.Type.GET_UPDATE_FAVORITE_FAIL]: (state, action: Action<UpdateFavoriteResponse>) => {

            return state = action.payload;
        },
        [UpdateFavoriteActions.Type.SET_UPDATE_FAVORITE_INITIAL]: (state, action: Action<UpdateFavoriteResponse>) => {

            return state = null;
        }
    },
    initialState
);
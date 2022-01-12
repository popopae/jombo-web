import { Action, handleActions } from "redux-actions";
import { RootState } from "./state";
import { UaaBffActions } from "app/actions/uaaBff.action";
import { UserProfile } from "app/models/userProfile";

const initialState: RootState.UserProfileState = null;

export const userProfileReducer = handleActions<RootState.UserProfileState, UserProfile>(
    {
        [UaaBffActions.Type.GET_USER_PROFILE_SUCCESS]: (state, action: Action<UserProfile>) => {

            return state = action.payload;
        },
        [UaaBffActions.Type.GET_USER_PROFILE_FAIL]: (state, action: Action<UserProfile>) => {

            return state = action.payload;
        },
        [UaaBffActions.Type.GET_USER_PROFILE_INITIAL]: (state, action: Action<UserProfile>) => {

            return state = action.payload;
        }
    },
    initialState
);
import { Action, handleActions } from "redux-actions";
import { RootState } from "./state";
import { UnqualifiedResponse } from "app/models/payload/unqualified/UnqualifiedResponse";
import { OrganizationActions } from "app/actions/organization.action";

const initialState: RootState.UnqualifiedResponseState = null;

export const unqualifiedReducer = handleActions<RootState.UnqualifiedResponseState, UnqualifiedResponse>(
    {
        [OrganizationActions.Type.UNQUALIFIED_APPROVE_SUCCESS]: (state, action: Action<UnqualifiedResponse>) => {

            return state = action.payload;
        },
        [OrganizationActions.Type.UNQUALIFIED_REJECT_SUCCESS]: (state, action: Action<UnqualifiedResponse>) => {

            return state = action.payload;
        },
        [OrganizationActions.Type.UNQUALIFIED_APPROVE_FAIL]: (state, action: Action<UnqualifiedResponse>) => {

            return state = action.payload;
        },
        [OrganizationActions.Type.UNQUALIFIED_REJECT_FAIL]: (state, action: Action<UnqualifiedResponse>) => {

            return state = action.payload;
        },
        [OrganizationActions.Type.UNQUALIFIED_INITIAL]: (state, action: Action<UnqualifiedResponse>) => {

            return state = {};
        }
    },
    initialState
);
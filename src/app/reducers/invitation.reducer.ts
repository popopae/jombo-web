import { Action, handleActions } from "redux-actions";
import { RootState } from "./state";
import { InvitationResponse } from "app/models/payload/invitation/InvitationResponse";
import { OrganizationActions } from "app/actions/organization.action";

const initialState: RootState.InvitationResponseState = null;

export const invitationReducer = handleActions<RootState.InvitationResponseState, InvitationResponse>(
    {
        [OrganizationActions.Type.INVITATION_SUCCESS]: (state, action: Action<InvitationResponse>) => {

            return state = action.payload;
        },
        [OrganizationActions.Type.INVITATION_FAIL]: (state, action: Action<InvitationResponse>) => {

            return state = action.payload;
        }
    },
    initialState
);
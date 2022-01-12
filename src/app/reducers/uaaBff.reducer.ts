import { Action, handleActions } from "redux-actions";
import { RootState } from "./state";
import { TokenResponse } from "app/models";
import { UaaBffActions } from "app/actions/uaaBff.action";

const initialAuthCodeState: RootState.TokenResponseState = 
{
    access_token: '',
    refresh_token: '',
    auth_code: '',
    expires_in: '' 
};


const initialRenewTokenState: RootState.TokenResponseState = 
{
    access_token: '',
    refresh_token: '',
    auth_code: '',
    expires_in: '' 
};

export const uaaBffAuthCodeReducer = handleActions<RootState.TokenResponseState, TokenResponse>(
    {
          [UaaBffActions.Type.UAA_BFF_AUTH_CODE_SUCCESS]: (_state, action: Action<TokenResponse>) => {
            return action.payload;
          },
          [UaaBffActions.Type.UAA_BFF_AUTH_CODE_FAIL]: (_state, action: Action<TokenResponse>) => {
            return action.payload;
        }
    },
    initialAuthCodeState
);

export const renewTokenReducer = handleActions<RootState.TokenResponseState, TokenResponse>(
    {
          [UaaBffActions.Type.RENEW_TOKEN_SUCCESS]: (_state, action: Action<TokenResponse>) => {
            return action.payload;
          },
          [UaaBffActions.Type.RENEW_TOKEN_FAIL]: (_state, action: Action<TokenResponse>) => {
            return action.payload;
        }
    },
    initialRenewTokenState
);

import { EntryVerificationActions } from "app/actions/entryVerification.action";
import { EntryVerificationResponse } from "app/models";
import { Action, handleActions } from "redux-actions";
import { RootState } from "./state";

const initialState: RootState.EntryVerificationResponseState = 
{
    result: '',
    errorMsg: '',
    a: '',
    b: '',
    sn: ''
};

export const entryVerificationReducer = handleActions<RootState.EntryVerificationResponseState, EntryVerificationResponse>(
    {
          [EntryVerificationActions.Type.ENTRY_VERIFICATION_SUCCESS]: (state, action: Action<EntryVerificationResponse>) => {
            return  { 
                ...state, 
                result: action.payload!.result,
                errorMsg: action.payload!.errorMsg,
                a: action.payload!.a,
                b: action.payload!.b,
                sn: action.payload!.sn
            } ;
          },
          [EntryVerificationActions.Type.ENTRY_VERIFICATION_FAIL]: (state, action: Action<EntryVerificationResponse>) => {
            return  { 
                ...state, 
                result: action.payload!.result,
                errorMsg: action.payload!.errorMsg,
                a: action.payload!.a,
                b: action.payload!.b,
                sn: action.payload!.sn
            } ;
        }
      },
      initialState
  );
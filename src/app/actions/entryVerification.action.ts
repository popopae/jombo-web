import { EntryVerificationResponse } from "app/models/payload/entryVerification/entryVerificationResponse";
import entryVerificationService from "app/services/entryVerificationService";
import { createAction } from "redux-actions";


export namespace EntryVerificationActions {
    export enum Type {
        ENTRY_VERIFICATION_SUCCESS = 'entry_verification_success',
        ENTRY_VERIFICATION_FAIL = 'entry_verification_fail'
    }

    export const entryVerificationSuccess = createAction<EntryVerificationResponse>(Type.ENTRY_VERIFICATION_SUCCESS);
    export const entryVerificationFail = createAction<EntryVerificationResponse>(Type.ENTRY_VERIFICATION_FAIL);
    
    export function verifyEntry(token: string) {
        return (dispatch: any) => {

            entryVerificationService.verifyEntry(token, (isError:boolean,newState: EntryVerificationResponse) => {
                if(!isError){
                    dispatch(entryVerificationSuccess(newState));
                } else{
                    dispatch(entryVerificationFail(newState));
                }
            });
        }
    }
}

export type EntryVerificationActions = Omit<typeof EntryVerificationActions, 'Type'>;
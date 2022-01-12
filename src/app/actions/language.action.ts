import { createAction } from 'redux-actions';

import LanguageService from '../services/languageService'
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CoreLanguage } from 'app/models/entity/coreLanguage';

export namespace LanguageActions {
    export enum Type {
        GET_LANGUAGE_SUCCESS = 'get_language_success',
        GET_LANGUAGE_FAIL = 'get_language_fail'
    }

    export const getLanguageSuccess = createAction<DataTableResponse<CoreLanguage>>(Type.GET_LANGUAGE_SUCCESS);
    export const getLanguageFail = createAction<DataTableResponse<CoreLanguage>>(Type.GET_LANGUAGE_FAIL);

    export function getLanguage() {
        return (dispatch: any) => {

            LanguageService.getLanguage((isError: boolean, newState: DataTableResponse<CoreLanguage>) => {
                if (!isError && newState.data.length > 0) {
                    dispatch(getLanguageSuccess(newState));
                } else {
                    dispatch(getLanguageFail(newState));
                }
            });
        }
    }
}

export type LanguageActions = Omit<typeof LanguageActions, 'Type'>;

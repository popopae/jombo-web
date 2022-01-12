import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { LanguageActions } from 'app/actions/language.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CoreLanguage } from 'app/models/entity/coreLanguage';


const initialState: RootState.LanguageListState = null;

export const languageReducer = handleActions<RootState.LanguageListState, DataTableResponse<CoreLanguage>>(
    {
        [LanguageActions.Type.GET_LANGUAGE_SUCCESS]: (state, action: Action<DataTableResponse<CoreLanguage>>) => {

            return state = action.payload;
        },
        [LanguageActions.Type.GET_LANGUAGE_FAIL]: (state, action: Action<DataTableResponse<CoreLanguage>>) => {

            return state = null;
        }
    },
    initialState
);
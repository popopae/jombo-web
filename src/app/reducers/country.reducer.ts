import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { CountryActions } from 'app/actions/country.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CoreCountry } from 'app/models/entity/coreCountry';


const initialState: RootState.CountryListState = null;

export const countryReducer = handleActions<RootState.CountryListState, DataTableResponse<CoreCountry>>(
    {
        [CountryActions.Type.GET_COUNTRY_SUCCESS]: (state: DataTableResponse<CoreCountry>, action: Action<DataTableResponse<CoreCountry>>) => {

            return state = action.payload;
        },
        [CountryActions.Type.GET_COUNTRY_FAIL]: (state: DataTableResponse<CoreCountry>, action: Action<DataTableResponse<CoreCountry>>) => {

            return state = null;
        }
    },
    initialState
);
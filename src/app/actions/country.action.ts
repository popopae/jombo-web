import { createAction } from 'redux-actions';

import CountryService from '../services/countryService'
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { CoreCountry } from 'app/models/entity/coreCountry';

export namespace CountryActions {
    export enum Type {
        GET_COUNTRY_SUCCESS = 'get_country_success',
        GET_COUNTRY_FAIL = 'get_country_fail'
    }

    export const getCountrySuccess = createAction<DataTableResponse<CoreCountry>>(Type.GET_COUNTRY_SUCCESS);
    export const getCountryFail = createAction<DataTableResponse<CoreCountry>>(Type.GET_COUNTRY_FAIL);

    export function getCountry() {
        return (dispatch: any) => {

            CountryService.getCountry((isError: boolean, newState: DataTableResponse<CoreCountry>) => {
                if (!isError && newState.data.length > 0) {
                    dispatch(getCountrySuccess(newState));
                } else {
                    dispatch(getCountryFail(newState));
                }
            });
        }
    }
}

export type CountryActions = Omit<typeof CountryActions, 'Type'>;

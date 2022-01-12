import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { OrganizationActions } from 'app/actions/organization.action';
import { CoreCountry } from 'app/models/entity/coreCountry';


const initialState: RootState.OrgCountryListState = null;

export const orgCountryReducer = handleActions<RootState.OrgCountryListState, CoreCountry[]>(
    {
        [OrganizationActions.Type.GET_COUNTRY_ORGANIZATION_SUCCESS]: (state, action: Action<CoreCountry[]>) => {

            return state = action.payload;
        },
        [OrganizationActions.Type.GET_COUNTRY_ORGANIZATION_FAIL]: (state, actionC: Action<CoreCountry[]>) => {

            return state = null;
        }
    },
    initialState
);
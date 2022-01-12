import { combineReducers } from 'redux';
import { RootState } from './state';
import { defaultReducer } from './default.reducer';

import { businessEntityReducer } from './businessEntity.reducer'
import { categoryReducer } from './category.reducer';
import { contactReducer } from './contact.reducer';
import { generalReducer } from './general.reducer';
import { languageReducer } from './language.reducer';
import { countryReducer } from './country.reducer';
import { businessTypeReducer } from './businessType.reducer';
import { orgCountryReducer } from './orgCountry.reducer';
import { registerCapitalReducer } from './registeredCapital.reducer';
import { organizationReducer } from './organization.reducer';
import { suggestionReducer } from './suggestion.reducer';
import { entryVerificationReducer } from './entryVerification.reducer'
import { uaaBffAuthCodeReducer } from './uaaBff.reducer';
import { renewTokenReducer } from './uaaBff.reducer';
import { advanceSearchRequestReducer } from './advanceSearchFilter.reducer';
import { chipReducer } from './chip.reducer';
import { unqualifiedReducer } from './unqualified.reducer';
import { userProfileReducer } from './userProfile.reducer';
import { updateFavoriteReducer } from './updateFavorite.reducer';
import { categoryAVLReducer } from './categoryAVL.reducer';
import { sourcingReducer } from './sourcing.reducer';
import { historyReducer } from './supplier.reducer';
import { invitationReducer } from './invitation.reducer';

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
const rootReducer = combineReducers<RootState>({
  businessEntityResponse: businessEntityReducer as any,
  categoryListResponse: categoryReducer as any,
  categoryAVLListResponse: categoryAVLReducer as any,
  contactResponse: contactReducer as any,
  countryListResponse: countryReducer as any,
  generalListResponse: generalReducer as any,
  language: languageReducer as any,
  businessTypeResponse: businessTypeReducer as any,
  orgCountryListResponse: orgCountryReducer as any,
  registeredCapitalResponse: registerCapitalReducer as any,
  organizationListResponse: organizationReducer as any,
  suggestionSearchResponse: suggestionReducer as any,
  entryVerificationResponse: entryVerificationReducer as any,
  tokenResponse: uaaBffAuthCodeReducer as any,
  renewTokenResponse: renewTokenReducer as any,
  advanceSearchFilter: advanceSearchRequestReducer as any,
  chip: chipReducer as any,
  unqualifiedResponse: unqualifiedReducer as any,
  userProfile: userProfileReducer as any,
  updateFavorite: updateFavoriteReducer as any,
  sourcingEvent: sourcingReducer as any,
  historyListResponse: historyReducer as any,
  invitationResponse: invitationReducer as any,

  default: defaultReducer as any
});

export { RootState, rootReducer };

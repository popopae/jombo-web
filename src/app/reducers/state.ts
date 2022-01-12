import { CoreBusinessEntity } from "app/models/entity/coreBusinessEntity";
import { CoreBusinessType } from "app/models/entity/coreBusinessType";
import { CoreCountry } from "app/models/entity/coreCountry";
import { CoreGeneral } from "app/models/entity/coreGeneral";
import { CoreLanguage } from "app/models/entity/coreLanguage";
import { CoreOrganization } from "app/models/entity/coreOrganization";
import { CategoryResponse } from "app/models/payload/category/categoryResponse";
import { CategoryAVLResponse } from "app/models/payload/category/categoryAVLResponse";
import { DataTableResponse } from "app/models/payload/datatable/dataTableResponse";
import { RegisteredCapitalResponse } from "app/models/payload/registeredCapital/registeredCapitalResponse";
import { EntryVerificationResponse } from "app/models/payload/entryVerification/entryVerificationResponse"
import { TokenResponse } from "app/models";
import { AdvanceSearch } from "../models/payload/datatable/dataTableRequest";
import { Chip } from "app/models/payload/chip/Chip";
import { UnqualifiedResponse } from "app/models/payload/unqualified/UnqualifiedResponse";
import { UserProfile } from "app/models/userProfile";
import { UpdateFavoriteResponse } from "app/models/payload/favorite/updateFavoriteResponse";
import { ContactListManagementResponse } from "app/models/payload/contact/ContactListManagementResponse";
import {SourcingEventResponse} from "app/models/payload/sourcing/sourcingEventResponse";
import {CommonDataTable} from "app/models/payload/datatable/commonDataTableResponse";
import { ApiResponse } from "app/models/apiResponse";
import { InvitationResponse } from "app/models/payload/invitation/InvitationResponse";

export interface RootState {
  businessEntityResponse?: RootState.BusinessEntityState,
  categoryListResponse?: RootState.CategoryListState,
  categoryAVLListResponse?: RootState.CategoryAVLListState,
  contactResponse?: RootState.ContactListState,
  countryListResponse?: RootState.CountryListState,
  generalListResponse?: RootState.GeneralListState,
  language?: RootState.LanguageListState,
  businessTypeResponse?: RootState.BusinessTypeState,
  orgCountryListResponse?: RootState.OrgCountryListState,
  registeredCapitalResponse?: RootState.RegisteredCapitalState,
  organizationListResponse?: RootState.OrganizationListState,
  suggestionSearchResponse?: RootState.SuggestionListState,
  entryVerificationResponse?: RootState.EntryVerificationResponseState,
  tokenResponse?: RootState.TokenResponseState,
  renewTokenResponse?: RootState.RenewTokenResponseState,
  advanceSearchFilter?: RootState.AdvanceSearchFilterState,
  chip: RootState.ChipState,
  unqualifiedResponse: RootState.UnqualifiedResponseState,
  userProfile: RootState.UserProfileState,
  updateFavorite: RootState.UpdateFavoriteState,
  sourcingEvent: RootState.SourcingEventListState,
  historyListResponse: RootState.HistoryListState,
  invitationResponse: RootState.InvitationResponseState

  default: any
  router?: any;
}

export namespace RootState {
  export type BusinessEntityState = DataTableResponse<CoreBusinessEntity>
  export type CategoryListState = DataTableResponse<CategoryResponse>
  export type ContactListState = DataTableResponse<ContactListManagementResponse>
  export type CategoryAVLListState = DataTableResponse<CategoryAVLResponse>
  export type CountryListState = DataTableResponse<CoreCountry>
  export type GeneralListState = DataTableResponse<CoreGeneral>
  export type LanguageListState = DataTableResponse<CoreLanguage>
  export type BusinessTypeState = DataTableResponse<CoreBusinessType>
  export type OrgCountryListState = CoreCountry[]
  export type RegisteredCapitalState = DataTableResponse<RegisteredCapitalResponse>
  export type OrganizationListState = DataTableResponse<CoreOrganization>
  export type SuggestionListState =  DataTableResponse<String>
  export type EntryVerificationResponseState = EntryVerificationResponse;
  export type TokenResponseState = TokenResponse;
  export type RenewTokenResponseState = TokenResponse;
  export type AdvanceSearchFilterState = AdvanceSearch[];
  export type ChipState = Chip[];
  export type UnqualifiedResponseState = UnqualifiedResponse;
  export type UserProfileState = UserProfile;
  export type UpdateFavoriteState = UpdateFavoriteResponse;
  export type SourcingEventListState = CommonDataTable<SourcingEventResponse>;
  export type HistoryListState = ApiResponse;
  export type InvitationResponseState = InvitationResponse;
}

import { CoreOrgAddress } from './coreOrgAddress';

export interface CoreAddress {
  id?: number;
  addressKeyId?: number;
  houseNoLocal?: string;
  houseNoInter?: string;
  villageNoLocal?: string;
  villageNoInter?: string;
  laneLocal?: string;
  laneInter?: string;
  roadLocal?: string;
  roadInter?: string;
  subDistrictLocal?: string;
  subDistrictInter?: string;
  cityLocal?: string;
  cityInter?: string;
  stateLocal?: string;
  stateInter?: string;
  countryCode?: string;
  postalCode?: string;

  coreOrgAddress?: CoreOrgAddress;
}

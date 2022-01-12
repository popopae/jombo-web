import { CoreOrganization } from './coreOrganization';
import { CoreCountry } from './coreCountry';

export interface CoreState {
  id?: number;
  stateName?: string;
  stateCode?: string;
  countryId?: number;

  coreOrganizations?: CoreOrganization[];
  coreCountry?: CoreCountry
}

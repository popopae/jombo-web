import { CoreOrganization } from './coreOrganization';
import { CoreState } from './coreState';

export interface CoreCountry {
  id?: number;
  countryName?: string;
  countryNameCode?: string;
  countryCode?: string;

  coreOrganizations?: CoreOrganization[];
  coreStates?: CoreState[];
}

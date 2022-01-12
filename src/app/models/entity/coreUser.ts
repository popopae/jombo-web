import { CoreOrganization } from './coreOrganization';

export interface CoreUser {
  id?: number;
  username?: string;
  supplierId?: number;
  phoneNo?: string;
  phoneExt?: string;
  mobileCountryCode?: string;
  mobileNo?: string;
  coreOrganization?: CoreOrganization;
}

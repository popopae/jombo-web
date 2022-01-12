import { CoreOrganization } from './coreOrganization';

export interface CoreOrgVendor {
  id?: number;
  supplierID?: number;
  eid?: number;
  vendorNum?: string;

  coreOrganization?: CoreOrganization
}

import { CoreOrganization } from './coreOrganization';

export interface CoreBusinessEntity {
  id?: number;
  businessEntityName?: string;
  businessEntityCode?: string;

  value?: boolean;
  coreOrganizations?: CoreOrganization[];
}

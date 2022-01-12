import { CoreOrganization } from './coreOrganization';

export interface CoreOrgPrivate {
  id?: number;
  supplierId?: number;
  eid?: number;
  isDeleted?: number;

  coreOrganization?: CoreOrganization
}

import { CoreBusinessType } from './coreBusinessType';
import { CoreOrganization } from './coreOrganization';

export interface CoreOrgBusinessType {
  id?: number;
  supplierId?: number;
  businessTypeId?: number

  coreBusinessType?: CoreBusinessType;
  coreOrganization?: CoreOrganization;
}

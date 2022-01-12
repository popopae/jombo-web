import { CoreAddress } from './coreAddress';
import { CoreGeneral } from './coreGeneral';
import { CoreOrganization } from './coreOrganization';

export interface CoreOrgAddress {
  Id?: number;
  supplierId?: number;
  addressId?: number;
  addressTypeId?: number;
  seqNo?: number;

  address?: CoreAddress;
  addressType?: CoreGeneral
  coreOrganization?: CoreOrganization;
}

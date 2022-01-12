import { CoreOrgAddress } from './coreOrgAddress';
import { CoreOrganization } from './coreOrganization';

export interface CoreGeneral {
  id?: number;
  generalTypeCode?: string;
  generalName?: string;
  generalDescription?: string;
  generalValue?: string;
  generalOrderNo?: number;

  value?: boolean;

  coreOrgAddress?: CoreOrgAddress[];
  coreOrganization?: CoreOrganization[];
}

import { CoreOrganization } from './coreOrganization';

export interface CoreAVLApproved {
  id?: number;
  eid?: string;
  buyerName?: string;
  approvedBy?: string;
  approvedDate?: Date;

  coreOrganization?: CoreOrganization;
}

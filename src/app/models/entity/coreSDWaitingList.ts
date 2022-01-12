import { CoreUser } from './coreUser';

export interface CoreSDWaitingList {
  id?: number;
  sysUserID?: string;
  eid?: number;
  userID?: number;
  remark?: string;

  coreUser?: CoreUser;
}

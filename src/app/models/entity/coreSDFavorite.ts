import { CoreUser } from './coreUser';

export interface CoreSDFavorite {
  id?: number;
  sysUserID?: number;
  eid?: number;
  userID?: number;

  coreUser?: CoreUser
}

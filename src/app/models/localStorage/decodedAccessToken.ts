export interface DecodedAccessToken {
  authorities: string[];
  client_id: string;
  exp: number;
  idp: string;
  jti: string;
  privilegeCode: string[];
  privilegeScope: string[];
  roleName: string;
  scope: string[];
  tenantId: string;
  username: string;
  user_name: string;
}

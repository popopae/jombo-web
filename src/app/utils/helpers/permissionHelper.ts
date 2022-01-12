import { PermissionScope } from "app/models/payload/permission/PermissionScope";
import { CommonConstant } from "../constants/commonConstant";
import { PERMISSION, TYPE } from "../enums/permissionEnum";
import { ValidateHelper } from "./validateHelper";

export class PermissionHelper {
  public static havePermission(permission: PERMISSION) {
    let havePermission = false;
    const userPermission = sessionStorage.getItem(CommonConstant.jwtUserDetail);
    if (userPermission !== null) {
      let parseObj = JSON.parse(userPermission);
      if (parseObj.privilegeScope) {
        let findPermission = parseObj.privilegeScope.find((eachScope: PermissionScope) => eachScope.privilegeCode === permission.toString());
        if (findPermission !== undefined) {
          havePermission = true;
        }
      }
    }
    return havePermission;
  }

  public static checkPermission(permission: PERMISSION[], type: TYPE) {
    const userPermission = sessionStorage.getItem(CommonConstant.jwtUserDetail);
    if (ValidateHelper.isEmptyOrNullOrUndefined(userPermission)) {
      return false;
    }

    const filterData = permission?.filter((x) => userPermission.includes(x));
    if (filterData.length === 0) {
      return false;
    }

    if (type === TYPE.SOME) {
      return true;
    }

    if (type === TYPE.ALL && filterData.length === permission.length) {
      return true;
    }

    return false;
  }
}

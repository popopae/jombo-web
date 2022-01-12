import { PermissionScope } from 'app/models/payload/permission/PermissionScope';
import { CommonConstant } from 'app/utils/constants/commonConstant';
import * as React from 'react';
import * as permission from '../../utils/enums/permissionEnum';

const CheckPermission = (props: any) => {
  const userPermission = sessionStorage.getItem(CommonConstant.jwtUserDetail);
  const [isAllow, setIsAllow] = React.useState(false);
  const type = props.type ? props.type : permission.TYPE.SOME;

  let privilegeScope: String[] = [];
  if (userPermission !== null) {
    let parseObj = JSON.parse(userPermission);
    if (parseObj.privilegeScope) {
        privilegeScope = parseObj.privilegeScope.map((eachScope: PermissionScope) => eachScope.privilegeCode);
    }
  }

  React.useEffect(() => {
    const requirePermission: String[] = typeof props.require === 'string' ? [props.require] : props.require;
    const filterData = requirePermission?.filter((x) => privilegeScope.includes(x));

    if (filterData.length === 0) {
      setIsAllow(false);
      return;
    }

    if (type === permission.TYPE.SOME) {
      setIsAllow(true);
      return;
    }

    if (type === permission.TYPE.ALL && filterData.length === requirePermission.length) {
      setIsAllow(true);
      return;
    }
  }, []);

  if (!isAllow) {
    return null;
  }
  return props.children;
};
export default CheckPermission;

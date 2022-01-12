import * as React from 'react';
import { Redirect, Route } from 'react-router';
import { PageEnum } from 'app/utils/enums/pageEnum';
// import { TokenHelper } from '../../app/utils';
import { RouteProps } from 'react-router';
import { PERMISSION, TYPE } from 'app/utils/enums/permissionEnum';
import { PermissionHelper } from 'app/utils/helpers/permissionHelper';
import { ValidateHelper } from 'app/utils/helpers/validateHelper';
import { CommonConstant } from 'app/utils/constants/commonConstant';
import { CommonHelper } from 'app/utils/helpers/commonHelper';
// import { Token } from '../../app/models/payload/signin/token';

export interface PrivateRouteModel extends RouteProps {
}

export const PrivateRoute: React.FC<PrivateRouteModel> = props => {

  let redirectPath = '';
  let allowAccess = PermissionHelper.checkPermission(
    [
      PERMISSION.VIEW_ALL_SUPPLIER,
      PERMISSION.VIEW_MY_SUPPLIER,
      PERMISSION.VIEW_QUALIFIED_SUPPLIER,
      PERMISSION.VIEW_UNQUALIFIED_SUPPLIER
    ],
    TYPE.SOME
  );

  if (!allowAccess) {
    redirectPath = PageEnum.NO_PERMISSION;
  }

  if (ValidateHelper.isEmptyOrNullOrUndefined(CommonHelper.getCookie(CommonConstant.authCodeCookie))) {
    redirectPath = PageEnum.NO_PERMISSION;
  }

  if (ValidateHelper.isEmptyOrNullOrUndefined(sessionStorage.getItem(CommonConstant.jwtToken))) {
    redirectPath = PageEnum.NO_PERMISSION;
  }

  if (redirectPath) {
    const renderComponent = () => <Redirect to={{ pathname: redirectPath }} />;
    return <Route {...props} component={renderComponent} render={undefined} />;
  } else {
    return <Route {...props} />;
  }
};

export default PrivateRoute;
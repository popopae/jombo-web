import * as React from "react";
import { CommonConstant } from "app/utils/constants/commonConstant";
import { ValidateHelper } from "app/utils/helpers/validateHelper";
import { i18nHelper } from "app/i18n/i18n";

interface NoPermissionProps {
    homeURL?: string;
}

const NoPermission: React.FC<NoPermissionProps> = (props: any) => {
    const jwtData: string = sessionStorage.getItem(CommonConstant.jwtUserDetail);
    const jwtObj: any = JSON.parse(jwtData);

    return (
        <div className="access-wrap">
            <div className="ac-message">
                <div className="n-oneplanet-logo"></div>
                <img src="../assets/images/intercept/n_page_permission.png" className="n-thumbnail-empty" />
                <br />
                <span className="color-title font-heading">
                    {i18nHelper.translate('Permission.Body')}
                </span>
                <br />
                {!ValidateHelper.isEmptyOrNullOrUndefined(jwtData) &&
                    <a href={jwtObj.homeURL} title={i18nHelper.translate('Permission.')} className="back-link-normal">
                        {i18nHelper.translate('Permission.BactToHome')}
                    </a>
                }
            </div>
            <div className="ac-footer"> {i18nHelper.translate('Permission.Footer')}</div>
        </div>
    );
}

export default NoPermission;
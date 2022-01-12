import { connect } from 'react-redux';
import React from "react";
import { RouteComponentProps } from "react-router";
import { bindActionCreators, Dispatch } from 'redux';
import { RootState } from "app/reducers";
import { Omit } from 'app/utils/omit';
import { UaaBffActions } from 'app/actions/uaaBff.action';
import { CommonHelper } from 'app/utils/helpers/commonHelper';
import { ApiResponseEnum } from 'app/utils/enums/apiResponseEnum';
import { CommonConstant } from 'app/utils/constants/commonConstant';
import { PageEnum } from 'app/utils/enums/pageEnum';
import { TokenHelper } from 'app/utils/helpers/tokenHelper';
import { ValidateHelper } from 'app/utils/helpers/validateHelper';

export namespace EntryVerification {
    export interface EntryVerificationProps extends RouteComponentProps<void> {
        uaaBffAction: UaaBffActions;
        tokenResponse: RootState.TokenResponseState;
        userProfile: RootState.UserProfileState;
    }

    export interface EntryVerificationState {
    }
}

@connect(
    (state: RootState): Pick<EntryVerification.EntryVerificationProps,
        'tokenResponse' | 'userProfile'> => {
        return {
            tokenResponse: state.tokenResponse,
            userProfile: state.userProfile
        };
    },
    (dispatch: Dispatch): Pick<EntryVerification.EntryVerificationProps,
        'uaaBffAction'> => ({
            uaaBffAction: bindActionCreators(Omit(UaaBffActions, 'Type'), dispatch),
        })
)

class EntryVerification extends React.Component<EntryVerification.EntryVerificationProps, EntryVerification.EntryVerificationState> {

    constructor(props: EntryVerification.EntryVerificationProps) {
        super(props);

        this.state = {
        }
    }

    componentDidMount() {
        const { uaaBffAction, history } = this.props;

        const cookie: string = CommonHelper.getCookie(CommonConstant.authCodeCookie);

        if (ValidateHelper.isEmptyOrNullOrUndefined(cookie)) {
            return history.push(PageEnum.NO_PERMISSION);
        }

        const decryptedCookie: string = CommonHelper.decryptData(CommonHelper.decodeBase64(cookie));
        uaaBffAction.getToken(decryptedCookie);
    }

    componentDidUpdate(prevProps: EntryVerification.EntryVerificationProps) {
        const {
            tokenResponse,
            userProfile
        } = this.props

        if (prevProps.tokenResponse !== tokenResponse) {
            this.handleTokenResponse();
        }

        if (prevProps.userProfile !== userProfile) {
            this.handleUserProfileResponse();
        }
    }

    handleTokenResponse() {
        const { tokenResponse, uaaBffAction, history } = this.props

        if (tokenResponse.status.code === ApiResponseEnum.SUCCESS_CODE) {
            const data = tokenResponse.data;

            var jwtModel = TokenHelper.decodeToken(data.access_token);
            uaaBffAction.getUserProfile(jwtModel.username);

            CommonHelper.setCookie(CommonConstant.authCodeCookie, CommonHelper.encodeBase64(CommonHelper.encryptData(data.auth_code)));
            CommonHelper.setSessionStorage(
                CommonConstant.jwtToken,
                {
                    access_token: data.access_token,
                    refresh_token: data.refresh_token,
                    expires_in: data.expires_in
                }
            );
            CommonHelper.setSessionStorage(
                CommonConstant.jwtUserDetail,
                TokenHelper.decodeToken(data.access_token)
            );

        } else {
            // Do something when fail to verify entry
            history.push(PageEnum.NO_PERMISSION);
        }
    }

    handleUserProfileResponse() {
        const { userProfile, history } = this.props

        if (ValidateHelper.isObjectEmptyOrNullOrUndefined(userProfile)) {
            // Do something when fail to verify entry
            return history.push(PageEnum.NO_PERMISSION);
        } else {
            return history.push(PageEnum.INDEX);
        }
    }

    render() {
        return (
            <div>Loading.....</div>
        );
    }
}

export default EntryVerification;

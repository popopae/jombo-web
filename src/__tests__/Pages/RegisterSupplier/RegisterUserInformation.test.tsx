import * as React from "react";
import { render } from "@testing-library/react";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import RegisterUserInformation from '../../../app/containers/Pages/RegisterSupplier/RegisterUserInformation'
import { RootState } from "../../../app/reducers";
import { i18nHelper } from "../../../app/i18n/i18n";

beforeEach(() => {
    jest.clearAllMocks();
});

const mockStore = configureStore([thunk]);

const testForm = {
    getFieldDecorator: jest.fn((opts) => (c: any) => c),
    setFieldsValue: jest.fn((opts) => (c: any) => c),
    getFieldsValue: jest.fn((opts) => (c: any) => c)
};

const handleSetUserInformation = () => { }

const mockCountryRootState: RootState.CountryListState = [
    {
        id: 1,
        countryName: 'mock-country-name',
        countryNameCode: 'mock-country-name-code',
        countryCode: 'TH',
        isEnglishOfficial: false,
        phoneCode: 'mock-phone-code'
    },
    {
        id: 2,
        countryName: 'mock-country-name',
        countryNameCode: 'mock-country-name-code',
        countryCode: 'EN',
        isEnglishOfficial: true,
        phoneCode: 'mock-phone-code'
    }
]

const mockTokenState: RootState.TokenState = { username: "test" };

describe("<RegisterUserInformation/>", () => {

    test("Render RegisterUserInformation: Not english official", async () => {

        const mockSupplierDetailResponseRootState: RootState.SupplierDetailState = {
            branch: {
                userBranch: {
                    contactPhoneCountryCode: 'TH',
                    jobTitleId: 0
                }
            }
        }

        const mockRegisterSupplierRequestRootState: RootState.RegisterSupplierRequestState = {
            userBranchRequest: {
                jobTitleId: 0,
                otherJobTitleName: '',
                contactEmail: '',
                contactPhoneNumber: '',
                contactPhoneNumberExt: '',
                contactPhoneCountryCode: 'TH'
            },
            userInfoRequest: {
                countryId: 1,
                firstName: '',
                lastName: '',
                firstNameLocal: '',
                lastNameLocal: '',
            }
        }

        const mockUserDetailListResponseRootState: RootState.UserDetailListState = [
            {
                sysUserId: 0,
                loginId: '',
                nameEn: '',
                lastNameEn: '',
                nameLocal: '',
                lastNameLocal: '',
                countryCode: 'TH',
                telephone: '',
                fax: '',
                email: '',
                localeId: 0,
                nameUpper: '',
                mobilePhone: '',
                tenantName: '',
                companyNameEn: [],
                companyNameLocal: [],
            }
        ]

        const store = mockStore({
            token: mockTokenState,
            country: mockCountryRootState,
            supplierDetail: mockSupplierDetailResponseRootState,
            registerSupplierRequest: mockRegisterSupplierRequestRootState,
            userDetailListResponse: mockUserDetailListResponseRootState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterUserInformation
                    form={testForm}
                    countryListState={mockCountryRootState}
                    supplierCountryCode={'TH'}
                    setUserInfoRequest={handleSetUserInformation}
                    tokenState={mockTokenState}
                    supplierDetailResponse={mockSupplierDetailResponseRootState}
                    registerSupplierRequestState={mockRegisterSupplierRequestRootState}
                    userDetailListResponse={mockUserDetailListResponseRootState}
                />
            </Provider>
        );

        const { queryAllByText } = wrapper;

        expect(queryAllByText(i18nHelper.translate('Common.Form.Country'))).toHaveLength(2);
        expect(queryAllByText(i18nHelper.translate('Common.Form.FirstNameLocal'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.LastNameLocal'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.FirstName'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.LastName'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.JobTitle'))).toHaveLength(2);
        expect(queryAllByText(i18nHelper.translate('Common.Form.Email'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.ContactEmail'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.ContactPhone'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.UserInformation'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.PersonalInformation'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.ContactInformation'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.SameAsRegisteredEmail'))).toHaveLength(1);

    });

    test("Render RegisterUserInformation: English official", async () => {

        const mockSupplierDetailResponseRootState: RootState.SupplierDetailState = {
            branch: {
                userBranch: {
                    contactPhoneCountryCode: 'EN',
                    jobTitleId: 0
                }
            }
        }

        const mockRegisterSupplierRequestRootState: RootState.RegisterSupplierRequestState = {
            userBranchRequest: {
                jobTitleId: 0,
                otherJobTitleName: '',
                contactEmail: '',
                contactPhoneNumber: '',
                contactPhoneNumberExt: '',
                contactPhoneCountryCode: 'EN'
            },
            userInfoRequest: {
                countryId: 2,
                firstName: '',
                lastName: '',
                firstNameLocal: '',
                lastNameLocal: '',
            }
        }

        const mockUserDetailListResponseRootState: RootState.UserDetailListState = [
            {
                sysUserId: 0,
                loginId: '',
                nameEn: '',
                lastNameEn: '',
                nameLocal: '',
                lastNameLocal: '',
                countryCode: 'EN',
                telephone: '',
                fax: '',
                email: '',
                localeId: 0,
                nameUpper: '',
                mobilePhone: '',
                tenantName: '',
                companyNameEn: [],
                companyNameLocal: [],
            }
        ]

        const store = mockStore({
            token: mockTokenState,
            country: mockCountryRootState,
            supplierDetail: mockSupplierDetailResponseRootState,
            registerSupplierRequest: mockRegisterSupplierRequestRootState,
            userDetailListResponse: mockUserDetailListResponseRootState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterUserInformation
                    form={testForm}
                    countryListState={mockCountryRootState}
                    supplierCountryCode={'EN'}
                    setUserInfoRequest={handleSetUserInformation}
                    tokenState={mockTokenState}
                    supplierDetailResponse={mockSupplierDetailResponseRootState}
                    registerSupplierRequestState={mockRegisterSupplierRequestRootState}
                    userDetailListResponse={mockUserDetailListResponseRootState}
                />
            </Provider>
        );

        const { queryAllByText } = wrapper;

        expect(queryAllByText(i18nHelper.translate('Common.Form.Country'))).toHaveLength(2);
        expect(queryAllByText(i18nHelper.translate('Common.Form.FirstNameLocal'))).toHaveLength(0);
        expect(queryAllByText(i18nHelper.translate('Common.Form.LastNameLocal'))).toHaveLength(0);
        expect(queryAllByText(i18nHelper.translate('Common.Form.FirstName'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.LastName'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.JobTitle'))).toHaveLength(2);
        expect(queryAllByText(i18nHelper.translate('Common.Form.Email'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.ContactEmail'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.ContactPhone'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.UserInformation'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.PersonalInformation'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.ContactInformation'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.SameAsRegisteredEmail'))).toHaveLength(1);
    });

});
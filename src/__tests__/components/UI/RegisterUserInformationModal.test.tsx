import * as React from "react";
import { render } from '@testing-library/react';
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { RootState } from "../../../app/reducers";
import RegisterUserInformationModal from '../../../app/components/UI/RegisterUserInformationModal'
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

const mockTokenState: RootState.TokenState = { username: "test" };

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

const closeModal = () => { }

describe("<RegisterUserInformationModal />", () => {

    test("Render RegisterUserInformationModal's label: Country is english official", async () => {


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
            userDetailListResponse: mockUserDetailListResponseRootState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterUserInformationModal
                    form={testForm}
                    countryListState={mockCountryRootState}
                    supplierCountryCode={'EN'}
                    closeModal={closeModal}
                    tokenState={mockTokenState}
                    branchIds={[1]}
                    userDetailListResponse={mockUserDetailListResponseRootState}
                    isModalEdit={false}
                />
            </Provider>
        );

        const { queryAllByText, container } = wrapper;

        expect(queryAllByText(i18nHelper.translate("RequestToJoin.Modal.Title"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("RequestToJoin.Modal.Description"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.PersonalInformation"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.Country'))).toHaveLength(2);
        expect(queryAllByText(i18nHelper.translate('Common.Form.FirstNameLocal'))).toHaveLength(0);
        expect(queryAllByText(i18nHelper.translate('Common.Form.LastNameLocal'))).toHaveLength(0);
        expect(queryAllByText(i18nHelper.translate('Common.Form.FirstName'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.LastName'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.JobTitle'))).toHaveLength(2);
        expect(queryAllByText(i18nHelper.translate('Common.Form.Email'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.ContactEmail'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.ContactPhone'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.PersonalInformation'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.ContactInformation'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.SameAsRegisteredEmail'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.ContactPhone'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.ButtonLabel.Cancel'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('RequestToJoin.Modal.SendRequest'))).toHaveLength(1);
        expect(container.getElementsByClassName('modal-backdrop ')[0]).toHaveClass('show');
    });

    test("Render RegisterUserInformationModal's label: Country is not english official", async () => {

        const mockUserDetailListResponseRootState: RootState.UserDetailListState = [
            {
                sysUserId: 2,
                loginId: '1',
                nameEn: 'name',
                lastNameEn: 'lastName',
                nameLocal: '',
                lastNameLocal: '',
                countryCode: 'TH',
                telephone: '',
                fax: '',
                email: 'test@email.com',
                localeId: 2,
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
            userDetailListResponse: mockUserDetailListResponseRootState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterUserInformationModal
                    form={testForm}
                    countryListState={mockCountryRootState}
                    supplierCountryCode={'EN'}
                    closeModal={closeModal}
                    tokenState={mockTokenState}
                    branchIds={[1]}
                    userDetailListResponse={mockUserDetailListResponseRootState}
                    isModalEdit={false}
                />
            </Provider>
        );

        const { queryAllByText, container } = wrapper;

        expect(queryAllByText(i18nHelper.translate("RequestToJoin.Modal.Title"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("RequestToJoin.Modal.Description"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.PersonalInformation"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.Country'))).toHaveLength(2);
        expect(queryAllByText(i18nHelper.translate('Common.Form.FirstNameLocal'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.LastNameLocal'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.FirstName'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.LastName'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.JobTitle'))).toHaveLength(2);
        expect(queryAllByText(i18nHelper.translate('Common.Form.Email'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.ContactEmail'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.ContactPhone'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.PersonalInformation'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.ContactInformation'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Register.Label.SameAsRegisteredEmail'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.Form.ContactPhone'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('Common.ButtonLabel.Cancel'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('RequestToJoin.Modal.SendRequest'))).toHaveLength(1);
        expect(container.getElementsByClassName('modal-backdrop ')[0]).toHaveClass('show');
    });

    test("Render RegisterUserInformationModal's on edit request to join label: Country is english official", async () => {


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
            userDetailListResponse: mockUserDetailListResponseRootState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterUserInformationModal
                    form={testForm}
                    countryListState={mockCountryRootState}
                    supplierCountryCode={'EN'}
                    closeModal={closeModal}
                    tokenState={mockTokenState}
                    branchIds={[1]}
                    userDetailListResponse={mockUserDetailListResponseRootState}
                    isModalEdit={true}
                />
            </Provider>
        );

        const { queryAllByText, container } = wrapper;

        expect(queryAllByText(i18nHelper.translate("EditRequestToJoin.Modal.Title"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('EditRequestToJoin.Modal.SendRequest'))).toHaveLength(1);
        expect(container.getElementsByClassName('modal-backdrop ')[0]).toHaveClass('show');
    });

    test("Render RegisterUserInformationModal's on edit request to join label: Country is not english official", async () => {

        const mockUserDetailListResponseRootState: RootState.UserDetailListState = [
            {
                sysUserId: 2,
                loginId: '1',
                nameEn: 'name',
                lastNameEn: 'lastName',
                nameLocal: '',
                lastNameLocal: '',
                countryCode: 'TH',
                telephone: '',
                fax: '',
                email: 'test@email.com',
                localeId: 2,
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
            userDetailListResponse: mockUserDetailListResponseRootState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterUserInformationModal
                    form={testForm}
                    countryListState={mockCountryRootState}
                    supplierCountryCode={'EN'}
                    closeModal={closeModal}
                    tokenState={mockTokenState}
                    branchIds={[1]}
                    userDetailListResponse={mockUserDetailListResponseRootState}
                    isModalEdit={true}
                />
            </Provider>
        );

        const { queryAllByText, container } = wrapper;

        expect(queryAllByText(i18nHelper.translate("EditRequestToJoin.Modal.Title"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('EditRequestToJoin.Modal.SendRequest'))).toHaveLength(1);
        expect(container.getElementsByClassName('modal-backdrop ')[0]).toHaveClass('show');
    });
});
import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import RegisterGeneralBody from "../../../app/containers/Pages/RegisterSupplier/RegisterGeneralBody";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { IdentityTypeIdEnum } from "../../../app/utils";
import { CountryResponse } from "../../../app/models";
import { i18nHelper } from '../../../app/i18n/i18n';

const mockStore = configureStore([thunk]);

beforeEach(() => {
    jest.clearAllMocks();
});

const testForm = {
    handleSetIsUseOP: jest.fn(opts => (c: any) => c),
    getFieldDecorator: jest.fn(opts => (c: any) => c),
    setFieldsValue: jest.fn(opts => (c: any) => c),
    getFieldsValue: jest.fn(opts => (c: any) => c),
    validateFields: jest.fn(opts => (c: any) => c),
};

const mockCountry: CountryResponse = {
    id: 1,
    countryName: 'mock-country-name',
    countryNameCode: 'mock-country-name-code',
    countryCode: 'mock-country-code',
    isEnglishOfficial: false,
    phoneCode: 'mock-phone-code'
};

const mockCountryInter: CountryResponse = {
    id: 1,
    countryName: 'mock-country-name',
    countryNameCode: 'mock-country-name-code',
    countryCode: 'mock-country-code',
    isEnglishOfficial: true,
    phoneCode: 'mock-phone-code'
};

describe("<RegisterGeneralBody/>", () => {
    test("Render content correctly with isUseOP is true", () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: { isUseOP: true },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name'
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name'
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={'mock-title'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identify-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'mock-lang-code'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountry}
                    form={testForm}
                />
            </Provider>
        );

        const { container } = wrapper;
        const { queryAllByText } = wrapper;
        expect(queryAllByText('mock-title')).toHaveLength(1);
        expect(queryAllByText('mock-label-tax-id')).toHaveLength(1);
        expect(queryAllByText('mock-label-branch')).toHaveLength(1);
        expect(queryAllByText('mock-label-identify-type')).toHaveLength(1);
        expect(queryAllByText('mock-label-country')).toHaveLength(1);
        expect(queryAllByText('mock-label-our-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-basic-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-service-request')).toHaveLength(1);
        expect(queryAllByText('mock-label-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-label-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-content-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-content-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(1);
        
        

        expect(container.getElementsByTagName('input')[0].checked).toEqual(true);
        expect(queryAllByText(i18nHelper.translate("Register.Label.InvitationCode"))).toHaveLength(1);
    });

    test("Render content correctly with isUseOP is false", () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: { isUseOP: false },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name'
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name'
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={'mock-title'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identify-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'mock-lang-code'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountry}
                    form={testForm}
                />
            </Provider>
        );

        const { container } = wrapper;
        const { queryAllByText } = wrapper;
        expect(queryAllByText('mock-title')).toHaveLength(1);
        expect(queryAllByText('mock-label-tax-id')).toHaveLength(1);
        expect(queryAllByText('mock-label-branch')).toHaveLength(1);
        expect(queryAllByText('mock-label-identify-type')).toHaveLength(1);
        expect(queryAllByText('mock-label-country')).toHaveLength(1);
        expect(queryAllByText('mock-label-our-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-basic-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-service-request')).toHaveLength(1);
        expect(queryAllByText('mock-label-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-label-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-content-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-content-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(0);

        expect(container.getElementsByTagName('input')[0].checked).toEqual(false);
        expect(queryAllByText(i18nHelper.translate("Register.Label.InvitationCode"))).toHaveLength(0);
    });

    test("Test click check box to change flag content should be correctly in case default isUseOP is true", async () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: { isUseOP: true },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name'
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name'
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={'mock-title'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identify-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'mock-lang-code'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountry}
                    form={testForm}
                />
            </Provider>
        );

        const { container } = wrapper;
        const { queryAllByText } = wrapper;
        expect(queryAllByText('mock-title')).toHaveLength(1);
        expect(queryAllByText('mock-label-tax-id')).toHaveLength(1);
        expect(queryAllByText('mock-label-branch')).toHaveLength(1);
        expect(queryAllByText('mock-label-identify-type')).toHaveLength(1);
        expect(queryAllByText('mock-label-country')).toHaveLength(1);
        expect(queryAllByText('mock-label-our-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-basic-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-service-request')).toHaveLength(1);
        expect(queryAllByText('mock-label-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-label-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-content-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-content-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(1);

        expect(container.getElementsByTagName('input')[0].checked).toEqual(true);
        expect(queryAllByText(i18nHelper.translate("Register.Label.InvitationCode"))).toHaveLength(1);

        fireEvent.click(container.getElementsByTagName('input')[0]);


        await waitFor(() => {
            expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(0);
            expect(container.getElementsByTagName('input')[0].checked).toEqual(false);
            expect(queryAllByText(i18nHelper.translate("Register.Label.InvitationCode"))).toHaveLength(0);
        });

    });

    test("Test click check box to change flag content should be correctly in case default isUseOP is false", async () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: { isUseOP: false },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name'
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name'
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={'mock-title'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identify-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'mock-lang-code'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountry}
                    form={testForm}
                />
            </Provider>
        );

        const { container } = wrapper;
        const { queryAllByText } = wrapper;
        expect(queryAllByText('mock-title')).toHaveLength(1);
        expect(queryAllByText('mock-label-tax-id')).toHaveLength(1);
        expect(queryAllByText('mock-label-branch')).toHaveLength(1);
        expect(queryAllByText('mock-label-identify-type')).toHaveLength(1);
        expect(queryAllByText('mock-label-country')).toHaveLength(1);
        expect(queryAllByText('mock-label-our-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-basic-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-service-request')).toHaveLength(1);
        expect(queryAllByText('mock-label-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-label-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-content-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-content-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(0);

        expect(container.getElementsByTagName('input')[0].checked).toEqual(false);
        expect(queryAllByText(i18nHelper.translate("Register.Label.InvitationCode"))).toHaveLength(0);

        fireEvent.click(container.getElementsByTagName('input')[0]);


        await waitFor(() => {
            expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(1);
            expect(container.getElementsByTagName('input')[0].checked).toEqual(true);
            expect(queryAllByText(i18nHelper.translate("Register.Label.InvitationCode"))).toHaveLength(1);
        });

    });

    test("Test render company information", async () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: {
                isUseOP: false,
                branchNumber: 'mock-branch-number',
                branchName: 'mock-branch-name',
                branchNameLocal: 'mock-branch-name-local'
            },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name',
                taxId: 'mock-taxId',
                identityTypeName: 'mock-identity-type-name',
                identityTypeId: 1
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name'
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={'mock-title'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identify-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'mock-language-code'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountry}
                />
            </Provider>
        );

        const { findByText } = wrapper;

        const labelCompanyNameLocal = await findByText(/mock-company-name-local/)
        expect(labelCompanyNameLocal).toBeDefined;

        const labelCompanyName = await findByText(/mock-company-name/)
        expect(labelCompanyName).toBeDefined;

        const labelIdentityTypeName = await findByText(/mock-identity-type-name/)
        expect(labelIdentityTypeName).toBeDefined;

        const labelTaxId = await findByText(/mock-taxId/)
        expect(labelTaxId).toBeDefined;

        const labelBranchName = await findByText(/mock-branch-name/)
        expect(labelBranchName).toBeDefined;

        const labelBranchNameLocal = await findByText(/mock-branch-name-local/)
        expect(labelBranchNameLocal).toBeDefined;

        const labelCountryName = await findByText(/mock-country-name/)
        expect(labelCountryName).toBeDefined;
    });

    test("Test render register step 1 correctly for Thai Corporate with Thai language", async () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: {
                isUseOP: false,
                isHeadQuarter: true,
                branchNumber: 'mock-branch-number',
                branchName: 'mock-branch-name',
                branchNameLocal: 'mock-branch-name-local'
            },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name',
                taxId: 'mock-taxId',
                identityTypeId: 1,
                identityTypeName: 'mock-identity-type-name',
                taxCountryCode: "TH"
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name'
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={mockRequest.supplierRequest.identityTypeId === IdentityTypeIdEnum.Corporation ? 'mock-title-company' : 'mock-title-individual'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identity-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'th'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountry}
                />
            </Provider>
        );

        const { queryAllByText } = wrapper;

        expect(queryAllByText('mock-title-company')).toHaveLength(1);
        expect(queryAllByText('mock-label-branch')).toHaveLength(1);
        expect(queryAllByText('mock-label-tax-id')).toHaveLength(1);
        expect(queryAllByText('mock-label-identity-type')).toHaveLength(1);
        expect(queryAllByText('mock-label-country')).toHaveLength(1);
        expect(queryAllByText('mock-label-our-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-basic-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-service-request')).toHaveLength(1);
        expect(queryAllByText('mock-label-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-label-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-content-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-content-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(0);
        expect(queryAllByText('mock-company-name-local (mock-company-name)')).toHaveLength(1);
        expect(queryAllByText('mock-branch-number '+ i18nHelper.translate('Common.Label.Headquarter'))).toHaveLength(1);
    });

    test("Test render register step 1 correctly for Thai Corporate with English language", async () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: {
                isUseOP: false,
                isHeadQuarter: true,
                branchNumber: 'mock-branch-number',
                branchName: 'mock-branch-name',
                branchNameLocal: 'mock-branch-name-local'
            },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name',
                taxId: 'mock-taxId',
                identityTypeId: 1,
                identityTypeName: 'mock-identity-type-name',
                taxCountryCode: "TH"
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name'
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={mockRequest.supplierRequest.identityTypeId === IdentityTypeIdEnum.Corporation ? 'mock-title-company' : 'mock-title-individual'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identity-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'en'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountry}
                />
            </Provider>
        );

        const { queryAllByText } = wrapper;

        expect(queryAllByText('mock-title-company')).toHaveLength(1);
        expect(queryAllByText('mock-label-branch')).toHaveLength(1);
        expect(queryAllByText('mock-label-tax-id')).toHaveLength(1);
        expect(queryAllByText('mock-label-identity-type')).toHaveLength(1);
        expect(queryAllByText('mock-label-country')).toHaveLength(1);
        expect(queryAllByText('mock-label-our-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-basic-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-service-request')).toHaveLength(1);
        expect(queryAllByText('mock-label-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-label-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-content-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-content-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(0);
        expect(queryAllByText('mock-company-name (mock-company-name-local)')).toHaveLength(1);
        expect(queryAllByText('mock-branch-number '+ i18nHelper.translate('Common.Label.Headquarter'))).toHaveLength(1);
    });

    test("Test render register step 1 correctly for Inter Corporate with Thai language", async () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: {
                isUseOP: false,
                isHeadQuarter: false,
                branchNumber: 'mock-branch-number',
                branchName: 'mock-branch-name',
                branchNameLocal: 'mock-branch-name-local'
            },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name',
                taxId: 'mock-taxId',
                identityTypeId: 1,
                identityTypeName: 'mock-identity-type-name',
                taxCountryCode: "US"
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name'
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={mockRequest.supplierRequest.identityTypeId === IdentityTypeIdEnum.Corporation ? 'mock-title-company' : 'mock-title-individual'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identity-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'en'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountryInter}
                />
            </Provider>
        );

        const { queryAllByText } = wrapper;

        expect(queryAllByText('mock-title-company')).toHaveLength(1);
        expect(queryAllByText('mock-label-branch')).toHaveLength(1);
        expect(queryAllByText('mock-label-tax-id')).toHaveLength(1);
        expect(queryAllByText('mock-label-identity-type')).toHaveLength(1);
        expect(queryAllByText('mock-label-country')).toHaveLength(1);
        expect(queryAllByText('mock-label-our-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-basic-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-service-request')).toHaveLength(1);
        expect(queryAllByText('mock-label-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-label-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-content-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-content-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(0);
        expect(queryAllByText('mock-company-name')).toHaveLength(1);
        expect(queryAllByText('mock-branch-number mock-branch-name')).toHaveLength(1);
    });

    test("Test render register step 1 correctly for Individual with Thai language", async () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: {
                isUseOP: false,
                branchNumber: 'mock-branch-number',
                branchName: 'mock-branch-name',
                branchNameLocal: 'mock-branch-name-local'
            },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name',
                taxId: 'mock-taxId',
                identityTypeId: 2,
                identityTypeName: 'mock-identity-type-name'
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name'
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={mockRequest.supplierRequest.identityTypeId === IdentityTypeIdEnum.Corporation ? 'mock-title-company' : 'mock-title-individual'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identity-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'th'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountry}
                />
            </Provider>
        );

        const { queryAllByText } = wrapper;

        expect(queryAllByText('mock-title-individual')).toHaveLength(1);
        expect(queryAllByText('mock-label-shop')).toHaveLength(1);
        expect(queryAllByText('mock-label-tax-id')).toHaveLength(1);
        expect(queryAllByText('mock-label-identity-type')).toHaveLength(1);
        expect(queryAllByText('mock-label-country')).toHaveLength(1);
        expect(queryAllByText('mock-label-our-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-basic-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-service-request')).toHaveLength(1);
        expect(queryAllByText('mock-label-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-label-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-content-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-content-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(0);
        expect(queryAllByText('mock-company-name-local (mock-company-name)')).toHaveLength(1);
    });

    test("Test render register step 1 correctly for Individual with English language", async () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: {
                isUseOP: false,
                branchNumber: 'mock-branch-number',
                branchName: 'mock-branch-name',
                branchNameLocal: 'mock-branch-name-local'
            },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name',
                taxId: 'mock-taxId',
                identityTypeId: 2,
                identityTypeName: 'mock-identity-type-name'
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name'
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={mockRequest.supplierRequest.identityTypeId === IdentityTypeIdEnum.Corporation ? 'mock-title-company' : 'mock-title-individual'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identity-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'en'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountry}
                />
            </Provider>
        );

        const { queryAllByText } = wrapper;

        expect(queryAllByText('mock-title-individual')).toHaveLength(1);
        expect(queryAllByText('mock-label-shop')).toHaveLength(1);
        expect(queryAllByText('mock-label-tax-id')).toHaveLength(1);
        expect(queryAllByText('mock-label-identity-type')).toHaveLength(1);
        expect(queryAllByText('mock-label-country')).toHaveLength(1);
        expect(queryAllByText('mock-label-our-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-basic-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-service-request')).toHaveLength(1);
        expect(queryAllByText('mock-label-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-label-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-content-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-content-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(0);
        expect(queryAllByText('mock-company-name (mock-company-name-local)')).toHaveLength(1);
    });

    test("Test render register step 1 correctly for Individual Inter", async () => {
        const store = mockStore({});
        const mockRequest = {
            branchRequest: {
                isUseOP: false,
                branchNumber: 'mock-branch-number',
                branchName: 'mock-branch-name',
                branchNameLocal: 'mock-branch-name-local'
            },
            supplierRequest: {
                supplierNameLocal: 'mock-company-name-local',
                supplierName: 'mock-company-name',
                taxId: 'mock-taxId',
                identityTypeId: 2,
                identityTypeName: 'mock-identity-type-name'
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name',
                }
            ]
        };
        const wrapper = render(
            <Provider store={store}>
                <RegisterGeneralBody
                    title={mockRequest.supplierRequest.identityTypeId === IdentityTypeIdEnum.Corporation ? 'mock-title-company' : 'mock-title-individual'}
                    imgType={'mock-img-type'}
                    labelTaxID={'mock-label-tax-id'}
                    labelBranch={'mock-label-branch'}
                    labelShop={'mock-label-shop'}
                    labelIdentityType={'mock-label-identity-type'}
                    labelCountry={'mock-label-country'}
                    labelOurService={'mock-label-our-service'}
                    labelBasicServices={'mock-label-basic-service'}
                    labelServiceRequest={'mock-label-service-request'}
                    labelERFX={'mock-label-erfx'}
                    labelOnlineAuction={'mock-label-online-auction'}
                    labelOnlinePurchasing={'mock-label-online-purchasing'}
                    labelSampleRequest={'mock-label-sample-request'}
                    contentERFX={'mock-content-erfx'}
                    contentOnlineAuction={'mock-content-online-auction'}
                    contentOnlinePurchasing={'mock-content-online-purchasing'}
                    contentSampleRequest={'mock-content-sample-request'}
                    languageCode={'mock-language-code'}
                    value={mockRequest}
                    alertBarOnlinePurchasing={'mock-alert-bar-online-purchasing'}
                    handleSetIsUseOP={testForm.handleSetIsUseOP}
                    country={mockCountryInter}
                />
            </Provider>
        );

        const { queryAllByText } = wrapper;

        expect(queryAllByText('mock-title-individual')).toHaveLength(1);
        expect(queryAllByText('mock-label-shop')).toHaveLength(1);
        expect(queryAllByText('mock-label-tax-id')).toHaveLength(1);
        expect(queryAllByText('mock-label-identity-type')).toHaveLength(1);
        expect(queryAllByText('mock-label-country')).toHaveLength(1);
        expect(queryAllByText('mock-label-our-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-basic-service')).toHaveLength(1);
        expect(queryAllByText('mock-label-service-request')).toHaveLength(1);
        expect(queryAllByText('mock-label-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-label-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-label-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-content-erfx')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-auction')).toHaveLength(1);
        expect(queryAllByText('mock-content-online-purchasing')).toHaveLength(1);
        expect(queryAllByText('mock-content-sample-request')).toHaveLength(1);
        expect(queryAllByText('mock-alert-bar-online-purchasing')).toHaveLength(0);
        expect(queryAllByText('mock-company-name')).toHaveLength(1);
        expect(queryAllByText('mock-company-name-local')).toHaveLength(0);
    });

});
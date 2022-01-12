import * as React from "react";
import { render,fireEvent} from "@testing-library/react";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import SearchSupplier from '../../../app/containers/Pages/RegisterSupplier/SearchSupplier';
import { RootState } from "../../../app/reducers";
import { i18nHelper } from '../../../app/i18n/i18n';

const mockStore = configureStore([thunk]);

beforeEach(() => {
    jest.clearAllMocks();
});

// const mockLanguageHeadState : RootState.LanguageHeaderState = {}
// const mockSearchSupplierResponse : RootState.SearchSupplierResponseState = {}
// const mockDbdInformationResponse : RootState.DbdInformationState = {}
// const mockRegisterSupplierResponse : RootState.RegisterSupplierResponseState = {}
// const mockSupplierDetailResponse : RootState.SupplierDetailState = {}
// const mockTokenState : RootState.TokenState = {username: "test"}
const mockIdentityTypeListState : RootState.IdentityTypeListState = [
    {
        id: 1,
        name: 'mock-status-1'
    },
    {
        id: 2,
        name: 'mock-status-2'
    }
]
// const mockPreRegisterResponse : RootState.PreRegisterResponseState = {}

const testForm = {
    getFieldDecorator: jest.fn(opts => (c: any) => c),
    onChangeTextField: jest.fn(opts => (c: any) => c),
    onChangeTelephone: jest.fn(opts => (c: any) => c),
    onChangeBillingTelephone: jest.fn(opts => (c: any) => c),
    onChangeStates: jest.fn(opts => (c: any) => c),
    handleAddressValue: jest.fn(opts => (c: any) => c),
    handleExpandAddress: jest.fn(opts => (c: any) => c),
    setFieldsValue: jest.fn(opts => (c: any) => c),
    getFieldsValue: jest.fn(opts => (c: any) => c),
    validateFields: jest.fn(opts => (c: any) => c),
    onSearchSubmit: jest.fn(opts => (c: any) => c),
    onIdentityTypeValueChange: jest.fn(opts => (c: any) => c),
    onCountryValueChange: jest.fn(opts => (c: any) => c),
    onTextValueChange: jest.fn(opts => (c: any) => c),
};

const mockCountries: RootState.CountryListState = [
    {
        id: 221,
        countryName: "Thailand",
        countryNameCode: "Common.Country.Thailand",
        countryCode: "TH",
        isEnglishOfficial: false,
        phoneCode: "66"
    },
    {
        id: 235,
        countryName: "United Kingdom",
        countryNameCode: "Common.Country.UnitedKingdom",
        countryCode: "GB",
        isEnglishOfficial: true,
        phoneCode: "44"
    },
];

describe("<SearchSupplier />", () => {
    test("Render content correctly", () => {

        const store = mockStore({
            
        });

        const wrapper = render(
                <Provider store={store}>
                    <SearchSupplier
                        form={testForm}
                        alertBar={testForm}
                        searchCompanyTitle={"mock-search-company-title"}
                        isDisableButton={false}
                        identityTypeListState={mockIdentityTypeListState}
                        countryListState={mockCountries}
                        onSearchSubmit={testForm.onSearchSubmit}
                        onIdentityTypeValueChange={testForm.onSearchSubmit}
                        onCountryValueChange={testForm.onCountryValueChange}
                        onTextValueChange={testForm.onTextValueChange}
                        customFieldValidate={testForm.validateFields}
                    />
                </Provider>
            );

            const { queryAllByText } = wrapper;
            expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.IdentityType'))).toHaveLength(2);
            expect(queryAllByText(i18nHelper.translate('Common.Form.Country'))).toHaveLength(2);
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxId"))).toHaveLength(1);
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Button.Search"))).toHaveLength(1);          

    });

    test("Render content incase disable button correctly", () => {

        const store = mockStore({
            
        });

        const wrapper = render(
                <Provider store={store}>
                    <SearchSupplier
                        form={testForm}
                        alertBar={testForm}
                        searchCompanyTitle={"mock-search-company-title"}
                        isDisableButton={true}
                        identityTypeListState={mockIdentityTypeListState}
                        countryListState={mockCountries}
                        onSearchSubmit={testForm.onSearchSubmit}
                        onIdentityTypeValueChange={testForm.onSearchSubmit}
                        onCountryValueChange={testForm.onCountryValueChange}
                        onTextValueChange={testForm.onTextValueChange}
                        customFieldValidate={testForm.validateFields}
                    />
                </Provider>
            );

            const { container } = wrapper;
            const { queryAllByText } = wrapper;
            expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.IdentityType'))).toHaveLength(2);
            expect(queryAllByText(i18nHelper.translate('Common.Form.Country'))).toHaveLength(2);
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxId"))).toHaveLength(1);
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Button.Search"))).toHaveLength(1);
            expect(container.querySelector("#sc")).toBeDisabled();         

    });

    test("Test Event should be called correctly", () => {

        const store = mockStore({
            
        });

        const wrapper = render(
                <Provider store={store}>
                    <SearchSupplier
                        form={testForm}
                        alertBar={testForm}
                        searchCompanyTitle={"mock-search-company-title"}
                        isDisableButton={false}
                        identityTypeListState={mockIdentityTypeListState}
                        countryListState={mockCountries}
                        onSearchSubmit={testForm.onSearchSubmit}
                        onIdentityTypeValueChange={testForm.onSearchSubmit}
                        onCountryValueChange={testForm.onCountryValueChange}
                        onTextValueChange={testForm.onTextValueChange}
                        customFieldValidate={testForm.validateFields}
                    />
                </Provider>
            );

            const { container } = wrapper;
            const { queryAllByText } = wrapper;
            expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.IdentityType'))).toHaveLength(2);
            expect(queryAllByText(i18nHelper.translate('Common.Form.Country'))).toHaveLength(2);
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxId"))).toHaveLength(1);
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Button.Search"))).toHaveLength(1);

            container.querySelector("#countryId")

            fireEvent.change( container.querySelector("#taxId"),
                {
                    target: { value: 'test' },
                }
            );
            expect(testForm.onTextValueChange).toHaveBeenCalledTimes(1)

            fireEvent.click( container.querySelector("#sc")
            );
            expect(testForm.onSearchSubmit).toHaveBeenCalledTimes(1)

    });
});
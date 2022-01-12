import * as React from "react";
import { render } from "@testing-library/react";
import RegisterAddressInterBody from "../../../app/containers/Pages/RegisterSupplier/RegisterAddressInterBody";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { AddressRequest, BranchRequest } from "../../../app/models";
import { AddressTypeIdEnum, AddressTypeNameEnum, CommonConstant, BranchStatusIdEnum } from "../../../app/utils";
import { RootState } from "../../../app/reducers";
import CountryService from "../../../app/services/countryService";

const mockStore = configureStore([thunk]);

beforeEach(() => {
    jest.clearAllMocks();
});

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
};

const initialBranchRequest: BranchRequest = {
    branchEmail: 'branch@branch.com',
    branchWebSite: 'string',
    branchStatusId: BranchStatusIdEnum.DraftStep2,
    isUseOP: true,
    billingContactName: 'string',
    billingContactNameLocal: 'string',
    billingContactEmail: 'string',
    billingContactPhone: 'string',
    billingContactCountryCode: CommonConstant.ThailandCountryCode,
    branchPhones: [{
        telephone: 'string',
        telephoneExt: 'string',
        countryCode: CommonConstant.ThailandCountryCode
    }]
};

const initialAddressWithoutValue = (addressTypeId: number, addressTypeCode: string) => {
    const address: AddressRequest = {
        addressId: 0,
        addressTypeId: addressTypeId,
        addressTypeName: addressTypeCode,
        buildingName: '',
        buildingNameLocal: '',
        room: '',
        roomLocal: '',
        floor: '',
        floorLocal: '',
        villageName: '',
        villageNameLocal: '',
        houseNumber: '',
        houseNumberLocal: '',
        mooNumber: '',
        mooNumberLocal: '',
        alley: '',
        alleyLocal: '',
        street: '',
        streetLocal: '',
        countryId: CommonConstant.ThailandCountryId,
        postalCode: '',
        provinceName: '',
        provinceNameLocal: '',
        districtName: '',
        districtNameLocal: '',
        subDistrictName: '',
        subDistrictNameLocal: '',
        countryName: CommonConstant.I18NThailand,
        countryCode: CommonConstant.ThailandCountryCode,
    }
    return address;
}

const initialAddressWithValue = (addressTypeId: number, addressTypeCode: string) => {
    const address: AddressRequest = {
        addressId: 0,
        addressTypeId: addressTypeId,
        addressTypeName: addressTypeCode,
        buildingName: 'buildingName',
        buildingNameLocal: 'buildingNameLocal',
        room: 'room',
        roomLocal: 'roomLocal',
        floor: 'floor',
        floorLocal: 'floorLocal',
        villageName: 'villageName',
        villageNameLocal: 'villageNameLocal',
        houseNumber: 'houseNumber',
        houseNumberLocal: 'houseNumberLocal',
        mooNumber: 'mooNumber',
        mooNumberLocal: 'mooNumberLocal',
        alley: 'alley',
        alleyLocal: 'alleyLocal',
        street: 'street',
        streetLocal: 'streetLocal',
        countryId: CommonConstant.ThailandCountryId,
        postalCode: '10200',
        provinceName: 'Bangkok',
        provinceNameLocal: 'กรุงเทพมหานคร',
        districtName: 'Phra Nakhon',
        districtNameLocal: 'พระนคร',
        subDistrictName: 'Phra Borom Maha Ratchawang',
        subDistrictNameLocal: 'พระบรมมหาราชวัง',
        countryName: CommonConstant.I18NThailand,
        countryCode: CommonConstant.ThailandCountryCode,
    }
    return address;
}

const initialAddressWithLocationValue = (addressTypeId: number, addressTypeCode: string) => {
    const address: AddressRequest = {
        addressId: 0,
        addressTypeId: addressTypeId,
        addressTypeName: addressTypeCode,
        buildingName: '',
        buildingNameLocal: '',
        room: '',
        roomLocal: '',
        floor: '',
        floorLocal: '',
        villageName: '',
        villageNameLocal: '',
        houseNumber: '',
        houseNumberLocal: '',
        mooNumber: '',
        mooNumberLocal: '',
        alley: '',
        alleyLocal: '',
        street: '',
        streetLocal: '',
        countryId: CommonConstant.ThailandCountryId,
        postalCode: '10200',
        provinceName: 'Bangkok',
        provinceNameLocal: 'กรุงเทพมหานคร',
        districtName: 'Phra Nakhon',
        districtNameLocal: 'พระนคร',
        subDistrictName: 'Phra Borom Maha Ratchawang',
        subDistrictNameLocal: 'พระบรมมหาราชวัง',
        countryName: CommonConstant.I18NThailand,
        countryCode: CommonConstant.ThailandCountryCode,
    }
    return address;
}

const mockAddressWithoutValue: AddressRequest[] = [
    initialAddressWithoutValue(AddressTypeIdEnum.Supplier, AddressTypeNameEnum.Supplier),
    initialAddressWithoutValue(AddressTypeIdEnum.Document, AddressTypeNameEnum.Document),
    initialAddressWithoutValue(AddressTypeIdEnum.Billing, AddressTypeNameEnum.Billing),
];

const mockAddressWithLocationValue: AddressRequest[] = [
    initialAddressWithLocationValue(AddressTypeIdEnum.Supplier, AddressTypeNameEnum.Supplier),
    initialAddressWithLocationValue(AddressTypeIdEnum.Document, AddressTypeNameEnum.Document),
    initialAddressWithLocationValue(AddressTypeIdEnum.Billing, AddressTypeNameEnum.Billing),
];

const mockAddressWithDataSameAddress: AddressRequest[] = [
    initialAddressWithValue(AddressTypeIdEnum.Supplier, AddressTypeNameEnum.Supplier),
    initialAddressWithValue(AddressTypeIdEnum.Document, AddressTypeNameEnum.Document),
    initialAddressWithValue(AddressTypeIdEnum.Billing, AddressTypeNameEnum.Billing),
];

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

const mockInitialRegisterSupplierRequest: RootState.RegisterSupplierRequestState = {
    username: 'mock@mock.com',
    userBranchId: 0,
    activateStatusId: 1,
    currentLanguageCode: CommonConstant.ThailandCountryCode,
    supplierRequest: { identityTypeId: 1 },
    branchRequest: initialBranchRequest,
    addressRequests: mockAddressWithoutValue
}

describe("<RegisterAddressInterBody/>", () => {

    test("Render content correctly with out billing contact", async () => {

        const store = mockStore({
            registerSupplierRequest: mockInitialRegisterSupplierRequest,
            country: mockCountries
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterAddressInterBody
                    form={testForm}
                    title={'mock-title-address'}
                    titleSupplierAddress={'mock-title-supplierAddress'}
                    titleDocumentAddress={'mock-title-documentAddress'}
                    titleBillingAddress={'mock-title-billingAddress'}
                    titleBillingContact={'mock-title-billingContact'}
                    labelTitle={'mock-title-inter'}
                    labelTitleLocal={'mock-title-local'}
                    isUseOP={false}
                    toggleExpandAddress={true}
                    addressValue={mockAddressWithoutValue}
                    countryListValue={mockCountries}
                    taxCountryCode={CommonConstant.ThailandCountryCode}
                    onChangeTextField={testForm.onChangeTextField}
                    onChangeTelephone={testForm.onChangeTelephone}
                    onChangeBillingTelephone={testForm.onChangeBillingTelephone}
                    handleAddressValue={testForm.handleAddressValue}
                    handleExpandAddress={testForm.handleAddressValue}
                >
                </RegisterAddressInterBody>
            </Provider>
        );
        const { queryAllByText } = wrapper;
        expect(queryAllByText('mock-title-address')).toHaveLength(1);
        expect(queryAllByText('mock-title-supplierAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-documentAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-billingAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-billingContact')).toHaveLength(0);
        expect(queryAllByText('mock-title-inter')).toHaveLength(3);
        expect(queryAllByText('mock-title-local')).toHaveLength(3);

        expect(queryAllByText("Address")).toHaveLength(6);
        expect(queryAllByText("Street")).toHaveLength(6);
        expect(queryAllByText("Country")).toHaveLength(12);
        expect(queryAllByText("Province/State")).toHaveLength(6);
        expect(queryAllByText("District/City")).toHaveLength(6);
        expect(queryAllByText("Sub District")).toHaveLength(6);
        expect(queryAllByText("Postal Code")).toHaveLength(6);
    });

    test("Render content correctly with billing contact", async () => {

        const store = mockStore({
            registerSupplierRequest: mockInitialRegisterSupplierRequest,
            country: mockCountries
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterAddressInterBody
                    form={testForm}
                    title={'mock-title-address'}
                    titleSupplierAddress={'mock-title-supplierAddress'}
                    titleDocumentAddress={'mock-title-documentAddress'}
                    titleBillingAddress={'mock-title-billingAddress'}
                    titleBillingContact={'mock-title-billingContact'}
                    labelTitle={'mock-title-inter'}
                    labelTitleLocal={'mock-title-local'}
                    isUseOP={true}
                    toggleExpandAddress={true}
                    addressValue={mockAddressWithoutValue}
                    countryListValue={mockCountries}
                    taxCountryCode={CommonConstant.ThailandCountryCode}
                    onChangeTextField={testForm.onChangeTextField}
                    onChangeTelephone={testForm.onChangeTelephone}
                    onChangeBillingTelephone={testForm.onChangeBillingTelephone}
                    handleAddressValue={testForm.handleAddressValue}
                    handleExpandAddress={testForm.handleAddressValue}
                >
                </RegisterAddressInterBody>
            </Provider>
        );
        const { queryAllByText } = wrapper;
        expect(queryAllByText('mock-title-address')).toHaveLength(1);
        expect(queryAllByText('mock-title-supplierAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-documentAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-billingAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-billingContact')).toHaveLength(1);
        expect(queryAllByText('mock-title-inter')).toHaveLength(3);
        expect(queryAllByText('mock-title-local')).toHaveLength(3);

        expect(queryAllByText("Address")).toHaveLength(6);
        expect(queryAllByText("Street")).toHaveLength(6);
        expect(queryAllByText("Country")).toHaveLength(12);
        expect(queryAllByText("Province/State")).toHaveLength(6);
        expect(queryAllByText("District/City")).toHaveLength(6);
        expect(queryAllByText("Sub District")).toHaveLength(6);
        expect(queryAllByText("Postal Code")).toHaveLength(6);

        // Billing Contact
        expect(queryAllByText("Billing Contact Name (Local)")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Name (EN)")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Phone")).toHaveLength(2);
        expect(queryAllByText("Billing Contact Email")).toHaveLength(1);
    });

    test("Render content with all address value correctly", async () => {

        const store = mockStore({
            registerSupplierRequest: mockInitialRegisterSupplierRequest,
            country: mockCountries
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterAddressInterBody
                    form={testForm}
                    title={'mock-title-address'}
                    titleSupplierAddress={'mock-title-supplierAddress'}
                    titleDocumentAddress={'mock-title-documentAddress'}
                    titleBillingAddress={'mock-title-billingAddress'}
                    titleBillingContact={'mock-title-billingContact'}
                    labelTitle={'mock-title-inter'}
                    labelTitleLocal={'mock-title-local'}
                    isUseOP={true}
                    toggleExpandAddress={true}
                    addressValue={mockAddressWithDataSameAddress}
                    countryListValue={mockCountries}
                    taxCountryCode={CommonConstant.ThailandCountryCode}
                    onChangeTextField={testForm.onChangeTextField}
                    onChangeTelephone={testForm.onChangeTelephone}
                    onChangeBillingTelephone={testForm.onChangeBillingTelephone}
                    handleAddressValue={testForm.handleAddressValue}
                    handleExpandAddress={testForm.handleAddressValue}
                >
                </RegisterAddressInterBody>
            </Provider>
        );
        const { queryAllByText } = wrapper;
        expect(queryAllByText('mock-title-address')).toHaveLength(1);
        expect(queryAllByText('mock-title-supplierAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-documentAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-billingAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-billingContact')).toHaveLength(1);
        expect(queryAllByText('mock-title-inter')).toHaveLength(3);
        expect(queryAllByText('mock-title-local')).toHaveLength(3);

        expect(queryAllByText("Address")).toHaveLength(6);
        expect(queryAllByText("Street")).toHaveLength(6);
        expect(queryAllByText("Country")).toHaveLength(12);
        expect(queryAllByText("Province/State")).toHaveLength(6);
        expect(queryAllByText("District/City")).toHaveLength(6);
        expect(queryAllByText("Sub District")).toHaveLength(6);
        expect(queryAllByText("Postal Code")).toHaveLength(6);

        // Billing Contact
        expect(queryAllByText("Billing Contact Name (Local)")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Name (EN)")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Phone")).toHaveLength(2);
        expect(queryAllByText("Billing Contact Email")).toHaveLength(1);
    });

    test("Render content with location address value correctly", async () => {

        const store = mockStore({
            registerSupplierRequest: mockInitialRegisterSupplierRequest,
            country: mockCountries
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterAddressInterBody
                    form={testForm}
                    title={'mock-title-address'}
                    titleSupplierAddress={'mock-title-supplierAddress'}
                    titleDocumentAddress={'mock-title-documentAddress'}
                    titleBillingAddress={'mock-title-billingAddress'}
                    titleBillingContact={'mock-title-billingContact'}
                    labelTitle={'mock-title-inter'}
                    labelTitleLocal={'mock-title-local'}
                    isUseOP={true}
                    toggleExpandAddress={true}
                    addressValue={mockAddressWithLocationValue}
                    countryListValue={mockCountries}
                    taxCountryCode={CommonConstant.ThailandCountryCode}
                    onChangeTextField={testForm.onChangeTextField}
                    onChangeTelephone={testForm.onChangeTelephone}
                    onChangeBillingTelephone={testForm.onChangeBillingTelephone}
                    handleAddressValue={testForm.handleAddressValue}
                    handleExpandAddress={testForm.handleAddressValue}
                >
                </RegisterAddressInterBody>
            </Provider>
        );
        const { queryAllByText } = wrapper;

        expect(queryAllByText('mock-title-address')).toHaveLength(1);
        expect(queryAllByText('mock-title-supplierAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-documentAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-billingAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-billingContact')).toHaveLength(1);
        expect(queryAllByText('mock-title-inter')).toHaveLength(3);
        expect(queryAllByText('mock-title-local')).toHaveLength(3);

        expect(queryAllByText("Address")).toHaveLength(6);
        expect(queryAllByText("Street")).toHaveLength(6);
        expect(queryAllByText("Country")).toHaveLength(12);
        expect(queryAllByText("Province/State")).toHaveLength(6);
        expect(queryAllByText("District/City")).toHaveLength(6);
        expect(queryAllByText("Sub District")).toHaveLength(6);
        expect(queryAllByText("Postal Code")).toHaveLength(6);

        expect(queryAllByText("Company Email")).toHaveLength(1);
        expect(queryAllByText("Office Phone Number")).toHaveLength(1);
        expect(queryAllByText("Website")).toHaveLength(1);
        expect(queryAllByText("Ext.")).toHaveLength(1);
        expect(queryAllByText("Same as Company Address")).toHaveLength(2);
        // Billing Contact
        expect(queryAllByText("Billing Contact Name (Local)")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Name (EN)")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Phone")).toHaveLength(2);
        expect(queryAllByText("Billing Contact Email")).toHaveLength(1);
    });

    test("Render content correctly", async () => {
        jest.spyOn(CountryService, 'getCountry').mockImplementation(
            (callback: Function) => {
                callback(false, [1, 2, 3])
            }
        );
        const store = mockStore({
            dispatch: jest.fn(),
            useSelector: jest.fn(),
            registerSupplierRequest: { branchRequest: {} },
            addressRequestValue: { countryCode: 'mock-country-code' },
            country: [],
            citySupplierList: [{
                id: 'mock-id',
                city: 'mock-city',
                cityLocal: 'mock-city-local',
                countryCode: 'mock-country-code',
                stateName: 'mock-state-name',
                stateNameLocal: 'state-name-local',
                subDistrict: 'mock-sub-district',
                subDistrictLocal: 'mock-sub-district-local',
                postalCode: 'mock-postal-code',
                provinceTaxCode: 'mock-province-tax-code'
            }]
        });
        const mockRequest = {
            branchRequest: {
                isUseOP: false,
                branchNumber: 'mock-branch-number',
                branchName: 'mock-branch-name',
                branchNameLocal: 'mock-branch-name-local'
            },
            supplierRequest: {
                supplierNameLocal: 'mock-supplier-name-local',
                supplierName: 'mock-supplier-name',
                taxId: 'mock-taxId',
                identityTypeName: 'mock-identity-type-name',
                isRDVerify: true,
                taxCountryCode: 'mock-country-code'
            },
            addressRequests: [
                {
                    countryName: 'mock-country-name',
                    countryCode: 'mock-country-code',
                    addressTypeName: 'Common.AddressType.Supplier'
                },
                {
                    countryName: 'mock-country-name',
                    countryCode: 'mock-country-code',
                    addressTypeName: 'Common.AddressType.Document'
                },
                {
                    countryName: 'mock-country-name',
                    countryCode: 'mock-country-code',
                    addressTypeName: 'Common.AddressType.Billing'
                }
            ]
        };
        const isToggleExpandAddress = true;
        const countryListState: RootState.CountryListState = [{
            countryCode: 'mock-country-code',
            isEnglishOfficial: false
        }];

        const handleChangeTextSupplier = jest.fn(opts => () => { });
        const handleTelephone = jest.fn(opts => () => { });
        const handleฺฺBillingContactTelephone = jest.fn(opts => () => { });
        const handleAddressValue = jest.fn(opts => () => { });
        const handleExpandAddress = jest.fn(opts => () => { });
        const wrapper = render(
            <Provider store={store}>
                <RegisterAddressInterBody
                    form={testForm}
                    title={'mock-title-name'}
                    titleSupplierAddress={'mock-title-supplier-address'}
                    titleDocumentAddress={'mock-title-document-address'}
                    titleBillingAddress={'mock-title-billing-address'}
                    titleBillingContact={'mock-title-billing-contact'}
                    labelTitle={'mock-label-title'}
                    labelTitleLocal={'mock-title-local'}
                    isUseOP={mockRequest.branchRequest.isUseOP}
                    toggleExpandAddress={isToggleExpandAddress}
                    addressValue={mockRequest.addressRequests}
                    countryListValue={countryListState}
                    taxCountryCode={mockRequest.supplierRequest.taxCountryCode}
                    onChangeTextField={handleChangeTextSupplier}
                    onChangeTelephone={handleTelephone}
                    onChangeBillingTelephone={handleฺฺBillingContactTelephone}
                    handleAddressValue={handleAddressValue}
                    handleExpandAddress={handleExpandAddress}
                >
                </RegisterAddressInterBody>
            </Provider>
        );
        const { findByText, findAllByText } = wrapper;
        const title = await findByText(/mock-title-name/)
        expect(title).toBeDefined;
        const titleSupplierAddress = await findByText(/mock-title-supplier-address/)
        expect(titleSupplierAddress).toBeDefined;
        const titleDocumentAddress = await findByText(/mock-title-document-address/)
        expect(titleDocumentAddress).toBeDefined;
        const labelTitle = await findAllByText(/mock-label-title/)
        expect(labelTitle).toHaveLength(3);
        const labelTitleLocal = await findAllByText(/mock-title-local/)
        expect(labelTitleLocal).toHaveLength(3);
    });

    test("Render content with individual", async () => {
        const registerSupplierRequest = { ...mockInitialRegisterSupplierRequest };
        registerSupplierRequest.supplierRequest.identityTypeId = 0;

        const store = mockStore({
            registerSupplierRequest: registerSupplierRequest,
            country: mockCountries
        });

        const wrapper = render(
            <Provider store={store}>StatesResponse
                <RegisterAddressInterBody
                    form={testForm}
                    title={'mock-title-address'}
                    titleSupplierAddress={'mock-title-supplierAddress'}
                    titleDocumentAddress={'mock-title-documentAddress'}
                    titleBillingAddress={'mock-title-billingAddress'}
                    titleBillingContact={'mock-title-billingContact'}
                    labelTitle={'mock-title-inter'}
                    labelTitleLocal={'mock-title-local'}
                    isUseOP={true}
                    toggleExpandAddress={true}
                    addressValue={mockAddressWithLocationValue}
                    countryListValue={mockCountries}
                    taxCountryCode={CommonConstant.ThailandCountryCode}
                    onChangeTextField={testForm.onChangeTextField}
                    onChangeTelephone={testForm.onChangeTelephone}
                    onChangeBillingTelephone={testForm.onChangeBillingTelephone}
                    handleAddressValue={testForm.handleAddressValue}
                    handleExpandAddress={testForm.handleAddressValue}
                >
                </RegisterAddressInterBody>
            </Provider>
        );
        const { queryAllByText } = wrapper;

        expect(queryAllByText('mock-title-address')).toHaveLength(1);
        expect(queryAllByText('mock-title-supplierAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-documentAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-billingAddress')).toHaveLength(1);
        expect(queryAllByText('mock-title-billingContact')).toHaveLength(1);
        expect(queryAllByText('mock-title-inter')).toHaveLength(3);
        expect(queryAllByText('mock-title-local')).toHaveLength(3);

        expect(queryAllByText("Address")).toHaveLength(6);
        expect(queryAllByText("Street")).toHaveLength(6);
        expect(queryAllByText("Country")).toHaveLength(12);
        expect(queryAllByText("Province/State")).toHaveLength(6);
        expect(queryAllByText("District/City")).toHaveLength(6);
        expect(queryAllByText("Sub District")).toHaveLength(6);
        expect(queryAllByText("Postal Code")).toHaveLength(6);

        expect(queryAllByText("Email")).toHaveLength(1);
        expect(queryAllByText("Office Phone Number")).toHaveLength(1);
        expect(queryAllByText("Website")).toHaveLength(1);
        expect(queryAllByText("Ext.")).toHaveLength(1);
        expect(queryAllByText("Same as Business Address")).toHaveLength(2);
        // Billing Contact
        expect(queryAllByText("Billing Contact Name (Local)")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Name (EN)")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Phone")).toHaveLength(2);
        expect(queryAllByText("Billing Contact Email")).toHaveLength(1);
    });
});
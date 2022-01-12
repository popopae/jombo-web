import * as React from "react";
import { render } from "@testing-library/react";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { Router } from "react-router";

import { RootState } from "../../../app/reducers";
import RegisterSupplierForm from '../../../app/containers/Pages/RegisterSupplier/RegisterSupplierForm';
import { i18nHelper } from '../../../app/i18n/i18n';
import { BranchResponse } from "../../../app/models";
import { AddressResponse } from "../../../app/models";
import { AddressTypeIdEnum, AddressTypeNameEnum, CommonConstant, BranchStatusIdEnum, TokenHelper } from "../../../app/utils";

const mockStore = configureStore([thunk]);

beforeEach(() => {
    jest.clearAllMocks();
});

const history = createBrowserHistory();

const initialAddressWithValue = (addressTypeId: number, addressTypeCode: string) => {
    const address: AddressResponse = {
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
        countryNameCode: 'Common.Country.Thailand',
    }
    return address;
}

const initialBranchResponse: BranchResponse = {
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
    }],
    addresses: [
        initialAddressWithValue(AddressTypeIdEnum.Supplier, AddressTypeNameEnum.Supplier),
        initialAddressWithValue(AddressTypeIdEnum.Document, AddressTypeNameEnum.Document),
        initialAddressWithValue(AddressTypeIdEnum.Billing, AddressTypeNameEnum.Billing),
    ],
    userBranch: {id : 1, branchId: 1,activateStatusId: 1}
};

const mockLanguageHeadState : RootState.LanguageHeaderState = {}
const mockDbdInformationResponse : RootState.DbdInformationState = {}
const mockRegisterSupplierResponse : RootState.RegisterSupplierResponseState = {
    supplierId: 1,
    addressId: 1,
    userBranchId: 1,
    supplierName: 'mock-supplier-name',
    supplierNameLocal: 'mock-supplier-name-local',
    branchName: 'mock-branch-name',
    branchNameLocal: 'mock-branch-name-local',
    branchStatusId: 1,
    taxId: 'mock-tax-id',
    registeredCapital: 1,
    currencyCode:    'mock-currencyCode',
    yearEstablished: 'mock-year',
    firstName: 'mock-first-name',
    lastName: 'mock-last-name',
    firstNameLocal: 'mock-first-name-local',
    lastNameLocal: 'mock-first-name-local',
    isVatRegistration: true

}

const initialSupplierDetailResponse = (identityTypeId : number) => {
    const mockSupplierDetailResponse : RootState.SupplierDetailState = {
        supplierId: 1,
        supplierName: 'mock-supplier-name',
        supplierNameLocal: 'mock-supplier-name-local',
        firstName: 'mock-first-name',
        lastName: 'mock-last-name',
        firstNameLocal: 'mock-first-name-local',
        lastNameLocal: 'mock-first-name-local',
        isVatRegistration: true,
        taxId: 'mock-tax-id',
        taxCountryCode: 'TH',
    
        identityTypeId: identityTypeId,
        identityTypeName: 'mock-identity-type',
        supplierStatusId: 1,
        supplierStatusName: 'mock-supplier-status-name',
        isRDVerify: true,
    
        createdBy: 1,
        createdAt: new Date(),
        updatedBy: 1,
        updatedAt: new Date(),
    
        branch: initialBranchResponse,
    
    }
    return mockSupplierDetailResponse;
}

const mockTokenState : RootState.TokenState = {username: "test", }
const mockIdentityTypeListState : RootState.IdentityTypeListState = []
const mockPreRegisterResponse : RootState.PreRegisterResponseState = {}
const mockCountryListState: RootState.CountryListState = [
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

const initialRegisterSupplierRequest = (identityTypeId : number) => {
    const mockRegisterSupplierRequest : RootState.RegisterSupplierRequestState = {
        username: 'username',
        userBranchId: 1,
        activateStatusId: 1,
        currentLanguageCode: 'th',
        supplierRequest: {
            identityTypeId: identityTypeId,
        },
        branchRequest: {},
        addressRequests: [initialAddressWithValue(AddressTypeIdEnum.Supplier, AddressTypeNameEnum.Supplier),
            initialAddressWithValue(AddressTypeIdEnum.Document, AddressTypeNameEnum.Document),
            initialAddressWithValue(AddressTypeIdEnum.Billing, AddressTypeNameEnum.Billing),],
    
    }
    return mockRegisterSupplierRequest;
}

const mockStateListState : RootState.StateListState = [
    {
        stateNameLocal: "กรุงเทพมหานคร",
        stateName: "Bangkok",
    },
    {
        stateNameLocal: "อำนาจเจริญ",
        stateName: "Amnat Charoen",
    }
];
const mockBusinessType : RootState.BusinessTypeListState = [{
    id: 1,
    name: 'string',
    description: 'string',
}]
const mockUploadFileState = {}

describe("<RegisterSupplierForm />", () => {
    test("Render content correctly", () => {

        const store = mockStore({
            
            country : mockCountryListState,
            identityType : mockIdentityTypeListState,
            languageHeader: mockLanguageHeadState,
            dbdInformation : mockDbdInformationResponse,
            registerSupplierResponse : mockRegisterSupplierResponse,
            supplierDetail: initialSupplierDetailResponse(1),
            token : mockTokenState,
            preRegisterResponse : mockPreRegisterResponse,
            supplierDataTable: {totalRecord: 1},
            businessType: mockBusinessType,
            registerSupplierRequest: initialRegisterSupplierRequest(1),
            stateList: mockStateListState
        });

        jest.spyOn(TokenHelper, 'getToken').mockImplementation(function () {
                return {accessToken: "username"};
            }
        );

        jest.spyOn(TokenHelper, 'DecodeToken').mockImplementation(function (token) {
                return {username: "username"};
            }
        );

        window.HTMLElement.prototype.scrollIntoView = function() {};

        const wrapper = render(
                <Provider store={store}>
                    <Router history={history}>
                        <RegisterSupplierForm
                            history={history}
                            location={history.location}
                            match={null}
                    
                            registerSupplierResponseState={mockRegisterSupplierResponse}
                            registerSupplierRequestState={initialRegisterSupplierRequest(1)}
                            supplierDetailResponse={initialSupplierDetailResponse(1)}
                            languageHeaderState={mockLanguageHeadState}
                            countryListState={mockCountryListState}
                            stateListState={mockStateListState}
                            businessTypeState={mockBusinessType}
                            tokenState={mockTokenState}
                            uploadFileState={mockUploadFileState}
                        />
                    </Router>
                </Provider>
            );

            const { queryAllByText } = wrapper;
            expect(queryAllByText(i18nHelper.translate("Register.Label.GeneralDetails"))).toHaveLength(1);
            expect(queryAllByText(i18nHelper.translate("Register.Title.RegisterCompany"))).toHaveLength(2);
    });

    test("Render content with individual correctly", () => {

        const store = mockStore({
            
            country : mockCountryListState,
            identityType : mockIdentityTypeListState,
            languageHeader: mockLanguageHeadState,
            dbdInformation : mockDbdInformationResponse,
            registerSupplierResponse : mockRegisterSupplierResponse,
            supplierDetail: initialSupplierDetailResponse(2),
            token : mockTokenState,
            preRegisterResponse : mockPreRegisterResponse,
            supplierDataTable: {totalRecord: 1},
            businessType: mockBusinessType,
            registerSupplierRequest: initialRegisterSupplierRequest(2),
            stateList: mockStateListState
        });

        jest.spyOn(TokenHelper, 'getToken').mockImplementation(function () {
                return {accessToken: "username"};
            }
        );

        jest.spyOn(TokenHelper, 'DecodeToken').mockImplementation(function (token) {
                return {username: "username"};
            }
        );

        window.HTMLElement.prototype.scrollIntoView = function() {};

        const wrapper = render(
                <Provider store={store}>
                    <Router history={history}>
                        <RegisterSupplierForm
                            history={history}
                            location={history.location}
                            match={null}
                    
                            registerSupplierResponseState={mockRegisterSupplierResponse}
                            registerSupplierRequestState={initialRegisterSupplierRequest(2)}
                            supplierDetailResponse={initialSupplierDetailResponse(2)}
                            languageHeaderState={mockLanguageHeadState}
                            countryListState={mockCountryListState}
                            stateListState={mockStateListState}
                            businessTypeState={mockBusinessType}
                            tokenState={mockTokenState}
                            uploadFileState={mockUploadFileState}
                        />
                    </Router>
                </Provider>
            );

            const { queryAllByText } = wrapper;
            expect(queryAllByText(i18nHelper.translate("Register.Label.GeneralDetails"))).toHaveLength(1);
            expect(queryAllByText(i18nHelper.translate("Register.Title.RegisterBusiness"))).toHaveLength(1);
    });


});
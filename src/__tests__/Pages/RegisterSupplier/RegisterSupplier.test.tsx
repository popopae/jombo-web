import * as React from "react";
import { render } from "@testing-library/react";
import { Router } from "react-router";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { createBrowserHistory } from "history";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import RegisterSupplier from '../../../app/containers/Pages/RegisterSupplier/RegisterSupplier';
import { RootState } from "../../../app/reducers";
import { i18nHelper } from '../../../app/i18n/i18n';

const mockStore = configureStore([thunk]);

beforeEach(() => {
    jest.clearAllMocks();
});

const history = createBrowserHistory();

const mockLanguageHeadState : RootState.LanguageHeaderState = {}
const mockSearchSupplierResponse : RootState.SearchSupplierResponseState = {}
const mockDbdInformationResponse : RootState.DbdInformationState = {}
const mockRegisterSupplierResponse : RootState.RegisterSupplierResponseState = {}
const mockSupplierDetailResponse : RootState.SupplierDetailState = {}
const mockTokenState : RootState.TokenState = {username: "test"}
const mockIdentityTypeListState : RootState.IdentityTypeListState = []
const mockPreRegisterResponse : RootState.PreRegisterResponseState = {}
const mockCountryListState : RootState.CountryListState = []

describe("<RegisterSupplier />", () => {
    test("Render content correctly", () => {

        const store = mockStore({
            
            searchSupplier : mockSearchSupplierResponse,
            country : mockCountryListState,
            identityType : mockIdentityTypeListState,
            languageHeader: mockLanguageHeadState,
            dbdInformation : mockDbdInformationResponse,
            registerSupplierResponse : mockRegisterSupplierResponse,
            supplierDetail: mockSupplierDetailResponse,
            token : mockTokenState,
            preRegisterResponse : mockPreRegisterResponse,
            supplierDataTable: {totalRecord: 1,totalItem: 0}
        });

        const wrapper = render(
                <Provider store={store}>
                    <Router history={history}>
                        <RegisterSupplier
                            history={history}
                            location={history.location}
                            match={null}

                            languageHeaderState={mockLanguageHeadState}

                            countryListState={mockCountryListState}
                            searchSupplierResponse={mockSearchSupplierResponse}
                    
                            dbdInformationResponse={mockDbdInformationResponse}
                    
                            registerSupplierResponse={mockRegisterSupplierResponse}
                    
                            supplierDetailResponse={mockSupplierDetailResponse}
                    
                            tokenState={mockTokenState}
                    
                            identityTypeListState={mockIdentityTypeListState}
                    
                            preRegisterResponse={mockPreRegisterResponse}
                            
                        />
                    </Router>
                </Provider>
            );

            const { queryAllByText } = wrapper;
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Headline"))).toHaveLength(1); 

    });

    test("Render content with No Supplier List should show Search Component", () => {

        const store = mockStore({
            
            searchSupplier : mockSearchSupplierResponse,
            country : mockCountryListState,
            identityType : mockIdentityTypeListState,
            languageHeader: mockLanguageHeadState,
            dbdInformation : mockDbdInformationResponse,
            registerSupplierResponse : mockRegisterSupplierResponse,
            supplierDetail: mockSupplierDetailResponse,
            token : mockTokenState,
            preRegisterResponse : mockPreRegisterResponse,
            supplierDataTable: {totalRecord: 1,totalItem: 0}
        });

        const wrapper = render(
                <Provider store={store}>
                    <Router history={history}>
                        <RegisterSupplier
                            history={history}
                            location={history.location}
                            match={null}

                            languageHeaderState={mockLanguageHeadState}

                            countryListState={mockCountryListState}
                            searchSupplierResponse={mockSearchSupplierResponse}
                    
                            dbdInformationResponse={mockDbdInformationResponse}
                    
                            registerSupplierResponse={mockRegisterSupplierResponse}
                    
                            supplierDetailResponse={mockSupplierDetailResponse}
                    
                            tokenState={mockTokenState}
                    
                            identityTypeListState={mockIdentityTypeListState}
                    
                            preRegisterResponse={mockPreRegisterResponse}
                            
                        />
                    </Router>
                </Provider>
            );

            const { queryAllByText } = wrapper;
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Headline"))).toHaveLength(1); 

    });

    test("Render content with Supplier List should not show Search Component correctly", () => {

        const store = mockStore({
            
            searchSupplier : mockSearchSupplierResponse,
            country : mockCountryListState,
            identityType : mockIdentityTypeListState,
            languageHeader: mockLanguageHeadState,
            dbdInformation : mockDbdInformationResponse,
            registerSupplierResponse : mockRegisterSupplierResponse,
            supplierDetail: mockSupplierDetailResponse,
            token : mockTokenState,
            preRegisterResponse : mockPreRegisterResponse,
            supplierDataTable: {totalRecord: 1,totalItem: 1}
        });

        const wrapper = render(
                <Provider store={store}>
                    <Router history={history}>
                        <RegisterSupplier
                            history={history}
                            location={history.location}
                            match={null}

                            languageHeaderState={mockLanguageHeadState}

                            countryListState={mockCountryListState}
                            searchSupplierResponse={mockSearchSupplierResponse}
                    
                            dbdInformationResponse={mockDbdInformationResponse}
                    
                            registerSupplierResponse={mockRegisterSupplierResponse}
                    
                            supplierDetailResponse={mockSupplierDetailResponse}
                    
                            tokenState={mockTokenState}
                    
                            identityTypeListState={mockIdentityTypeListState}
                    
                            preRegisterResponse={mockPreRegisterResponse}
                            
                        />
                    </Router>
                </Provider>
            );

            const { queryAllByText } = wrapper;
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Headline"))).toHaveLength(1);
            expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.IdentityType'))).toHaveLength(0);
            expect(queryAllByText(i18nHelper.translate('Common.Form.Country'))).toHaveLength(0);
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxId"))).toHaveLength(0);
            expect(queryAllByText(i18nHelper.translate("SearchSupplier.Button.Search"))).toHaveLength(0);  

    });

});
import * as React from "react";
import { render } from "@testing-library/react";
import RegisterSupplierSearchResultIndividual from "../../../app/containers/Pages/RegisterSupplier/RegisterSupplierSearchResultIndividual";
import { } from 'jest';
import { Form } from "antd";
import { i18nHelper } from '../../../app/i18n/i18n';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';

const mockStore = configureStore([thunk]);

beforeEach(() => {
    jest.clearAllMocks();
});


const testForm = {
    onPreRegisterSubmit: jest.fn(opts => (c: any) => c),
    onPreRegisterValueChange: jest.fn(opts => (c: any) => c),
    onRadioValueChange: jest.fn(opts => (c: any) => c),
    onVatRadioValueChange: jest.fn(opts => (c: any) => c),
    validateBranchNumber: jest.fn(opts => (c: any) => c),
};

describe("<RegisterSupplierSearchResultIndividual/>", () => {
    test("Render content with isEnglishOfficial is false correctly", () => {

        const store = mockStore({});
        const ContainerMock = (props:any) => {
            return(
                <Provider store={store}>
                    <RegisterSupplierSearchResultIndividual
                        form={props.form}
                        taxId={"mock-tax-id"}
                        taxCountryCode={""}
                        username={""}
                        onPreRegisterSubmit={testForm.onPreRegisterSubmit}
                        onPreRegisterValueChange={testForm.onPreRegisterValueChange}
                        onRadioValueChange={testForm.onRadioValueChange}
                        isOpen={true}
                        isDisableNameLocal={true}
                        isVatChecked={true}
                        isDisableRadioButton={true}
                        isEnglishOfficial={false}
                        isHeadQuarter={true}
                        validateBranchNumber={testForm.validateBranchNumber}
                        onVatRadioValueChange={testForm.onVatRadioValueChange}
                    />
                </Provider>
            )}
        const ComponentToTest = Form.create()(ContainerMock);

        const { queryAllByText } = render(<ComponentToTest/>);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.ShopNameLocal"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.ShopNameEN"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.VAT.VAT"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.VAT.Yes"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.VAT.No"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxIDsFirstNameLocal"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxIDsFirstNameEN"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxIDsLastNameLocal"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxIDsLastNameEN"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.BranchNameLocal"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.BranchNumber"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.BranchNameEN"))).toHaveLength(1);
       
    });

    test("Render content with isEnglishOfficial is true correctly", () => {

        const store = mockStore({});
        const ContainerMock = (props:any) => {
            return(
                <Provider store={store}>
                    <RegisterSupplierSearchResultIndividual
                        form={props.form}
                        taxId={"mock-tax-id"}
                        taxCountryCode={""}
                        username={""}
                        onPreRegisterSubmit={testForm.onPreRegisterSubmit}
                        onPreRegisterValueChange={testForm.onPreRegisterValueChange}
                        onRadioValueChange={testForm.onRadioValueChange}
                        isOpen={true}
                        isDisableNameLocal={true}
                        isVatChecked={true}
                        isDisableRadioButton={true}
                        isEnglishOfficial={true}
                        isHeadQuarter={true}
                        validateBranchNumber={testForm.validateBranchNumber}
                        onVatRadioValueChange={testForm.onVatRadioValueChange}
                    />
                </Provider>
            )}
        const ComponentToTest = Form.create()(ContainerMock);

        const { queryAllByText } = render(<ComponentToTest/>);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.ShopName"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.VAT.VAT"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.VAT.Yes"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.VAT.No"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxIDsFirstName"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxIDsLastName"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.BranchNumber"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.BranchName"))).toHaveLength(1);
       
    });

    test("Render content correctly incase RD verify should default yes on vat radio and disable", () => {

        const store = mockStore({});
        const ContainerMock = (props:any) => {
            return(
                <Provider store={store}>
                    <RegisterSupplierSearchResultIndividual
                        form={props.form}
                        taxId={"mock-tax-id"}
                        taxCountryCode={""}
                        username={""}
                        onPreRegisterSubmit={testForm.onPreRegisterSubmit}
                        onPreRegisterValueChange={testForm.onPreRegisterValueChange}
                        onRadioValueChange={testForm.onRadioValueChange}
                        isOpen={true}
                        isDisableNameLocal={true}
                        isVatChecked={true}
                        isDisableRadioButton={true}
                        isEnglishOfficial={false}
                        isHeadQuarter={true}
                        validateBranchNumber={testForm.validateBranchNumber}
                        onVatRadioValueChange={testForm.onVatRadioValueChange}
                    />
                </Provider>
            )}
        const ComponentToTest = Form.create()(ContainerMock);
        
        const { container } = render(<ComponentToTest/>);
        expect(container.getElementsByTagName('input')[2].checked).toEqual(true);
        expect(container.getElementsByTagName('input')[2].disabled).toEqual(true);

        expect(container.getElementsByTagName('input')[3].checked).toEqual(false);
        expect(container.getElementsByTagName('input')[3].disabled).toEqual(true);

        expect(container.getElementsByTagName('input')[4].disabled).toEqual(true);
        expect(container.getElementsByTagName('input')[5].disabled).toEqual(true);
       
    });

    test("Render content correctly incase RD not found should default no on vat radio and disable", () => {

        const store = mockStore({});
        const ContainerMock = (props:any) => {
            return(
                <Provider store={store}>
                    <RegisterSupplierSearchResultIndividual
                        form={props.form}
                        taxId={"mock-tax-id"}
                        taxCountryCode={""}
                        username={""}
                        onPreRegisterSubmit={testForm.onPreRegisterSubmit}
                        onPreRegisterValueChange={testForm.onPreRegisterValueChange}
                        onRadioValueChange={testForm.onRadioValueChange}
                        isOpen={true}
                        isDisableNameLocal={false}
                        isVatChecked={false}
                        isDisableRadioButton={true}
                        isEnglishOfficial={false}
                        isHeadQuarter={true}
                        validateBranchNumber={testForm.validateBranchNumber}
                        onVatRadioValueChange={testForm.onVatRadioValueChange}
                    />
                </Provider>
            )}
        const ComponentToTest = Form.create()(ContainerMock);
        
        const { container } = render(<ComponentToTest/>);
        expect(container.getElementsByTagName('input')[2].checked).toEqual(false);
        expect(container.getElementsByTagName('input')[2].disabled).toEqual(true);

        expect(container.getElementsByTagName('input')[3].checked).toEqual(true);
        expect(container.getElementsByTagName('input')[3].disabled).toEqual(true);

        expect(container.getElementsByTagName('input')[4].disabled).toEqual(false);
        expect(container.getElementsByTagName('input')[5].disabled).toEqual(false);
       
    });
    
    test("Render content correctly incase RD error 500 should enable radio button", () => {

        const store = mockStore({});
        const ContainerMock = (props:any) => {
            return(
                <Provider store={store}>
                    <RegisterSupplierSearchResultIndividual
                        form={props.form}
                        taxId={"mock-tax-id"}
                        taxCountryCode={""}
                        username={""}
                        onPreRegisterSubmit={testForm.onPreRegisterSubmit}
                        onPreRegisterValueChange={testForm.onPreRegisterValueChange}
                        onRadioValueChange={testForm.onRadioValueChange}
                        isOpen={true}
                        isDisableNameLocal={false}
                        isVatChecked={true}
                        isDisableRadioButton={false}
                        isEnglishOfficial={false}
                        isHeadQuarter={true}
                        validateBranchNumber={testForm.validateBranchNumber}
                        onVatRadioValueChange={testForm.onVatRadioValueChange}
                    />
                </Provider>
            )}
        const ComponentToTest = Form.create()(ContainerMock);
        
        const { container } = render(<ComponentToTest/>);
        expect(container.getElementsByTagName('input')[2].checked).toEqual(true);
        expect(container.getElementsByTagName('input')[2].disabled).toEqual(false);

        expect(container.getElementsByTagName('input')[3].checked).toEqual(false);
        expect(container.getElementsByTagName('input')[3].disabled).toEqual(false);

        expect(container.getElementsByTagName('input')[4].disabled).toEqual(false);
        expect(container.getElementsByTagName('input')[5].disabled).toEqual(false);
       
    });

});
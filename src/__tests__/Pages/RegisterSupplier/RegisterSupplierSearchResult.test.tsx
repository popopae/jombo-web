import * as React from "react";
import { render } from "@testing-library/react";
import RegisterSupplierSearchResult from "../../../app/containers/Pages/RegisterSupplier/RegisterSupplierSearchResult";
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
    getFieldDecorator: jest.fn(opts => (c: any) => c),
    setRegistrationFiles: jest.fn(opts => (c: any) => c),
    onPreRegisterSubmit: jest.fn(opts => (c: any) => c),
    onPreRegisterValueChange: jest.fn(opts => (c: any) => c),
    onRadioValueChange: jest.fn(opts => (c: any) => c),
    onReloadDbd: jest.fn(opts => (c: any) => c),
    validateBranchNumber: jest.fn(opts => (c: any) => c),
};

describe("<RegisterSupplierSearchResult/>", () => {
    test("Render content correctly", () => {

        const store = mockStore({});
        const ContainerMock = (props:any) => {
            return(
                <Provider store={store}>
                    <RegisterSupplierSearchResult
                        form={props.form}
                        dbdInformationResponse={{}}
                        taxId={"mock-tax-id"}
                        taxCountryCode={""}
                        username={""}
                        onPreRegisterSubmit={testForm.onPreRegisterSubmit}
                        onPreRegisterValueChange={testForm.onPreRegisterValueChange}
                        onRadioValueChange={testForm.onRadioValueChange}
                        onReloadDbd={testForm.onReloadDbd}
                        isOpen={true}
                        isDisableNameLocal={true}
                        isFetchingDbd={true}
                        isReloadEnable={true}
                        isHeadQuarter={true}
                        validateBranchNumber={testForm.validateBranchNumber}
                        isEnglishOfficial={false}
                    />
                </Provider>
            )}
        const ComponentToTest = Form.create()(ContainerMock);

        const { queryAllByText } = render(<ComponentToTest/>);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.Branch"))).toHaveLength(2);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.BranchNumber"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.BranchNameLocal"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.BranchNameEN"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Button.RegisterCompany"))).toHaveLength(1);
       
    });

    test("Render content correctly incase selected HeadQuarter Type", () => {

        const store = mockStore({});
        const ContainerMock = (props:any) => {
            return(
                <Provider store={store}>
                    <RegisterSupplierSearchResult
                        form={props.form}
                        dbdInformationResponse={{}}
                        taxId={"mock-tax-id"}
                        taxCountryCode={""}
                        username={""}
                        onPreRegisterSubmit={testForm.onPreRegisterSubmit}
                        onPreRegisterValueChange={testForm.onPreRegisterValueChange}
                        onRadioValueChange={testForm.onRadioValueChange}
                        onReloadDbd={testForm.onReloadDbd}
                        isOpen={true}
                        isDisableNameLocal={true}
                        isFetchingDbd={true}
                        isReloadEnable={true}
                        isHeadQuarter={true}
                        validateBranchNumber={testForm.validateBranchNumber}
                        isEnglishOfficial={false}
                    />
                </Provider>
            )}
        const ComponentToTest = Form.create()(ContainerMock);
        
        const { container } = render(<ComponentToTest/>);
        expect(container.getElementsByTagName('input')[2].checked).toEqual(true);
        expect(container.getElementsByTagName('input')[3].checked).toEqual(false);

        expect(container.getElementsByTagName('input')[4].disabled).toEqual(true);
        expect(container.getElementsByTagName('input')[5].disabled).toEqual(true);
        expect(container.getElementsByTagName('input')[6].disabled).toEqual(true);
       
    });

    test("Render content correctly incase selected SubBranch Type", () => {

        const store = mockStore({});
        const ContainerMock = (props:any) => {
            return(
                <Provider store={store}>
                    <RegisterSupplierSearchResult
                        form={props.form}
                        dbdInformationResponse={{}}
                        taxId={"mock-tax-id"}
                        taxCountryCode={""}
                        username={""}
                        onPreRegisterSubmit={testForm.onPreRegisterSubmit}
                        onPreRegisterValueChange={testForm.onPreRegisterValueChange}
                        onRadioValueChange={testForm.onRadioValueChange}
                        onReloadDbd={testForm.onReloadDbd}
                        isOpen={true}
                        isDisableNameLocal={true}
                        isFetchingDbd={true}
                        isReloadEnable={true}
                        isHeadQuarter={false}
                        validateBranchNumber={testForm.validateBranchNumber}
                        isEnglishOfficial={false}
                    />
                </Provider>
            )}
        const ComponentToTest = Form.create()(ContainerMock);
        
        const { container } = render(<ComponentToTest/>);
        expect(container.getElementsByTagName('input')[2].checked).toEqual(false);
        expect(container.getElementsByTagName('input')[3].checked).toEqual(true);

        expect(container.getElementsByTagName('input')[4].disabled).toEqual(false);
        expect(container.getElementsByTagName('input')[5].disabled).toEqual(false);
        expect(container.getElementsByTagName('input')[6].disabled).toEqual(false);
       
    });

    test("Render content correctly incase isEnglishOfficial is true", () => {

        const store = mockStore({});
        const ContainerMock = (props:any) => {
            return(
                <Provider store={store}>
                    <RegisterSupplierSearchResult
                        form={props.form}
                        dbdInformationResponse={{}}
                        taxId={"mock-tax-id"}
                        taxCountryCode={""}
                        username={""}
                        onPreRegisterSubmit={testForm.onPreRegisterSubmit}
                        onPreRegisterValueChange={testForm.onPreRegisterValueChange}
                        onRadioValueChange={testForm.onRadioValueChange}
                        onReloadDbd={testForm.onReloadDbd}
                        isOpen={true}
                        isDisableNameLocal={true}
                        isFetchingDbd={true}
                        isReloadEnable={true}
                        isHeadQuarter={true}
                        validateBranchNumber={testForm.validateBranchNumber}
                        isEnglishOfficial={true}
                    />
                </Provider>
            )}
        const ComponentToTest = Form.create()(ContainerMock);
        
        const { queryAllByText } = render(<ComponentToTest/>);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.Branch"))).toHaveLength(2);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.BranchNumber"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.BranchName"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Button.RegisterCompany"))).toHaveLength(1);
       
    });

});
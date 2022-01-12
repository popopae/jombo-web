import * as React from "react";
import { render } from "@testing-library/react";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import { RootState } from "../../../app/reducers";
import RegisterBusinessBody from '../../../app/containers/Pages/RegisterSupplier/RegisterBusinessBody';
import { i18nHelper } from '../../../app/i18n/i18n';
import { BranchRequest } from "../../../app/models";
import { Form } from 'antd';

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
    setFieldsValue: jest.fn(opts => (c: any) => c),
    getFieldsValue: jest.fn(opts => (c: any) => c),
    validateFields: jest.fn(opts => (c: any) => c),
    alertBar: jest.fn(opts => (c: any) => c),
    onCurrencyChange: jest.fn(opts => (c: any) => c),
    onYearEstablishedChange: jest.fn(opts => (c: any) => c),
    onRegisteredCapitalChange: jest.fn(opts => (c: any) => c),
    onBlurRegisteredCapital: jest.fn(opts => (c: any) => c),
    onFocusRegisteredCapital: jest.fn(opts => (c: any) => c),

};

const mockTokenState: RootState.TokenState = { username: "test" }

const mockBusinessTypeList: RootState.BusinessTypeListState = [
    {

    }
]

const mockBranchResponse: BranchRequest = {
    branchId: 1,
    branchNumber: "mock-branch-number",
    branchName: "mock-branch-name",
    branchNameLocal: "mock-branch-name-local",
    branchStatusId: 1
}

const store = mockStore({
    productSegmentList: [],
    productFamilyList: [],
    productClassList: [],
    productCommodityList: [],
    productCategoryLv1List: [],
    productCategoryLv2List: [],
    productCategoryLv3List: [],
    token: mockTokenState
});

describe("<RegisterBusinessBody />", () => {
    test("Render content correctly", () => {

        const wrapper = render(
            <Provider store={store}>
                <RegisterBusinessBody
                    onCurrencyChange={testForm.onCurrencyChange}
                    onYearEstablishedChange={testForm.onYearEstablishedChange}
                    onRegisteredCapitalChange={testForm.onRegisteredCapitalChange}
                    onBlurRegisteredCapital={testForm.onBlurRegisteredCapital}
                    onFocusRegisteredCapital={testForm.onFocusRegisteredCapital}
                    disableCurrencyDropdown={true}
                    branchValue={mockBranchResponse}
                    businessTypeValue={mockBusinessTypeList}
                    listYearEstablishedValue={[]}
                    form={testForm}
                    isValidateStep={false}
                />
            </Provider>
        );

        const { queryAllByText } = wrapper;
        expect(queryAllByText(i18nHelper.translate("Register.Label.BusinessInformation"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.RegistrationInformation"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.SameAsBusinessInformationOfHeadquarter"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.YearEstablished"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductServiceCategory"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.SelectOneOrMoreCategories"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Segment"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Family"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Class"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Commodity"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv1"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv2"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv3"))).toHaveLength(1);

        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductKeyword"))).toHaveLength(1);

    });

    test("Render content country is Thai then currency should be show correctly", () => {

        const ContainerMock = (props:any) => {
            return(
            <Provider store={store}>
                <RegisterBusinessBody
                    onCurrencyChange={testForm.onCurrencyChange}
                    onYearEstablishedChange={testForm.onYearEstablishedChange}
                    onRegisteredCapitalChange={testForm.onRegisteredCapitalChange}
                    onBlurRegisteredCapital={testForm.onBlurRegisteredCapital}
                    onFocusRegisteredCapital={testForm.onFocusRegisteredCapital}
                    disableCurrencyDropdown={true}
                    branchValue={mockBranchResponse}
                    businessTypeValue={mockBusinessTypeList}
                    listYearEstablishedValue={[]}
                    form={props.form}
                    isValidateStep={false}
                    taxCountryCode={"TH"}
                />
            </Provider>
        )};

        const ComponentToTest = Form.create()(ContainerMock);
        
        const wrapper = render(<ComponentToTest/>);
        const { queryAllByText } = wrapper;
        expect(queryAllByText(i18nHelper.translate("Register.Label.BusinessInformation"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.RegistrationInformation"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.SameAsBusinessInformationOfHeadquarter"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.YearEstablished"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductServiceCategory"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.SelectOneOrMoreCategories"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Segment"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Family"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Class"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Commodity"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv1"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv2"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv3"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductKeyword"))).toHaveLength(1);
        expect(wrapper.getByText("THB")).toBeInTheDocument();

    });

    test("Render content country is Vietnam then currency should be show correctly", () => {

        const ContainerMock = (props:any) => {
            return(
            <Provider store={store}>
                <RegisterBusinessBody
                    onCurrencyChange={testForm.onCurrencyChange}
                    onYearEstablishedChange={testForm.onYearEstablishedChange}
                    onRegisteredCapitalChange={testForm.onRegisteredCapitalChange}
                    onBlurRegisteredCapital={testForm.onBlurRegisteredCapital}
                    onFocusRegisteredCapital={testForm.onFocusRegisteredCapital}
                    disableCurrencyDropdown={true}
                    branchValue={mockBranchResponse}
                    businessTypeValue={mockBusinessTypeList}
                    listYearEstablishedValue={[]}
                    form={props.form}
                    isValidateStep={false}
                    taxCountryCode={"VN"}
                />
            </Provider>
        )};

        const ComponentToTest = Form.create()(ContainerMock);
        
        const wrapper = render(<ComponentToTest/>);
        const { queryAllByText } = wrapper;
        expect(queryAllByText(i18nHelper.translate("Register.Label.BusinessInformation"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.RegistrationInformation"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.SameAsBusinessInformationOfHeadquarter"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.YearEstablished"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductServiceCategory"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.SelectOneOrMoreCategories"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Segment"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Family"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Class"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Commodity"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv1"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv2"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv3"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductKeyword"))).toHaveLength(1);
        expect(wrapper.getByText("VND")).toBeInTheDocument();

    });

    test("Render content country is not Thai and Vietnam then currency should be show correctly", () => {

        const ContainerMock = (props:any) => {
            return(
            <Provider store={store}>
                <RegisterBusinessBody
                    onCurrencyChange={testForm.onCurrencyChange}
                    onYearEstablishedChange={testForm.onYearEstablishedChange}
                    onRegisteredCapitalChange={testForm.onRegisteredCapitalChange}
                    onBlurRegisteredCapital={testForm.onBlurRegisteredCapital}
                    onFocusRegisteredCapital={testForm.onFocusRegisteredCapital}
                    disableCurrencyDropdown={true}
                    branchValue={mockBranchResponse}
                    businessTypeValue={mockBusinessTypeList}
                    listYearEstablishedValue={[]}
                    form={props.form}
                    isValidateStep={false}
                    taxCountryCode={"US"}
                />
            </Provider>
        )};

        const ComponentToTest = Form.create()(ContainerMock);
        
        const wrapper = render(<ComponentToTest/>);
        const { queryAllByText } = wrapper;
        expect(queryAllByText(i18nHelper.translate("Register.Label.BusinessInformation"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.RegistrationInformation"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.SameAsBusinessInformationOfHeadquarter"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.YearEstablished"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductServiceCategory"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.SelectOneOrMoreCategories"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Segment"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Family"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Class"))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate("Register.Label.Commodity"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv1"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv2"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv3"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("Register.Label.ProductKeyword"))).toHaveLength(1);
        expect(wrapper.getByText("USD")).toBeInTheDocument();

    });

});
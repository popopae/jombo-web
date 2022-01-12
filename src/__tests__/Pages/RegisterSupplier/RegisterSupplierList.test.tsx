import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import { RootState } from "../../../app/reducers";
import RegisterSupplierList from '../../../app/containers/Pages/RegisterSupplier/RegisterSupplierList';
import { i18nHelper } from '../../../app/i18n/i18n';

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
    alertBar: jest.fn(opts => (c: any) => c),
    onClickEdit: jest.fn(opts => (c: any) => c),
};

const mockDataResponse: RootState.SupplierDataTableState = {
    totalRecord: 10,
    totalItem: 10,
    totalPage: 10,
    totalMainRecord: 10,
    pageIndex: 1,
    pageSize: 10,
    dataResult: [{
        supplierId: 1,
        supplierName: "mock-supplier-name",
        supplierNameLocal: "mock-supplier-name-local",
        taxId: "mock-tax-id",
        identityTypeName: "mock-identity-type-name",
        branches: [
            {
                branchId: 1,
                branchNumber: "mock-branch-number",
                branchName: "mock-branch-name",
                branchNameLocal: "mock-branch-name-local",
                branchStatusId: 1,
                branchStatusName: "mock-branch-status-name",
                userBranchStatusName: "mock-branch-status-name",
                updatedAt: new Date("2019-01-16")
            }
        ]
    }]
}

const mockAwaitApproveDataResponse: RootState.SupplierDataTableState = {
    totalRecord: 10,
    totalItem: 10,
    totalPage: 10,
    totalMainRecord: 10,
    pageIndex: 1,
    pageSize: 10,
    dataResult: [{
        supplierId: 1,
        supplierName: "mock-supplier-name",
        supplierNameLocal: "mock-supplier-name-local",
        taxId: "mock-tax-id",
        identityTypeName: "mock-identity-type-name",
        branches: [
            {
                branchId: 1,
                branchNumber: "mock-branch-number",
                branchName: "mock-branch-name",
                branchNameLocal: "mock-branch-name-local",
                branchEmail: "mock-email",
                branchWebSite: "",
                branchStatusId: 8,
                branchStatusName: "Common.BranchStatus.Awaiting",
                isBranchJoin: false,
                userBranchStatusName: "Common.UserBranchStatus.Awaiting",
                createdBy: 3023,
                createdAt: new Date("2019-01-16"),
                updatedBy: 3023,
                updatedAt: new Date("2019-01-16"),
            }
        ]
    }]
}

const mockRequestToJoinAwaitDataResponse: RootState.SupplierDataTableState = {
    totalRecord: 10,
    totalItem: 10,
    totalPage: 10,
    totalMainRecord: 10,
    pageIndex: 1,
    pageSize: 10,
    dataResult: [{
        supplierId: 1,
        supplierName: "mock-supplier-name",
        supplierNameLocal: "mock-supplier-name-local",
        taxId: "mock-tax-id",
        identityTypeName: "mock-identity-type-name",
        branches: [
            {
                branchId: 1,
                branchNumber: "mock-branch-number",
                branchName: "mock-branch-name",
                branchNameLocal: "mock-branch-name-local",
                branchEmail: "mock-email",
                branchWebSite: "",
                branchStatusId: 9,
                branchStatusName: "Common.BranchStatus.Approved",
                isBranchJoin: true,
                userBranchStatusName: "Common.UserBranchStatus.RequestToJoin",
                createdBy: 3023,
                createdAt: new Date("2019-01-16"),
                updatedBy: 3023,
                updatedAt: new Date("2019-01-16"),
            }
        ]
    }]
}

const mockDraftSubmitByAnotherDataResponse: RootState.SupplierDataTableState = {
    totalRecord: 10,
    totalItem: 10,
    totalPage: 10,
    totalMainRecord: 10,
    pageIndex: 1,
    pageSize: 10,
    dataResult: [{
        supplierId: 1,
        supplierName: "mock-supplier-name",
        supplierNameLocal: "mock-supplier-name-local",
        taxId: "mock-tax-id",
        identityTypeName: "mock-identity-type-name",
        branches: [
            {
                branchId: 1,
                branchNumber: "mock-branch-number",
                branchName: "mock-branch-name",
                branchNameLocal: "mock-branch-name-local",
                branchEmail: "mock-email",
                branchWebSite: "",
                branchStatusId: 7,
                branchStatusName: "Common.BranchStatus.DraftStep1",
                isSubmittedByAnother: true,
                isBranchJoin: false,
                userBranchStatusName: "Common.UserBranchStatus.DraftStep1",
                createdBy: 3023,
                createdAt: new Date("2019-01-16"),
                updatedBy: 3023,
                updatedAt: new Date("2019-01-16"),
            }
        ]
    }]
}

const mockDraftApprovedByAnotherDataResponse: RootState.SupplierDataTableState = {
    totalRecord: 10,
    totalItem: 10,
    totalPage: 10,
    totalMainRecord: 10,
    pageIndex: 1,
    pageSize: 10,
    dataResult: [{
        supplierId: 1,
        supplierName: "mock-supplier-name",
        supplierNameLocal: "mock-supplier-name-local",
        taxId: "mock-tax-id",
        identityTypeName: "mock-identity-type-name",
        branches: [
            {
                branchId: 1,
                branchNumber: "mock-branch-number",
                branchName: "mock-branch-name",
                branchNameLocal: "mock-branch-name-local",
                branchEmail: "mock-email",
                branchWebSite: "",
                branchStatusId: 7,
                branchStatusName: "Common.BranchStatus.DraftStep1",
                isApprovedByAnother: true,
                isBranchJoin: false,
                userBranchStatusName: "Common.UserBranchStatus.DraftStep1",
                createdBy: 3023,
                createdAt: new Date("2019-01-16"),
                updatedBy: 3023,
                updatedAt: new Date("2019-01-16"),
            }
        ]
    }]
}

const mockDraftNotApprovedByAnotherDataResponse: RootState.SupplierDataTableState = {
    totalRecord: 10,
    totalItem: 10,
    totalPage: 10,
    totalMainRecord: 10,
    pageIndex: 1,
    pageSize: 10,
    dataResult: [{
        supplierId: 1,
        supplierName: "mock-supplier-name",
        supplierNameLocal: "mock-supplier-name-local",
        taxId: "mock-tax-id",
        identityTypeName: "mock-identity-type-name",
        branches: [
            {
                branchId: 1,
                branchNumber: "mock-branch-number",
                branchName: "mock-branch-name",
                branchNameLocal: "mock-branch-name-local",
                branchEmail: "mock-email",
                branchWebSite: "",
                branchStatusId: 7,
                branchStatusName: "Common.BranchStatus.DraftStep1",
                isApprovedByAnother: false,
                isBranchJoin: false,
                userBranchStatusName: "Common.UserBranchStatus.DraftStep1",
                createdBy: 3023,
                createdAt: new Date("2019-01-16"),
                updatedBy: 3023,
                updatedAt: new Date("2019-01-16"),
            }
        ]
    }]
}

const mockTokenState: RootState.TokenState = { username: "test" }

describe("<RegisterSupplierList />", () => {
    test("Render content correctly", () => {

        const store = mockStore({
            supplierDataTable: mockDataResponse,
            token: mockTokenState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterSupplierList
                    alertBar={testForm.alertBar}
                    onClickEdit={testForm.onClickEdit}
                    shouldFetchSupplierList={false}
                    onCancelRequestToJoin={jest.fn(opts => (c: any) => c)}
                />
            </Provider>
        );

        const { queryAllByText } = wrapper;
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Company'))).toHaveLength(1);
        // expect(queryAllByText(i18nHelper.translate('SearchSupplier.MyCompany'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxId"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.IdentityType'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.CompanyName'))).toHaveLength(1);

        expect(queryAllByText("mock-tax-id")).toHaveLength(1);
        expect(queryAllByText("mock-supplier-name")).toHaveLength(1);
        expect(queryAllByText("mock-identity-type-name")).toHaveLength(1);

    });

    test("Click to expand branch list of supplier should be correctly", () => {

        const store = mockStore({
            supplierDataTable: mockDataResponse,
            token: mockTokenState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterSupplierList
                    alertBar={testForm.alertBar}
                    onClickEdit={testForm.onClickEdit}
                    shouldFetchSupplierList={true}
                    onCancelRequestToJoin={jest.fn(opts => (c: any) => c)}
                />
            </Provider>
        );

        const { container } = wrapper;
        const { queryAllByText } = wrapper;
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Company'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxId"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.IdentityType'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.CompanyName'))).toHaveLength(1);

        expect(queryAllByText("mock-tax-id")).toHaveLength(1);
        expect(queryAllByText("mock-supplier-name")).toHaveLength(1);
        expect(queryAllByText("mock-identity-type-name")).toHaveLength(1);

        fireEvent.click(
            container.querySelector(".ant-table-row-expand-icon-cell")
        );

        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.BranchNumber'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.BranchName'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.ModifiedDate'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.Status'))).toHaveLength(1);
        expect(queryAllByText("mock-branch-number")).toHaveLength(1);
        expect(queryAllByText("mock-branch-name")).toHaveLength(1);
        expect(queryAllByText("mock-branch-status-name")).toHaveLength(1);

    });

    test("Click edit branch then edit function should be called correctly", () => {

        const store = mockStore({
            supplierDataTable: mockDataResponse,
            token: mockTokenState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterSupplierList
                    alertBar={testForm.alertBar}
                    onClickEdit={testForm.onClickEdit}
                    shouldFetchSupplierList={true}
                    onCancelRequestToJoin={jest.fn(opts => (c: any) => c)}
                />
            </Provider>
        );

        const { container } = wrapper;
        const { queryAllByText } = wrapper;
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Company'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate("SearchSupplier.Form.TaxId"))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.IdentityType'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.CompanyName'))).toHaveLength(1);

        expect(queryAllByText("mock-tax-id")).toHaveLength(1);
        expect(queryAllByText("mock-supplier-name")).toHaveLength(1);
        expect(queryAllByText("mock-identity-type-name")).toHaveLength(1);

        fireEvent.click(
            container.querySelector(".ant-table-row-expand-icon-cell")
        );

        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.BranchNumber'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.BranchName'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.ModifiedDate'))).toHaveLength(1);
        expect(queryAllByText(i18nHelper.translate('SearchSupplier.Form.Status'))).toHaveLength(1);
        expect(queryAllByText("mock-branch-number")).toHaveLength(1);
        expect(queryAllByText("mock-branch-name")).toHaveLength(1);
        expect(queryAllByText("mock-branch-status-name")).toHaveLength(1);

        fireEvent.click(
            container.getElementsByClassName("icon-edit icon-green")[0]
        );
        expect(testForm.onClickEdit).toHaveBeenCalledTimes(1)

    });

    test("Cancel button on supplier list must hide on status awaiting approve", () => {
        const store = mockStore({
            supplierDataTable: mockAwaitApproveDataResponse,
            token: mockTokenState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterSupplierList
                    alertBar={testForm.alertBar}
                    onClickEdit={testForm.onClickEdit}
                    shouldFetchSupplierList={true}
                    onCancelRequestToJoin={jest.fn(opts => (c: any) => c)}
                />
            </Provider>
        );

        const { container } = wrapper;
        fireEvent.click(
            container.querySelector(".ant-table-row-expand-icon-cell")
        );

        expect(container.querySelector("[data-original-title=Cancel]")).toBeNull();
    });

    test("Cancel button on supplier list must hide on request to join status awaiting approve", () => {
        const store = mockStore({
            supplierDataTable: mockRequestToJoinAwaitDataResponse,
            token: mockTokenState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterSupplierList
                    alertBar={testForm.alertBar}
                    onClickEdit={testForm.onClickEdit}
                    shouldFetchSupplierList={true}
                    onCancelRequestToJoin={jest.fn(opts => (c: any) => c)}
                />
            </Provider>
        );

        const { container } = wrapper;
        fireEvent.click(
            container.querySelector(".ant-table-row-expand-icon-cell")
        );

        expect(container.querySelector("[data-original-title=Cancel]")).toBeNull();
    });

    test("Submit by Another show when flag is true", () => {
        const store = mockStore({
            supplierDataTable: mockDraftSubmitByAnotherDataResponse,
            token: mockTokenState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterSupplierList
                    alertBar={testForm.alertBar}
                    onClickEdit={testForm.onClickEdit}
                    shouldFetchSupplierList={true}
                    onCancelRequestToJoin={jest.fn(opts => (c: any) => c)}
                />
            </Provider>
        );

        const { container } = wrapper;
        fireEvent.click(
            container.querySelector(".ant-table-row-expand-icon-cell")
        );

        expect(container.querySelector(".subStatus")).toHaveTextContent(i18nHelper.translate('Common.BranchSubStatus.SubmittedByAnother'));
    });

    test("Submit by Another not show when flag is false", () => {
        const store = mockStore({
            supplierDataTable: mockAwaitApproveDataResponse,
            token: mockTokenState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterSupplierList
                    alertBar={testForm.alertBar}
                    onClickEdit={testForm.onClickEdit}
                    shouldFetchSupplierList={true}
                    onCancelRequestToJoin={jest.fn(opts => (c: any) => c)}
                />
            </Provider>
        );

        const { container } = wrapper;
        fireEvent.click(
            container.querySelector(".ant-table-row-expand-icon-cell")
        );

        expect(container.querySelector(".subStatus")).toBeNull();
    });

    test("Approved by Another show when flag is true", () => {
        const store = mockStore({
            supplierDataTable: mockDraftApprovedByAnotherDataResponse,
            token: mockTokenState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterSupplierList
                    alertBar={testForm.alertBar}
                    onClickEdit={testForm.onClickEdit}
                    shouldFetchSupplierList={true}
                    onCancelRequestToJoin={jest.fn(opts => (c: any) => c)}
                />
            </Provider>
        );

        const { container } = wrapper;
        fireEvent.click(
            container.querySelector(".ant-table-row-expand-icon-cell")
        );

        expect(container.querySelector(".subStatus")).toHaveTextContent(i18nHelper.translate('Common.BranchSubStatus.ApprovedByAnother'));
    });

    test("Approved by Another not show when flag is false", () => {
        const store = mockStore({
            supplierDataTable: mockDraftNotApprovedByAnotherDataResponse,
            token: mockTokenState
        });

        const wrapper = render(
            <Provider store={store}>
                <RegisterSupplierList
                    alertBar={testForm.alertBar}
                    onClickEdit={testForm.onClickEdit}
                    shouldFetchSupplierList={true}
                    onCancelRequestToJoin={jest.fn(opts => (c: any) => c)}
                />
            </Provider>
        );

        const { container } = wrapper;
        fireEvent.click(
            container.querySelector(".ant-table-row-expand-icon-cell")
        );

        expect(container.querySelector(".subStatus")).toBeNull();
    });
});
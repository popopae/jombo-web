import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import {} from "jest";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

import { RootState } from "../../../app/reducers";
import { i18nHelper } from "../../../app/i18n/i18n";
import { BranchRequest } from "../../../app/models";
// import { Form } from 'antd';
import ProductCategoryLevel from "../../../app/containers/Pages/RegisterSupplier/ProductCategoryLevel";

const mockStore = configureStore([thunk]);

beforeEach(() => {
  jest.clearAllMocks();
});

const testForm = {
  getFieldDecorator: jest.fn((opts) => (c: any) => c),
  onChangeTextField: jest.fn((opts) => (c: any) => c),
  onChangeTelephone: jest.fn((opts) => (c: any) => c),
  onChangeBillingTelephone: jest.fn((opts) => (c: any) => c),
  onChangeStates: jest.fn((opts) => (c: any) => c),
  setFieldsValue: jest.fn((opts) => (c: any) => c),
  getFieldsValue: jest.fn((opts) => (c: any) => c),
  validateFields: jest.fn((opts) => (c: any) => c),
  alertBar: jest.fn((opts) => (c: any) => c),
  onCurrencyChange: jest.fn((opts) => (c: any) => c),
  onYearEstablishedChange: jest.fn((opts) => (c: any) => c),
  onRegisteredCapitalChange: jest.fn((opts) => (c: any) => c),
  onBlurRegisteredCapital: jest.fn((opts) => (c: any) => c),
  onFocusRegisteredCapital: jest.fn((opts) => (c: any) => c),
  handleSetCategoryList: jest.fn((opts) => (c: any) => c),
};

const mockTokenState: RootState.TokenState = { username: "test" };

const mockBusinessTypeList: RootState.BusinessTypeListState = [{}];

const mockBranchResponse: BranchRequest = {
  branchId: 1,
  branchNumber: "mock-branch-number",
  branchName: "mock-branch-name",
  branchNameLocal: "mock-branch-name-local",
  branchStatusId: 1,
  productCategories: [],
};

const productCategoryLv1 = {
  id: 1,
  productCategoryLv1Name: "catelv1Name",
  productCategoryLv1Code: "catelv1Code",
  productCategoryLv1NameCode: "catelv1NameCode",
};

const productCategoryLv2 = {
  id: 1,
  productCategoryLv2Name: "catelv2Name",
  productCategoryLv2Code: "catelv2Code",
  productCategoryLv2NameCode: "catelv2NameCode",

  productFamilyId: 1,
  productCategoryLv1: productCategoryLv1,
};

const productCategoryLv3 = {
  id: 1,
  productCategoryLv3Name: "catelv3Name",
  productCategoryLv3Code: "catelv3Code",
  productCategoryLv3NameCode: "catelv3NameCode",

  productFamilyId: 1,
  productCategoryLv2: productCategoryLv2,
};

const mockBranchResponseWithProductCategories: BranchRequest = {
  branchId: 1,
  branchNumber: "mock-branch-number",
  branchName: "mock-branch-name",
  branchNameLocal: "mock-branch-name-local",
  branchStatusId: 1,
  productCategories: [
    {
      productCategoryLv3: productCategoryLv3,
      businessTypes: [
        {
          id: 1,
          name: "businessTypeName",
          description: "",
        },
      ],
    },
  ],
};

const store = mockStore({
  productCommodityList: [],
  productCategoryLv1List: [productCategoryLv1],
  productCategoryLv2List: [productCategoryLv2],
  productCategoryLv3List: [productCategoryLv3],
  token: mockTokenState,
});

describe("<ProductCategoryLevel />", () => {
  test("Render content correctly", () => {
    const wrapper = render(
      <Provider store={store}>
        <ProductCategoryLevel
          branchValue={mockBranchResponse}
          businessTypeValue={mockBusinessTypeList}
          form={testForm}
          isValidateStep={false}
        />
      </Provider>
    );

    const { queryAllByText } = wrapper;
    expect(
      queryAllByText(
        i18nHelper.translate("Register.Label.SelectOneOrMoreCategories")
      )
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv1"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv2"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv3"))
    ).toHaveLength(1);
  });

  test("Render My Category correctly", () => {
    const wrapper = render(
      <Provider store={store}>
        <ProductCategoryLevel
          branchValue={mockBranchResponseWithProductCategories}
          businessTypeValue={mockBusinessTypeList}
          form={testForm}
          isValidateStep={false}
        />
      </Provider>
    );

    const { queryAllByText } = wrapper;
    expect(
      queryAllByText(
        i18nHelper.translate("Register.Label.SelectOneOrMoreCategories")
      )
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv1"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv2"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv3"))
    ).toHaveLength(1);
    expect(queryAllByText("catelv1NameCode")).toHaveLength(2);
    expect(queryAllByText("catelv2NameCode")).toHaveLength(2);
    expect(queryAllByText("catelv3NameCode")).toHaveLength(2);
  });

  test("Render Add item to My Category correctly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <ProductCategoryLevel
          branchValue={mockBranchResponseWithProductCategories}
          businessTypeValue={mockBusinessTypeList}
          form={testForm}
          isValidateStep={false}
          handleSetCategoryList={testForm.handleSetCategoryList}
        />
      </Provider>
    );

    const { queryAllByText, container } = wrapper;
    expect(
      queryAllByText(
        i18nHelper.translate("Register.Label.SelectOneOrMoreCategories")
      )
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv1"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv2"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv3"))
    ).toHaveLength(1);
    expect(queryAllByText("catelv1NameCode")).toHaveLength(2);
    expect(queryAllByText("catelv2NameCode")).toHaveLength(2);
    expect(queryAllByText("catelv3NameCode")).toHaveLength(2);
    window.HTMLElement.prototype.scrollIntoView = function() {};

    fireEvent.click(container.getElementsByClassName("icon-add-circle")[0]);

    await waitFor(() => {
      expect(queryAllByText("catelv1NameCode")).toHaveLength(2);
      expect(queryAllByText("catelv2NameCode")).toHaveLength(2);
      expect(queryAllByText("catelv3NameCode")).toHaveLength(2);
    });
  });

  test("Render Remove item in My Category correctly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <ProductCategoryLevel
          branchValue={mockBranchResponseWithProductCategories}
          businessTypeValue={mockBusinessTypeList}
          form={testForm}
          isValidateStep={false}
          handleSetCategoryList={testForm.handleSetCategoryList}
        />
      </Provider>
    );

    const { queryAllByText, container } = wrapper;
    expect(
      queryAllByText(
        i18nHelper.translate("Register.Label.SelectOneOrMoreCategories")
      )
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv1"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv2"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.ProductCategoryLv3"))
    ).toHaveLength(1);
    expect(queryAllByText("catelv1NameCode")).toHaveLength(2);
    expect(queryAllByText("catelv2NameCode")).toHaveLength(2);
    expect(queryAllByText("catelv3NameCode")).toHaveLength(2);

    fireEvent.click(container.getElementsByClassName("icon-delete")[0]);

    await waitFor(() => {
      expect(queryAllByText("catelv1NameCode")).toHaveLength(1);
      expect(queryAllByText("catelv2NameCode")).toHaveLength(1);
      expect(queryAllByText("catelv3NameCode")).toHaveLength(1);
    });
  });
});

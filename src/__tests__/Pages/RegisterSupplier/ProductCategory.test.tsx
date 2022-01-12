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
import ProductCategory from "../../../app/containers/Pages/RegisterSupplier/ProductCategory";

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

const mockAction = {
  productFamilyAction: {
    getByProductSegmentId: jest.fn((opts) => (c: any) => c),
    clear: jest.fn((opts) => (c: any) => c),
  },
  productClassAction: {
    getByProductFamilyId: jest.fn((opts) => (c: any) => c),
    clear: jest.fn((opts) => (c: any) => c),
  },
  productCommodityAction: {
    getByProductClassId: jest.fn((opts) => (c: any) => c),
    clear: jest.fn((opts) => (c: any) => c),
  },
};

const mockTokenState: RootState.TokenState = { username: "test" };

const mockBusinessTypeList: RootState.BusinessTypeListState = [
  {
    id: 1,
    name: "businessTypeName",
    description: "",
  },
];

const productSegment = {
  id: 1,
  productSegmentName: "segmentName",
  productSegmentCode: "segmentCode",
  productSegmentNameCode: "segmentNameCode",
};

const productFamily = {
  id: 1,
  productFamilyName: "familyName",
  productFamilyCode: "familyCode",
  productFamilyNameCode: "familyNameCode",

  productSegmentId: 1,
  productSegment: productSegment,
};

const productClass = {
  id: 1,
  productClassName: "className",
  productClassCode: "classCode",
  productClassNameCode: "classNameCode",

  productFamilyId: 1,
  productFamily: productFamily,
};

const productCommodity = {
  id: 1,
  productCommodityName: "commodityName",
  productCommodityCode: "commodityCode",
  productCommodityNameCode: "commodityNameCode",

  productClassId: 1,
  productClass: productClass,
};

const mockBranchResponse: BranchRequest = {
  branchId: 1,
  branchNumber: "mock-branch-number",
  branchName: "mock-branch-name",
  branchNameLocal: "mock-branch-name-local",
  branchStatusId: 1,
  productCategories: [],
};

const mockBranchResponseWithProductCategories: BranchRequest = {
  branchId: 1,
  branchNumber: "mock-branch-number",
  branchName: "mock-branch-name",
  branchNameLocal: "mock-branch-name-local",
  branchStatusId: 1,
  productCategories: [
    {
      productCommodity: productCommodity,
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
  productSegmentList: [productSegment],
  productFamilyList: [productFamily],
  productClassList: [productClass],
  productCommodityList: [productCommodity],
  token: mockTokenState,
});

describe("<ProductCategory />", () => {
  test("Render content correctly", () => {
    const wrapper = render(
      <Provider store={store}>
        <ProductCategory
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
      queryAllByText(i18nHelper.translate("Register.Label.Segment"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Family"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Class"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Commodity"))
    ).toHaveLength(1);
    expect(queryAllByText("segmentName")).toHaveLength(1);
    expect(queryAllByText("familyName")).toHaveLength(1);
    expect(queryAllByText("className")).toHaveLength(1);
    expect(queryAllByText("commodityName")).toHaveLength(1);
  });

  test("Render My Category correctly", () => {
    const wrapper = render(
      <Provider store={store}>
        <ProductCategory
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
      queryAllByText(i18nHelper.translate("Register.Label.Segment"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Family"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Class"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Commodity"))
    ).toHaveLength(1);
    expect(queryAllByText("segmentName")).toHaveLength(2);
    expect(queryAllByText("familyName")).toHaveLength(2);
    expect(queryAllByText("className")).toHaveLength(2);
    expect(queryAllByText("commodityName")).toHaveLength(2);
  });

  test("Render Add item to My Category correctly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <ProductCategory
          branchValue={mockBranchResponse}
          businessTypeValue={mockBusinessTypeList}
          form={testForm}
          isValidateStep={false}
          handleSetCategoryList={testForm.handleSetCategoryList}
          productFamilyAction={mockAction.productFamilyAction}
          productClassAction={mockAction.productClassAction}
          productCommodityAction={mockAction.productCommodityAction}
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
      queryAllByText(i18nHelper.translate("Register.Label.Segment"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Family"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Class"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Commodity"))
    ).toHaveLength(1);
    expect(queryAllByText("segmentName")).toHaveLength(1);
    expect(queryAllByText("familyName")).toHaveLength(1);
    expect(queryAllByText("className")).toHaveLength(1);
    expect(queryAllByText("commodityName")).toHaveLength(1);
    window.HTMLElement.prototype.scrollIntoView = function() {};

    fireEvent.click(container.getElementsByClassName("icon-add-circle")[0]);

    await waitFor(() => {
      expect(queryAllByText("segmentName")).toHaveLength(1);
      expect(queryAllByText("familyName")).toHaveLength(1);
      expect(queryAllByText("className")).toHaveLength(1);
      expect(queryAllByText("commodityName")).toHaveLength(1);
    });
  });

  test("Render Remove item in My Category correctly", async () => {
    const wrapper = render(
      <Provider store={store}>
        <ProductCategory
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
      queryAllByText(i18nHelper.translate("Register.Label.Segment"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Family"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Class"))
    ).toHaveLength(1);
    expect(
      queryAllByText(i18nHelper.translate("Register.Label.Commodity"))
    ).toHaveLength(1);
    expect(queryAllByText("segmentName")).toHaveLength(2);
    expect(queryAllByText("familyName")).toHaveLength(2);
    expect(queryAllByText("className")).toHaveLength(2);
    expect(queryAllByText("commodityName")).toHaveLength(2);

    fireEvent.click(container.getElementsByClassName("icon-delete")[0]);

    await waitFor(() => {
      expect(queryAllByText("segmentName")).toHaveLength(1);
      expect(queryAllByText("familyName")).toHaveLength(1);
      expect(queryAllByText("className")).toHaveLength(1);
      expect(queryAllByText("commodityName")).toHaveLength(1);
    });
  });
});

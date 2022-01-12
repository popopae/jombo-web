import * as React from "react";
import { render } from "@testing-library/react";
import RegisterBranchModal from "../../../app/components/UI/RegisterBranchModal";
import { } from 'jest';
// import { Form } from "antd";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { CountryResponse, SearchSupplierResponse } from "../../../app/models";

const mockStore = configureStore([thunk]);

const testForm = {
  getFieldDecorator: jest.fn(opts => (c: any) => c),
  setFields: jest.fn(opts => (c: any) => c),
  getFieldsValue: jest.fn(opts => (c: any) => c)
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe("<RegisterBranchModal/>", () => {
  test("Render label correctly", async () => {

    const store = mockStore({});

    const mockCloseModal = jest.fn();
    const mockAddBranch = jest.fn();
    const mockHandleRadioButton = jest.fn();
    const mockOnPreRegisterSubmit = jest.fn();
    const mockOnPreRegisterValueChange = jest.fn();
    const preRegisterResponse = {};
    const SearchSupplierResponse: SearchSupplierResponse = {};
    const countryListState: CountryResponse[] = [];
    const supplierDetail = {
      branch: {
        isHeadQuarter: true
      }
    };
    const { findByText, queryAllByText } = render(
      <Provider store={store}>
        <RegisterBranchModal
          displayModal={false}
          closeModal={mockCloseModal}
          form={testForm}
          addBranch={mockAddBranch}
          listBranch={SearchSupplierResponse.branches}
          supplierDetail={supplierDetail}
          countryList={countryListState}
          onPreRegisterSubmit={mockOnPreRegisterSubmit}
          onPreRegisterValueChange={mockOnPreRegisterValueChange}
          preRegisterResponse={preRegisterResponse}
          onRadioValueChange={mockOnPreRegisterSubmit}
          isShowVatRadio={true}
          isVatChecked={true}
          isDisableRadioButton={false}
          handleOnRadioChange={mockHandleRadioButton}
        />
      </Provider>
    );

    let items = await findByText(/Branch Number/);
    expect(items).toBeDefined;
    items = await findByText(/Add Branch/);
    expect(items).toBeDefined;
    items = await findByText(/Register Branch/);
    expect(items).toBeDefined;
    expect(queryAllByText('Branch Name (Local)')).toHaveLength(1);
    expect(queryAllByText('Branch Name (EN)')).toHaveLength(1);
    expect(queryAllByText('VAT')).toHaveLength(1);
  });
});


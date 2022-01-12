import * as React from "react";
import { render } from "@testing-library/react";
import RegisterBranchForm from "../../../app/components/UI/RegisterBranchForm";
import { } from 'jest';
// import { Form } from "antd";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

const mockStore = configureStore([thunk]);

const testForm = {
  getFieldDecorator: jest.fn(opts => (c: any) => c),
  setFields: jest.fn(opts => (c: any) => c),
  getFieldsValue: jest.fn(opts => (c: any) => c)
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe("<RegisterBranchForm/>", () => {
  test("Render label correctly incase isEnglishOfficial is false", async () => {

    const store = mockStore({});

    const onPreRegisterValueChange = jest.fn();
    const onRadioValueChange = jest.fn();
    const validateBranchNumber = jest.fn();
    const isVatChecked = true;
    const isHeadQuarter = true;
    const isEnglishOfficial = false;
    const taxCountryCode= "";
    const { findByText, queryAllByText } = render(
      <Provider store={store}>
        <RegisterBranchForm
          form={testForm}
          taxCountryCode={taxCountryCode}
          onPreRegisterValueChange={onPreRegisterValueChange}
          onRadioValueChange={onRadioValueChange}
          isEnglishOfficial={isEnglishOfficial}
          isHeadQuarter={isHeadQuarter}
          validateBranchNumber={validateBranchNumber}
          isVatChecked={isVatChecked}
        />
      </Provider>
    );

    let items = await findByText(/Branch Number/);
    expect(items).toBeDefined;
    expect(queryAllByText('Branch Name (Local)')).toHaveLength(1);
    expect(queryAllByText('Branch Name (EN)')).toHaveLength(1);
  });

  test("Render label correctly incase isEnglishOfficial is true", async () => {

    const store = mockStore({});

    const onPreRegisterValueChange = jest.fn();
    const onRadioValueChange = jest.fn();
    const validateBranchNumber = jest.fn();
    const isVatChecked = true;
    const isHeadQuarter = true;
    const isEnglishOfficial = true;
    const taxCountryCode= "";
    const { findByText, queryAllByText } = render(
      <Provider store={store}>
        <RegisterBranchForm
          form={testForm}
          taxCountryCode={taxCountryCode}
          onPreRegisterValueChange={onPreRegisterValueChange}
          onRadioValueChange={onRadioValueChange}
          isEnglishOfficial={isEnglishOfficial}
          isHeadQuarter={isHeadQuarter}
          validateBranchNumber={validateBranchNumber}
          isVatChecked={isVatChecked}
        />
      </Provider>
    );

    let items = await findByText(/Branch Number/);
    expect(items).toBeDefined;
    expect(queryAllByText('Branch Name')).toHaveLength(1);
  });
});


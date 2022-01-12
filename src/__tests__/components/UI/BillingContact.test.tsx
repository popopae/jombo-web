import * as React from "react";
import { render } from "@testing-library/react";
import BillingContact from "../../../app/components/UI/BillingContact";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { PhoneType } from "../../../../types/react-app-env";
import { RootState } from "../../../app/reducers";

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
};

const billingPhone: PhoneType = 
    {
        id: '1',
        telephone: '',
        telephoneExt: '',
        countryCode: 'TH'
    };

    const mockCountries: RootState.CountryListState = [
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

describe("<BillingContact/>", () => {

    test("Render content with isEnglishOfficial is true", async () => {

        const store = mockStore({
            country: mockCountries,
        });
        const wrapper = render(
            <Provider store={store}>
                <BillingContact
                    isEnglishOfficial={true}
                    billingPhone={billingPhone}
                    form={testForm}
                />
            </Provider>
        );
        const { queryAllByText } = wrapper;

        // Billing Contact
        expect(queryAllByText("Billing Contact Name")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Phone")).toHaveLength(2);
        expect(queryAllByText("Billing Contact Email")).toHaveLength(1);
    });

    test("Render content with isEnglishOfficial is false", async () => {

        const store = mockStore({
            country: mockCountries,
        });
        const wrapper = render(
            <Provider store={store}>
                <BillingContact
                    isEnglishOfficial={false}
                    billingPhone={billingPhone}
                    form={testForm}
                />
            </Provider>
        );
        const { queryAllByText } = wrapper;

        // Billing Contact
        expect(queryAllByText("Billing Contact Name (Local)")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Name (EN)")).toHaveLength(1);
        expect(queryAllByText("Billing Contact Phone")).toHaveLength(2);
        expect(queryAllByText("Billing Contact Email")).toHaveLength(1);
    });
});
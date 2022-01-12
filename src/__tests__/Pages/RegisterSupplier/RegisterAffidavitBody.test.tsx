import * as React from "react";
import { render } from "@testing-library/react";
import RegisterAffidavitBody from "../../../app/containers/Pages/RegisterSupplier/RegisterAffidavitBody";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { CommonConstant, IdentityTypeIdEnum } from "../../../app/utils";

const mockStore = configureStore([thunk]);

beforeEach(() => {
    jest.clearAllMocks();
});

const testForm = {
    getFieldDecorator: jest.fn(opts => (c: any) => c),
    setRegistrationFiles: jest.fn(opts => (c: any) => c)
};

describe("<RegisterAffidavitBody/>", () => {
    test("Render thai company have vat content correctly", async () => {
        const store = mockStore({ dispatch: jest.fn(), useSelector: jest.fn() });
        const mockState = {
            supplierDetail: { branch: {} }
        }

        // in this point store.getState is going to be mocked
        store.getState = () => mockState
        const wrapper = render(
            <Provider store={store}>
                <RegisterAffidavitBody
                    registerSupplierValue={{
                        branchRequest: { registrationFiles: [] },
                        supplierRequest: { 
                            identityTypeId: IdentityTypeIdEnum.Corporation,
                            isVatRegistration: true,
                            taxCountryCode: CommonConstant.ThailandCountryCode
                        }
                    }}
                    form={testForm}
                    setRegistrationFiles={testForm.setRegistrationFiles}
                    affidavitToggle={{ supplier: true, vat: false, financial: false, others: false }}
                    setToggle={null}
                />
            </Provider>
        );
        const { queryAllByText } = wrapper;
        expect(queryAllByText('Affidavit')).toHaveLength(1);
        expect(queryAllByText('Company Registration')).toHaveLength(2);
        expect(queryAllByText('Company Registration')[1].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('Business Registration')).toHaveLength(0);
        expect(queryAllByText('VAT Registration')).toHaveLength(2);
        expect(queryAllByText('VAT Registration')[1].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration Por Por 01')).toHaveLength(1);
        expect(queryAllByText('VAT Registration Por Por 09')).toHaveLength(1);
        expect(queryAllByText('VAT Registration Por Por 20')).toHaveLength(1);
        expect(queryAllByText('VAT Registration Por Por 20')[0].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('Financial Information')).toHaveLength(1);
        expect(queryAllByText('Financial Statements')).toHaveLength(1);
        expect(queryAllByText('Others')).toHaveLength(1);
        expect(queryAllByText('Power of Attorney')).toHaveLength(1);
        expect(queryAllByText('Company Profile')).toHaveLength(1);
        expect(queryAllByText('A copy of your ID card')).toHaveLength(0);
        expect(queryAllByText('A copy of house book')).toHaveLength(0);
    });

    test("Render thai individual have vat content correctly", async () => {
        const store = mockStore({ dispatch: jest.fn(), useSelector: jest.fn() });
        const mockState = {
            supplierDetail: { branch: {} }
        }

        // in this point store.getState is going to be mocked
        store.getState = () => mockState
        const wrapper = render(
            <Provider store={store}>
                <RegisterAffidavitBody
                    registerSupplierValue={{
                        branchRequest: { registrationFiles: [] },
                        supplierRequest: {
                            identityTypeId: IdentityTypeIdEnum.Individual,
                            isRDVerify: true,
                            isVatRegistration: true,
                            taxCountryCode: CommonConstant.ThailandCountryCode
                        }
                    }}
                    form={testForm}
                    setRegistrationFiles={testForm.setRegistrationFiles}
                    affidavitToggle={{ supplier: true, vat: false, financial: false, others: false }}
                    setToggle={null}
                />
            </Provider>
        );
        const { queryAllByText } = wrapper;
        expect(queryAllByText('Affidavit')).toHaveLength(1);
        expect(queryAllByText('Company Registration')).toHaveLength(0);
        expect(queryAllByText('Business Registration')).toHaveLength(2);
        expect(queryAllByText('Business Registration')[1].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration')).toHaveLength(2);
        expect(queryAllByText('VAT Registration')[1].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration Por Por 01')).toHaveLength(1);
        expect(queryAllByText('VAT Registration Por Por 09')).toHaveLength(1);
        expect(queryAllByText('VAT Registration Por Por 20')).toHaveLength(1);
        expect(queryAllByText('VAT Registration Por Por 20')[0].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('Financial Information')).toHaveLength(1);
        expect(queryAllByText('Financial Statements')).toHaveLength(1);
        expect(queryAllByText('Others')).toHaveLength(1);
        expect(queryAllByText('Power of Attorney')).toHaveLength(1);
        expect(queryAllByText('Company Profile')).toHaveLength(0);
        expect(queryAllByText('Business Profile')).toHaveLength(1);
        expect(queryAllByText('A copy of your ID card')).toHaveLength(1);
        expect(queryAllByText('A copy of your ID card')[0].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('A copy of house book')).toHaveLength(1);
        expect(queryAllByText('A copy of house book')[0].innerHTML).toContain('<span class="required">*</span>');
    });

    test("Render thai individual have no vat content correctly", async () => {
        const store = mockStore({ dispatch: jest.fn(), useSelector: jest.fn() });
        const mockState = {
            supplierDetail: { branch: {} }
        }

        // in this point store.getState is going to be mocked
        store.getState = () => mockState
        const wrapper = render(
            <Provider store={store}>
                <RegisterAffidavitBody
                    registerSupplierValue={{
                        branchRequest: { registrationFiles: [] },
                        supplierRequest: {
                            identityTypeId: IdentityTypeIdEnum.Individual,
                            isRDVerify: false,
                            isVatRegistration: false,
                            taxCountryCode: CommonConstant.ThailandCountryCode
                        }
                    }}
                    form={testForm}
                    setRegistrationFiles={testForm.setRegistrationFiles}
                    affidavitToggle={{ supplier: true, vat: false, financial: false, others: false }}
                    setToggle={null}
                />
            </Provider>
        );
        const { queryAllByText } = wrapper;
        expect(queryAllByText('Affidavit')).toHaveLength(1);
        expect(queryAllByText('Company Registration')).toHaveLength(0);
        expect(queryAllByText('Business Registration')).toHaveLength(2);
        expect(queryAllByText('Business Registration')[1].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration')).toHaveLength(2);
        expect(queryAllByText('VAT Registration')[1].innerHTML).not.toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration Por Por 01')).toHaveLength(1);
        expect(queryAllByText('VAT Registration Por Por 09')).toHaveLength(1);
        expect(queryAllByText('VAT Registration Por Por 20')).toHaveLength(1);
        expect(queryAllByText('VAT Registration Por Por 20')[0].innerHTML).not.toContain('<span class="required">*</span>');
        expect(queryAllByText('Financial Information')).toHaveLength(1);
        expect(queryAllByText('Financial Statements')).toHaveLength(1);
        expect(queryAllByText('Others')).toHaveLength(1);
        expect(queryAllByText('Power of Attorney')).toHaveLength(1);
        expect(queryAllByText('Company Profile')).toHaveLength(0);
        expect(queryAllByText('Business Profile')).toHaveLength(1);
        expect(queryAllByText('A copy of your ID card')).toHaveLength(1);
        expect(queryAllByText('A copy of your ID card')[0].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('A copy of house book')).toHaveLength(1);
        expect(queryAllByText('A copy of house book')[0].innerHTML).toContain('<span class="required">*</span>');
    });

    test("Render inter company have vat content correctly", async () => {
        const store = mockStore({ dispatch: jest.fn(), useSelector: jest.fn() });
        const mockState = {
            supplierDetail: { branch: {} }
        }

        // in this point store.getState is going to be mocked
        store.getState = () => mockState
        const wrapper = render(
            <Provider store={store}>
                <RegisterAffidavitBody
                    registerSupplierValue={{
                        branchRequest: { registrationFiles: [] },
                        supplierRequest: { 
                            identityTypeId: IdentityTypeIdEnum.Corporation,
                            isRDVerify: false,
                            isVatRegistration: true,
                            taxCountryCode: 'VN'
                        }
                    }}
                    form={testForm}
                    setRegistrationFiles={testForm.setRegistrationFiles}
                    affidavitToggle={{ supplier: true, vat: false, financial: false, others: false }}
                    setToggle={null}
                />
            </Provider>
        );
        const { queryAllByText } = wrapper;
        expect(queryAllByText('Affidavit')).toHaveLength(1);
        expect(queryAllByText('Company Registration')).toHaveLength(2);
        expect(queryAllByText('Business Registration')).toHaveLength(0);
        expect(queryAllByText('Company Registration')[1].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration')).toHaveLength(2);
        expect(queryAllByText('VAT Registration')[1].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration Por Por 01')).toHaveLength(0);
        expect(queryAllByText('VAT Registration Por Por 09')).toHaveLength(0);
        expect(queryAllByText('VAT Registration Por Por 20')).toHaveLength(0);
        expect(queryAllByText('Financial Information')).toHaveLength(1);
        expect(queryAllByText('Financial Statements')).toHaveLength(1);
        expect(queryAllByText('Others')).toHaveLength(1);
        expect(queryAllByText('Power of Attorney')).toHaveLength(1);
        expect(queryAllByText('Company Profile')).toHaveLength(1);
        expect(queryAllByText('Business Profile')).toHaveLength(0);
        expect(queryAllByText('A copy of your ID card')).toHaveLength(0);
        expect(queryAllByText('A copy of house book')).toHaveLength(0);
        expect(queryAllByText('Passport')).toHaveLength(0);
    });

    test("Render inter individual have vat content correctly", async () => {
        const store = mockStore({ dispatch: jest.fn(), useSelector: jest.fn() });
        const mockState = {
            supplierDetail: { branch: {} }
        }

        // in this point store.getState is going to be mocked
        store.getState = () => mockState
        const wrapper = render(
            <Provider store={store}>
                <RegisterAffidavitBody
                    registerSupplierValue={{
                        branchRequest: { registrationFiles: [] },
                        supplierRequest: { 
                            identityTypeId: IdentityTypeIdEnum.Individual,
                            isRDVerify: false,
                            isVatRegistration: true,
                            taxCountryCode: 'VN'
                        }
                    }}
                    form={testForm}
                    setRegistrationFiles={testForm.setRegistrationFiles}
                    affidavitToggle={{ supplier: true, vat: false, financial: false, others: false }}
                    setToggle={null}
                />
            </Provider>
        );
        const { queryAllByText } = wrapper;
        expect(queryAllByText('Affidavit')).toHaveLength(1);
        expect(queryAllByText('Company Registration')).toHaveLength(0);
        expect(queryAllByText('Business Registration')).toHaveLength(2);
        expect(queryAllByText('Business Registration')[1].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration')).toHaveLength(2);
        expect(queryAllByText('VAT Registration')[1].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration Por Por 01')).toHaveLength(0);
        expect(queryAllByText('VAT Registration Por Por 09')).toHaveLength(0);
        expect(queryAllByText('VAT Registration Por Por 20')).toHaveLength(0);
        expect(queryAllByText('Financial Information')).toHaveLength(1);
        expect(queryAllByText('Financial Statements')).toHaveLength(1);
        expect(queryAllByText('Others')).toHaveLength(1);
        expect(queryAllByText('Power of Attorney')).toHaveLength(1);
        expect(queryAllByText('Company Profile')).toHaveLength(0);
        expect(queryAllByText('Business Profile')).toHaveLength(1);
        expect(queryAllByText('A copy of your ID card')).toHaveLength(0);
        expect(queryAllByText('A copy of house book')).toHaveLength(0);
        expect(queryAllByText('Passport')).toHaveLength(1);
    });

    test("Render inter individual have not vat content correctly", async () => {
        const store = mockStore({ dispatch: jest.fn(), useSelector: jest.fn() });
        const mockState = {
            supplierDetail: { branch: {} }
        }

        // in this point store.getState is going to be mocked
        store.getState = () => mockState
        const wrapper = render(
            <Provider store={store}>
                <RegisterAffidavitBody
                    registerSupplierValue={{
                        branchRequest: { registrationFiles: [] },
                        supplierRequest: { 
                            identityTypeId: IdentityTypeIdEnum.Individual,
                            isRDVerify: false,
                            isVatRegistration: false,
                            taxCountryCode: 'VN'
                        }
                    }}
                    form={testForm}
                    setRegistrationFiles={testForm.setRegistrationFiles}
                    affidavitToggle={{ supplier: true, vat: false, financial: false, others: false }}
                    setToggle={null}
                />
            </Provider>
        );
        const { queryAllByText } = wrapper;
        expect(queryAllByText('Affidavit')).toHaveLength(1);
        expect(queryAllByText('Company Registration')).toHaveLength(0);
        expect(queryAllByText('Business Registration')).toHaveLength(2);
        expect(queryAllByText('Business Registration')[1].innerHTML).toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration')).toHaveLength(2);
        expect(queryAllByText('VAT Registration')[1].innerHTML).not.toContain('<span class="required">*</span>');
        expect(queryAllByText('VAT Registration Por Por 01')).toHaveLength(0);
        expect(queryAllByText('VAT Registration Por Por 09')).toHaveLength(0);
        expect(queryAllByText('VAT Registration Por Por 20')).toHaveLength(0);
        expect(queryAllByText('Financial Information')).toHaveLength(1);
        expect(queryAllByText('Financial Statements')).toHaveLength(1);
        expect(queryAllByText('Others')).toHaveLength(1);
        expect(queryAllByText('Power of Attorney')).toHaveLength(1);
        expect(queryAllByText('Company Profile')).toHaveLength(0);
        expect(queryAllByText('Business Profile')).toHaveLength(1);
        expect(queryAllByText('A copy of your ID card')).toHaveLength(0);
        expect(queryAllByText('A copy of house book')).toHaveLength(0);
        expect(queryAllByText('Passport')).toHaveLength(1);
    });
    
});
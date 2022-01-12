import * as React from "react";
import { render } from "@testing-library/react";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import RegisterBranchList from '../../../app/containers/Pages/RegisterSupplier/RegisterBranchList';
import { BranchResponse } from "../../../app/models";

const mockStore = configureStore([thunk]);

beforeEach(() => {
    jest.clearAllMocks();
});

const testForm = {

};

const mockBranchList: BranchResponse[] = []
const branchAmount = 10
let startNumber = 0

while (startNumber < branchAmount) {
    mockBranchList.push({
        branchId: startNumber + 1,
        branchNumber: '0000' + startNumber,
        branchName: 'mock-branch-' + startNumber,
        branchNameLocal: 'mock-branch-local-' + startNumber,
    });
    startNumber++;
}

describe("<RegisterBranchList />", () => {
    test("Render content correctly", () => {

        const store = mockStore({});

        const wrapper = render(
            <Provider store={store}>
                <RegisterBranchList
                    form={testForm}
                    isOpen={true}
                    currentLanguage={'TH'}
                    supplierName={'mock-company-name'}
                    supplierNameLocal={'mock-company-name-local'}
                    listBranch={mockBranchList}
                />
            </Provider>
        );

        const { container } = wrapper;
        const { queryAllByText } = wrapper;

        expect(queryAllByText('mock-company-name-local')).toHaveLength(1);

        mockBranchList.forEach((item, index) => {
            expect(container.getElementsByTagName('input')[index].checked).toEqual(false);
        })
    });

});
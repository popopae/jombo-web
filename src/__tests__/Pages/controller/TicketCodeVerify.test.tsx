import * as React from "react";
import { render } from "@testing-library/react";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import TicketCodeVerify from "../../../app/containers/Controllers/TicketCodeVerify"
import { RootState } from "../../../app/reducers";
import { createBrowserHistory } from "history";
import { Router } from "react-router";

beforeEach(() => {
    jest.clearAllMocks();
});

const history = createBrowserHistory();

const testForm = {
};

const mockStore = configureStore([thunk]);

const countryRootState: RootState.CountryListState = [
    {
        id: 1,
        countryName: 'mock-country-name',
        countryNameCode: 'mock-country-name-code',
        countryCode: 'TH',
        isEnglishOfficial: false,
        phoneCode: 'mock-phone-code'
    },
    {
        id: 2,
        countryName: 'mock-country-name',
        countryNameCode: 'mock-country-name-code',
        countryCode: 'EN',
        isEnglishOfficial: true,
        phoneCode: 'mock-phone-code'
    }
]

const userSignInRootState: RootState.UserSigninState = {
    access_token: '',
    token_type: '',
    refresh_token: '',
}

const supplierDetailRootState: RootState.SupplierDetailState = {

}

describe("<TicketCodeVerify />", () => {

    test("Render CreateAccount page correctly", () => {

        const store = mockStore({
            userSignin: userSignInRootState,
            supplierDetail: supplierDetailRootState,
            country: countryRootState
        });

        const { container } = render(
            <Provider store={store}>
                <Router history={history}>
                    <TicketCodeVerify
                        history={history}
                        location={history.location}
                        match={null}
                        form={testForm}
                        tokenByTicketCodeResponse={userSignInRootState}
                        supplierDetailByTicketCodeResponse={supplierDetailRootState}
                        countryListResponse={countryRootState}
                    />
                </Router>
            </Provider>
        );

        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('loader');
    });
});
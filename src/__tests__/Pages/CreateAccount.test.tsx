import * as React from "react";
import { render } from "@testing-library/react";
import CreateAccount from "../../app/containers/Pages/CreateAccount"
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { Router } from "react-router";
import { RootState } from "../../app/reducers";
import { CommonConstant } from "../../app/utils";

const mockStore = configureStore([thunk]);

beforeEach(() => {
    jest.clearAllMocks();
});

const history = createBrowserHistory();

const mockCountriesState: RootState.CountryListState = [
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

describe("<CreateAccount />", () => {

    test("Render CreateAccount page correctly", () => {

        const mockLocationState = {
            email: 'test@email.com',
        }

        const mockLanguageHeaderState: RootState.LanguageHeaderState = {
            refreshToggle: false,
            languageCode: CommonConstant.languageCodeEN
        }

        history.location.state = mockLocationState

        const store = mockStore({
            country: mockCountriesState,
            languageHeader: mockLanguageHeaderState
        });

        const wrapper = render(
            <Provider store={store}>
                <Router history={history}>
                    <CreateAccount
                        history={history}
                        location={history.location}
                        match={null}
                        countryState={mockCountriesState}
                        languageHeaderState={mockLanguageHeaderState}
                    />
                </Router>
            </Provider>
        );

        const { getAllByText, queryAllByText } = wrapper;

        expect(getAllByText('Create Account')).toHaveLength(2);
        expect(getAllByText('Country')).toHaveLength(2);
        expect(getAllByText('First Name (Local)')).toHaveLength(1);
        expect(getAllByText('Last Name (Local)')).toHaveLength(1);
        expect(getAllByText('First Name (EN)')).toHaveLength(1);
        expect(getAllByText('Last Name (EN)')).toHaveLength(1);
        expect(getAllByText('Email')).toHaveLength(1);
        // expect(getAllByText('Password')).toHaveLength(1);
        // expect(getAllByText('Confirm Password')).toHaveLength(1)
        expect(getAllByText('Terms of Service')).toHaveLength(1);
        expect(getAllByText('Privacy Policy')).toHaveLength(1);
        expect(queryAllByText('Collection and Use of Personal Information.')).toHaveLength(0);
    });
})
import * as React from "react";
import { render, fireEvent} from "@testing-library/react";
import { } from 'jest';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

import RegisterHeaderFooter from '../../../app/containers/Pages/RegisterSupplier/RegisterHeaderFooter';

const mockStore = configureStore([thunk]);

beforeEach(() => {
    jest.clearAllMocks();
});


const testForm = {

};

const mockFunction = {
    eventClose: jest.fn(opts => (c: any) => c),
    eventBack: jest.fn(opts => (c: any) => c),
    eventNext: jest.fn(opts => (c: any) => c),
    eventSave: jest.fn(opts => (c: any) => c),
}

describe("<RegisterHeaderFooter />", () => {
    test("Render content incase first step correctly", () => {

        const store = mockStore({
            
        });

        const wrapper = render(
                <Provider store={store}>
                    <RegisterHeaderFooter
                        children= {null}
                        form={testForm}
                        eventClose={mockFunction.eventClose}
                        eventBack={mockFunction.eventBack}
                        eventNext={mockFunction.eventNext}
                        eventSave={mockFunction.eventSave}
                        labelTitle={"mock-label-title"}
                        labelBack={"mock-label-back"}
                        labelNext={"mock-label-next"}
                        labelSave={"mock-label-save"}
                        isFirstStep={true}
                        isDisableButton={false}
                    />
                </Provider>
            );

            const { container } = wrapper;
            const { queryAllByText } = wrapper;
            expect(queryAllByText("mock-label-title")).toHaveLength(1);
            expect(queryAllByText("mock-label-back")).toHaveLength(1);
            expect(queryAllByText("mock-label-next")).toHaveLength(1);
            expect(queryAllByText("mock-label-save")).toHaveLength(1);
            expect(container.querySelectorAll('.btn-outline.disabled')).toHaveLength(1);

    });

    test("Render content incase is not first step correctly", () => {

        const store = mockStore({
            
        });

        const wrapper = render(
                <Provider store={store}>
                    <RegisterHeaderFooter
                        children= {null}
                        form={testForm}
                        eventClose={mockFunction.eventClose}
                        eventBack={mockFunction.eventBack}
                        eventNext={mockFunction.eventNext}
                        eventSave={mockFunction.eventSave}
                        labelTitle={"mock-label-title"}
                        labelBack={"mock-label-back"}
                        labelNext={"mock-label-next"}
                        labelSave={"mock-label-save"}
                        isFirstStep={false}
                        isDisableButton={false}
                    />
                </Provider>
            );

            const { container } = wrapper;
            const { queryAllByText } = wrapper;
            expect(queryAllByText("mock-label-title")).toHaveLength(1);
            expect(queryAllByText("mock-label-back")).toHaveLength(1);
            expect(queryAllByText("mock-label-next")).toHaveLength(1);
            expect(queryAllByText("mock-label-save")).toHaveLength(1);
            expect(container.querySelectorAll('.btn-outline.disabled')).toHaveLength(0);

    });

    test("Render content incase disable all button correctly", () => {

        const store = mockStore({
            
        });

        const wrapper = render(
                <Provider store={store}>
                    <RegisterHeaderFooter
                        children= {null}
                        form={testForm}
                        eventClose={mockFunction.eventClose}
                        eventBack={mockFunction.eventBack}
                        eventNext={mockFunction.eventNext}
                        eventSave={mockFunction.eventSave}
                        labelTitle={"mock-label-title"}
                        labelBack={"mock-label-back"}
                        labelNext={"mock-label-next"}
                        labelSave={"mock-label-save"}
                        isFirstStep={false}
                        isDisableButton={true}
                    />
                </Provider>
            );

            const { container } = wrapper;
            const { queryAllByText } = wrapper;
            expect(queryAllByText("mock-label-title")).toHaveLength(1);
            expect(queryAllByText("mock-label-back")).toHaveLength(1);
            expect(queryAllByText("mock-label-next")).toHaveLength(1);
            expect(queryAllByText("mock-label-save")).toHaveLength(1);
            expect(container.getElementsByClassName('btn-outline')[0]).toBeDisabled;
            expect(container.getElementsByClassName('btn-outline')[1]).toBeDisabled;
            expect(container.getElementsByClassName('btn-primary')[0]).toBeDisabled;

    });

    test("Event Button should be correctly", () => {

        const store = mockStore({
            
        });

        const wrapper = render(
                <Provider store={store}>
                    <RegisterHeaderFooter
                        children= {null}
                        form={testForm}
                        eventClose={mockFunction.eventClose}
                        eventBack={mockFunction.eventBack}
                        eventNext={mockFunction.eventNext}
                        eventSave={mockFunction.eventSave}
                        labelTitle={"mock-label-title"}
                        labelBack={"mock-label-back"}
                        labelNext={"mock-label-next"}
                        labelSave={"mock-label-save"}
                        isFirstStep={false}
                        isDisableButton={false}
                    />
                </Provider>
            );

            const { container } = wrapper;

            fireEvent.click( container.getElementsByClassName('close')[0]
            );
            expect(mockFunction.eventClose).toHaveBeenCalledTimes(1)

            fireEvent.click( container.getElementsByClassName('btn-outline')[0]
            );
            expect(mockFunction.eventBack).toHaveBeenCalledTimes(1)

            fireEvent.click( container.getElementsByClassName('btn-outline')[1]
            );
            expect(mockFunction.eventSave).toHaveBeenCalledTimes(1)

            fireEvent.click( container.getElementsByClassName('btn-primary')[0]
            );
            expect(mockFunction.eventNext).toHaveBeenCalledTimes(1)

    });

});
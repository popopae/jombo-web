import * as React from "react";
import { render } from "@testing-library/react";
import StepBar , {StepBarModel} from "../../../app/components/UI/StepBar";
import {} from 'jest';
  
beforeEach(() => {
    jest.clearAllMocks();
});

describe("<StepBar/>", () => {
    test("Render content correctly", () => {

        const step: StepBarModel[] = [
            {
                code: 'mock-code-1', value: 'mock-value-1', isCompleted: false
            },
            {
                code: 'mock-code-2', value: 'mock-value-2', isCompleted: false
            },
            {
                code: 'mock-code-3', value: 'mock-value-3', isCompleted: false
            },
            {
                code: 'mock-code-4', value: 'mock-value-4', isCompleted: false
            }
        ];

        const wrapper = render(
                    <StepBar
                        listSteps={step} 
                        stepPositionCode={''}
                    />
            );

        const { queryAllByText } = wrapper;
            expect(queryAllByText('1')).toHaveLength(1);
            expect(queryAllByText('2')).toHaveLength(1);
            expect(queryAllByText('3')).toHaveLength(1);
            expect(queryAllByText('4')).toHaveLength(1);
            expect(queryAllByText('mock-value-1')).toHaveLength(1);
            expect(queryAllByText('mock-value-2')).toHaveLength(1);
            expect(queryAllByText('mock-value-3')).toHaveLength(1);
            expect(queryAllByText('mock-value-4')).toHaveLength(1);
    });

    test("Render content with some step completed should be correctly", () => {

        const step: StepBarModel[] = [
            {
                code: 'mock-code-1', value: 'mock-value-1', isCompleted: true
            },
            {
                code: 'mock-code-2', value: 'mock-value-2', isCompleted: false
            },
            {
                code: 'mock-code-3', value: 'mock-value-3', isCompleted: true
            },
            {
                code: 'mock-code-4', value: 'mock-value-4', isCompleted: false
            }
        ];

        const wrapper = render(
                    <StepBar
                        listSteps={step} 
                        stepPositionCode={'mock-code-1'}
                    />
            );

        const { queryAllByText } = wrapper;
            expect(queryAllByText('1')).toHaveLength(0);
            expect(queryAllByText('2')).toHaveLength(1);
            expect(queryAllByText('3')).toHaveLength(0);
            expect(queryAllByText('4')).toHaveLength(1);
            expect(queryAllByText('mock-value-1')).toHaveLength(1);
            expect(queryAllByText('mock-value-2')).toHaveLength(1);
            expect(queryAllByText('mock-value-3')).toHaveLength(1);
            expect(queryAllByText('mock-value-4')).toHaveLength(1);
    });

});
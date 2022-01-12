import * as React from "react";
import { render , fireEvent, waitFor} from "@testing-library/react";
import CollapseAddressPanel from "../../../app/components/UI/CollapseAddressPanel";
import {} from 'jest';
  
beforeEach(() => {
    jest.clearAllMocks();
});

describe("<CollapseAddressPanel/>", () => {

    test("Test Show title in Collapse Address Panel correctly",  async () => {
        const { findByText } = render(
            <CollapseAddressPanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {true}
            >
            </CollapseAddressPanel>
       );
      
       const items = await findByText(/mock-title/)
       expect(items).toBeDefined
    });

    test("Test Show Collapse Address Panel correctly in case collapse is true", () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseAddressPanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {true}
                toggleExpand = {mockToggleExpand}
            >
            </CollapseAddressPanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');
        
        expect(container.getElementsByClassName('mock-icon-title')[0])
            .toBeDefined
        
        expect(container.getElementsByClassName('collapse-body ')[0])
            .not.toHaveClass('show');
    });

    test("Test Show Collapse Address Panel correctly in case collpase is false", () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseAddressPanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {false}
                toggleExpand = {mockToggleExpand}
            >
            </CollapseAddressPanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');

        expect(container.getElementsByClassName('mock-icon-title')[0])
            .toBeDefined
        
        expect(container.getElementsByClassName('collapse-body ')[0])
            .toHaveClass('show');
    });
    
    test("Test Click Collapse Address Panel to show content correctly in case collpase is true", async () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseAddressPanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {true}
                toggleExpand = {mockToggleExpand}
            >
            </CollapseAddressPanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');

        fireEvent.click( container.getElementsByTagName('a')[0]);

        await waitFor(() => {
            expect(container.getElementsByClassName('collapse-body ')[0])
            .not.toHaveClass('show');
        });  
    });

    test("Test Click Collapse Address Panel to show content correctly in case collpase is false", async () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseAddressPanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {false}
                toggleExpand = {mockToggleExpand}
            >
            </CollapseAddressPanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');

        fireEvent.click( container.getElementsByTagName('a')[0]);

        await waitFor(() => {
            expect(container.getElementsByClassName('collapse-body ')[0])
            .not.toHaveClass('show');
        });  
    });

    test("Test Click Collapse Address Panel then toggle expand function should be called correctly", async () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseAddressPanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {true}
                toggleExpand = {mockToggleExpand}
            >
            </CollapseAddressPanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');

        fireEvent.click( container.getElementsByTagName('a')[0]);
        
        await waitFor(() => {
            expect(mockToggleExpand).toHaveBeenCalledTimes(1);
        });
    });
    
});
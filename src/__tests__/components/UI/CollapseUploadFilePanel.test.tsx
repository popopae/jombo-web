import * as React from "react";
import { render , fireEvent,waitFor} from "@testing-library/react";
import CollapseUploadFilePanel from "../../../app/components/UI/CollapseUploadFilePanel";
import {} from 'jest';
  
beforeEach(() => {
    jest.clearAllMocks();
});

describe("<CollpaseUploadFilePanel/>", () => {

    test("Test Show title in Collapse Upload File Panel correctly",  async () => {
        const { findByText } = render(
            <CollapseUploadFilePanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {true}
                amount = {0}
                fileType = {'mock-file-type'}
            >
            </CollapseUploadFilePanel>
       );
      
       const items = await findByText(/mock-title/)
       expect(items).toBeDefined
    });

    test("Test Show Collapse Upload File Panel correctly in case collpase is true", () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseUploadFilePanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {true}
                amount = {0}
                fileType = {'mock-file-type'}
                toggleExpand = {mockToggleExpand}
            >
            </CollapseUploadFilePanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');

        expect(container.getElementsByClassName('mock-icon-title')[0])
            .toBeDefined

        expect(container.getElementsByClassName('collapse-body')[0])
            .not.toHaveClass('show');
    });

    test("Test Show Collapse Upload File Panel correctly in case collapse is false", () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseUploadFilePanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {false}
                amount = {0}
                fileType = {'mock-file-type'}
                toggleExpand = {mockToggleExpand}
            >
            </CollapseUploadFilePanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');
        
        expect(container.getElementsByClassName('mock-icon-title')[0])
            .toBeDefined

        expect(container.getElementsByClassName('collapse-body ')[0])
            .toHaveClass('show');
    });

    test("Test Show amount in Collapse Upload File Panel correctly", () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseUploadFilePanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {true}
                amount = {10}
                fileType = {'mock-file-type'}
                toggleExpand = {mockToggleExpand}
            >
            </CollapseUploadFilePanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');

        expect(container.getElementsByClassName('amount')[0])
            .toHaveTextContent('10');
    
    });
    
    test("Test Click Collapse Upload File Panel to show content correctly in case collpase is true", async () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseUploadFilePanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {true}
                amount = {0}
                fileType = {'mock-file-type'}
                toggleExpand = {mockToggleExpand}
            >
                <div className="mock-content-body">
                </div>
            </CollapseUploadFilePanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');

        fireEvent.click( container.getElementsByTagName('a')[0]);

        await waitFor(() => {
            expect(container.getElementsByClassName('collapse-body')[0])
            .toHaveClass('show');
        });  
    });

    test("Test Click Collapse Upload File Panel to show content correctly in case collpase is false", async () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseUploadFilePanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {false}
                amount = {0}
                fileType = {'mock-file-type'}
                toggleExpand = {mockToggleExpand}
            >
                <div className="mock-content-body">
                </div>
            </CollapseUploadFilePanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');

        fireEvent.click( container.getElementsByTagName('a')[0]);

        await waitFor(() => {
            expect(container.getElementsByClassName('collapse-body')[0])
            .not.toHaveClass('show');
        });  
    });

    test("Test Click Collapse Upload File Panel then toggle expand function should be called correctly", async () => {
        const mockToggleExpand = jest.fn();
        const { container } = render(
            <CollapseUploadFilePanel
                title = {'mock-title'}
                targetName =  {'mock-target-name'}
                iconTitle = {'mock-icon-title'}
                collapse = {true}
                amount = {0}
                fileType = {'mock-file-type'}
                toggleExpand = {mockToggleExpand}
            >
            </CollapseUploadFilePanel>
         );
         
        expect(container.getElementsByTagName('div')[0])
            .toHaveClass('collapse-wrap');

        fireEvent.click( container.getElementsByTagName('a')[0]);
        
        await waitFor(() => {
            expect(mockToggleExpand).toHaveBeenCalledTimes(1);
        });
    });
});
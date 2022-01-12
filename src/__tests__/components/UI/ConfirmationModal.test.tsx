import * as React from "react";
import { render} from "@testing-library/react";
import ConfirmationModal from "../../../app/components/UI/ConfirmationModal";
import { } from 'jest';

const testForm = {
    onLeftButtonClick: jest.fn(opts => (c: any) => c),
    onRightButtonClick: jest.fn(opts => (c: any) => c)
};

beforeEach(() => {
    jest.clearAllMocks();
});

describe("<ConfirmationModal/>", () => {
    test("Render Modal correctly", async () => {
        const wrapper = render(
            <ConfirmationModal
                title={"title"}
                content={"content"}
                icon={"icon"}
                className={"modal-dialog"}
                leftButtonValue={"leftButtonValue"}
                onLeftButtonClick={testForm.onLeftButtonClick}
                rightButtonValue={"rightButtonValue"}
                onRightButtonClick={testForm.onRightButtonClick}
                displayModal={true}
                rightButtonCSS={"btn btn-primary"}
            />
        );
        const { queryAllByText } = wrapper;
        // Billing Contact
        expect(queryAllByText("title")).toHaveLength(1);
        expect(queryAllByText("content")).toHaveLength(1);
        expect(queryAllByText("leftButtonValue")).toHaveLength(1);
        expect(queryAllByText("rightButtonValue")).toHaveLength(1);

    });


});






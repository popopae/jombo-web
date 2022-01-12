import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import MailField from "../../../app/components/UI/MailField";
import { } from 'jest';
import { Form } from "antd";

const testForm = {
    getFieldDecorator: jest.fn(opts => (c: any) => c),
    getFieldsValue: jest.fn(opts => (c: any) => c)
};

beforeEach(() => {
    jest.clearAllMocks();
});

describe("<MailField/>", () => {
    test("Render label correctly", async () => {
        const { findByText } = render(
            <MailField
                id={'mock-id'}
                className={'mock-className'}
                label={'mock-label'}
                placeholder={'mock-placeholder'}
                isRequired={false}
                form={testForm}
            />
        );

        const items = await findByText(/mock-label/)
        expect(items).toBeDefined

    });


    test("Render label with required correctly", async () => {
        const { container } = render(
            <MailField
                id={'mock-id'}
                label={'mock-label'}
                placeholder={'mock-placeholder'}
                isRequired={true}
                form={testForm}
            />
        );

        expect(container.getElementsByTagName('label')[0])
            .toHaveClass('ant-form-item-required');
    });


    test("Change event called", async () => {

        const mockOnchange = jest.fn();
        const { getByRole } = render(
            <MailField
                id={'mock-id'}
                label={'mock-label'}
                placeholder={'mock-placeholder'}
                isRequired={true}
                form={testForm}
                onChange={mockOnchange}
            />
        );

        fireEvent.change(getByRole('textbox'), {
            target: { value: '12345' }
        }
        )
        expect(mockOnchange).toHaveBeenCalledTimes(1);
    });

    test("Validate event called", async () => {
        const mockOnchange = jest.fn();

        const ContainerMock = (props: any) => {
            return (
                <div>
                    <Form>
                        <MailField
                            id={'mock-id'}
                            label={'mock-label'}
                            placeholder={'mock-placeholder'}
                            isRequired={true}
                            form={props.form}
                            onChange={mockOnchange}
                        />
                    </Form>
                </div>)
        }
        const ComponentToTest = Form.create()(ContainerMock);

        const { getByRole, getByText } = render(<ComponentToTest />);

        // Validate invalid format
        fireEvent.change(getByRole('textbox'), {
            target: { value: '**dfgdd' },
        });
        const errorMessageInvalidFormat = getByText(
            /Please enter a valid email address. (e.g. example@email.com)/i,
        );
        await waitFor(() => {
            expect(errorMessageInvalidFormat).toBeDefined();
        });

        // Validate required
        fireEvent.change(getByRole('textbox'), {
            target: { value: '' },
        });
        const errorMessageRequire = getByText(
            /Please enter mock-label./i,
        );
        await waitFor(() => {
            expect(errorMessageRequire).toBeDefined();
        });
    });

    test("Validate event called with error message", async () => {
        const mockOnchange = jest.fn();

        const ContainerMock = (props: any) => {
            return (
                <div>
                    <Form>
                        <MailField
                            id={'mock-id'}
                            label={'mock-label'}
                            placeholder={'mock-placeholder'}
                            isRequired={true}
                            form={props.form}
                            errRequiredMsg={'email-require'}
                            onChange={mockOnchange}
                        />
                    </Form>
                </div>)
        }
        const ComponentToTest = Form.create()(ContainerMock);

        const { getByRole, getByText } = render(<ComponentToTest />);

        //Validate required
        fireEvent.change(getByRole('textbox'), {
            target: { value: '' },
        });
        const errorMessageRequire = getByText(
            /email-require/i,
        );
        await waitFor(() => {
            expect(errorMessageRequire).toBeDefined();
        });
    });


});






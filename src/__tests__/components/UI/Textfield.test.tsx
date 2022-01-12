import * as React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import TextField from "../../../app/components/UI/TextField";
import { } from 'jest';
import { Form } from "antd";

const testForm = {
  getFieldDecorator: jest.fn(opts => (c: any) => c),
  getFieldsValue: jest.fn(opts => (c: any) => c)
};

beforeEach(() => {
  jest.clearAllMocks();
});

describe("<TextField/>", () => {
  test("Render label correctly", async () => {
    const { findByText } = render(
      <TextField
        className={'mock-className'}
        label={'mock-label'}
        placeholder={'mock-placeholder'}
        isRequired={false}
        fieldName={'mock-fieldName'}
        form={testForm}
      />
    );

    const items = await findByText(/mock-label/)
    expect(items).toBeDefined

  });

  test("Render className correctly", async () => {
    const { container } = render(
      <TextField

        className={'mock-className'}
        label={'mock-label'}
        placeholder={'mock-placeholder'}
        isRequired={false}
        fieldName={'mock-fieldName'}
        form={testForm}
      />
    );
    expect(container.getElementsByTagName('input')[0])
      .toHaveClass('mock-className');

  });

  test("Render label with required correctly", async () => {
    const { container } = render(
      <TextField
        label={'mock-label'}
        placeholder={'mock-placeholder'}
        isRequired={true}
        fieldName={'mock-fieldName'}
        form={testForm}
      />
    );

    expect(container.getElementsByTagName('label')[0])
      .toHaveClass('ant-form-item-required');
  });


  test("Change event called", async () => {

    const mockOnchange = jest.fn();
    const { getByRole } = render(
      <TextField
        label={'mock-label'}
        placeholder={'mock-placeholder'}
        isRequired={true}
        fieldName={'mock-fieldName'}
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
            <TextField
              label={'mock-label'}
              placeholder={'mock-placeholder'}
              isRequired={true}
              fieldName={'mock-fieldName'}
              form={props.form}
              onChange={mockOnchange}
              isEnglishOnly={true}
              minLength={10}
              maxLength={13}
            />
          </Form>
        </div>)
    }
    const ComponentToTest = Form.create()(ContainerMock);

    const { getByRole, getByText } = render(<ComponentToTest />);

    //Validate min length
    fireEvent.change(getByRole('textbox'), {
      target: { value: 'abcdef' },
    });
    const errorMessageMin = getByText(
      /Please enter mock-label not less than 10 characters./i,
    );
    await waitFor(() => {
      expect(errorMessageMin).toBeDefined();
    });

    //Validate max length
    fireEvent.change(getByRole('textbox'), {
      target: { value: 'abcdefghtjkzlmnopqrstuvw' },
    });
    const errorMessageMax = getByText(
      /Please enter mock-label not exceed 13 characters./i,
    );
    await waitFor(() => {
      expect(errorMessageMax).toBeDefined();
    });

    //Validate required
    fireEvent.change(getByRole('textbox'), {
      target: { value: '' },
    });
    const errorMessageRequire = getByText(
      /Please enter mock-label/i,
    );
    await waitFor(() => {
      expect(errorMessageRequire).toBeDefined();
    });
  });



});






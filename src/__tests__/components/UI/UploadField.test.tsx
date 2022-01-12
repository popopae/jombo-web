import * as React from "react";
import { render, fireEvent } from "@testing-library/react";
import UploadField from "../../../app/components/UI/UploadField";
import { } from 'jest';
// import { Form } from "antd";
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import { act } from "react-dom/test-utils";
import ReactDOM from "react-dom";

const mockStore = configureStore([thunk]);

const testForm = {
  getFieldDecorator: jest.fn(opts => (c: any) => c),
  setFields: jest.fn(opts => (c: any) => c)
};

beforeEach(() => {
  jest.clearAllMocks();
});


const mockFile = (name: string, size: number, mimeType: string) => {
  name = name || "mock.txt";
  size = size || 1024;
  mimeType = mimeType || 'plain/txt';

  function range(count: number) {
    var output = "";
    for (var i = 0; i < count; i++) {
      output += "a";
    }
    return output;
  }

  const blob: any = new Blob([range(size)], { type: mimeType });
  blob.name = name;
  return blob;
};

describe("<UploadField/>", () => {
  test("Render label correctly", async () => {

    const store = mockStore({});

    const mockOnchange = jest.fn();

    const { findByText } = render(
      <Provider store={store}>
        <UploadField
          id={'mock-id'}
          label={'mock-label'}
          fieldName={'mock-fieldName'}
          isRequired={false}
          maxFileSize={100}
          limitedFileType={['pdf']}
          form={testForm}
          errRequiredMsg={'mock-errRequiredMsg'}
          onStartUpload={mockOnchange}
          uploadFolder={'mock-folder'}
        />
      </Provider>
    );

    const items = await findByText(/mock-label/)
    expect(items).toBeDefined

  });


  test("Render label with required correctly", async () => {

    const store = mockStore({});

    const { container } = render(
      <Provider store={store}>
        <UploadField
          id={'mock-id'}
          label={'mock-label'}
          isRequired={true}
          fieldName={'mock-fieldName'}
          form={testForm}
          uploadFolder={'mock-folder'}
        />
      </Provider>
    );

    expect(container.querySelectorAll('.custom-file-label span span')[0])
      .toHaveClass('required');
  });

  test("Change event called", async () => {
    const mockOnchange = jest.fn();
    let container = document.createElement('div');
    document.body.appendChild(container);
    const store = mockStore({ dispatch: jest.fn(), useSelector: jest.fn() });
    // Test first render and componentDidMount
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <UploadField
            id={'mock-id'}
            label={'mock-label'}
            isRequired={true}
            fieldName={'mock-fieldName'}
            limitedFileType={['.jpg', '.png', '.xls', '.xlsx', '.doc', '.docx', '.pdf']}
            form={testForm}
            maxFileSize={2}
            onStartUpload={mockOnchange}
            uploadFolder={'mock-folder'}
          />
        </Provider>
        , container);
    });

    const size = 1024 * 1024;
    const file = mockFile("mock-file.xxx", size, "image/xxx");

    const inputEl = container.querySelector('.custom-file-input');

    Object.defineProperty(inputEl, 'files', {
      value: [file],
    });

    // Test second render and componentDidUpdate
    await act(async () => {
      fireEvent.change(inputEl);
    });
    expect(mockOnchange).toHaveBeenCalledTimes(1);
    document.body.removeChild(container);
  });

  test("Validate invalid file format", async () => {
    const mockOnchange = jest.fn();
    let container = document.createElement('div');
    document.body.appendChild(container);
    const store = mockStore({ dispatch: jest.fn(), useSelector: jest.fn() });
    // Test first render and componentDidMount
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <UploadField
            id={'mock-id'}
            label={'mock-label'}
            isRequired={true}
            fieldName={'mock-fieldName'}
            limitedFileType={['.jpg', '.png', '.xls', '.xlsx', '.doc', '.docx', '.pdf']}
            form={testForm}
            maxFileSize={2}
            onStartUpload={mockOnchange}
            uploadFolder={'mock-folder'}
          />
        </Provider>
        , container);
    });

    const size = 1024 * 1024;
    const file = mockFile("mock-file.xxx", size, "image/xxx");

    const inputEl = container.querySelector('.custom-file-input');

    Object.defineProperty(inputEl, 'files', {
      value: [file],
    });

    // Test second render and componentDidUpdate
    await act(async () => {
      fireEvent.change(inputEl);
    });
    const errorDiv = container.querySelector('.status-upload');
    expect(errorDiv.innerHTML).toEqual("Invalid file format.");
    document.body.removeChild(container);
  });

  test("Validate maximum file size", async () => {
    const mockOnchange = jest.fn();
    let container = document.createElement('div');
    document.body.appendChild(container);
    const store = mockStore({ dispatch: jest.fn(), useSelector: jest.fn(opts => (c: any) => c) });

    // Test first render and componentDidMount
    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <UploadField
            id={'mock-id'}
            label={'mock-label'}
            isRequired={true}
            fieldName={'mock-fieldName'}
            limitedFileType={['.jpg', '.png', '.xls', '.xlsx', '.doc', '.docx', '.pdf']}
            form={testForm}
            maxFileSize={2}
            onStartUpload={mockOnchange}
            uploadFolder={'mock-folder'}
          />
        </Provider>
        , container);
    });
    const size = (1024 * 1024 * 2) + 1;
    const file = mockFile("mock-file.png", size, "image/png");

    const inputEl = container.querySelector('.custom-file-input');

    Object.defineProperty(inputEl, 'files', {
      value: [file],
    });

    // Test second render and componentDidUpdate
    await act(async () => {
      fireEvent.change(inputEl);
    });
    const errorDiv = container.querySelector('.status-upload');
    expect(errorDiv.innerHTML).toEqual("Maximum file size exceeded.");
    document.body.removeChild(container);
  });

  test("Validate upload file with correct format", async () => {
    const mockOnchange = jest.fn();
    let container = document.createElement('div');
    document.body.appendChild(container);
    const store = mockStore({ dispatch: jest.fn(), useSelector: jest.fn() });

    act(() => {
      ReactDOM.render(
        <Provider store={store}>
          <UploadField
            id={'mock-id'}
            label={'mock-label'}
            isRequired={true}
            fieldName={'mock-fieldName'}
            limitedFileType={['.jpg', '.png', '.xls', '.xlsx', '.doc', '.docx', '.pdf']}
            form={testForm}
            maxFileSize={2}
            onStartUpload={mockOnchange}
            uploadFolder={'mock-folder'}
          />
        </Provider>
        , container);
    });

    const size = 1024 * 1024;
    const file = mockFile("mock-file.JPG", size, "image/xxx");

    const inputEl = container.querySelector('.custom-file-input');

    Object.defineProperty(inputEl, 'files', {
      value: [file],
    });

    // Test second render and componentDidUpdate
    await act(async () => {
      fireEvent.change(inputEl);
    });

    // expect(spyOne).toHaveBeenCalled();
    const errorDiv = container.querySelector('.status-upload');
    expect(errorDiv.innerHTML).toEqual("1.0 MB (0% Done) ");
    document.body.removeChild(container);
  });

});


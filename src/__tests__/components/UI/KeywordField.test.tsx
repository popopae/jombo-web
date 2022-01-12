import * as React from "react";
import { render, fireEvent, waitFor} from "@testing-library/react";
import KeywordField from "../../../app/components/UI/KeywordField";
import {} from 'jest';
import { Form } from "antd";
import { BranchProductKeywordRequest } from '../../../app/models';

const testForm = {
    getFieldDecorator: jest.fn( opts => (c: any) => c ),
    getFieldsValue: jest.fn( opts => (c: any) => c )
};
  
beforeEach(() => {
    jest.clearAllMocks();
});

describe("<KeywordField/>", () => {

    test("Test Show Input Keyword Field correctly", () => {
        const mockHandleKeyword = jest.fn();
        const { container } = render(
            <KeywordField
                placeholder={'mock-placeholder'}
                isValidateStep={false}
                handleSetKeyword={mockHandleKeyword}
                branchProductKeywordRequest={null}
                maximumKeyword= {20}
                form={testForm}
          />
         );
         
        expect(container.getElementsByTagName('input')[0])
            .toHaveClass('keyword-style-custom');
        
        expect(container.getElementsByTagName('button')[0])
            .toHaveClass('btn');
    
    });

    test("Test Show Placeholder correctly", () => {
        const mockHandleKeyword = jest.fn();
        const { container } = render(
            <KeywordField
                placeholder={'mock-placeholder'}
                isValidateStep={false}
                handleSetKeyword={mockHandleKeyword}
                branchProductKeywordRequest={null}
                maximumKeyword= {20}
                form={testForm}
          />
         );
         
        expect(container.getElementsByTagName('input')[0])
            .toHaveAttribute('placeholder','mock-placeholder');
    
    });

    test("Test Show Add Keyword button in normal case should be correctly",  async () => {
        const mockHandleKeyword = jest.fn();
        const { container } = render(
            <KeywordField
                placeholder={'mock-placeholder'}
                isValidateStep={false}
                handleSetKeyword={mockHandleKeyword}
                branchProductKeywordRequest={null}
                maximumKeyword= {20}
                form={testForm}
          />
         );

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test' },
        });


        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });
    
    });
    
    test("Test Hide Add Keyword button in case add space to input should be correctly",  async () => {
        const mockHandleKeyword = jest.fn();
        const { container } = render(
            <KeywordField
                placeholder={'mock-placeholder'}
                isValidateStep={false}
                handleSetKeyword={mockHandleKeyword}
                branchProductKeywordRequest={null}
                maximumKeyword= {20}
                form={testForm}
          />
         );

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: '  ' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeUndefined();
        });
    
    });

    test("Test Add Keyword in normal case should be show tags amount correctly",  async () => {
        const mockHandleKeyword = jest.fn();

        const ContainerMock = (props:any) => {
            return(
                <div>
                <Form>
                    <KeywordField
                        placeholder={'mock-placeholder'}
                        isValidateStep={false}
                        handleSetKeyword={mockHandleKeyword}
                        branchProductKeywordRequest={null}
                        maximumKeyword= {20}
                        form={props.form}
                    />
                </Form>
                </div>)}
        const ComponentToTest = Form.create()(ContainerMock);
    
        const { container} = render(<ComponentToTest/>);

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.click( container.getElementsByTagName('button')[0],0);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(1);
        });
    
    });

    test("Test Add Keyword in duplicate case should be show tags amount correctly",  async () => {
        const mockHandleKeyword = jest.fn();

        const ContainerMock = (props:any) => {
            return(
                <div>
                <Form>
                    <KeywordField
                        placeholder={'mock-placeholder'}
                        isValidateStep={false}
                        handleSetKeyword={mockHandleKeyword}
                        branchProductKeywordRequest={null}
                        maximumKeyword= {20}
                        form={props.form}
                    />
                </Form>
                </div>)}
        const ComponentToTest = Form.create()(ContainerMock);
    
        const { container} = render(<ComponentToTest/>);

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.click( container.getElementsByTagName('button')[0],0);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(1);
        });

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test123' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.click( container.getElementsByTagName('button')[0],0);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(2);
        });

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.click( container.getElementsByTagName('button')[0],0);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(2);
        });
    
    });

    test("Test Add Keyword over maximum should be hide and show warning message correctly",  async () => {
        const mockHandleKeyword = jest.fn();

        const ContainerMock = (props:any) => {
            return(
                <div>
                <Form>
                    <KeywordField
                        placeholder={'mock-placeholder'}
                        isValidateStep={false}
                        handleSetKeyword={mockHandleKeyword}
                        branchProductKeywordRequest={null}
                        maximumKeyword= {3}
                        form={props.form}
                    />
                </Form>
                </div>)}
        const ComponentToTest = Form.create()(ContainerMock);
    
        const { container} = render(<ComponentToTest/>);

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.click( container.getElementsByTagName('button')[0],0);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(1);
        });

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test1' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.click( container.getElementsByTagName('button')[0],0);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(2);
        });

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test2' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.click( container.getElementsByTagName('button')[0],0);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(3);
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeUndefined();

            expect(container.getElementsByClassName('text-notice')[0])
            .toBeDefined();

            expect(container.getElementsByTagName('input')[0])
            .toHaveClass('ant-input-disabled');
        });

    });
  
    test("Test Remove Keyword should be correctly",  async () => {
        const mockHandleKeyword = jest.fn();

        const ContainerMock = (props:any) => {
            return(
                <div>
                <Form>
                    <KeywordField
                        placeholder={'mock-placeholder'}
                        isValidateStep={false}
                        handleSetKeyword={mockHandleKeyword}
                        branchProductKeywordRequest={null}
                        maximumKeyword= {20}
                        form={props.form}
                    />
                </Form>
                </div>)}
        const ComponentToTest = Form.create()(ContainerMock);
    
        const { container} = render(<ComponentToTest/>);

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.click( container.getElementsByTagName('button')[0],0);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(1);
        });

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test123' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.click( container.getElementsByTagName('button')[0],0);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(2);
        });

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test12' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.click( container.getElementsByTagName('button')[0],0);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(3);
        });

        fireEvent.click( container.getElementsByClassName('btn-tag')[0]
                    .getElementsByTagName('i')[0],0);
        
        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(2);
        });

    
    });

    test("Test Validate Required Keyword",  async () => {
        const mockHandleKeyword = jest.fn();

        const ContainerMock = (props:any) => {
            return(
                <div>
                <Form>
                    <KeywordField
                        placeholder={'mock-placeholder'}
                        isValidateStep={true}
                        handleSetKeyword={mockHandleKeyword}
                        branchProductKeywordRequest={null}
                        maximumKeyword= {20}
                        form={props.form}
                    />
                </Form>
                </div>)}
        const ComponentToTest = Form.create()(ContainerMock);
    
        const { container} = render(<ComponentToTest/>);

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: '' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();

            expect(container.getElementsByClassName('has-error')[0])
            .toBeDefined();

            expect(container.getElementsByClassName('invalid-feedback')[0])
            .toBeDefined();
        });  
    });

    test("Test Show Keywords from redux store should be correct",  async () => {
        const mockHandleKeyword = jest.fn();

        const branchProductKeywordRequest: BranchProductKeywordRequest[] = [
            {
                productKeyword :"test"
            },
            {
                productKeyword :"test1"
            },
            {
                productKeyword :"test2"
            }
        ];

        const ContainerMock = (props:any) => {
            return(
                <div>
                <Form>
                    <KeywordField
                        placeholder={'mock-placeholder'}
                        isValidateStep={false}
                        handleSetKeyword={mockHandleKeyword}
                        branchProductKeywordRequest={branchProductKeywordRequest}
                        maximumKeyword= {20}
                        form={props.form}
                    />
                </Form>
                </div>)}
        const ComponentToTest = Form.create()(ContainerMock);
    
        const { container} = render(<ComponentToTest/>);

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(3);
        });

    });

    test("Test Add Keyword by enter event with multiple keyword in one times should be correctly", async () => {
        const mockHandleKeyword = jest.fn();

        const ContainerMock = (props:any) => {
            return(
                <div>
                <Form>
                    <KeywordField
                        placeholder={'mock-placeholder'}
                        isValidateStep={false}
                        handleSetKeyword={mockHandleKeyword}
                        branchProductKeywordRequest={null}
                        maximumKeyword= {20}
                        form={props.form}
                    />
                </Form>
                </div>)}
        const ComponentToTest = Form.create()(ContainerMock);
    
        const { container} = render(<ComponentToTest/>);

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test,test12' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.keyDown(container.getElementsByTagName('input')[0],{key:"Enter",code: 13, charCode: 13});

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(2);
        });
    
    });
    
    test("Test Add Keyword by enter event with multiple keyword in one times incase over maximum should be correctly", async () => {
        const mockHandleKeyword = jest.fn();

        const ContainerMock = (props:any) => {
            return(
                <div>
                <Form>
                    <KeywordField
                        placeholder={'mock-placeholder'}
                        isValidateStep={false}
                        handleSetKeyword={mockHandleKeyword}
                        branchProductKeywordRequest={null}
                        maximumKeyword= {2}
                        form={props.form}
                    />
                </Form>
                </div>)}
        const ComponentToTest = Form.create()(ContainerMock);
    
        const { container} = render(<ComponentToTest/>);

        fireEvent.change( container.getElementsByTagName('input')[0], {
            target: { value: 'test,test12,test123' },
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeDefined();
        });

        fireEvent.keyDown(container.getElementsByTagName('input')[0],{key:"Enter",code: 13, charCode: 13});

        await waitFor(() => {
            expect(container.getElementsByClassName('btn-tag'))
            .toHaveLength(2);
        });

        await waitFor(() => {
            expect(container.getElementsByTagName('button')[0])
            .toBeUndefined();

            expect(container.getElementsByClassName('text-notice')[0])
            .toBeDefined();

            expect(container.getElementsByTagName('input')[0])
            .toHaveClass('ant-input-disabled');
        });
    
    });
});
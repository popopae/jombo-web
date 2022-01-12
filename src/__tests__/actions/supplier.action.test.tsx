import { SupplierActions } from '../../app/actions/supplier.action';
import fetchMock from 'fetch-mock'
import SupplierService from '../../app/services/supplierService'
import { RegisterSupplierRequest, RegisterSupplierResponse , PreRegisterRequest, SearchSupplierResponse, SupplierDetailResponse} from '../../app/models';

describe('SupplierActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("registerSupplier: Type.REGISTER_SUPPLIER_RESPONSE_SUCCESS", () => {
        const request: RegisterSupplierRequest = {}
        const response: RegisterSupplierResponse = {}

        const spyOne = jest.spyOn(SupplierService, 'registerSupplier').mockImplementation(
            (request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        SupplierActions.registerSupplier(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: SupplierActions.Type.REGISTER_SUPPLIER_RESPONSE_SUCCESS,
            payload: response
        }]);
    });

    test("registerSupplier: Type.REGISTER_SUPPLIER_RESPONSE_FAIL", () => {
        const request: RegisterSupplierRequest = {}
        const response: RegisterSupplierResponse = {}

        const spyOne = jest.spyOn(SupplierService, 'registerSupplier').mockImplementation(
            (request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        SupplierActions.registerSupplier(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: SupplierActions.Type.REGISTER_SUPPLIER_RESPONSE_FAIL,
            payload: response
        }]);
    });

    test("preRegisterSupplier: Type.PREREGISTER_RESPONSE_SUCCESS", () => {
        const request: PreRegisterRequest = { branchNumber:'mock-branch-number',
                                                taxId: 'mock-tax-id',
                                                taxCountryCode: 'mock-tax-country-code',
                                                username: 'mock-user-name',
                                                isCallRDVerify: true,
                                                branchName: 'mock-branch-name',
                                                branchNameLocal: 'mock-branch-name-local',
                                                identityTypeName: 'mock-identity-type-name'
                                            }
        const response: SearchSupplierResponse = {}

        const spyOne = jest.spyOn(SupplierService, 'preRegister').mockImplementation(
            (request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        SupplierActions.preRegister(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: SupplierActions.Type.PREREGISTER_RESPONSE_SUCCESS,
            payload: response
        }]);
    });

    test("preRegisterSupplier: Type.PREREGISTER_RESPONSE_FAIL", () => {
        const request: PreRegisterRequest = { branchNumber:'mock-branch-number',
                                                taxId: 'mock-tax-id',
                                                taxCountryCode: 'mock-tax-country-code',
                                                username: 'mock-user-name',
                                                isCallRDVerify: true,
                                                branchName: 'mock-branch-name',
                                                branchNameLocal: 'mock-branch-name-local',
                                                identityTypeName: 'mock-identity-type-name'
                                            }
        const response: SearchSupplierResponse = {}

        const spyOne = jest.spyOn(SupplierService, 'preRegister').mockImplementation(
            (request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        SupplierActions.preRegister(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: SupplierActions.Type.PREREGISTER_RESPONSE_FAIL,
            payload: response
        }]);
    });

    test("getSupplierDetailByTicketCode: Type.SUPPLIER_DETAIL_BY_TICKET_CODE_SUCCESS", () => {
        const request: string = 'ticketCode'
        const response: SupplierDetailResponse = {}

        const spyOne = jest.spyOn(SupplierService, 'getSupplierDetailByTicketCode').mockImplementation(
            (request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        SupplierActions.getSupplierDetailByTicketCode(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: SupplierActions.Type.SUPPLIER_DETAIL_BY_TICKET_CODE_SUCCESS,
            payload: response
        }]);
    });

    test("getSupplierDetailByTicketCode: Type.SUPPLIER_DETAIL_BY_TICKET_CODE_FAIL", () => {
        const request: string = 'ticketCode'
        const response: SupplierDetailResponse = {}

        const spyOne = jest.spyOn(SupplierService, 'getSupplierDetailByTicketCode').mockImplementation(
            (request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        SupplierActions.getSupplierDetailByTicketCode(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: SupplierActions.Type.SUPPLIER_DETAIL_BY_TICKET_CODE_FAIL,
            payload: response
        }]);
    });

});
import { httpClient } from '../../app/middleware/axiosInterceptor';
import SupplierService from '../../app/services/supplierService'
import { RegisterSupplierRequest, PreRegisterRequest, SupplierDetailResponse } from '../../app/models';

describe("SupplierService", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('Call registerSupplier: Success', (done) => {

        const spyOne = jest.spyOn(httpClient, 'post').mockImplementation(
            () => Promise.resolve({
                data: 'mockValue'
            })
        )
        const registerSupplierRequest: RegisterSupplierRequest = {}

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(false);
            expect(callbackData).toEqual('mockValue')
            done();
        });

        SupplierService.registerSupplier(registerSupplierRequest, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test('Call registerCompany: Fail', (done) => {

        const spyOne = jest.spyOn(httpClient, 'post').mockImplementation(
            () => Promise.reject({
                data: 'mockErrorValue'
            })
        )
        const registerSupplierRequest: RegisterSupplierRequest = {}

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(true);
            expect(callbackData).toEqual('mockErrorValue')
            done();
        });

        SupplierService.registerSupplier(registerSupplierRequest, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test('Call preRegisterSupplier: Success', (done) => {

        const spyOne = jest.spyOn(httpClient, 'post').mockImplementation(
            () => Promise.resolve({
                data: 'mockValue'
            })
        )
        const PreRegisterRequest: PreRegisterRequest = {
            branchNumber: 'mock-branch-number',
            taxId: 'mock-tax-id',
            taxCountryCode: 'mock-tax-country-code',
            username: 'mock-user-name',
            isCallRDVerify: true,
            branchName: 'mock-branch-name',
            branchNameLocal: 'mock-branch-name-local',
            identityTypeName: 'mock-identity-type-name'
        }

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(false);
            expect(callbackData).toEqual('mockValue')
            done();
        });

        SupplierService.preRegister(PreRegisterRequest, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test('Call preRegisterCompany: Fail', (done) => {

        const spyOne = jest.spyOn(httpClient, 'post').mockImplementation(
            () => Promise.reject({
                data: 'mockErrorValue'
            })
        )
        const PreRegisterRequest: PreRegisterRequest = {
            branchNumber: 'mock-branch-number',
            taxId: 'mock-tax-id',
            taxCountryCode: 'mock-tax-country-code',
            username: 'mock-user-name',
            isCallRDVerify: true,
            branchName: 'mock-branch-name',
            branchNameLocal: 'mock-branch-name-local',
            identityTypeName: 'mock-identity-type-name'
        }

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(true);
            expect(callbackData).toEqual('mockErrorValue')
            done();
        });

        SupplierService.preRegister(PreRegisterRequest, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test('getSupplierDetailByTicketCode: Success', (done) => {

        const request: string = 'ticketCode'
        const response: SupplierDetailResponse = {}

        const spyOne = jest.spyOn(httpClient, 'post').mockImplementation(
            () => Promise.resolve({
                data: response
            })
        )

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(false);
            expect(callbackData).toEqual(response)
            done();
        });

        SupplierService.getSupplierDetailByTicketCode(request, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test('getSupplierDetailByTicketCode: Success', (done) => {

        const request: string = 'ticketCode'
        const response: SupplierDetailResponse = {}

        const spyOne = jest.spyOn(httpClient, 'post').mockImplementation(
            () => Promise.reject({
                response: {
                    data: response
                }
            })
        )

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(true);
            expect(callbackData).toEqual(response)
            done();
        });

        SupplierService.getSupplierDetailByTicketCode(request, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

});
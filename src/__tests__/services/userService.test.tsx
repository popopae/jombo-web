import { httpClient } from '../../app/middleware/axiosInterceptor';
import { ApiResponse } from '../../app/models';

import UserService from '../../app/services/userService'

describe("UserService", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test("Success getting data back from api and return to action correctly", (done) => {
        const spyOne = jest.spyOn(httpClient, 'post').mockImplementation(
            () => Promise.resolve({
                response: {
                    data: 'mockValue'
                }
            })
        )

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(false);
            expect(callbackData).toEqual('mockValue')
            done();
        });

        UserService.createAccount(
            callBackFunction,
            'mockUserName',
            'mockPassword',
            'mockFirstName',
            'mockLastName',
            'mockDefaultLanguageCode',
            'mockEmail',
            'mockTelephone',
            0,
            true,
            null,
            'mockFirstNameLocal',
            'mockLastNameLocal'
        );
        expect(spyOne).toHaveBeenCalled();
    })

    test("Failed getting data back from api", (done) => {
        const spyOne = jest.spyOn(httpClient, 'post').mockImplementation(
            () => Promise.reject({
                data: 'mockErrorValue'
            })
        )

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(false);
            expect(callbackData).toEqual('mockErrorValue')
            done();
        });

        UserService.createAccount(
            callBackFunction,
            'mockUserName',
            'mockPassword',
            'mockFirstName',
            'mockLastName',
            'mockDefaultLanguageCode',
            'mockEmail',
            'mockTelephone',
            0,
            true,
            null,
            'mockFirstNameLocal',
            'mockLastNameLocal'
        );
        expect(spyOne).toHaveBeenCalled();
    })

    test('getUserDetailByUsername: Success', (done) => {

        const spyOne = jest.spyOn(httpClient, 'post').mockImplementation(
            () => Promise.resolve({
                data: 'mockValue'
            })
        )
        const request: string[] = ["dummyUsername"]

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(false);
            expect(callbackData).toEqual('mockValue')
            done();
        });

        UserService.getUserDetailByUsername(request, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test('getUserDetailByUsername: Fail', (done) => {

        const spyOne = jest.spyOn(httpClient, 'post').mockImplementation(
            () => Promise.reject({
                response: {
                    data: 'mockErrorValue'
                }
            })
        )
        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(true);
            expect(callbackData).toEqual('mockErrorValue')
            done();
        });

        UserService.getUserDetailByUsername([""], callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test('verifyTicketCode: Success', (done) => {
        const apiResponse: ApiResponse = {}

        const spyOne = jest.spyOn(httpClient, 'get').mockImplementation(
            () => Promise.resolve({
                data: apiResponse
            })
        )
        const request: string = 'ticketCode'

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(false);
            expect(callbackData).toEqual(apiResponse)
            done();
        });

        UserService.verifyTicketCode(request, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test('verifyTicketCode: Fail', (done) => {
        const apiResponse: ApiResponse = {}

        const spyOne = jest.spyOn(httpClient, 'get').mockImplementation(
            () => Promise.reject({
                response: {
                    data: apiResponse
                }
            })
        )
        const request: string = 'ticketCode'

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(true);
            expect(callbackData).toEqual(apiResponse)
            done();
        });

        UserService.verifyTicketCode(request, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })
})
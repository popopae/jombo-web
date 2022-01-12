import { httpClient } from '../../app/middleware/axiosInterceptor';
import { UserSigninResponse } from '../../app/models';
import TokenService from '../../app/services/tokenService';

describe("TokenService", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('getTokenByTicketCode: Success', (done) => {

        const request: string = 'ticketCode'
        const response: UserSigninResponse = {}

        const spyOne = jest.spyOn(httpClient, 'get').mockImplementation(
            () => Promise.resolve({
                data: response
            })
        )

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(false);
            expect(callbackData).toEqual(response)
            done();
        });

        TokenService.getTokenByTicketCode(request, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test('getTokenByTicketCode: Fail', (done) => {

        const request: string = 'ticketCode'
        const response: UserSigninResponse = {}

        const spyOne = jest.spyOn(httpClient, 'get').mockImplementation(
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

        TokenService.getTokenByTicketCode(request, callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })
})
import fetchMock from 'fetch-mock'
import { UserSigninResponse } from '../../app/models'
import { TokenActions } from '../../app/actions/token.action'
import TokenService from "../../app/services/tokenService";


describe('TokenActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getTokenByTicketCode: Type.TOKEN_SUCCESS", () => {
        const response: UserSigninResponse = {}
        const request: string = 'ticketCode'

        const spyOne = jest.spyOn(TokenService, 'getTokenByTicketCode').mockImplementation(
            (request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        TokenActions.getTokenByTicketCode(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: TokenActions.Type.TOKEN_SUCCESS,
            payload: response
        }]);
    });

    test("getTokenByTicketCode: Type.TOKEN_FAIL", () => {
        const response: UserSigninResponse = {}
        const request: string = 'ticketCode'

        const spyOne = jest.spyOn(TokenService, 'getTokenByTicketCode').mockImplementation(
            (request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        TokenActions.getTokenByTicketCode(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: TokenActions.Type.TOKEN_FAIL,
            payload: response
        }]);
    });

});
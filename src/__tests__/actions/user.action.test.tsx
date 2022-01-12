import fetchMock from 'fetch-mock'
import userService from '../../app/services/userService'
import { UserActions } from '../../app/actions/user.action'
import { ApiResponse, UserDetailListResponse } from '../../app/models';

describe('UserActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getUserDetailByUsername: Type.USER_DETAIL_SUCCESS", () => {
        const mockData: UserDetailListResponse = {
            sysUserId: 0,
            loginId: '',
            nameEn: '',
            lastNameEn: '',
            nameLocal: '',
            lastNameLocal: '',
            countryCode: '',
            telephone: '',
            fax: '',
            email: '',
            localeId: 0,
            nameUpper: '',
            mobilePhone: '',
            tenantName: '',
            companyNameEn: [],
            companyNameLocal: []
        }
        const response: UserDetailListResponse[] = [mockData]
        const request = ["username"]

        const spyOne = jest.spyOn(userService, 'getUserDetailByUsername').mockImplementation(
            (req, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        UserActions.getUserDetail(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: UserActions.Type.USER_DETAIL_SUCCESS,
            payload: response
        }]);
    });

    test("getUserDetailByUsername: Type.USER_DETAIL_FAIL", () => {
        const response: UserDetailListResponse[] = []
        const request = ["username"]

        const spyOne = jest.spyOn(userService, 'getUserDetailByUsername').mockImplementation(
            (req, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        UserActions.getUserDetail(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: UserActions.Type.USER_DETAIL_FAIL,
            payload: response
        }]);
    });

    test("verifyTicketCode: Type.USER_TICKET_CODE_VERIFY_SUCCESS", () => {
        const response: ApiResponse = {}
        const request:string = 'ticketCode'

        const spyOne = jest.spyOn(userService, 'verifyTicketCode').mockImplementation(
            (req, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        UserActions.verifyTicketCode(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: UserActions.Type.USER_TICKET_CODE_VERIFY_SUCCESS,
            payload: response
        }]);
    });

    test("verifyTicketCode: Type.USER_TICKET_CODE_VERIFY_FAIL", () => {
        const response: ApiResponse = {}
        const request:string = 'ticketCode'

        const spyOne = jest.spyOn(userService, 'verifyTicketCode').mockImplementation(
            (req, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        UserActions.verifyTicketCode(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: UserActions.Type.USER_TICKET_CODE_VERIFY_FAIL,
            payload: response
        }]);
    });
});
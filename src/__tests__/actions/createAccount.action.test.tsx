import { CreateAccountActions } from '../../app/actions/createAccount.action';
import fetchMock from 'fetch-mock'
import userService from '../../app/services/userService'
import { ApiResponse } from '../../app/models';

describe('CreateAccountActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("CreateAccount: Type.CREATE_ACCOUNT_SUCCESS", () => {

        const response: ApiResponse = {}

        const spyOne = jest.spyOn(userService, 'createAccount').mockImplementation(
            (callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        CreateAccountActions.CreateAccount(
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
        )(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: CreateAccountActions.Type.CREATE_ACCOUNT_SUCCESS,
            payload: response
        }]);
    })

    test("CreateAccount: Type.CREATE_ACCOUNT_FAIL", () => {

        const response: ApiResponse = {}

        const spyOne = jest.spyOn(userService, 'createAccount').mockImplementation(
            (callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        CreateAccountActions.CreateAccount(
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
        )(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: CreateAccountActions.Type.CREATE_ACCOUNT_FAIL,
            payload: response
        }]);
    })
})
import { IdentityTypeActions } from '../../app/actions/identityType.action';
import fetchMock from 'fetch-mock'
import identityTypeService from '../../app/services/identityTypeService';

describe('IdentityTypeActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getIdentityType: Type.IDENTITY_TYPE_SUCCESS", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(identityTypeService, 'getIdentityType').mockImplementation(
            ( callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        IdentityTypeActions.getIdentityType()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: IdentityTypeActions.Type.IDENTITY_TYPE_SUCCESS,
            payload: response
        }]);
    });

    test("getIdentityType: Type.IDENTITY_TYPE_FAIL", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(identityTypeService, 'getIdentityType').mockImplementation(
            ( callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        IdentityTypeActions.getIdentityType()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: IdentityTypeActions.Type.IDENTITY_TYPE_FAIL,
            payload: response
        }]);
    });

});
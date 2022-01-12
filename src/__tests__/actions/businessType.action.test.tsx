import { BusinessTypeActions } from '../../app/actions/businessType.action';
import fetchMock from 'fetch-mock'
import businessTypeService from '../../app/services/businessTypeService'

describe('BusinessTypeActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getBusinessType: Type.BUSINESS_TYPE_SUCCESS", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(businessTypeService, 'getBusinessType').mockImplementation(
            ( callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        BusinessTypeActions.getBusinessType()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: BusinessTypeActions.Type.BUSINESS_TYPE_SUCCESS,
            payload: response
        }]);
    });

    test("getBusinessType: Type.BUSINESS_TYPE_FAIL", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(businessTypeService, 'getBusinessType').mockImplementation(
            ( callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        BusinessTypeActions.getBusinessType()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: BusinessTypeActions.Type.BUSINESS_TYPE_FAIL,
            payload: response
        }]);
    });

});
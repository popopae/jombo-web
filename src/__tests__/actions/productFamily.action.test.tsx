import { ProductFamilyActions } from '../../app/actions/productFamily.action';
import fetchMock from 'fetch-mock'
import ProductFamilyService from '../../app/services/ProductFamilyService';

describe('ProductFamilyActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getByProductFamilyId: Type.PRODUCT_FAMILY_LIST_SUCCESS", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(ProductFamilyService, 'getByProductSegmentId').mockImplementation(
            ( productSegmentId ,callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        ProductFamilyActions.getByProductSegmentId(1)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: ProductFamilyActions.Type.PRODUCT_FAMILY_LIST_SUCCESS,
            payload: response
        }]);
    });

    test("getByProductFamilyId: Type.PRODUCT_FAMILY_LIST_FAIL", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(ProductFamilyService, 'getByProductSegmentId').mockImplementation(
            ( productSegmentId , callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        ProductFamilyActions.getByProductSegmentId(1)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: ProductFamilyActions.Type.PRODUCT_FAMILY_LIST_FAIL,
            payload: response
        }]);
    });

});
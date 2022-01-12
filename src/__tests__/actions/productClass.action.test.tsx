import { ProductClassActions } from '../../app/actions/productClass.action';
import fetchMock from 'fetch-mock'
import ProductClassService from '../../app/services/ProductClassService';

describe('ProductClassActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getByProductFamilyId: Type.PRODUCT_CLASS_LIST_SUCCESS", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(ProductClassService, 'getByProductFamilyId').mockImplementation(
            ( productFamilyId ,callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        ProductClassActions.getByProductFamilyId(1)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: ProductClassActions.Type.PRODUCT_CLASS_LIST_SUCCESS,
            payload: response
        }]);
    });

    test("getByProductFamilyId: Type.PRODUCT_CLASS_LIST_FAIL", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(ProductClassService, 'getByProductFamilyId').mockImplementation(
            ( productFamilyId , callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        ProductClassActions.getByProductFamilyId(1)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: ProductClassActions.Type.PRODUCT_CLASS_LIST_FAIL,
            payload: response
        }]);
    });

});
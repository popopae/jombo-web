import { ProductCommodityActions } from '../../app/actions/productCommodity.action';
import fetchMock from 'fetch-mock'
import ProductCommodityService from '../../app/services/ProductCommodityService';

describe('ProductCommodityActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getByProductFamilyId: Type.PRODUCT_CLASS_LIST_SUCCESS", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(ProductCommodityService, 'getByProductClassId').mockImplementation(
            ( productClassId ,callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        ProductCommodityActions.getByProductClassId(1)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: ProductCommodityActions.Type.PRODUCT_COMMODITY_LIST_SUCCESS,
            payload: response
        }]);
    });

    test("getByProductFamilyId: Type.PRODUCT_CLASS_LIST_FAIL", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(ProductCommodityService, 'getByProductClassId').mockImplementation(
            ( productClassId , callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        ProductCommodityActions.getByProductClassId(1)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: ProductCommodityActions.Type.PRODUCT_COMMODITY_LIST_FAIL,
            payload: response
        }]);
    });

});
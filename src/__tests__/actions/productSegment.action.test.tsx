import { ProductSegmentActions } from '../../app/actions/productSegment.action';
import fetchMock from 'fetch-mock'
import ProductSegmentService from '../../app/services/ProductSegmentService';

describe('ProductSegmentActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getByProductSegmentId: Type.PRODUCT_SEGMENT_LIST_SUCCESS", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(ProductSegmentService, 'getAll').mockImplementation(
            ( callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        ProductSegmentActions.getAll()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: ProductSegmentActions.Type.PRODUCT_SEGMENT_LIST_SUCCESS,
            payload: response
        }]);
    });

    test("getByProductSegmentId: Type.PRODUCT_SEGMENT_LIST_FAIL", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(ProductSegmentService, 'getAll').mockImplementation(
            ( callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        ProductSegmentActions.getAll()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: ProductSegmentActions.Type.PRODUCT_SEGMENT_LIST_FAIL,
            payload: response
        }]);
    });

});
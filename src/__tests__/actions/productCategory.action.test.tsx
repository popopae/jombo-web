import { ProductCategoryActions } from "../../app/actions/productCategory.action";
import fetchMock from "fetch-mock";
import productCategoryService from "../../app/services/productCategoryService";

describe("ProductCategoryActions", () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  test("getAll: Type.PRODUCT_CATEGORY_LV1_LIST_SUCCESS", () => {
    const response = [{}, {}];

    const spyOne = jest
      .spyOn(productCategoryService, "getAll")
      .mockImplementation((callback: Function) => {
        callback(false, response);
      });

    const dispatch = jest.fn();
    ProductCategoryActions.getAll()(dispatch);

    expect(spyOne).toHaveBeenCalled();

    expect(dispatch.mock.calls[0]).toEqual([
      {
        type: ProductCategoryActions.Type.PRODUCT_CATEGORY_LV1_LIST_SUCCESS,
        payload: response,
      },
    ]);
  });

  test("getAll: Type.PRODUCT_CATEGORY_LV1_LIST_FAIL", () => {
    const response = [{}, {}];

    const spyOne = jest
      .spyOn(productCategoryService, "getAll")
      .mockImplementation((callback: Function) => {
        callback(true, response);
      });

    const dispatch = jest.fn();
    ProductCategoryActions.getAll()(dispatch);

    expect(spyOne).toHaveBeenCalled();

    expect(dispatch.mock.calls[0]).toEqual([
      {
        type: ProductCategoryActions.Type.PRODUCT_CATEGORY_LV1_LIST_FAIL,
        payload: response,
      },
    ]);
  });

  test("getByProductCategoryLv1Id: Type.PRODUCT_CATEGORY_LV2_LIST_SUCCESS", () => {
    const response = [{}, {}];

    const spyOne = jest
      .spyOn(productCategoryService, "getByProductCategoryLv1Id")
      .mockImplementation((req, callback: Function) => {
        callback(false, response);
      });

    const dispatch = jest.fn();
    ProductCategoryActions.getByProductCategoryLv1Id(1)(dispatch);

    expect(spyOne).toHaveBeenCalled();

    expect(dispatch.mock.calls[0]).toEqual([
      {
        type: ProductCategoryActions.Type.PRODUCT_CATEGORY_LV2_LIST_SUCCESS,
        payload: response,
      },
    ]);
  });

  test("getByProductCategoryLv1Id: Type.PRODUCT_CATEGORY_LV2_LIST_FAIL", () => {
    const response = [{}, {}];

    const spyOne = jest
      .spyOn(productCategoryService, "getByProductCategoryLv1Id")
      .mockImplementation((req, callback: Function) => {
        callback(true, response);
      });

    const dispatch = jest.fn();
    ProductCategoryActions.getByProductCategoryLv1Id(1)(dispatch);

    expect(spyOne).toHaveBeenCalled();

    expect(dispatch.mock.calls[0]).toEqual([
      {
        type: ProductCategoryActions.Type.PRODUCT_CATEGORY_LV2_LIST_FAIL,
        payload: response,
      },
    ]);
  });

  test("getByProductCategoryLv2Id: Type.PRODUCT_CATEGORY_LV3_LIST_SUCCESS", () => {
    const response = [{}, {}];

    const spyOne = jest
      .spyOn(productCategoryService, "getByProductCategoryLv2Id")
      .mockImplementation((req, callback: Function) => {
        callback(false, response);
      });

    const dispatch = jest.fn();
    ProductCategoryActions.getByProductCategoryLv2Id(1)(dispatch);

    expect(spyOne).toHaveBeenCalled();

    expect(dispatch.mock.calls[0]).toEqual([
      {
        type: ProductCategoryActions.Type.PRODUCT_CATEGORY_LV3_LIST_SUCCESS,
        payload: response,
      },
    ]);
  });

  test("getByProductCategoryLv2Id: Type.PRODUCT_CATEGORY_LV3_LIST_FAIL", () => {
    const response = [{}, {}];

    const spyOne = jest
      .spyOn(productCategoryService, "getByProductCategoryLv2Id")
      .mockImplementation((req, callback: Function) => {
        callback(true, response);
      });

    const dispatch = jest.fn();
    ProductCategoryActions.getByProductCategoryLv2Id(1)(dispatch);

    expect(spyOne).toHaveBeenCalled();

    expect(dispatch.mock.calls[0]).toEqual([
      {
        type: ProductCategoryActions.Type.PRODUCT_CATEGORY_LV3_LIST_FAIL,
        payload: response,
      },
    ]);
  });
});

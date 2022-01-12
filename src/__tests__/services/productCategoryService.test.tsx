import { httpClient } from "../../app/middleware/axiosInterceptor";

import ProductCategoryService from "../../app/services/productCategoryService";

describe("ProductCategoryService", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Success getting data back from productCategory/getAll api and return to action correctly", (done) => {
    const spyOne = jest.spyOn(httpClient, "get").mockImplementation(() =>
      Promise.resolve({
        data: "mockValue",
      })
    );

    const callBackFunction = (isError: boolean, callbackData: any) => {
      expect(isError).toEqual(false);
      expect(callbackData).toEqual("mockValue");
      done();
    };

    ProductCategoryService.getAll(callBackFunction);
    expect(spyOne).toHaveBeenCalled();
  });

  test("Failed getting data back from productCategory/getAll api", (done) => {
    const spyOne = jest.spyOn(httpClient, "get").mockImplementation(() =>
      Promise.reject({
        response: {
          data: "mockErrorValue",
        },
      })
    );
    const callBackFunction = (isError: boolean, callbackData: any) => {
      expect(isError).toEqual(true);
      expect(callbackData).toEqual("mockErrorValue");
      done();
    };

    ProductCategoryService.getAll(callBackFunction);
    expect(spyOne).toHaveBeenCalled();
  });

  test("Success getting data back from productCategory/productCategoryLv2 api and return to action correctly", (done) => {
    const spyOne = jest.spyOn(httpClient, "get").mockImplementation(() =>
      Promise.resolve({
        data: "mockValue",
      })
    );

    const callBackFunction = (isError: boolean, callbackData: any) => {
      expect(isError).toEqual(false);
      expect(callbackData).toEqual("mockValue");
      done();
    };

    ProductCategoryService.getByProductCategoryLv1Id(1, callBackFunction);
    expect(spyOne).toHaveBeenCalled();
  });

  test("Failed getting data back from productCategory/productCategoryLv2 api", (done) => {
    const spyOne = jest.spyOn(httpClient, "get").mockImplementation(() =>
      Promise.reject({
        response: {
          data: "mockErrorValue",
        },
      })
    );
    const callBackFunction = (isError: boolean, callbackData: any) => {
      expect(isError).toEqual(true);
      expect(callbackData).toEqual("mockErrorValue");
      done();
    };

    ProductCategoryService.getByProductCategoryLv1Id(1, callBackFunction);
    expect(spyOne).toHaveBeenCalled();
  });

  test("Success getting data back from productCategory/productCategoryLv3 api and return to action correctly", (done) => {
    const spyOne = jest.spyOn(httpClient, "get").mockImplementation(() =>
      Promise.resolve({
        data: "mockValue",
      })
    );

    const callBackFunction = (isError: boolean, callbackData: any) => {
      expect(isError).toEqual(false);
      expect(callbackData).toEqual("mockValue");
      done();
    };

    ProductCategoryService.getByProductCategoryLv2Id(1, callBackFunction);
    expect(spyOne).toHaveBeenCalled();
  });

  test("Failed getting data back from productCategory/productCategoryLv3 api", (done) => {
    const spyOne = jest.spyOn(httpClient, "get").mockImplementation(() =>
      Promise.reject({
        response: {
          data: "mockErrorValue",
        },
      })
    );
    const callBackFunction = (isError: boolean, callbackData: any) => {
      expect(isError).toEqual(true);
      expect(callbackData).toEqual("mockErrorValue");
      done();
    };

    ProductCategoryService.getByProductCategoryLv2Id(1, callBackFunction);
    expect(spyOne).toHaveBeenCalled();
  });
});

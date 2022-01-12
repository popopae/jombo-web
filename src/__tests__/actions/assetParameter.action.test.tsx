import { AssetParameterActions } from '../../app/actions/assetParameter.action';
import fetchMock from 'fetch-mock'


import assetService from '../../app/services/assetService'

describe('AssetParameterActions', () => {


    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
      })

    test("getAssetParameters: Success",  async () => {

        const spyOne = jest.spyOn(assetService, 'getAssetParameters').mockImplementation(
                            (callback: Function) =>{
                                callback(false, [{"key":"SWW","value":"SWW"}])
                            }
                        );
        
        const dispatch = jest.fn();
        AssetParameterActions.getAssetParameters()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AssetParameterActions.Type.ASSET_PARAMETER_SUCCESS,
            payload: [{"key":"SWW","value":"SWW"}]
          }]);

    });

    test("getAssetParameters: Fail", () => {
        const spyOne = jest.spyOn(assetService, 'getAssetParameters').mockImplementation(
            ( callback: Function) => {
                callback(true, [])
            }
        );

        const dispatch = jest.fn();
        AssetParameterActions.getAssetParameters()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AssetParameterActions.Type.ASSET_PARAMETER_FAIL,
            payload: []
        }]);
    });
});
import { DbdActions } from '../../app/actions/dbd.action';
import fetchMock from 'fetch-mock'
import { DbdInformationResponse } from '../../app/models/payload/supplier/dbdResponse';
import DbdService from '../../app/services/dbdService';
import { DbdInformationRequest } from '../../app/models/payload/supplier/dbdRequest';

describe('DbdActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getInformation: Type.GET_DBD_INFORMATION_SUCCESS", () => {
        const request : DbdInformationRequest = {}
        const response: DbdInformationResponse = {}

        const spyOne = jest.spyOn(DbdService, 'getInformation').mockImplementation(
            ( request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        DbdActions.getDbdInformation(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: DbdActions.Type.GET_DBD_INFORMATION_SUCCESS,
            payload: response
        }]);
    });

    test("getInformation: Type.GET_DBD_INFORMATION_FAILED", () => {
        const request : DbdInformationRequest = {}
        const response: DbdInformationResponse = {}

        const spyOne = jest.spyOn(DbdService, 'getInformation').mockImplementation(
            ( request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        DbdActions.getDbdInformation(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: DbdActions.Type.GET_DBD_INFORMATION_FAILED,
            payload: response
        }]);
    });

});
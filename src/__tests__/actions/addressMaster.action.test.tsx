import { AddressMasterActions } from '../../app/actions/addressMaster.action';
import fetchMock from 'fetch-mock'
import AddressMasterService from '../../app/services/AddressMasterService'
import { StateGroupResponse } from '../../app/models';
import { CityRequest } from '../../app/models/payload/states/cityRequest';
import { AddressTypeNameEnum } from '../../app/utils/enums/addressTypeEnum';

describe('SupplierActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getStates: Type.STATES_SUCCESS", () => {
        const request: string = ""
        const response: StateGroupResponse[] = [{},{}]

        const spyOne = jest.spyOn(AddressMasterService, 'getStates').mockImplementation(
            (request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        AddressMasterActions.getStates(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AddressMasterActions.Type.STATES_SUCCESS,
            payload: response
        }]);
    });

    test("getStates: Type.STATES_FAIL", () => {
        const request: string = ""
        const response: StateGroupResponse[] = [{},{}]

        const spyOne = jest.spyOn(AddressMasterService, 'getStates').mockImplementation(
            (request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        AddressMasterActions.getStates(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AddressMasterActions.Type.STATES_FAIL,
            payload: response
        }]);
    });

    test("getStateCityByStateName: Type.STATES_SUCCESS", () => {
        const request: CityRequest = {}
        const response: StateGroupResponse[] = [{},{}]

        const spyOne = jest.spyOn(AddressMasterService, 'getCityByStateName').mockImplementation(
            (request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        AddressMasterActions.getStateCityByStateName(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AddressMasterActions.Type.STATES_CITY_SUCCESS,
            payload: response
        }]);
    });

    test("getStateCityByStateName: Type.STATES_CITY_FAIL", () => {
        const request: CityRequest = {}
        const response: StateGroupResponse[] = [{},{}]

        const spyOne = jest.spyOn(AddressMasterService, 'getCityByStateName').mockImplementation(
            (request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        AddressMasterActions.getStateCityByStateName(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AddressMasterActions.Type.STATES_CITY_FAIL,
            payload: response
        }]);
    });

    test("getStateCityByStateNameAndAddressType: Type.STATES_CITY_SUPPLIER_SUCCESS", () => {
        const request: CityRequest = {}
        const response: StateGroupResponse[] = [{},{}]

        const spyOne = jest.spyOn(AddressMasterService, 'getCityByStateName').mockImplementation(
            (request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        AddressMasterActions.getStateCityByStateNameAndAddressType(request,AddressTypeNameEnum.Supplier)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AddressMasterActions.Type.STATES_CITY_SUPPLIER_SUCCESS,
            payload: response
        }]);
    });

    test("getStateCityByStateNameAndAddressType: Type.STATES_CITY_SUPPLIER_FAIL", () => {
        const request: CityRequest = {}
        const response: StateGroupResponse[] = [{},{}]

        const spyOne = jest.spyOn(AddressMasterService, 'getCityByStateName').mockImplementation(
            (request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        AddressMasterActions.getStateCityByStateNameAndAddressType(request,AddressTypeNameEnum.Supplier)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AddressMasterActions.Type.STATES_CITY_FAIL,
            payload: response
        }]);
    });

    test("getStateCityByStateNameAndAddressType: Type.STATES_CITY_DOCUMENT_SUCCESS", () => {
        const request: CityRequest = {}
        const response: StateGroupResponse[] = [{},{}]

        const spyOne = jest.spyOn(AddressMasterService, 'getCityByStateName').mockImplementation(
            (request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        AddressMasterActions.getStateCityByStateNameAndAddressType(request,AddressTypeNameEnum.Document)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AddressMasterActions.Type.STATES_CITY_DOCUMENT_SUCCESS,
            payload: response
        }]);
    });

    test("getStateCityByStateNameAndAddressType: Type.STATES_CITY_DOCUMENT_FAIL", () => {
        const request: CityRequest = {}
        const response: StateGroupResponse[] = [{},{}]

        const spyOne = jest.spyOn(AddressMasterService, 'getCityByStateName').mockImplementation(
            (request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        AddressMasterActions.getStateCityByStateNameAndAddressType(request,AddressTypeNameEnum.Document)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AddressMasterActions.Type.STATES_CITY_FAIL,
            payload: response
        }]);
    });

    test("getStateCityByStateNameAndAddressType: Type.STATES_CITY_BILLING_SUCCESS", () => {
        const request: CityRequest = {}
        const response: StateGroupResponse[] = [{},{}]

        const spyOne = jest.spyOn(AddressMasterService, 'getCityByStateName').mockImplementation(
            (request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        AddressMasterActions.getStateCityByStateNameAndAddressType(request,AddressTypeNameEnum.Billing)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AddressMasterActions.Type.STATES_CITY_BILLING_SUCCESS,
            payload: response
        }]);
    });

    test("getStateCityByStateNameAndAddressType: Type.STATES_CITY_BILLING_FAIL", () => {
        const request: CityRequest = {}
        const response: StateGroupResponse[] = [{},{}]

        const spyOne = jest.spyOn(AddressMasterService, 'getCityByStateName').mockImplementation(
            (request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        AddressMasterActions.getStateCityByStateNameAndAddressType(request,AddressTypeNameEnum.Billing)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: AddressMasterActions.Type.STATES_CITY_FAIL,
            payload: response
        }]);
    });

});
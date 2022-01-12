import { CountryActions } from '../../app/actions/country.action';
import fetchMock from 'fetch-mock'


import CountryService from '../../app/services/countryService'

describe('CountryActions', () => {


    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
      })

    test("Render label correctly",  async () => {

        const spyOne = jest.spyOn(CountryService, 'getCountry').mockImplementation(
                            (callback: Function) =>{
                                callback(false, [1,2,3])
                            }
                        );
        
        const dispatch = jest.fn();
        CountryActions.getCountry()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: CountryActions.Type.COUNTRY_SUCCESS,
            payload: [1,2,3]
          }]);

    });
});
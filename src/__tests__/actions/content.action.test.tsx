import { ContentActions } from '../../app/actions/content.action';
import fetchMock from 'fetch-mock'
import contentService from '../../app/services/contentService'

describe('ContentActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getContent: Type.GET_CONTENT_SUCCESS", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(contentService, 'getContent').mockImplementation(
            ( templateName , languageCode, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        ContentActions.getContent("","")(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: ContentActions.Type.GET_CONTENT_SUCCESS,
            payload: response
        }]);
    });

    test("getContent: Type.GET_CONTENT_FAIL", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(contentService, 'getContent').mockImplementation(
            ( templateName , languageCode, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        ContentActions.getContent("","")(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: ContentActions.Type.GET_CONTENT_FAIL,
            payload: response
        }]);
    });

});
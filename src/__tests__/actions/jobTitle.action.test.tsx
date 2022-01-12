import fetchMock from 'fetch-mock'
import { JobTitleResponse } from '../../app/models';
import jobTitleService from '../../app/services/jobTitleService'
import { JobTitleActions } from '../../app/actions/jobTitle.action'

describe('JobTitleAction', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("getJobTitle: Type.JOB_TITLE_SUCCESS", () => {
        const mockData: JobTitleResponse = {
            id: 0,
            jobTitleName: '',
            jobTitleNameLocal: '',
            jobTitleNameCode: ''
        }

        const response: JobTitleResponse[] = [mockData]

        const spyOne = jest.spyOn(jobTitleService, 'getJobTitle').mockImplementation(
            (callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        JobTitleActions.getJobTitle()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: JobTitleActions.Type.JOB_TITLE_SUCCESS,
            payload: response
        }]);
    });

    test("getJobTitle: Type.JOB_TITLE_FAIL", () => {
        const response: JobTitleResponse[] = []


        const spyOne = jest.spyOn(jobTitleService, 'getJobTitle').mockImplementation(
            (callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        JobTitleActions.getJobTitle()(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: JobTitleActions.Type.JOB_TITLE_FAIL,
            payload: response
        }]);
    });

});
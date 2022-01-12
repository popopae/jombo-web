import { httpClient } from '../../app/middleware/axiosInterceptor';
import { JobTitleResponse } from '../../app/models';
import JobTitleService from '../../app/services/jobTitleService'

describe("UserService", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    });

    test('getJobTitle: Success', (done) => {

        const mockData: JobTitleResponse = {
            id: 0,
            jobTitleName: '',
            jobTitleNameLocal: '',
            jobTitleNameCode: ''
        }

        const response: JobTitleResponse[] = [mockData]

        const spyOne = jest.spyOn(httpClient, 'get').mockImplementation(
            () => Promise.resolve({
                data: response
            })
        )

        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(false);
            expect(callbackData).toEqual(response)
            done();
        });

        JobTitleService.getJobTitle(callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })

    test('getJobTitle: Fail', (done) => {

        const response: JobTitleResponse[] = []

        const spyOne = jest.spyOn(httpClient, 'get').mockImplementation(
            () => Promise.reject({
                response: {
                    data: response
                }
            })
        )
        const callBackFunction = ((isError: boolean, callbackData: any) => {
            expect(isError).toEqual(true);
            expect(callbackData).toEqual(response)
            done();
        });

        JobTitleService.getJobTitle(callBackFunction)
        expect(spyOne).toHaveBeenCalled();
    })
})
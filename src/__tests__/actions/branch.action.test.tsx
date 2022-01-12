import { BranchActions } from '../../app/actions/branch.action';
import fetchMock from 'fetch-mock'
import BranchService from '../../app/services/BranchService'
import { DeleteBranchRequest } from '../../app/models';

describe('BranchActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("deleteBranch: Type.DELETE_BRANCH_SUCCESS", () => {
        const request: DeleteBranchRequest = {}
        const response = [{},{}]

        const spyOne = jest.spyOn(BranchService, 'deleteBranch').mockImplementation(
            (request, callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        BranchActions.deleteBranch(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: BranchActions.Type.DELETE_BRANCH_SUCCESS,
            payload: response
        }]);
    });

    test("getStates: Type.DELETE_BRANCH_FAIL", () => {
        const request: DeleteBranchRequest = {}
        const response = [{},{}]

        const spyOne = jest.spyOn(BranchService, 'deleteBranch').mockImplementation(
            (request, callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        BranchActions.deleteBranch(request)(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: BranchActions.Type.DELETE_BRANCH_FAIL,
            payload: response
        }]);
    });

});
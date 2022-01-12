import { InvitationActions } from '../../app/actions/invitation.action';
import fetchMock from 'fetch-mock'
import invitationService from '../../app/services/invitationService';

describe('InvitationActions', () => {

    afterEach(() => {
        fetchMock.reset()
        fetchMock.restore()
    })

    test("validateCode: Type.VALIDATE_INVITE_CODE_SUCCESS", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(invitationService, 'validateCode').mockImplementation(
            ( req,callback: Function) => {
                callback(false, response)
            }
        );

        const dispatch = jest.fn();
        InvitationActions.validateCode("")(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: InvitationActions.Type.VALIDATE_INVITE_CODE_SUCCESS,
            payload: response
        }]);
    });

    test("validateCode: Type.VALIDATE_INVITE_CODE_FAILED", () => {
        const response = [{},{}]

        const spyOne = jest.spyOn(invitationService, 'validateCode').mockImplementation(
            ( req,callback: Function) => {
                callback(true, response)
            }
        );

        const dispatch = jest.fn();
        InvitationActions.validateCode("")(dispatch);

        expect(spyOne).toHaveBeenCalled();

        expect(dispatch.mock.calls[0]).toEqual([{
            type: InvitationActions.Type.VALIDATE_INVITE_CODE_FAILED,
            payload: response
        }]);
    });

});
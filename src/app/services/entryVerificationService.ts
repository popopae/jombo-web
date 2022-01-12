import { ApiConstant } from '../../app/utils/constants/apiConstant';
import { httpClient } from '../../app/middleware/axiosInterceptor';

const entryVerificationService = {
    verifyEntry(token: string, callback: Function) {
        httpClient.post(ApiConstant.VerifyEntry, token, { headers: { 'Content-Type' : 'text/plain' } })
            .then(function (response) {
                callback(false, response.data);
            }).catch(function (error) {
                callback(true, error.response.data);
            });
    }
}

export default entryVerificationService;
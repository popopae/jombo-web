// import axios from 'axios';
import { ApiConstant } from '../utils/constants/apiConstant';
import { httpClient } from '../middleware/axiosInterceptor';
import { ContactListManagementRequest } from '../models/payload/contact/ContactListManagementRequest';

const ContactListService = {

    getContactListFavorite(request: ContactListManagementRequest, callback: Function) {

        httpClient.post(`${ApiConstant.ContactList}/mgmt/list`, request).then(function (response) {

            callback(false, response.data.data);
        }).catch(function (error) {

            callback(true, error);
        });
    }
}

export default ContactListService;

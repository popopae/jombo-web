// import axios from 'axios';
import { ApiConstant } from '../utils/constants/apiConstant';
import { httpClient } from '../middleware/axiosInterceptor';

const CategoryService = {

    getCategory(callback: Function) {

        httpClient.get(`${ApiConstant.Product}/category/menu`).then(function (response) {

            callback(false, response.data);
        }).catch(function (error) {

            callback(true, error);
        });
    }
}

export default CategoryService;

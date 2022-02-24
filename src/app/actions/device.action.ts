import { Device } from 'app/models/entity/device';
import { DataTableRequest } from 'app/models/payload/datatable/dataTableRequest';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import DeviceService from 'app/services/device.service';
import { createAction } from 'redux-actions';

export namespace DeviceAction {
    export enum Type {
        GET_SEARCH_DEVICE_SUCCESS = 'get_search_device_success',
        GET_SEARCH_DEVICE_FAIL = 'get_search_device_fail',

        SET_SELECTED_DEVICE = 'set_selected_device',
        INITIAL_SELECTED_DEVICE = 'set_selected_device',
    }

    export const getSearchDeviceSuccess = createAction<DataTableResponse<Device>>(Type.GET_SEARCH_DEVICE_SUCCESS);
    export const getSearchDeviceFail = createAction<DataTableResponse<Device>>(Type.GET_SEARCH_DEVICE_FAIL);

    export const setSelectedDevice = createAction<Device>(Type.SET_SELECTED_DEVICE);
    export const initialSelectedDevice = createAction<Device>(Type.INITIAL_SELECTED_DEVICE);

    export function searchDevice(request: DataTableRequest) {
        return (dispatch: any) => {

            DeviceService.searchDevice(request, (isError: boolean, newState: DataTableResponse<Device>) => {
                if (!isError) {
                    dispatch(getSearchDeviceSuccess(newState));
                } else {
                    dispatch(getSearchDeviceFail(newState));
                }
            });
        }
    }
}

export type DeviceAction = Omit<typeof DeviceAction, 'Type'>;

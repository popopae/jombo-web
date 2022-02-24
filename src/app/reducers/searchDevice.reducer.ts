import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { DeviceAction } from 'app/actions/device.action';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { Device } from 'app/models/entity/device';


const initialState: RootState.SearchDeviceState = null;

export const searchDeviceReducer = handleActions<RootState.SearchDeviceState, DataTableResponse<Device>>(
    {
        [DeviceAction.Type.GET_SEARCH_DEVICE_SUCCESS]: (state, action: Action<DataTableResponse<Device>>) => {

            return state = action.payload;
        },
        [DeviceAction.Type.GET_SEARCH_DEVICE_FAIL]: (state, action: Action<DataTableResponse<Device>>) => {

            return state = null;
        }
    },
    initialState
);
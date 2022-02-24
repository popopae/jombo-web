import { handleActions, Action } from 'redux-actions';
import { RootState } from './state';
import { DeviceAction } from 'app/actions/device.action';
import { Device } from 'app/models/entity/device';


const initialState: RootState.SetSelectedDevice = null;

export const selectedDeviceReducer = handleActions<RootState.SetSelectedDevice, Device>(
    {
        [DeviceAction.Type.SET_SELECTED_DEVICE]: (state, action: Action<Device>) => {

            return state = action.payload;
        },
        [DeviceAction.Type.INITIAL_SELECTED_DEVICE]: (state, action: Action<Device>) => {

            return state = null;
        }
    },
    initialState
);
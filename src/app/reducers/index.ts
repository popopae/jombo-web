import { combineReducers } from 'redux';
import { RootState } from './state';
import { defaultReducer } from './default.reducer';

import { lastedUplinkReducer } from './lastedUplink.reducer';
import { searchDeviceReducer } from './searchDevice.reducer';
import { selectedDeviceReducer } from './selectedDevice.reducer';

// NOTE: current type definition of Reducer in 'redux-actions' module
// doesn't go well with redux@4
const rootReducer = combineReducers<RootState>({
  lastedUplinkResponse: lastedUplinkReducer as any,
  searchDeviceResponse: searchDeviceReducer as any,
  selectedDeviceResponse: selectedDeviceReducer as any,

  default: defaultReducer as any
});

export { RootState, rootReducer };

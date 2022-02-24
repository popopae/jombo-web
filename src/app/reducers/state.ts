import { Device } from "app/models/entity/device";
import { LastedUplinkResponse } from "app/models/payload/callback/lastedUplinkResponse";
import { DataTableResponse } from "app/models/payload/datatable/dataTableResponse";

export interface RootState {
  lastedUplinkResponse: RootState.LastedUplinkState,
  searchDeviceResponse: RootState.SearchDeviceState,
  selectedDeviceResponse: RootState.SetSelectedDevice,

  default: any
  router?: any;
}

export namespace RootState {
  export type LastedUplinkState = LastedUplinkResponse;
  export type SearchDeviceState = DataTableResponse<Device>;
  export type SetSelectedDevice = Device;
}

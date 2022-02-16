import { LastedUplinkResponse } from "app/models/payload/callback/lastedUplinkResponse";

export interface RootState {
  lastedUplinkResponse: RootState.LastedUplinkState

  default: any
  router?: any;
}

export namespace RootState {
  export type LastedUplinkState = LastedUplinkResponse;
}

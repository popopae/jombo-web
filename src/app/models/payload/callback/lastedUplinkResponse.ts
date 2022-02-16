export interface LastedUplinkResponse {
    uplink_id?: number;
    device_id?: number;
    current_amp?: number;
    voltage?: number;
    active_power?: number;
    power_factor?: number;
    frequency?: number;
    statue_onoff?: number;
    controller_temp?: number;
    active_energy?: number;
    brightness?: number;
    status_device?: string;
    created_date?: Date;
  
    device_code?: string;
    device_name?: string;
    device_type_id?: string;
    device_type_name?: string;
  }
  
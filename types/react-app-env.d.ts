/// <reference types="react-scripts" />



export type SortingColumn = {
  columnName: string,
  sortingOrder: 'asc' | 'desc'
}

export type SortingType = {
  type: 'asc' | 'desc'
}

export type SortingTable = {
  activeColumn: string,
  sortingColumn: Array<SortingColumn>
}

export type TextFieldConfig = {
  id?: string
  placeholder?: string
  maxLength?: number
  minLength?: number
  label?: string
  isRequired?: boolean
  isEnglishOnly?: boolean
  isDisabled?: boolean
  fieldName?: string
  value?: string
  form?: any
  className?: string
  allowClear?: boolean
  onChange?: Function
  onBlur?: Function
  onFocus?: Function
  customValidate?: Function
  divClassName? : string
}

export type DropdownConfig = {
  id?: string;
  placeholder?: string;
  label?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isDisplayValue?: boolean;
  isShowSearch?: boolean;
  displayType?: string;
  fieldName?: string;
  form?: any;
  className?: string;
  onChange?: any;
  listValue?: any;
  disabled?:boolean;
  defaultValue? :any;
  isLoading?:boolean;
  sortType? :'asc' | 'desc';
}

export interface DropdownValue {
    name?: string
    value?: string
}

export interface DropdownValue {
  name?: string
  value?: string
}

export interface PhoneType {
  id?: string
  telephone?: string
  telephoneExt?: string
  countryCode?:string
}


export interface BusinessType {
  id?: number, 
  businessTypeName: string
}

export interface File {
  fieldId: string
  name:string
  uniqueName:string
  extension: string
  size:number
  file?:Blob
  isUploading:boolean
  uploadingProgress:number
  isDownloading:boolean
  downloadingProgress:number
  errorMessage:string
}

export interface AffidavitToggle { 
  supplier: boolean, 
  vat: boolean, 
  financial: boolean, 
  others: boolean
}
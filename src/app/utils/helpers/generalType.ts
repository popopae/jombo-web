export enum YearEstablished {
  LessThan1Year = 1,
  OneToThreeYear = 2,
  ThreeToFiveYear = 3,
  FiveToTenYear = 4,
  MoreThan10Years = 5
}

export enum OtherFilter {
  PTVNVerified = 6,
  POOnline = 7
}

export enum AddressType {
  CompanyAddress = 8,
  DeliveredAddress = 9
}

export enum SortingType {
  CompanyNameInterAsc = 10,
  CompanyNameInterDesc = 11,
  CompanyNameLocalAsc = 12,
  CompanyNameLocalDesc = 13,
  CapitalDesc = 14,
  CapitalAsc = 15,
  YearDesc = 16,
  YearAsc = 17
}

export enum GeneralTypeCode {
  YearEstablished = 'YearEstablished',
  BusinessEntity = 'BusinessEntity',
  BusinessType = 'BusinessType',
  OtherFilter = 'OtherFilter',
  AddressType = 'AddressType',
  Sorting = 'Sorting',
  Currency = 'Currency'
}

export enum ChipTypeCode {
  SearchText = 'searchText',
  YearEstablished = 'yearEstablished',
  BusinessType = 'businessType',
  Country = 'country',
  RegisterCapital = 'registerCapital',
  CategoryLev1 = 'productCategoryLev1',
  CategoryLev2 = 'productCategoryLev2',
  CategoryLev3 = 'productCategoryLev3',
  CategoryAVL_Lev1 = 'productCategoryAVL_Lev1',
  CategoryAVL_Lev2 = 'productCategoryAVL_Lev2',
  CategoryAVL_Lev3 = 'productCategoryAVL_Lev3',
  Currency = 'currency',
  OtherFilter = 'otherFilter',
  TabIndex = 'tabIndex'
}

export enum ChipColor {
  YearEstablished = 'cadetblue',
  BusinessType = 'chocolate',
  OtherFilter = 'cornflowerblue',
  RegisterCapital = 'crimson',
  SearchText = 'darkgray',
  Country = 'blueviolet',
  CategoryLev1 = 'steelblue',
  CategoryLev2 = 'steelblue',
  CategoryLev3 = 'steelblue'
}

export enum ChipMode {
  Default = 'default'
}

export enum SortingEnum {
  ASC = 'asc',
  DESC = 'desc'
} 

export enum SortingColumnEnum {
  SupplierName = 'supplierName',
  OrgId = 'orgId',
  Branch = 'branch',
  RegisteredCapital = 'registeredCapital',
  YearEstablishment = 'yearEstablishment',
  BusinessEntity = 'businessEntity',
  Country = 'country',
  State = 'state',
  ProductCategoryLev1 = 'productCategoryLev1',
  ProductCategoryLev2 = 'productCategoryLev2',
  ProductCategoryLev3 = 'productCategoryLev3',
  CompanyNameInter = 'companyNameInter',
  CompanyNameLocal = 'companyNameLocal',
  InvNameInter = 'invNameInter',
  InvNameLocal = 'invNameLocal',
  BusinessType = 'businessType',
  ProductKeyword = 'keyword',
}

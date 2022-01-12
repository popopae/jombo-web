import { CoreBusinessEntity } from './coreBusinessEntity';
import { CoreCountry } from './coreCountry';
import { CoreOrgProductCategory } from './coreOrgProductCategory';
import { CoreUser } from './coreUser';
import { CoreOrgVendor } from './coreOrgVendor';
import { CoreState } from './coreState';
import { CoreOrgPrivate } from './coreOrgPrivate';
import { CoreOrgAddress } from './coreOrgAddress';
import { CoreOrgBusinessType } from './coreOrgBusinessType';
import { CoreGeneral } from './coreGeneral';
import { CoreOrgProductKeywords } from './coreOrgProductKeywords';
import { CoreAVLApproved } from './coreAVLApproved';
import { CorePreQualifiedSuppliers } from './corePreQualifiedSuppliers';
import { CoreOrgSupplierCategoryAVLs } from './coreOrgSupplierCategoryAVLs';
import { CoreSdSendInvitations } from './coreSdSendInvitations';

export interface CoreOrganization {
  id?: number;
  orgId?: string;
  branch?: string;
  companyNameLocal?: string;
  companyNameInter?: string;
  invNameLocal?: string;
  invNameInter?: string;
  currencyCode?: string;
  mainBusinessCode?: string;
  phoneNo?: string;
  phoneExt?: string;
  mobileNo?: string;
  faxNo?: string;
  faxExt?: string;
  webSite?: string;
  registeredCapital?: number;
  yearEstablished?: string;
  taxId?: string;
  businessEntityId?: number;
  countryId?: number;
  stateId?: number;
  poOnline?: boolean;
  isPtvnVerified?: boolean;
  isFevorite?: boolean;
  isPublic?: boolean;
  isDelete?: boolean;
  isAffiliateCP?: boolean;
  supplierKeyId?: number;
  createdDate?: Date;
  updatedDate?: Date;
  isSendEmail?: boolean;

  productKeyword?: string;
  txtViewMore: string;
  isViewMore?: boolean;
  isContactBlock?: boolean;

  pageType?: string;

  coreBusinessEntity?: CoreBusinessEntity;
  coreCompanyType?: CoreGeneral;
  coreCountry?: CoreCountry;
  coreState?: CoreState;

  coreOrgProductCategories?: CoreOrgProductCategory[];
  coreOrgVendors?: CoreOrgVendor[];
  coreUsers?: CoreUser[];
  coreOrgPrivates?: CoreOrgPrivate[];
  coreOrgAddresses?: CoreOrgAddress[];
  coreOrgBusinessTypes?: CoreOrgBusinessType[];
  coreOrgProductKeywords?: CoreOrgProductKeywords[];
  coreAVLApproves: CoreAVLApproved[];
  corePreQualifiedSuppliers: CorePreQualifiedSuppliers[];
  coreOrgSupplierCategoryAVLs: CoreOrgSupplierCategoryAVLs[];
  coreSdSendInvitations: CoreSdSendInvitations[];
}

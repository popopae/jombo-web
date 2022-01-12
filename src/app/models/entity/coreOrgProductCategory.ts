import { CoreOrganization } from './coreOrganization';
import { CoreProductCategoryLev3 } from './coreProductCategoryLev3';

export interface CoreOrgProductCategory {
  id?: number;
  supplierId?: number;
  categoryIdLev3?: number;
  productTypeId?: number;

  coreOrganization?: CoreOrganization;
  coreProductCategoryLev3?: CoreProductCategoryLev3;
}

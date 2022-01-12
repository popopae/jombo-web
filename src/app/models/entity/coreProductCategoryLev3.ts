import { CoreOrgProductCategory } from './coreOrgProductCategory';
import { CoreProductCategoryLev2 } from './coreProductCategoryLev2';

export interface CoreProductCategoryLev3 {
  categoryIdLev3?: number;
  categoryCodeLev3?: string;
  categoryNameLev3?: string;
  categoryDescLev3?: string;
  categoryIdLev2?: number;
  countSupplierLev3?: number;

  coreOrgProductCategories?: CoreOrgProductCategory[];
  coreProductCategoryLev2?: CoreProductCategoryLev2;
}

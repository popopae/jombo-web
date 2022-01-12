import { CoreProductCategoryLev1 } from './coreProductCategoryLev1';
import { CoreProductCategoryLev3 } from './coreProductCategoryLev3';

export interface CoreProductCategoryLev2 {
  categoryIdLev2?: number;
  categoryCodeLev2?: number;
  categoryNameLev2?: string;
  categoryDescLev2?: string;
  categoryIdLev1?: number;
  countSupplierLev2?: number;

  coreProductCategoryLev1?: CoreProductCategoryLev1
  coreProductCategoryLev3s?: CoreProductCategoryLev3[];
}

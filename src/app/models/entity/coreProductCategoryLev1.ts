import { CoreProductCategoryLev2 } from './coreProductCategoryLev2';

export interface CoreProductCategoryLev1 {
  categoryIdLev1?: number;
  categoryCodeLev1?: string;
  categoryNameLev1?: string;
  categoryDescLev1?: string;
  icon?: string;
  countSupplierLev1?: number;

  coreProductCategoryLev2s?: CoreProductCategoryLev2[];
}

export interface CoreOrgSupplierCategoryAVLs {
    tenantId: string;
    supplierId: string;
    isPassCreateAVL: boolean;
    approvedCategoryList?: ApprovedCategoryList[];
}

export interface ApprovedCategoryList {
    id: number,
    supplierId: string,
    tenantId?: string,
    categoryId?: string,
    categoryName?: string
}
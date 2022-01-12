export interface CorePreQualifiedSuppliers {
    id?: number;
    invitationCode?: string;
    isPTVNSupplier?: boolean;
    isPassQualified?: boolean;
    qualifiedSupplierStatus?: string;
    resultData?: string;
    supplierId?: string;
    tenantId?: string;
}

export interface CorePreQualifiedSupplierResult {
    verify: string,
    isPass: boolean,
    condition?: string,
    value?: string
}
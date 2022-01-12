
export enum MessageEnum {
    ALREADY_EXISTS_EMAIL_NOT_VERIFY_EXCEED_LIMIT = "Signup.ErrorForm.EmailExistsNotVerifyExceedLimit",
    EMAIL_NOT_FOUND = "Signup.ErrorForm.EmailNotFound",
    EMAIL_NOT_FOUND_IN_SIGNUP = "Signup.ErrorForm.EmailNotFoundInSignup",
    ALREADY_EXISTS_EMAIL_NOT_VERIFY = "Signup.ErrorForm.EmailExistsNotVerify",
    ALREADY_EXISTS_EMAIL = "Signup.ErrorForm.EmailExists",

    ALREADY_ACTIVATED = "Signup.ErrorForm.EmailAlreadyActivated",


    SEND_MAIL_ERROR = "Error from sending mail service",
    SEND_MAIL_SUCCESS = "[Email Service] Sending email success",
    INTERNAL_SERVER_ERROR = "Internal server error.",

    RD_NOT_FOUND = 'RD.ErrorForm.Supplier.NotFound',
    ERROR_500 = "Common.ErrorForm.ERROR500",

    SEARCH_SUPPLIER_SAVE_DRAFT_DUPLICATE = "SearchSupplier.ErrorForm.SaveDraftDuplicate1Args",
    SEARCH_SUPPLIER_APPROVE_DUPLICATE = "SearchSupplier.ErrorForm.ApproveDuplicate1Args",
    SEARCH_SUPPLIER_AWAITING_APPROVE_DUPLICATE = "SearchSupplier.ErrorForm.AwaitingApproveDuplicate1Args",
    SEARCH_SUPPLIER_REJECT_DUPLICATE = "SearchSupplier.ErrorForm.RejectDuplicate1Args",
    SEARCH_SUPPLIER_TAX_ID_DUPLICATE = "SearchSupplier.ErrorForm.TaxIDDuplicate",
    SEARCH_SUPPLIER_TAX_ID_INDIVIDUAL_EXIST = "SearchSupplier.ErrorForm.TaxIDIndividualExist",
    SEARCH_SUPPLIER_TAX_ID_CORPORATION_EXIST = "SearchSupplier.ErrorForm.TaxIDCorporationExist",
}
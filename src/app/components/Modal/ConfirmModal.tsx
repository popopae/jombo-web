import { i18nHelper } from "app/i18n/i18n";
import * as React from "react";

interface ConfirmModalProps {
    title: string,
    bodyContent: string,
    buttonOkLabel: string,
    buttonCancelLabel: string,
    confirmAction: any,
    cancelAction: any,
    handleInputReason?: any,
    showReason?: boolean
    reasonLabel?: string,
    reasonRequireMassage?: string
}

const ConfirmModal: React.FC<ConfirmModalProps> = (props: any) => {
    const {
        title,
        bodyContent,
        buttonOkLabel,
        buttonCancelLabel,
        confirmAction,
        cancelAction,
        handleInputReason,
        showReason,
        reasonLabel,
        reasonRequireMassage
    } = props;

    let [showError, setShowError] = React.useState(false);
    let [inputValue, setInputValue] = React.useState('')

    const confirmModal = () => {
        if (showReason && inputValue === '') {
            setShowError(true);
        } else {
            confirmAction();
            cancelAction();
        }
    };

    const closeModal = () => {
        cancelAction();
    };

    const handleOnChange = (event: any) => {
        const value = event.target.value;
        if (value !== '') {
            setShowError(false);
        } else {
            setShowError(true);
        }
        handleInputReason(value);
        setInputValue(value);
    };

    return (
        <>
            <div className="modal modal-show" aria-modal="true" style={{ display: 'block', paddingLeft: '17px' }}>
                <div className="modal-dialog modal-md">
                    <div className="modal-content">
                        <div className="modal-header">

                            <div className="modal-title">
                                <span className="pull-left" data-rb="modal-title-content">{title}:</span>
                                <div className="clearfix" />
                            </div>
                        </div>
                        <div className="modal-body">
                            <p data-rb="modal-body-content">{bodyContent}</p>
                            {showReason &&
                                <div className="form-group">
                                    <label data-rb="modal-reason-label">{reasonLabel} :</label>
                                    <textarea
                                        placeholder={i18nHelper.translate('SupplierList.Modal.ApprovePlaceHolderLabel')}
                                        data-rb="modal-reason-content"
                                        className={`form-control ${showError ? 'is-invalid' : ''}`}
                                        onChange={handleOnChange}
                                    >
                                    </textarea>
                                    {showError &&
                                        <div className="invalid-feedback" data-rb="modal-require-msg">
                                            {reasonRequireMassage}
                                        </div>
                                    }
                                </div>
                            }
                        </div>
                        <div className="modal-footer">
                            <div className="float-right">
                                <button
                                    type="button"
                                    className="btn-op-primary"
                                    data-rb="modal-btn-confirm"
                                    onClick={() => confirmModal()}
                                >
                                    {buttonOkLabel}
                                </button>
                                <button
                                    type="button"
                                    data-dismiss="modal"
                                    className="btn-op-default"
                                    data-rb="modal-btn-close"
                                    onClick={() => closeModal()}
                                >
                                    {buttonCancelLabel}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop show"> </div>
        </>
    );
}

export default ConfirmModal;
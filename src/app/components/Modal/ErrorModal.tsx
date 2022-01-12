import * as React from "react";

interface ErrorModalProps {
    title: string,
    bodyContent: string,
    buttonText: string,
    cancelAction: any,
}

const ErrorModal: React.FC<ErrorModalProps> = (props: any) => {
    const { title, bodyContent, buttonText, cancelAction } = props;

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
                        </div>
                        <div className="modal-footer">
                            <div className="float-right">
                                <button
                                    type="button"
                                    data-dismiss="modal"
                                    data-rb="modal-btn-close"
                                    className="btn-op-primary"
                                    onClick={cancelAction}
                                >
                                    {buttonText}
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

export default ErrorModal;
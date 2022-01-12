import { i18nHelper } from "app/i18n/i18n";
import { CoreActivityLogs } from "app/models/entity/coreActivityLogs";
import moment from "moment";
import * as React from "react";
import 'moment-timezone';
interface HistoryModalProps {
    activityLogs: CoreActivityLogs[];
    companyName: String;
    timezone: String;
    closeModal: Function;
}

const HistoryModal: React.FC<HistoryModalProps> = (props: any) => {

    const {
        activityLogs,
        companyName,
        timezone,
        closeModal
    } = props;
    
    const getDateWithTimezone = (date: Date, timezone: string) => {
        const isoString = new Date(date).toISOString();
        const dateUtc = moment.utc(isoString);
        const dateWithTimezone = dateUtc.tz(timezone).format('DD/MM/YYYY HH:mm');
        return dateWithTimezone;
    }

    const renderTable = () => {

        const render: any[] = [];
        activityLogs.forEach((eachActivityLog: CoreActivityLogs) => {

            const tempActivityMessage: string[] = eachActivityLog.activityMessage.split("\n")
            const activityMessage: string[] = tempActivityMessage.filter(each => each !== '');
            const dateStringWithTime = getDateWithTimezone(eachActivityLog.createdDate, timezone);

            switch (eachActivityLog.activityType) {
                case "QUALIFIED":
                    render.push(
                        <>
                            <tr>
                                <td data-rb="qualified-date">{dateStringWithTime}</td>
                                <td data-rb="qualified-activity">{i18nHelper.translate(eachActivityLog.activityMessage)}</td>
                                <td data-rb="qualified-actionBy">{eachActivityLog.createdBy}</td>
                            </tr>
                        </>
                    )
                    break;
                case "UNQUALIFIED":
                    activityMessage.forEach((eachItem, index) => {
                        if (index === 0) {
                            render.push(
                                <tr>
                                    <td data-rb="unqualified-date">{dateStringWithTime}</td>
                                    <td data-rb="unqualified-activity">{i18nHelper.translate(eachItem)}:</td>
                                    <td data-rb="unqualified-actionBy">{eachActivityLog.createdBy}</td>
                                </tr>
                            )
                        } else {
                            render.push(
                                <tr className="no-border">
                                    <td />
                                    <td data-rb="unqualified-activity"><span className="color-sub">- {i18nHelper.translate(eachItem)}</span></td>
                                    <td />
                                </tr>
                            )
                        }
                    })
                    break;
                case "APPROVE_UNQUALIFIED_SUPPLIER":
                    activityMessage.forEach((eachItem, index) => {
                        if (index === 0) {
                            render.push(
                                <tr>
                                    <td data-rb="approve-unqualified-date">{dateStringWithTime}</td>
                                    <td data-rb="approve-unqualified-activity">{i18nHelper.translate(eachItem)}</td>
                                    <td data-rb="approve-unqualified-actionBy">{eachActivityLog.createdBy}</td>
                                </tr>
                            )
                        } else {
                            const approvalReason = eachItem.replace('Common.ActivityLog.ApprovalReason', i18nHelper.translate('Common.ActivityLog.ApprovalReason'));
                            render.push(
                                <tr className="no-border">
                                    <td />
                                    <td data-rb="approve-unqualified-activity"><span className="color-sub">{approvalReason}</span></td>
                                    <td />
                                </tr>
                            )
                        }
                    })
                    break;

                case "REJECT_UNQUALIFIED_SUPPLIER":
                    activityMessage.forEach((eachItem, index) => {
                        if (index === 0) {
                            render.push(
                                <tr>
                                    <td data-rb="reject-unqualified-date">{dateStringWithTime}</td>
                                    <td data-rb="reject-unqualified-activity">{i18nHelper.translate(eachItem)}</td>
                                    <td data-rb="reject-unqualified-actionBy">{eachActivityLog.createdBy}</td>
                                </tr>
                            )
                        } else {
                            const approvalReason = eachItem.replace('Common.ActivityLog.RejectReason', i18nHelper.translate('Common.ActivityLog.RejectReason'));
                            render.push(
                                <tr className="no-border">
                                    <td />
                                    <td data-rb="reject-unqualified-activity"><span className="color-sub">{approvalReason}</span></td>
                                    <td />
                                </tr>
                            )
                        }
                    })
                    break;

                default:
                    break;
            }
        });

        return render;
    }

    return (
        <>
            <div className="modal modal-show" aria-modal="true" style={{ display: 'block' }}>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title" data-rb="modal-history-title">{i18nHelper.translate('History.Title')}
                                <div className="ml-auto">
                                    <button
                                        type="button"
                                        data-dismiss="modal"
                                        className="btn-icon close"
                                        data-rb="modal-history-buttun-close"
                                        onClick={() => closeModal()}
                                    >
                                        <i className="icon-cross" />
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body no-scroll">
                            <div className="information-bar mb-30">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="title" data-rb="modal-history-company-name-title">{i18nHelper.translate('History.CompanyName')}</div>
                                        <div className="detail" data-rb="modal-history-company-name">{companyName}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="table-responsive table-header-fix">
                                <div className="table-thead-fixed">
                                    <table className="table">
                                        <colgroup>
                                            <col style={{ width: '190px' }} />
                                            <col style={{ width: '460px' }} />
                                            <col style={{ width: '220px' }} />
                                        </colgroup>
                                        <thead>
                                            <tr>
                                                <th data-rb="modal-history-date">{i18nHelper.translate('History.Date')}</th>
                                                <th data-rb="modal-history-activity">{i18nHelper.translate('History.Activity')}</th>
                                                <th data-rb="modal-history-actionBy">{i18nHelper.translate('History.ActionBy')}</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>
                                <div style={{ maxHeight: '260px' }} className="table-tbody-scroll">
                                    <table className="table">
                                        <colgroup>
                                            <col style={{ width: '190px' }} />
                                            <col style={{ width: '460px' }} />
                                            <col style={{ width: '220px' }} />
                                        </colgroup>
                                        <tbody>
                                            {renderTable()}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop show"> </div>
        </>
    );
}

export default HistoryModal;
import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "app/reducers";
import { ContactActions } from "app/actions/contact.action";
import { ContactListManagementRequest } from "app/models/payload/contact/ContactListManagementRequest";
import { ValidateHelper } from "app/utils/helpers/validateHelper";
import { DataTableResponse } from "app/models";
import { i18nHelper } from "app/i18n/i18n";
import { UpdateFavoriteActions } from "app/actions/updateFavorite.action";
import { UpdateFavoriteRequest } from "app/models/payload/favorite/updateFavoriteRequest";
import { CoreOrganization } from "app/models/entity/coreOrganization";
import { ContactListManagementResponse } from "app/models/payload/contact/ContactListManagementResponse";
import { DateTimeHelper } from "app/utils/helpers/dateTimeHelper";

interface ContactListModalProps {
    supplierData: CoreOrganization,
    sysUserId: string,
    tenantId: string,
    closeAction: any,
    setIsLoading: Function
}

const ContactListModal: React.FC<ContactListModalProps> = (props: any) => {

    const {
        supplierData,
        sysUserId,
        tenantId,
        closeAction,
        setIsLoading
    } = props;

    const dispatch = useDispatch();
    const dataTableContactModal: DataTableResponse<ContactListManagementResponse> = {};
    const contactListModel: ContactListManagementResponse[] = [];
    const lngCode: string = localStorage.getItem('lng');
    const supplierInfo: CoreOrganization = supplierData;

    let [dataTable, setDataTable] = React.useState(dataTableContactModal);
    let [contactList, setContactList] = React.useState(contactListModel);
    let contactResponse: RootState.ContactListState = useSelector((state: RootState) => {
        return state.contactResponse;
    });

    let updateFavorite: RootState.UpdateFavoriteState = useSelector((state: RootState) => {
        return state.updateFavorite;
    });

    let [pageIndex, setPageIndex] = React.useState(1);
    let [pageSize, setPageSize] = React.useState(5);

    React.useEffect(() => {
        if (contactResponse !== null) {
            contactResponse.data.forEach((item: ContactListManagementResponse, index) => {
                item.indexKey = index + 1;
                if (item.favoriteSysUserId !== null) {
                    item.isFavorite = true;
                }
            })

            setDataTable(contactResponse);
            setIsLoading(false)
            setContactList(contactListData())
        }

        if (contactResponse === null && ValidateHelper.isObjectEmptyOrNullOrUndefined(dataTable)) {
            loadContactList();
        }
    }, [contactResponse]);

    React.useEffect(() => {
        if (contactResponse !== null) {
            setContactList(contactListData())
        }
    }, [pageIndex, pageSize])

    React.useEffect(() => {
        if (updateFavorite !== null && updateFavorite.errorMessage === null) {
            const isFavorite: boolean = contactResponse.data.find(f => f.userId === updateFavorite.data).isFavorite;
            contactResponse.data.find(f => f.userId === updateFavorite.data).isFavorite = !isFavorite;

            dispatch(UpdateFavoriteActions.initialUpdateFavorite())
            setIsLoading(false);
        }
    }, [updateFavorite])

    const loadContactList = () => {
        setIsLoading(true);
        const request: ContactListManagementRequest = {
            supplierId: supplierInfo.id,
            sysUserId: sysUserId,
            tenantId: tenantId
        }
        dispatch(ContactActions.getContactListFavorite(request))
    }

    const closeModal = () => {
        dispatch(ContactActions.setInitial())
        closeAction();
    };

    const contactListData = () => {
        return contactResponse.data.slice((pageIndex - 1) * pageSize, pageIndex * pageSize);
    }

    const getPaginationFormerRange = () => {
        return dataTable.recordsTotal === 0 ? 0 : ((pageIndex));
    }

    const getPaginationLatterRange = () => {
        return Math.ceil(dataTable.recordsTotal / pageSize);
    }

    const handlePageSizeChange = (e: any) => {
        setPageSize(Number(e.target.value));
        setPageIndex(1);
    }

    const handlePaginationIconArrow = (command: string) => {

        const lastPage = Math.ceil(dataTable.recordsTotal / pageSize);

        switch (command) {
            case 'left-end':
                setPageIndex(1);
                break;

            case 'left-page':
                if (pageIndex > 1) {
                    setPageIndex(pageIndex - 1);
                }
                break;

            case 'right-page':
                if (pageIndex < lastPage) {
                    setPageIndex(pageIndex + 1);
                }
                break;

            case 'right-end':
                setPageIndex(lastPage);
                break;

            default:
                setPageIndex(1);
                break;
        }
    }

    const handleClickFavorite = (item: ContactListManagementResponse) => {
        setIsLoading(true)
        const request: UpdateFavoriteRequest = {
            sysUserId: sysUserId,
            tenantId: tenantId,
            userId: item.userId
        }
        dispatch(UpdateFavoriteActions.updateFavorite(request));
    }

    const renderPagination = () => {
        return (
            <div className="op-pagination">
                <div className="float-left"><span className="hide-sm">{i18nHelper.translate('Common.Pagination.Showing')}</span>
                    <select
                        className="form-control input-inline"
                        onChange={(e) => handlePageSizeChange(e)}
                        data-rb="pagination-entries-per-page"
                    >
                        <option>5</option>
                        <option>10</option>
                        <option>15</option>
                        <option>20</option>
                        <option>25</option>
                    </select><span className="hide-sm">{i18nHelper.translate('Common.Pagination.EntriesPerPage')}</span>
                </div>
                <div className="d-flex align-items-center float-right">
                    <strong data-rb="pagination-former-range">{getPaginationFormerRange()}&nbsp;</strong>
                    <strong>{i18nHelper.translate('Common.Pagination.To')}&nbsp;</strong>
                    <strong data-rb="pagination-latter-range">{getPaginationLatterRange()}&nbsp;</strong>
                    <span>{i18nHelper.translate('Common.Pagination.Of')}&nbsp;</span>
                    <span data-rb="pagination-total-records">
                        {dataTable.recordsTotal}&nbsp;
                        {i18nHelper.translate('Common.Pagination.Entries')}
                    </span>
                    <a className="page-ctrl">
                        <i
                            className="icon-arrow-left-end"
                            data-rb="pagination-icon-arrow-left-end"
                            onClick={() => handlePaginationIconArrow('left-end')}
                        />
                    </a>
                    <a className="page-ctrl">
                        <i
                            className="icon-arrow-left-page"
                            data-rb="pagination-icon-arrow-left-page"
                            onClick={() => handlePaginationIconArrow('left-page')}
                        />
                    </a>
                    <a className="page-ctrl">
                        <i
                            className="icon-arrow-right-page"
                            data-rb="pagination-icon-arrow-right-page"
                            onClick={() => handlePaginationIconArrow('right-page')}
                        />
                    </a>
                    <a className="page-ctrl">
                        <i
                            className="icon-arrow-right-end"
                            data-rb="pagination-icon-arrow-right-end"
                            onClick={() => handlePaginationIconArrow('right-end')}
                        />
                    </a>
                </div>
                <div className="clearfix"></div>
            </div>
        )
    }

    const renderContactList = () => {
        return (
            <div className="table-responsive table-header-fix">
                <div className="table-thead-fixed">
                    <table className="table">
                        <colgroup>
                            <col style={{ width: '40px' }} />
                            <col style={{ width: '160px' }} />
                            <col style={{ width: '140px' }} />
                            <col style={{ width: '110px' }} />
                            <col style={{ width: '160px' }} />
                            <col style={{ width: '110px' }} />
                            <col style={{ width: '40px' }} />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>{i18nHelper.translate('')}No.</th>
                                <th>{i18nHelper.translate('Common.Label.ContactName')}</th>
                                <th>{i18nHelper.translate('Common.Label.Phone')}</th>
                                <th>{i18nHelper.translate('Common.Label.Mobile')}</th>
                                <th>{i18nHelper.translate('Common.Label.Email')}</th>
                                <th>{i18nHelper.translate('Common.Label.LastUpdated')}</th>
                                <th className="col-action"></th>
                            </tr>
                        </thead>
                    </table>
                </div>
                <div style={{ maxHeight: '226px' }} className="table-tbody-scroll">
                    <table className="table">
                        <colgroup>
                            <col style={{ width: '40px' }} />
                            <col style={{ width: '160px' }} />
                            <col style={{ width: '140px' }} />
                            <col style={{ width: '110px' }} />
                            <col style={{ width: '160px' }} />
                            <col style={{ width: '110px' }} />
                            <col style={{ width: '40px' }} />
                        </colgroup>
                        <tbody>
                            {contactList.map((item) => {
                                return (
                                    <tr key={item.indexKey}>
                                        <td>{item.indexKey}</td>
                                        <td>
                                            {lngCode === 'en' &&
                                                item.fullNameInter
                                            }
                                            {lngCode !== 'en' &&
                                                item.fullNameLocal
                                            }
                                        </td>
                                        <td>{`${item.phoneNo} ${ValidateHelper.isEmptyOrNullOrUndefined(item.phoneExt) ? '' : 'Ext.'}  ${item.phoneExt}`}</td>
                                        <td>{ValidateHelper.isEmptyOrNullOrUndefined(item.mobileNo) ? '-' : item.mobileNo}</td>
                                        <td>{item.email}</td>
                                        <td>{DateTimeHelper.ParseDate(item.updateDate)}</td>
                                        <td className="col-action">
                                            <button
                                                type="button"
                                                className="btn-icon"
                                                data-rb={`favorite-${item.userId}`}
                                                onClick={() => handleClickFavorite(item)}
                                            >
                                                <i className={item.isFavorite ? 'icon-heart' : 'icon-heart-border'}></i>
                                            </button>
                                        </td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className="modal modal-show" aria-modal="true" style={{ display: 'block', paddingLeft: '17px' }}>
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="modal-title">
                                {i18nHelper.translate('Common.Label.ContactDetails')}
                                <div className="ml-auto">
                                    <button type="button"
                                        onClick={() => closeModal()}
                                        data-dismiss="modal"
                                        className="btn-icon close"
                                        data-rb="close-modal"
                                    >
                                        <i className="icon-cross"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body no-scroll">
                            <div className="information-bar mb-30">
                                <div className="row">
                                    <div className="col-5">
                                        <div className="title">{i18nHelper.translate('Common.Label.CompanyName')}</div>
                                        <div className="detail">
                                            {lngCode === 'en' &&
                                                supplierInfo.companyNameInter
                                            }
                                            {lngCode !== 'en' &&
                                                supplierInfo.companyNameLocal
                                            }
                                        </div>
                                    </div>
                                    <div className="col-3">
                                        <div className="title">{i18nHelper.translate('Common.Label.Website')}</div>
                                        <div className="detail"><a href={supplierInfo.webSite}>{supplierInfo.webSite}</a></div>
                                    </div>
                                    <div className="col-4">
                                        <div className="title">{i18nHelper.translate('Common.Label.Phone')}</div>
                                        <div className="detail">{`${supplierInfo.phoneNo} ${ValidateHelper.isEmptyOrNullOrUndefined(supplierInfo.phoneExt) ? '' : 'Ext.'}  ${supplierInfo.phoneExt}`}</div>
                                    </div>
                                </div>
                            </div>
                            {contactList.length > 0 &&
                                <>
                                    {renderContactList()}
                                    {renderPagination()}
                                </>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal-backdrop show"> </div>
        </>
    );
}

export default ContactListModal;
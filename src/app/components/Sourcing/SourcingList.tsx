import React from "react";
import {i18nHelper} from "app/i18n/i18n";
import {SourcingTabEnum} from "app/utils/enums/sourcingTabEnum";
import {useDispatch, useSelector} from "react-redux";
import {SourcingEventActions} from "app/actions/sourcing.action";
import {SourcingEventRequest} from "app/models/payload/sourcing/sourcingEventRequest";
import {CommonDataTable} from "app/models/payload/datatable/commonDataTableResponse";
import {SourcingEventResponse} from "app/models/payload/sourcing/sourcingEventResponse";
import {RootState} from "app/reducers";
import {SourcingStatusEnum} from "app/utils/enums/SourcingStatusEnum";
import {CommonHelper} from "app/utils/helpers/commonHelper";
import {Chip} from "app/models/payload/chip/Chip";
import {ChipTypeCode} from "app/utils/helpers/generalType";
import {ChipHelper} from "app/utils/helpers/chipHelper";
import {CommonConstant} from "app/utils/constants/commonConstant";

interface SourcingProps {
  orgId: string,
  vendorNumber: string,
  setIsShowSourcing: Function,
  setIsLoading: Function,
  sourcingRequest?: SourcingEventRequest,
  chipList?: any[]
}

const SourcingList: React.FC<SourcingProps> = (props: SourcingProps) => {

  const {
    orgId,
    vendorNumber,
    setIsShowSourcing,
    setIsLoading
  } = props;
  const jwtData: string = sessionStorage.getItem(CommonConstant.jwtUserDetail);
  const jwtObj: any = JSON.parse(jwtData);
  const modelChipList: Chip[] =  []
  const dispatch = useDispatch();

  let [tabActive, setTabActive] = React.useState(SourcingTabEnum.ERFX);
  const sourcingEventRequest: SourcingEventRequest = {
    orgId: orgId,
    page: 1,
    pageItem: 20,
    statusId: 0,
    tenantId: jwtObj.tenantId,
    vendorNo: vendorNumber,
    searchTag: []
  }
  let [searchWord ,setSearchWord] = React.useState('');
  let [page, setPage] = React.useState(sourcingEventRequest.page);
  let [sourcingStatusId, setSourcingStatusId] = React.useState(sourcingEventRequest.statusId);
  const modelSourcingEvent: CommonDataTable<SourcingEventResponse> = null;
  let [sourcingRequest, setSourcingRequest] = React.useState(sourcingEventRequest);
  let [sourcingEvents, setSourcingEvents] = React.useState(modelSourcingEvent);
  let sourcingListResponse: RootState.SourcingEventListState = useSelector((state: RootState) => {
    return state.sourcingEvent;
  });
  let [chipList, setChipList] = React.useState(modelChipList);
  React.useEffect(() => {
    if (sourcingListResponse !== null) {
      setSourcingEvents(sourcingListResponse)
    }
    setIsLoading(false);
  }, [sourcingListResponse]);

  React.useEffect(() => {
    setSourcingRequest(sourcingEventRequest)
  }, [orgId]);

  React.useEffect(() => {
    setIsLoading(true);
    loadSourcingEvent(sourcingRequest)
  }, [sourcingRequest]);

  React.useEffect(() => {
    setPage(sourcingRequest.page);
  }, [sourcingRequest.page]);

  React.useEffect(() => {
    setSourcingStatusId(sourcingRequest.statusId);
  }, [sourcingRequest.statusId]);

  const onClickChangeTab = (tabSelect: SourcingTabEnum) => {
    if (tabSelect != tabActive) {
      setTabActive(tabSelect);
      onClickClearAll()
    }
  }

  const loadSourcingEvent = (sourcingRequest: any) => {
    if (tabActive === SourcingTabEnum.ERFX) {
      dispatch(SourcingEventActions.getErfxSourcingEventList(sourcingRequest));
    } else if (tabActive === SourcingTabEnum.AUCTION){
      dispatch(SourcingEventActions.getAuctionSourcingEventList(sourcingRequest));
    }
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  const onClickFilterStatus = (value: any) => {
    const tempSearchValue = sourcingRequest;
    tempSearchValue.statusId = Number(value);
	  tempSearchValue.page = 1;
    setSourcingRequest({...tempSearchValue});
  }
  const onClickSearch = () => {
    setIsLoading(true);
    if (searchWord.length > 0 && searchWord.length <= 100) {
      const tempSearchValue = sourcingRequest;
      let searchTag: any[] = [];
      searchTag = tempSearchValue.searchTag;
      searchTag.push(searchWord);

      setSourcingRequest({...tempSearchValue});
      const searchChip: Chip = {
        id: Math.random().toString(36).substr(2, 9),
        name: searchWord,
        type: ChipTypeCode.SearchText,
        values: [searchWord]
       }
      setChipList(ChipHelper.chipProcess([...chipList], searchChip));
    }
    setSearchWord('');

  }

  const handleSetPagination = (value: any) => {
    setSourcingRequest({...value});
  }

  const handlePageSizeChange = (e: any) => {
    const tempSearchValue = sourcingRequest;
    tempSearchValue.pageItem = Number(e.target.value);
    tempSearchValue.page = 1;

    handleSetPagination(tempSearchValue);
    setPage(1);
  }

  const getTotalSourcingEvent = () => {
    return sourcingEvents !== null ? sourcingEvents.totalItems : 0;
  }

  const getPaginationFormerRange = () => {
    return getTotalSourcingEvent() === 0 ? 0 : ((sourcingEvents.pageNumber - 1) * sourcingEvents.pageSize) + 1;
  }

  const getPaginationLatterRange = () => {
    const totalRecords = getTotalSourcingEvent();
    if (totalRecords === 0) {
      return 0;
    }
    return getPaginationFormerRange() + sourcingEvents.pageSize - 1;
  }

  const handlePaginationIconArrow = (command: string) => {
    const lastPage = sourcingEvents !== null ? sourcingEvents.totalPages : 0;
    const tempSearchValue = sourcingRequest;

    switch (command) {
      case 'left-end':
        if (page > 1) {
          tempSearchValue.page = 1;
          handleSetPagination(tempSearchValue);
        }
        break;

      case 'left-page':
        if (page > 1) {
          tempSearchValue.page -= 1;
          handleSetPagination(tempSearchValue);
        }
        break;

      case 'right-page':
        if (page < lastPage) {
          tempSearchValue.page += 1;
          handleSetPagination(tempSearchValue);
        }
        break;

      case 'right-end':
        if (page < lastPage) {
          tempSearchValue.page = lastPage;
          handleSetPagination(tempSearchValue);
        }
        break;
    }
  }

  const renderStatus = (statusId: number) => {
    switch (statusId) {
      case SourcingStatusEnum.Draft:
        return (<div className="text-status-color dot blue">{i18nHelper.translate('SourcingList.Status.Draft')}</div>)
      case SourcingStatusEnum.Active:
        return (<div className="text-status-color dot blue">{i18nHelper.translate('SourcingList.Status.Active')}</div>)
      case SourcingStatusEnum.Completed:
        return (
          <div className="text-status-color dot green">{i18nHelper.translate('SourcingList.Status.Completed')}</div>)
      case SourcingStatusEnum.Closed:
        return (
          <div className="text-status-color dot default">{i18nHelper.translate('SourcingList.Status.Closed')}</div>)
      case SourcingStatusEnum.Accepted:
        return (
          <div className="text-status-color dot blue">{i18nHelper.translate('SourcingList.Status.Accepted')}</div>)
      case SourcingStatusEnum.Rejected:
        return (<div className="text-status-color dot sub">{i18nHelper.translate('SourcingList.Status.Rejected')}</div>)
      case SourcingStatusEnum.Cancelled:
        return (
          <div className="text-status-color dot default">{i18nHelper.translate('SourcingList.Status.Cancelled')}</div>)
      case SourcingStatusEnum.Pending:
        return (
          <div className="text-status-color dot orange">{i18nHelper.translate('SourcingList.Status.Pending')}</div>)
      case SourcingStatusEnum.Preview:
        return (<div className="text-status-color dot blue">{i18nHelper.translate('SourcingList.Status.Preview')}</div>)
      case SourcingStatusEnum.AwaitingShortlist:
        return (<div
          className="text-status-color dot blue">{i18nHelper.translate('SourcingList.Status.AwaitingShortlist')}</div>)
      case SourcingStatusEnum.NotAwarded:
        return (
          <div className="text-status-color dot sub">{i18nHelper.translate('SourcingList.Status.NotAwarded')}</div>)
      case SourcingStatusEnum.WaitingForCreateVendor:
        return (<div
          className="text-status-color dot yellow">{i18nHelper.translate('SourcingList.Status.WaitingForCreateVendor')}</div>)
      case SourcingStatusEnum.VendorCreated:
        return (
          <div className="text-status-color dot blue">{i18nHelper.translate('SourcingList.Status.VendorCreated')}</div>)
      default:
        return (<div className="text-status-color dot default">-</div>)
    }
  }

  const renderStatusFilter = (erfxStatusId: number) => {
    switch (erfxStatusId) {
      case SourcingStatusEnum.Active:
        return (i18nHelper.translate('SourcingList.Status.Active'))
      case SourcingStatusEnum.Completed:
        return (i18nHelper.translate('SourcingList.Status.Completed'))
      case SourcingStatusEnum.Closed:
        return (i18nHelper.translate('SourcingList.Status.Closed'))
      case SourcingStatusEnum.Accepted:
        return (i18nHelper.translate('SourcingList.Status.Accepted'))
      case SourcingStatusEnum.Rejected:
        return (i18nHelper.translate('SourcingList.Status.Rejected'))
      case SourcingStatusEnum.Cancelled:
        return (i18nHelper.translate('SourcingList.Status.Cancelled'))
      case SourcingStatusEnum.Pending:
        return (i18nHelper.translate('SourcingList.Status.Pending'))
      case SourcingStatusEnum.Preview:
        return (i18nHelper.translate('SourcingList.Status.Preview'))
      case SourcingStatusEnum.AwaitingShortlist:
        return (i18nHelper.translate('SourcingList.Status.AwaitingShortlist'))
      case SourcingStatusEnum.NotAwarded:
        return (i18nHelper.translate('SourcingList.Status.NotAwarded'))
      case SourcingStatusEnum.WaitingForCreateVendor:
        return (i18nHelper.translate('SourcingList.Status.WaitingForCreateVendor'))
      case SourcingStatusEnum.VendorCreated:
        return (i18nHelper.translate('SourcingList.Status.VendorCreated'))
      default:
        return (i18nHelper.translate('SourcingList.Header.AllStatus'))
    }
  }

  const handleOnSearchKeyPress = (e: any) => {
    switch (e.key) {
      case 'Enter':
          onClickSearch();
        break;
      default:
        setSearchWord(e.target.value);
    }
  }

  const renderChipFilter = (item: Chip) => {
    let messageDisplay = i18nHelper.translate(item.name);
    return messageDisplay;
  }

  const onClickRemoveChip = (item: Chip) => {
    setChipList(ChipHelper.chipRemove([...chipList], item));
    let searchTag: any[] = [];
    const tempSearchValue = sourcingRequest;
    searchTag = tempSearchValue.searchTag;
    const indexTobeRemove = searchTag.findIndex(
      eachSearchTag => eachSearchTag === item.name
    );
    searchTag.splice(indexTobeRemove, 1);
    setSourcingRequest({...tempSearchValue})
  }

  const onClickClearAll = () => {
    setChipList([]);
    sourcingRequest.searchTag = [];
    onClickFilterStatus(0);
  }

  const renderErfxStatus = () => {
    return (
      <>
        <div className="dropdown dropdown-inline select-dropdown">
          <div id="dropdownSelect" data-toggle="dropdown" className="dropdown-toggle box-dropdown-title">
            {renderStatusFilter(sourcingStatusId)}
          </div>
          <div className="dropdown-menu form-dropdown-list dropdown-menu-right">
            <a tabIndex={-1} className={`dropdown-item ${sourcingStatusId === 0 ? 'selected' : ''}`}
               onClick={() => onClickFilterStatus(0)}>{i18nHelper.translate('SourcingList.Header.AllStatus')}</a>
            <a tabIndex={-1} className={`dropdown-item ${sourcingStatusId === SourcingStatusEnum.Active ? 'selected' : ''}`}
               onClick={() => onClickFilterStatus(SourcingStatusEnum.Active)}>{i18nHelper.translate('SourcingList.Status.Active')}</a>
            <a tabIndex={-1} className={`dropdown-item ${sourcingStatusId === SourcingStatusEnum.Pending ? 'selected' : ''}`}
               onClick={() => onClickFilterStatus(SourcingStatusEnum.Pending)}>{i18nHelper.translate('SourcingList.Status.Pending')}</a>
            <a tabIndex={-1} className={`dropdown-item ${sourcingStatusId === SourcingStatusEnum.Cancelled ? 'selected' : ''}`}
               onClick={() => onClickFilterStatus(SourcingStatusEnum.Cancelled)}>{i18nHelper.translate('SourcingList.Status.Cancelled')}</a>
            <a tabIndex={-1} className={`dropdown-item ${sourcingStatusId === SourcingStatusEnum.AwaitingShortlist ? 'selected' : ''}`}
               onClick={() => onClickFilterStatus(SourcingStatusEnum.AwaitingShortlist)}>{i18nHelper.translate('SourcingList.Status.AwaitingShortlist')}</a>
            <a tabIndex={-1} className={`dropdown-item ${sourcingStatusId === SourcingStatusEnum.NotAwarded ? 'selected' : ''}`}
               onClick={() => onClickFilterStatus(SourcingStatusEnum.NotAwarded)}>{i18nHelper.translate('SourcingList.Status.NotAwarded')}</a>
            <a tabIndex={-1} className={`dropdown-item ${sourcingStatusId === SourcingStatusEnum.WaitingForCreateVendor ? 'selected' : ''}`}
               onClick={() => onClickFilterStatus(SourcingStatusEnum.WaitingForCreateVendor)}>{i18nHelper.translate('SourcingList.Status.WaitingForCreateVendor')}</a>
            <a tabIndex={-1} className={`dropdown-item ${sourcingStatusId === SourcingStatusEnum.VendorCreated ? 'selected' : ''}`}
               onClick={() => onClickFilterStatus(SourcingStatusEnum.VendorCreated)}>{i18nHelper.translate('SourcingList.Status.VendorCreated')}</a>
          </div>
        </div>
      </>
    )
  }

  const renderPagination = () => {
    return (
      <>
        <div className="op-pagination">
          <div className="float-left"><span
            className="hide-sm">{i18nHelper.translate('Common.Pagination.Showing')}</span>
            <select
              className="form-control input-inline"
              onChange={(e) => handlePageSizeChange(e)}
              data-rb="pagination-entries-per-page">
              <option value="20">20</option>
              <option value="50">50</option>
              <option value="100">100</option>
            </select><span className="hide-sm">{i18nHelper.translate('Common.Pagination.EntriesPerPage')}</span>
          </div>
          <div className="d-flex align-items-center float-right">
            <strong data-rb="pagination-former-range">{getPaginationFormerRange()}&nbsp;</strong>
            <strong>{i18nHelper.translate('Common.Pagination.To')}&nbsp;</strong>
            <strong data-rb="pagination-latter-range">{getPaginationLatterRange()}&nbsp;</strong>
            <span>{i18nHelper.translate('Common.Pagination.Of')}&nbsp;</span>
            <span
              data-rb="pagination-total-records">{CommonHelper.convertToNumberFormat(getTotalSourcingEvent())} {i18nHelper.translate('Common.Pagination.Entries')}</span>
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
          <div className="clearfix"/>
        </div>
      </>
    )
  }

  return (
    <div className="modal" style={{display: 'block'}}>
      <div className="modal-dialog modal-full">
        <div className="modal-content">
          <div className="modal-header">
            <div className="modal-title">{i18nHelper.translate('Common.Label.SourcingEvents')}
              <div className="ml-auto">
                <button type="button" data-dismiss="modal" className="btn-icon close"
                        onClick={() => setIsShowSourcing(false)}>
                  <i className="icon-cross"/>
                </button>
              </div>
            </div>
          </div>
          <div className="modal-body">
            <div className="search-bar">
              <div className="search-input">
                <div className="dropdown select-dropdown">
                  <div className="input-group">
                    <input placeholder={i18nHelper.translate('SourcingList.Header.SearchForEvent')} className="form-control" data-rb="search-word"
                      maxLength={100}
                      onKeyDown={(e) => handleOnSearchKeyPress(e)}
                      onChange={(e) => handleOnSearchKeyPress(e)}
                      value={searchWord}/>
                    <div className="input-group-append">
                      <button className="btn-op-primary btn-search" onClick={(() => onClickSearch())}><i className="icon-search"></i></button>
                    </div>
                  </div>
                </div>
              </div>
              {renderErfxStatus()}
            </div>
            {chipList && chipList.length > 0 &&
            <div className="word-search-wrap search-result mb-20">
              {chipList.map((item: Chip) => (
                <div data-rb={`filter-${item.type}-${i18nHelper.translate(item.name)}`} className="word-search" key={`${item.type}-${item.id}`}>
                  <span>{renderChipFilter(item)}</span>
                  <a data-rb={`remove-filter-${item.type}-${i18nHelper.translate(item.name)}`} className="remove-search" onClick={() => onClickRemoveChip(item)}>
                    <i className="icon-cross" />
                  </a>
                </div>
              ))}
              <a data-rb="clear-all-filter" className="normal-link" onClick={() => onClickClearAll()}>{i18nHelper.translate('Common.Button.ClearAll')}</a>
            </div>
             }
            <div className="screen-x-auto mb-30">
              <ul className="nav nav-tabs tab-style p-0">
                <li className="nav-item"><a className={`nav-link ${tabActive === SourcingTabEnum.ERFX ? 'active' : ''}`}
                                            onClick={() => onClickChangeTab(SourcingTabEnum.ERFX)}>{i18nHelper.translate('SourcingList.Header.eRFX')}</a>
                </li>
                <li className="nav-item"><a
                  className={`nav-link ${tabActive === SourcingTabEnum.AUCTION ? 'active' : ''}`}
                  onClick={() => onClickChangeTab(SourcingTabEnum.AUCTION)}>{i18nHelper.translate('SourcingList.Header.OnlineAuction')}</a>
                </li>
              </ul>
            </div>
            <div className="tab-content">
              <div className="tab-1 tab-pane active">
                {getTotalSourcingEvent() > 0 &&
                <>
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead>
                      <tr>
                        <th>{i18nHelper.translate('SourcingList.Table.EventNo')}</th>
                        <th>{i18nHelper.translate('SourcingList.Table.EventName')}</th>
                        <th>{i18nHelper.translate('SourcingList.Table.CreatedBy')}</th>
                        <th>{i18nHelper.translate('SourcingList.Table.Status')}</th>
                      </tr>
                      </thead>
                      <tbody>
                      {sourcingEvents !== null && sourcingEvents.content.map((eachEvent, index) =>
                        <tr key={`${eachEvent.eventNo}-${index}`}>
                          <td>{eachEvent.eventNo}</td>
                          <td>{eachEvent.eventName}</td>
                          <td>{eachEvent.createdBy}
                            <div
                              className="color-sub">{i18nHelper.translate('SourcingList.Table.CreatedOn')} {new Date(eachEvent.createdDate).toLocaleDateString()}</div>
                          </td>
                          <td>
                            {renderStatus(eachEvent.statusId)}
                          </td>
                        </tr>
                      )}
                      </tbody>
                    </table>
                  </div>
                  {renderPagination()}
                </>
                }
                {getTotalSourcingEvent() === 0 &&
                <div className="empty-items-list text-center">
                  <div className="mb-20">
                    <img src="../assets/images/illustration/search_empty2x.png" className="thumbnail-empty list-empty"/>
                  </div>
                  <strong
                    className="font-heading color-normal">{i18nHelper.translate('SupplierList.NoResult.Title')}</strong>
                  <div
                    className="lh-sub">{i18nHelper.translate('SupplierList.NoResult.Message1')}<br/>{i18nHelper.translate('SupplierList.NoResult.Message2')}
                  </div>
                </div>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SourcingList;

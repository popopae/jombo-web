import * as React from 'react';
import CardBody from 'app/components/UI/Card/CardBody';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/reducers';
import { ValidateHelper } from 'app/utils/helpers/validateHelper';
import { DataTableResponse } from 'app/models/payload/datatable/dataTableResponse';
import { Device } from 'app/models/entity/device';
import { DeviceAction } from 'app/actions/device.action';
import { AdvanceSearch, Sorting } from 'app/models/payload/datatable/dataTableRequest';
import { PageEnum } from 'app/utils/enums/pageEnum';
import { useNavigate } from 'react-router-dom';

interface ListDeviceProps {
}

const DeviceList: React.FC<ListDeviceProps> = (props: ListDeviceProps) => {
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const searchDeviceModel: DataTableResponse<Device> = null;
    const pageNumberInit: number = 1;
    const recordLengthInit: number = 20;
    const sortInit: Sorting[] = [];
    const advanceSearchInit: AdvanceSearch[] = [];

    let [isLoading, setIsLoading] = React.useState(false);

    let [page, setPage] = React.useState(pageNumberInit);
    let [record, setRecord] = React.useState(recordLengthInit);
    let [sort, setSorting] = React.useState(sortInit);
    let [advanceSearch, setAdvanceSearch] = React.useState(advanceSearchInit);

    let [searchDevice, setSearchDevice] = React.useState(searchDeviceModel);

    let searchDeviceResponse: RootState.SearchDeviceState = useSelector((state: RootState) => {
        return state.searchDeviceResponse;
    });

    React.useEffect(() => {

        if (ValidateHelper.isObjectEmptyOrNullOrUndefined(searchDevice)) {
            setIsLoading(true);
            dispatch(DeviceAction.searchDevice(dataSearchDevice()));
        }

        if (!ValidateHelper.isObjectEmptyOrNullOrUndefined(searchDevice)) {
            setIsLoading(false);
            setSearchDevice(searchDeviceResponse)
        }

        if (searchDeviceResponse !== searchDevice) {
            setIsLoading(false);
            setSearchDevice(searchDeviceResponse)
        }
    }, [searchDevice, searchDeviceResponse])

    React.useEffect(() => {
        if (isLoading) {
            dispatch(DeviceAction.searchDevice(dataSearchDevice()));
        }
    }, [page, record, sort, advanceSearch])

    const onClickSearch = (searchText: string) => {
        const search: AdvanceSearch[] = [{
            key: 'and',
            column: 'device_code',
            condition: '=',
            value: searchText,
            multiValue: []
        }];
        console.log(search)
        setAdvanceSearch(search);
        setPage(1);
        setRecord(10);
        setSorting([]);
    }

    const onClickView = (deviceCode: string) => {
        navigate(`${PageEnum.DASHBOARD}/${deviceCode}`)
    }

    const dataSearchDevice = () => {
        return {
            pageNumber: page,
            recordLength: record,
            sort: sort,
            advanceSearch: advanceSearch,
        };
    }

    return (

        <CardBody title='Device' >
            {!ValidateHelper.isObjectEmptyOrNullOrUndefined(searchDevice) &&
                <>
                    <div className='row'>
                        <div className='col-lg-12'>
                            <table className="table table-head-custom table-vertical-center table-head-bg table-borderless">
                                <thead>
                                    <tr className="text-left">
                                        <th style={{ minWidth: '250px' }} className="pl-7">
                                            <span className="text-dark-75">Device Name</span>
                                        </th>
                                        <th style={{ minWidth: '120px' }}>
                                            <span className="text-dark-75">Device Type</span>
                                        </th>
                                        <th style={{ minWidth: '100px' }}>
                                            <span className="text-dark-75">comission</span>
                                        </th>
                                        <th style={{ minWidth: '100px' }}>
                                            <span className="text-dark-75">company</span>
                                        </th>
                                        <th style={{ minWidth: '100px' }}>
                                            <span className="text-dark-75">rating</span>
                                        </th>
                                        <th style={{ minWidth: '100px' }}></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {searchDevice.data.map((item, index) => (
                                        <tr key={index}>
                                            <td className="pl-0 py-8">
                                                <div className="d-flex align-items-center">
                                                    <div className="symbol symbol-50 symbol-light mr-4">
                                                        <span className="symbol-label">
                                                            <span className="svg-icon h-75 align-self-end"></span>
                                                        </span>
                                                    </div>
                                                    <div>
                                                        <a href="#" className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
                                                            {item.device_code}
                                                        </a>
                                                        <span className="text-muted font-weight-bold d-block">{item.device_name}</span>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                    {item.device_type_id}
                                                </span>
                                                <span className="text-muted font-weight-bold">{item.device_type_name}</span>
                                            </td>
                                            <td>
                                                <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                    $520
                                                </span>
                                                <span className="text-muted font-weight-bold"> Paid </span>
                                            </td>
                                            <td>
                                                <span className="text-dark-75 font-weight-bolder d-block font-size-lg">
                                                    Intertico
                                                </span>
                                                <span className="text-muted font-weight-bold">
                                                    Web, UI/UX Design
                                                </span>
                                            </td>
                                            <td>
                                                <img src="./assets/media/logos/stars.png" alt="image" style={{ width: '5rem' }} />
                                                <span className="text-muted font-weight-bold d-block">
                                                    Best Rated
                                                </span>
                                            </td>
                                            <td className="pr-0 text-right">
                                                <a className="btn btn-light-success font-weight-bolder font-size-sm" onClick={() => onClickView(item.device_code)}>View</a>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody >
                            </table >
                            <button type="button" className="btn btn-success btn-sm" onClick={() => onClickSearch('')}>2 Items</button>
                        </div >
                    </div >
                </>
            }
        </CardBody >
    );
}

export default DeviceList;
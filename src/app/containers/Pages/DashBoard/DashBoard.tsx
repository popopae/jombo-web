import * as React from "react";
import CardBody from "app/components/UI/Card/CardBody";
import CardDashBoard from "app/components/UI/Card/CardDashBoard";
import { i18nHelper } from "app/i18n/i18n";
import DonutChart from "app/components/UI/Chart/DonutChart";
import AreaChart from "app/components/UI/Chart/AreaChart";
import BarChart from "app/components/UI/Chart/BarChart";
import CardPreview from "app/components/UI/Card/CardPreview";
import RadarChart from "app/components/UI/Chart/RadarChart";
import ProgressChart from "app/components/UI/Chart/ProgressChart";
import { useDispatch, useSelector } from "react-redux";
import { CallBackAction } from "app/actions/callback.action";
import { RootState } from "app/reducers";
import { LastedUplinkResponse } from "app/models/payload/callback/lastedUplinkResponse";
import { ValidateHelper } from "app/utils/helpers/validateHelper";
import { useNavigate, useParams } from "react-router-dom";
import { PageEnum } from "app/utils/enums/pageEnum";

interface DashBoardProps {
}

const DashBoard: React.FC<DashBoardProps> = () => {

    const { deviceCode } = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();
    const lastedUplinkModel: LastedUplinkResponse = null;

    let [dataUplinkLasted, setDataUplinkLasted] = React.useState(lastedUplinkModel);

    let lastedUplinkResponse: RootState.LastedUplinkState = useSelector((state: RootState) => {
        return state.lastedUplinkResponse;
    });

    React.useEffect(() => {

        if (ValidateHelper.isObjectEmptyOrNullOrUndefined(dataUplinkLasted)) {
            dispatch(CallBackAction.getUplinkLastedData(deviceCode));
        }

        if (!ValidateHelper.isObjectEmptyOrNullOrUndefined(dataUplinkLasted)) {
            setDataUplinkLasted(lastedUplinkResponse)
        }

        if (lastedUplinkResponse !== dataUplinkLasted) {
            setDataUplinkLasted(lastedUplinkResponse)
        }
    }, [dataUplinkLasted, lastedUplinkResponse])

    const onClickBack = () => {
        navigate(PageEnum.INDEX);
    }

    return (

        <CardBody title="Dash Board" >
            {!ValidateHelper.isObjectEmptyOrNullOrUndefined(dataUplinkLasted) &&
                <>
                    <div className="row">
                        <div className="col-lg-3">
                            <CardPreview
                                title={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                                desc="desc"
                                styleType="bg-light-warning"
                                content="Energy Power"
                                value={dataUplinkLasted.active_energy == null ? 0 : dataUplinkLasted.active_energy}
                            />
                        </div>
                        <div className="col-lg-3">
                            <CardPreview
                                title={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                                desc="desc"
                                styleType="bg-light-success"
                                content="Peak Saved"
                                value={dataUplinkLasted.active_power == null ? 0 : dataUplinkLasted.active_power}
                            />

                        </div>
                        <div className="col-lg-3">
                            <CardPreview
                                title={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                                desc="desc"
                                styleType="bg-light-danger"
                                content="Load Factor"
                                value={dataUplinkLasted.power_factor == null ? 0 : dataUplinkLasted.power_factor}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3">
                            <CardDashBoard
                                label={'Cost Saving'}
                                toolbarMonthWeekDay={false}
                            >
                                <ProgressChart
                                    width="100%"
                                    value="100"
                                    label="$ 12,000"
                                />
                            </CardDashBoard>
                        </div>
                        <div className="col-lg-3">
                            <CardDashBoard
                                label={'Energy Saving'}
                                toolbarMonthWeekDay={false}
                            >
                                <ProgressChart
                                    width="100%"
                                    value="58"
                                    label="8000 kW"
                                />
                            </CardDashBoard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <CardDashBoard
                                label={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                                toolbarMonthWeekDay={true}
                            >
                                <DonutChart
                                    width="80%"
                                />
                            </CardDashBoard>
                        </div>
                        <div className="col-lg-6">
                            <CardDashBoard
                                label={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                                toolbarMonthWeekDay={true}
                            >
                                <RadarChart
                                    width="80%"
                                />
                            </CardDashBoard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6">
                            <CardDashBoard
                                label={i18nHelper.translate("DashBoard.Label.Voltage")}
                                toolbarMonthWeekDay={true}
                            >
                                <AreaChart
                                    width="100%"
                                />
                            </CardDashBoard>
                        </div>
                        <div className="col-lg-6">
                            <CardDashBoard
                                label={i18nHelper.translate("DashBoard.Label.PowerFactor")}
                                toolbarMonthWeekDay={false}
                            >
                                <BarChart
                                    width="100%"
                                />
                            </CardDashBoard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <CardDashBoard label={i18nHelper.translate("DashBoard.Label.ActiveElectricEnergy")}>

                            </CardDashBoard>
                        </div>
                        <div className="col-lg-4">
                            <CardDashBoard label={i18nHelper.translate("DashBoard.Label.EnergyConsumption")}>

                            </CardDashBoard>
                        </div>
                        <div className="col-lg-4">
                            <CardDashBoard label={i18nHelper.translate("DashBoard.Label.Frequency")}>

                            </CardDashBoard>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">

                        </div>
                    </div>
                </>
            }
            {ValidateHelper.isObjectEmptyOrNullOrUndefined(dataUplinkLasted) &&
                <CardDashBoard label={"No data from uplink"}>
                    <a className="btn btn-light-success font-weight-bolder font-size-sm" onClick={() => onClickBack()}>Back</a>
                </CardDashBoard>
            }
        </CardBody>
    );
}

export default DashBoard;
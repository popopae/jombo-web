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

interface DashBoardProps {
}

const DashBoard: React.FC<DashBoardProps> = (props: DashBoardProps) => {

    const dispatch = useDispatch();
    const lastedUplinkModel: LastedUplinkResponse = {};

    let [dataUplinkLasted, setDataUplinkLasted] = React.useState(lastedUplinkModel);

    let lastedUplinkResponse: RootState.LastedUplinkState = useSelector((state: RootState) => {
        return state.lastedUplinkResponse;
    });

    React.useEffect(() => {

        if (ValidateHelper.isObjectEmptyOrNullOrUndefined(lastedUplinkResponse)) {
            dispatch(CallBackAction.getUplinkLastedData(1));
        }
   
        if (!ValidateHelper.isObjectEmptyOrNullOrUndefined(lastedUplinkResponse)) {
            setDataUplinkLasted(lastedUplinkResponse)
        }

        if (lastedUplinkResponse !== dataUplinkLasted) {
            setDataUplinkLasted(lastedUplinkResponse)
        }
    }, [dataUplinkLasted, lastedUplinkResponse])

    return (

        <CardBody title="Dash Board" >
            {lastedUplinkResponse !== null &&
            <>
            <div className="row">
                <div className="col-lg-3">
                    <CardPreview
                        title={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                        desc="desc"
                        styleType="bg-light-warning"
                        content="Energy Power"
                        value={lastedUplinkResponse.active_energy == null ? 0 : lastedUplinkResponse.active_energy}
                    />
                </div>
                <div className="col-lg-3">
                    <CardPreview
                        title={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                        desc="desc"
                        styleType="bg-light-success"
                        content="Peak Saved"
                        value={lastedUplinkResponse.active_power == null ? 0 : lastedUplinkResponse.active_power}
                    />

                </div>
                <div className="col-lg-3">
                    <CardPreview
                        title={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                        desc="desc"
                        styleType="bg-light-danger"
                        content="Load Factor"
                        value={lastedUplinkResponse.power_factor == null ? 0 : lastedUplinkResponse.power_factor}
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
        </CardBody>
    );
}

export default DashBoard;
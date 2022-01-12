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

interface DashBoardProps {
}

const DashBoard: React.FC<DashBoardProps> = (props: DashBoardProps) => {

    return (
        <CardBody title="Dash Board" >

            <div className="row">
                <div className="col-lg-3">
                    <CardPreview
                        title={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                        desc="desc"
                        styleType="bg-light-warning"
                        content="Energy Power"
                        value="14.0 Kw"
                    />
                </div>
                <div className="col-lg-3">
                    <CardPreview
                        title={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                        desc="desc"
                        styleType="bg-light-success"
                        content="Peak Saved"
                        value="16 Kw"
                    />

                </div>
                <div className="col-lg-3">
                    <CardPreview
                        title={i18nHelper.translate("DashBoard.Label.ElectricCurrent")}
                        desc="desc"
                        styleType="bg-light-danger"
                        content="Load Factor"
                        value="30 %"
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
                            width="70%"
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
        </CardBody>
    );
}

export default DashBoard;
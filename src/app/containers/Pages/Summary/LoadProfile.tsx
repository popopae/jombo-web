import CardContent from "app/components/UI/Card/CardContent";
import * as React from "react";
import CardBody from "../../../components/UI/Card/CardBody";

interface LoadProfileProps {
}

const LoadProfile: React.FC<LoadProfileProps> = (props: any) => {


    return (
        <CardBody title="Home" >
            <CardContent>
                <div className="card-body row container">
                    <div className="row col-12">
                        <div className="col-md-6 col-sm-12 col-lg-2">
                            Floor 1
                        </div>
                        <div className="col-md-6 col-sm-12 col-lg-3">
                            <div className="row card-profile-custom">
                                <div className="col-6 card-profile-left">Energy</div>
                                <div className="col-6 card-profile-right card-bg-yellow text-right">553.5 kWh</div>
                            </div>
                            <div className="row card-profile-custom">
                                <div className="col-6 card-profile-left">Power</div>
                                <div className="col-6 card-profile-right card-bg-yellow text-right">1.9 kW</div>
                            </div>
                            <div className="row card-profile-custom">
                                <div className="col-6 card-profile-left">Peak</div>
                                <div className="col-6 card-profile-right text-right">4.6 kW</div>
                            </div>
                        </div>
                        <div className="col-md-12 col-sm-12 col-lg-7">
                            Chart
                        </div>
                    </div>
                </div>
            </CardContent>
        </CardBody >
    );
}

export default LoadProfile;

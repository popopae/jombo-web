import * as React from "react";
import ToolbarMonthWeekDay from "../Toolbar/ToolbarMonthWeekDay";

interface CardDashBoardProps {
    label?: string;
    imgPath?: string;
    description?: string
    value?: any;
    unit?: string;
    children?: any
    toolbarMonthWeekDay?: boolean;
}

const CardDashBoard: React.FC<CardDashBoardProps> = (props: CardDashBoardProps) => {

    const { label, description, children, toolbarMonthWeekDay } = props;

    return (
        <div className="card card-custom bg-radial-gradient-danger gutter-b card-stretch">
            <div className="card card-custom">
                <div className="card-header border-0 pt-5">
                    <h3 className="card-title align-items-start flex-column">
                        <span className="card-label font-weight-bolder text-dark">
                            <a className="text-muted" href="/summary">
                                {label}
                            </a>
                        </span>
                        <span className="text-muted mt-3 font-weight-bold font-size-sm">{description}</span>
                    </h3>
                    <div className="card-toolbar">
                        {toolbarMonthWeekDay &&
                            <ToolbarMonthWeekDay></ToolbarMonthWeekDay>
                        }
                    </div>
                </div>
                <div className="card-body pt-0 pb-3">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default CardDashBoard;
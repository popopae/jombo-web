import * as React from "react";

interface ToolbarMonthWeekDayProps {

}

const ToolbarMonthWeekDay: React.FC<ToolbarMonthWeekDayProps> = (props: ToolbarMonthWeekDayProps) => {

    return (
        <ul className="nav nav-pills nav-pills-sm nav-dark-75" style={{ "fontSize": "12px" }}>
            <li className="nav-item">
                <a className="nav-link py-2 px-4" data-toggle="tab">Month</a>
            </li>
            <li className="nav-item">
                <a className="nav-link py-2 px-4" data-toggle="tab">Week</a>
            </li>
            <li className="nav-item">
                <a className="nav-link py-2 px-4" data-toggle="tab">Day</a>
            </li>
        </ul>
    );
}

export default ToolbarMonthWeekDay;

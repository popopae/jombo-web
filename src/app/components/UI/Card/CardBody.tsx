import * as React from "react";

interface CardBodyProps {
    title: string
}

const CardBody: React.FC<CardBodyProps> = (props: any) => {

    const { title } = props;

    return (
        <div className="content">
            <div className="card-content w-full">
                <h2 className="d-flex align-items-center">
                    <span>{title}</span>
                </h2>
                {props.children}
            </div>
        </div>
    );
}

export default CardBody;

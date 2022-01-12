import * as React from "react";

interface CardContentProps {

}

const CardContent: React.FC<CardContentProps> = (props: any) => {

    return (
        <div className="card card-custom bg-radial-gradient-danger gutter-b card-stretch">
            <div className="card card-custom">
                {props.children}
            </div>
        </div>
    );
}

export default CardContent;

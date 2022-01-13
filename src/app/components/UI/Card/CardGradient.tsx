import * as React from "react";

interface CardGradientProps {

}

const CardGradient: React.FC<CardGradientProps> = (props: CardGradientProps) => {

    return (
        <div className="card card-custom bg-radial-gradient-danger gutter-b card-stretch">
        </div>
    );
}

export default CardGradient;
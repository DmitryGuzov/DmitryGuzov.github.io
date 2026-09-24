import React from "react";
import "./styles.scss";

interface HighlightProps {
    type?: "horizontal" | "vertical";
    positionClass?: string;
    icon?: React.ReactNode;
    child?: React.ReactNode;
}

const Highlight = (props: HighlightProps) => {
    return (
        <div
            className={`highlights ${props.type ? props.type : "horizontal"} ${
                props.positionClass ? props.positionClass : "default"
            }`}
        >
            {props.icon ? <div className="icon">{props.icon}</div> : null}
            {props.child}
        </div>
    );
};

export default Highlight;

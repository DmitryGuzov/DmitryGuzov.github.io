import React from "react";
import "./styles.scss";
import { BsAwardFill } from "react-icons/bs";

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
            {/* <div className="icon">
                <BsAwardFill />
            </div> */}
            {props.child}
            {/* {props.text ? <div className="text">{props.text}</div> : null} */}
            {/* <div className="text">Best Design Award</div> */}
        </div>
    );
};

export default Highlight;

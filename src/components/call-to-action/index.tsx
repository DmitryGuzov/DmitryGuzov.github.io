import React from "react";
import "./index.scss";

import Arrow from "../arrow";

interface CallToActionProps {
    text?: string;
    action?: any;
    icon?: React.ReactNode;
}

const CallToAction = ({
    text,
    action,
    icon,
}: CallToActionProps): JSX.Element => {
    return (
        <div className="call-to-action" onClick={action}>
            <span className="text">{text}</span>
            {icon ? <div className="icon">{icon}</div> : <Arrow />}
        </div>
    );
};

export default CallToAction;

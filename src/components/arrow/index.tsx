import React from "react";
import "./index.scss";

import { BsArrowRightShort } from "react-icons/bs";

const Arrow = (): JSX.Element => {
    return (
        <span className="arrow-icon">
            <BsArrowRightShort />
        </span>
    );
};

export default Arrow;

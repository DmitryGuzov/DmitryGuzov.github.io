import React from "react";
import "./index.scss";

import Draggable from "react-draggable";

import { randomIntFromInterval } from "../../../helpers";

interface SkillProps {
    img?: string;
    width?: number | string;
    height?: number | string;
    position?: number;
}

const Skill = ({ img, width, height, position }: SkillProps): JSX.Element => {
    const heightAndWeight = randomIntFromInterval(60, 90);
    return (
        <Draggable>
            <div
                className={`skill position${position}`}
                style={{ backgroundImage: `url(${img})` }}
            >
                {/* <img
                    src={img}
                    width={heightAndWeight}
                    height={heightAndWeight}
                    alt={img}
                /> */}
            </div>
        </Draggable>
    );
};

export default Skill;

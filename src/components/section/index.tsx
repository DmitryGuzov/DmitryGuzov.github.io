import React from "react";
import "./index.scss";

import Fade from "react-reveal";

interface SectionProps {
    children?: React.ReactNode;
    id?: string;
    className?: string;
    title?: string;
    background?: string;
}

const Section = ({
    children,
    id,
    className,
    title,
    background,
}: SectionProps): JSX.Element => {
    return (
        <div
            id={id || ""}
            className={`section ${className ? className : ""} ${
                background === "dark" ? "dark" : "light"
            }`}
        >
            <div className="content">
                {title && (
                    <Fade
                        top
                        distance={"80%"}
                    >
                        <div className="section-title">
                            <h2>{title}</h2>
                        </div>
                    </Fade>
                )}
                {children}
            </div>
        </div>
    );
};

export default Section;

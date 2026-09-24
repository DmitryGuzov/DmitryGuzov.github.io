import React from "react";
import "./index.scss";

import Arrow from "../../arrow";
import { PortfolioModel } from "../../../models/portfolio";

interface ShowcaseProps {
    transition: string;
    data: PortfolioModel[];
}

const Showcase = ({ data, transition }: ShowcaseProps) => {
    return (
        <div className="projects-showcase">
            {data.map((project: PortfolioModel) => (
                <div
                    key={project.name}
                    className={`showcase-item ${
                        transition === "zoomout"
                            ? "zoomOut"
                            : transition === "zoomin"
                            ? "zoomIn"
                            : ""
                    }`}
                >
                    <div className="meta-content">
                        <h3>{project.name}</h3>
                        <div className="go-to-cta">
                            <span className="text">Project Details</span>
                            <Arrow />
                        </div>
                    </div>
                    <img
                        src={project.media.thumbnail}
                        alt={project.media.thumbnail}
                    />
                </div>
            ))}
        </div>
    );
};

export default Showcase;

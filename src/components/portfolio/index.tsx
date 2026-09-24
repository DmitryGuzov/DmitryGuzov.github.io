import React, { useState } from "react";
import "./index.scss";

import Section from "../section";
import Filters from "./filters";
import Showcase from "./showcase";
import projectsData from "../../lib/projects";
import Fade from "react-reveal";

const Portfolio = (): JSX.Element => {
    const [projects, setProjects] = useState(projectsData);
    const [transition, setTransition] = useState<any>(false);

    const filterProjects = (tag: string) => {
        setTransition("zoomout");

        setTimeout(() => {
            if (tag !== "all") {
                const filteredProjects = projectsData.filter((f) =>
                    f.tags.includes(tag)
                );
                setProjects(filteredProjects);
            } else {
                setProjects(projectsData);
            }
            setTransition("zoomin");
        }, 200);

        setTimeout(() => {
            setTransition(false);
        }, 600);
    };

    return (
        <Section
            id="portfolio"
            title="Check my Protfolio"
            background="light"
        >
            <Fade
                bottom
                distance={"10%"}
            >
                <div className="portfolio-content-wrapper">
                    <Filters
                        filterProjects={(tag: any) => filterProjects(tag)}
                    />
                    <Showcase
                        data={projects}
                        transition={transition}
                    />
                </div>
            </Fade>
        </Section>
    );
};

export default Portfolio;

import React from "react";
import "./index.scss";

import { AiOutlineCloudDownload } from "react-icons/ai";
import {
    SiAmazonaws,
    SiAmazons3,
    SiElectron,
    SiFlutter,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiPostgresql,
    SiReact,
    SiRedux,
    SiTypescript,
} from "react-icons/si";

import Section from "../section";
import CallToAction from "../call-to-action";
import Skill from "./skill";
import CV from "../../assets/files/CV_2026-04-10.pdf";
import Fade from "react-reveal";

type WindowWithDataLayer = Window & {
    dataLayer?: Record<string, unknown>[];
};

declare const window: WindowWithDataLayer;

const skills = [
    { label: "React", icon: <SiReact />, size: "lg" as const, accent: "#61DAFB" },
    { label: "Flutter", icon: <SiFlutter />, size: "lg" as const, accent: "#47C5FB" },
    { label: "Next.js", icon: <SiNextdotjs />, size: "md" as const, accent: "#FFFFFF" },
    { label: "Node.js", icon: <SiNodedotjs />, size: "md" as const, accent: "#5FA04E" },
    { label: "TypeScript", icon: <SiTypescript />, size: "md" as const, accent: "#3178C6" },
    { label: "Redux", icon: <SiRedux />, size: "md" as const, accent: "#764ABC" },
    { label: "Electron", icon: <SiElectron />, size: "md" as const, accent: "#47848F" },
    { label: "MongoDB", icon: <SiMongodb />, size: "sm" as const, accent: "#47A248" },
    { label: "PostgreSQL", icon: <SiPostgresql />, size: "sm" as const, accent: "#4169E1" },
    { label: "AWS", icon: <SiAmazonaws />, size: "sm" as const, accent: "#FF9900" },
    { label: "S3", icon: <SiAmazons3 />, size: "sm" as const, accent: "#569A31" },
    { label: "ECS", icon: <SiAmazonaws />, size: "sm" as const, accent: "#E8A817" },
];

const Skills = (): JSX.Element => {
    const downloadCV = () => {
        const link = document.createElement("a");
        link.href = CV;
        link.setAttribute("download", `CV_2026-04-10.pdf`);
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.dataLayer?.push({
            event: "download-cv",
        });
    };

    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <Fade
                    left
                    delay={400}
                >
                    <div className="left-col">
                        <div className="skills-cloud">
                            {skills.map((skill) => (
                                <Skill
                                    key={skill.label}
                                    label={skill.label}
                                    icon={skill.icon}
                                    size={skill.size}
                                    accent={skill.accent}
                                />
                            ))}
                        </div>
                    </div>
                </Fade>
                <Fade
                    right
                    delay={400}
                >
                    <div className="right-col">
                        <h2>Skills</h2>
                        <p>
                            Full-stack across React, Next.js, TypeScript, Node,
                            and Flutter — plus Electron for desktop apps like
                            Capsa, Redux, MongoDB, and AWS (S3, ECS). Focused on
                            clear UX and reliable delivery.
                        </p>
                        <CallToAction
                            text="Download CV"
                            icon={<AiOutlineCloudDownload />}
                            action={downloadCV}
                        />
                    </div>
                </Fade>
            </div>
        </Section>
    );
};

export default Skills;

import React from "react";
import "./index.scss";

import { AiOutlineCloudDownload } from "react-icons/ai";

import Section from "../section";
import TechIcons from "../../assets/images/tech-icons.png";
import CallToAction from "../call-to-action";
import Skill from "./skill";
import nodejs from "../../assets/images/skills/nodejs.png";
import flutter from "../../assets/images/skills/flutter.png";
import typescript from "../../assets/images/skills/typescript.png";
import html5 from "../../assets/images/skills/html5.png";
import { randomIntFromInterval } from "../../helpers";
import CV from "../../assets/files/CV.pdf";
import Fade from "react-reveal";

type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[];
  };
  
  declare const window: WindowWithDataLayer;
  
const Skills = (): JSX.Element => {
    const downloadCV = () => {
        // // text content
        // const texts = ["line 1", "line 2", "line 3"];
        // // file object
        // const file = new Blob(texts, { type: "text/plain" });
        // // anchor link
        // const element = document.createElement("a");
        // element.href = URL.createObjectURL(file);
        // element.download = "100ideas-" + Date.now() + ".txt";
        // // simulate link click
        // document.body.appendChild(element); // Required for this to work in FireFox
        // element.click();
        // Create blob link to download

        const link = document.createElement("a");
        link.href = CV;
        link.setAttribute("download", `DH-CV.pdf`);

        // Append to html link element page
        document.body.appendChild(link);

        // Start download
        link.click();
        link.remove();
        window.dataLayer.push({
            event: "download-cv",
        });
        // Clean up and remove the link
        // link.parentNode.removeChild(link);
    };
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <Fade
                    left
                    delay={1000}
                >
                    <div className="left-col">
                        <img
                            src={TechIcons}
                            alt="JS,React,HTMl,CSS"
                        />
                        {/* <Skill
                            img={nodejs}
                            // width={randomIntFromInterval(60,100)}
                            // height={randomIntFromInterval(60,100)}
                            position={1}
                        />
                        <Skill
                            img={flutter}
                            // width={60}
                            // height={randomIntFromInterval(60,100)}
                            position={2}
                        />
                        <Skill
                            img={typescript}
                            // width={75}
                            // height={randomIntFromInterval(60,100)}
                            position={3}
                        />
                        <Skill
                            img={html5}
                            // width={80}
                            // height={randomIntFromInterval(60,100)}
                            position={4}
                        /> */}
                    </div>
                </Fade>
                <Fade
                    right
                    delay={1000}
                >
                    <div className="right-col">
                        <h2>Skills</h2>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book. It has
                            survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially
                            unchanged. It was popularised in the 1960s with the
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

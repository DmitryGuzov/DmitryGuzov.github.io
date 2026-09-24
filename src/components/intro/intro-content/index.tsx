import React from "react";
import "./index.scss";

import { FaCode, FaDesktop, FaMobileAlt } from "react-icons/fa";

import hand from "../../../assets/images/hand.png";
import heroPhoto from "../../../assets/images/hero-dock.png";

import CallToAction from "../../call-to-action";
import Fade from "react-reveal";
import { scrollToSection } from "../../../helpers";
import Highlight from "../../highlight";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <Fade
                    left
                    delay={400}
                >
                    <div className="left-col">
                        <div className="title">
                            <span className="small-text">
                                <span className="text">Hello</span>
                                <span className="icon">
                                    <img
                                        src={hand}
                                        alt=""
                                    />
                                </span>
                                <span className="text">, I Am</span>
                            </span>
                            <span className="big-text">
                                Full-Stack dev Dmitry Guzov
                            </span>
                        </div>
                        <p>
                            I build web and mobile products end to end — from
                            UI to APIs. Personal apps under HDA (Keepbay,
                            Capsa) and client work when it fits.
                        </p>
                        <CallToAction
                            text="Contact me"
                            action={() => scrollToSection("contact")}
                        />
                    </div>
                </Fade>
                <Fade
                    right
                    delay={400}
                >
                    <div className="right-col">
                        <img
                            src={heroPhoto}
                            alt="Dmitry Guzov"
                            className="hero-photo"
                        />
                        {/* Left mid — web */}
                        <Highlight
                            type="horizontal"
                            icon={<FaCode />}
                            positionClass={"position-1"}
                            child={
                                <div className="text-small">
                                    <span>Full-Stack</span>
                                    Web
                                </div>
                            }
                        />
                        {/* Top right — mobile */}
                        <Highlight
                            type="horizontal"
                            icon={<FaMobileAlt />}
                            positionClass={"position-2"}
                            child={
                                <div className="text-small">
                                    <span>Mobile</span>
                                    Flutter
                                </div>
                            }
                        />
                        {/* Bottom right — desktop */}
                        <Highlight
                            type="horizontal"
                            icon={<FaDesktop />}
                            positionClass={"position-3"}
                            child={
                                <div className="text-small">
                                    <span>Desktop</span>
                                    Electron
                                </div>
                            }
                        />
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default IntroContent;

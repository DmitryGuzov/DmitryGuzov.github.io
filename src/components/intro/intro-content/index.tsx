import React from "react";
import "./index.scss";

import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";

import girl from "../../../assets/images/girl.png";
import man from "../../../assets/images/man.png";
import hand from "../../../assets/images/hand.png";

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
                    delay={2000}
                >
                    <div className="left-col">
                        <div className="title">
                            <span className="small-text">
                                <span className="text">Hello</span>
                                <span className="icon">
                                    <img
                                        src={hand}
                                        alt="hand"
                                    />
                                </span>
                                <span className="text">, I Am</span>
                            </span>
                            <span className="big-text">
                                Full-Stack dev Dmitry Guzov
                            </span>
                        </div>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500
                        </p>
                        <CallToAction
                            text="Contact me"
                            action={() => scrollToSection("contact")}
                        />
                    </div>
                </Fade>
                <Fade
                    right
                    delay={2000}
                >
                    <div className="right-col">
                        <img
                            src={man}
                            alt="JS Dev Hindi"
                        />

                        {/* <div className="highlights horizontal">
                            <div className="icon">
                                <BsAwardFill />
                            </div>
                            <div className="text">Best Design Award</div>
                        </div>
                         <div className="highlights verticle">
                            <div className="icon">
                                <FaUser />
                            </div>
                            <div className="text">
                                <span>4k+</span>
                                Happy Customers
                            </div>
                        </div>
                         */}
                        <Highlight
                            type="horizontal"
                            icon={<BsAwardFill />}
                            positionClass={"position-1"}
                            child={
                                <div className="text">Best Design Award</div>
                            }
                        />
                        <Highlight
                            type="vertical"
                            icon={<FaUser />}
                            positionClass={"position-2"}
                            child={
                                <div className="text-small">
                                    <span>4k+</span>
                                    Best Design Award
                                </div>
                            }
                        />
                        <Highlight
                            type="vertical"
                            icon={<FaUser />}
                            positionClass={"position-3"}
                            child={
                                <div className="text-small">
                                    <span>4k+</span>
                                    Best Design Award
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

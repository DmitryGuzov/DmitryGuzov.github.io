import React from "react";
import "./index.scss";
// images
import cloud from "../../assets/images/cloud.png";
import cloudSoft from "../../assets/images/cloud-soft.png";

import Navigation from "./navigation-bar";
import IntroContent from "./intro-content";
import Fade from "react-reveal";

const Intro = (): JSX.Element => {
    return (
        <div className="intro-section">
            <Fade bottom>
                <div
                    className="vector-bg"
                    id="parallax"
                ></div>
                <img
                    src={cloud}
                    className="cloud"
                    alt="cloud"
                />
                <img
                    src={cloudSoft}
                    className="cloud-soft"
                    alt="cloud-soft"
                />
            </Fade>
            <div className="content">
                <Navigation />
                <IntroContent />
            </div>
        </div>
    );
};

export default Intro;

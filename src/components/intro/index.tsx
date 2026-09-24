import React from "react";
import "./index.scss";

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
                    aria-hidden="true"
                />
            </Fade>
            <div
                className="hero-wave"
                aria-hidden="true"
            >
                <svg
                    viewBox="0 0 1440 120"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        className="wave-back"
                        d="M0,64 C240,120 480,0 720,40 C960,80 1200,120 1440,48 L1440,120 L0,120 Z"
                    />
                    <path
                        className="wave-mid"
                        d="M0,80 C200,20 400,100 720,64 C1040,28 1240,10 1440,72 L1440,120 L0,120 Z"
                    />
                    <path
                        className="wave-front"
                        d="M0,96 C180,60 360,110 720,88 C1080,66 1260,40 1440,84 L1440,120 L0,120 Z"
                    />
                </svg>
            </div>
            <div className="content">
                <Navigation />
                <IntroContent />
            </div>
        </div>
    );
};

export default Intro;

import React from "react";
import "./index.scss";

import logo from "../../../assets/images/logo.png";

import CallToAction from "../../call-to-action";
import { scrollToSection } from "../../../helpers";

const Navigation = (): JSX.Element => {
    return (
        <div className="top-navigation-bar">
            <div className="app-logo">
                <img
                    src={logo}
                    alt="JS Dev"
                />
            </div>
            <div className="navigation">
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("portfolio")}
                >
                    Portfolio
                </span>
                <span
                    className="navigation-item"
                    onClick={() => scrollToSection("blogs")}
                >
                    Blogs & Articles
                </span>
                <CallToAction
                    text="Contact me"
                    action={() => scrollToSection("contact")}
                />
            </div>
        </div>
    );
};

export default Navigation;

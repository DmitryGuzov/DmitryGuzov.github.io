import React from "react";
import "./index.scss";

import {
    FaGithub,
    FaLinkedinIn,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";

import Section from "../section";
import logo from "../../assets/images/logo.png";
import SocialIcon from "../social-icon";
import { scrollToSection } from "../../helpers";
import Fade from "react-reveal";

const Footer = (): JSX.Element => {
    return (
        <Section
            background="dark"
            className="footer"
        >
            <Fade
                bottom
                distance={"10%"}
            >
                <div className="footer-content-wrapper">
                    <div className="footer-logo">
                        <img
                            src={logo}
                            alt="Dmitry Guzov dev"
                        />
                    </div>
                    <ul className="footer-menu-items">
                        <li
                            className="footer-menu-item"
                            onClick={() => scrollToSection("skills")}
                        >
                            Skills
                        </li>
                        <li
                            className="footer-menu-item"
                            onClick={() => scrollToSection("portfolio")}
                        >
                            Portfolio
                        </li>
                        <li
                            className="footer-menu-item"
                            onClick={() => scrollToSection("blogs")}
                        >
                            Blog & Articles
                        </li>
                        <li
                            className="footer-menu-item"
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact me
                        </li>
                    </ul>
                    <div className="social-icons">
                        <SocialIcon
                            color="#FF0000"
                            icon={<FaFacebook />}
                            link="https://www.youtube.com"
                        />
                        <SocialIcon
                            color="#0D2636"
                            icon={<FaGithub />}
                        />
                        <SocialIcon
                            color="#0A66C2"
                            icon={<FaLinkedinIn />}
                        />
                        <SocialIcon
                            color="#E84C88"
                            icon={<FaInstagram />}
                        />
                    </div>
                    <div className="bottom-bar">
                        <div className="copyright-text">
                            Copyright 2023 Dmitry Guzov | All Rights Reserved
                        </div>
                    </div>
                </div>
            </Fade>
        </Section>
    );
};

export default Footer;

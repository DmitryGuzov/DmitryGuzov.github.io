import React from "react";
import "./index.scss";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

import Section from "../section";
import logoMark from "../../assets/images/logo-dg.svg";
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
                            src={logoMark}
                            alt="Dmitry Guzov"
                            className="logo-mark"
                        />
                        <span className="logo-wordmark">
                            Dmitry <em>Guzov</em>
                        </span>
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
                            onClick={() => scrollToSection("contact")}
                        >
                            Contact
                        </li>
                    </ul>
                    <div className="social-icons">
                        <SocialIcon
                            color="#2d3a3f"
                            icon={<FaGithub />}
                            link="https://github.com/DmitryGuzov"
                        />
                        <SocialIcon
                            color="#2d3a3f"
                            icon={<FaLinkedinIn />}
                            link="#"
                        />
                    </div>
                    <div className="bottom-bar">
                        <div className="copyright-text">
                            © {new Date().getFullYear()} Dmitry Guzov · All
                            rights reserved
                        </div>
                    </div>
                </div>
            </Fade>
        </Section>
    );
};

export default Footer;

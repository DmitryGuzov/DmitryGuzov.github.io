import React from "react";
import "./index.scss";

import logoMark from "../../../assets/images/logo-dg.svg";

import CallToAction from "../../call-to-action";
import { scrollToSection } from "../../../helpers";

const Navigation = (): JSX.Element => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    const goTo = (id: string) => {
        scrollToSection(id);
        setMenuOpen(false);
    };

    return (
        <div className="top-navigation-bar">
            <a
                className="app-logo"
                href="#top"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
            >
                <img
                    src={logoMark}
                    alt=""
                    className="logo-mark"
                />
                <span className="logo-wordmark">
                    Dmitry <em>Guzov</em>
                </span>
            </a>

            <button
                type="button"
                className={`nav-toggle ${menuOpen ? "open" : ""}`}
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
            >
                <span />
                <span />
                <span />
            </button>

            <div className="navigation">
                <span
                    className="navigation-item"
                    onClick={() => goTo("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => goTo("portfolio")}
                >
                    Portfolio
                </span>
                <CallToAction
                    text="Contact me"
                    action={() => goTo("contact")}
                />
            </div>

            <div className={`mobile-navigation ${menuOpen ? "open" : ""}`}>
                <span
                    className="navigation-item"
                    onClick={() => goTo("skills")}
                >
                    Skills
                </span>
                <span
                    className="navigation-item"
                    onClick={() => goTo("portfolio")}
                >
                    Portfolio
                </span>
                <CallToAction
                    text="Contact me"
                    action={() => goTo("contact")}
                />
            </div>
        </div>
    );
};

export default Navigation;

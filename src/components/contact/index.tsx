import React from "react";
import "./index.scss";

import Section from "../section";
import ContactInfo from "./contact-info";
import Form from "./form";
import Fade from "react-reveal";

const Contact = (): JSX.Element => {
    return (
        <Section
            id="contact"
            title="Any Question? Feel Free to Contact"
            background="light"
        >
            <div className="contact-content-wrapper">
                <Fade left>
                    <ContactInfo />
                </Fade>
                <Fade
                    right
                    width="100%"
                >
                    <Form />
                </Fade>
            </div>
        </Section>
    );
};

export default Contact;

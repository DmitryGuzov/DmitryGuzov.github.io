import React from "react";
import "./index.scss";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactInfo = (): JSX.Element => {
    return (
        <div className="contact-info-box">
            <h4>
                Questions about a project, collaboration, or freelance work?
                Reach out anytime.
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+380 XX XXX XX XX</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">your@email.com</span>
            </div>
        </div>
    );
};

export default ContactInfo;

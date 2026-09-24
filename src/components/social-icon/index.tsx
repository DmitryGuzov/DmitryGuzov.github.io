import React from "react";

interface SocialIconProps {
    icon: React.ReactNode;
    color: string;
    link?: string;
}

const SocialIcon = ({ icon, color, link }: SocialIconProps) => {
    const handleClick = () => {
        if (link && link !== "#") {
            window.open(link, "_blank");
        }
    };
    return (
        <div
            className="social-icon"
            style={{ backgroundColor: color }}
            onClick={handleClick}
        >
            {icon}
        </div>
    );
};

export default SocialIcon;

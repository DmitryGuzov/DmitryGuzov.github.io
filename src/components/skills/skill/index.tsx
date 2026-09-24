import React from "react";
import "./index.scss";

interface SkillProps {
    label: string;
    icon?: React.ReactNode;
    image?: string;
    size?: "sm" | "md" | "lg";
    accent?: string;
}

const Skill = ({
    label,
    icon,
    image,
    size = "md",
    accent,
}: SkillProps): JSX.Element => {
    return (
        <div
            className={`skill skill--${size}`}
            title={label}
            style={accent ? ({ ["--skill-accent" as string]: accent } as React.CSSProperties) : undefined}
        >
            {image ? (
                <img
                    src={image}
                    alt={label}
                />
            ) : (
                <span className="skill-icon">{icon}</span>
            )}
            <span className="skill-label">{label}</span>
        </div>
    );
};

export default Skill;

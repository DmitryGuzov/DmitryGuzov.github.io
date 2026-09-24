import React, { useState } from "react";
import "./index.scss";

import filtersData from "../../../lib/categories";
import { CategoryModel } from "../../../models/category";

interface FiltersProps {
    filterProjects: (id: string) => void;
}

const Filters = ({ filterProjects }: FiltersProps): JSX.Element => {
    const [active, setActive] = useState("");

    const clickHandler = (id: string) => () => {
        if (active !== id) {
            setActive(id);
            filterProjects(id);
        }
    };

    return (
        <ul className="filter-menu-items">
            {filtersData.map((item: CategoryModel) => {
                return (
                    <li
                        key={item.id}
                        className={`filter-menu-item ${
                            active === item.id ? "active" : ""
                        }`}
                        onClick={clickHandler(item.id)}
                    >
                        {item.name}
                    </li>
                );
            })}
        </ul>
    );
};

export default Filters;

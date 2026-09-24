import React from "react";
import "./index.scss";

import Section from "../section";
import Blog1 from "../../assets/images/blogs/blog-thumb-1.jpg";
import Blog2 from "../../assets/images/blogs/blog-thumb-2.jpg";
import Blog3 from "../../assets/images/blogs/blog-thumb-3.jpg";
import BlogCard from "./blog-card";
import Fade from "react-reveal";

const Blogs = (): JSX.Element => {
    return (
        <Section
            id="blogs"
            title="Blogs & Articles"
            background="dark"
        >
            <Fade
                bottom
                distance={"10%"}
            >
                <div className="blogs-content-wrapper">
                    <BlogCard
                        user="Dmitry Guzov"
                        date="apr 12 2022"
                        image={Blog1}
                        title="Quis Autem Vea Eum Iure Reprehendrit"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />
                    <BlogCard
                        user="Dmitry Guzov"
                        date="jan 8 2023"
                        image={Blog2}
                        title="Quis Autem Vea Eum Iure Reprehendrit"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />
                    <BlogCard
                        user="Dmitry Guzov"
                        date="mar 8 2023"
                        image={Blog3}
                        title="Quis Autem Vea Eum Iure Reprehendrit"
                        description="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                    />
                </div>
            </Fade>
        </Section>
    );
};

export default Blogs;

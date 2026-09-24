import React from "react";
import "./App.scss";
// components
import Intro from "../components/intro";
import Skills from "../components/skills";
import Portfolio from "../components/portfolio";
import Blogs from "../components/blogs";
import Contact from "../components/contact";
import Footer from "../components/footer";

import Fade from "react-reveal";

const App = (): JSX.Element => {
    return (
        <div className="App">
            <Intro />
            <Skills />
            <Portfolio />
            <Blogs />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;

import React from "react";
import "./App.scss";
import Intro from "../components/intro";
import Skills from "../components/skills";
import Portfolio from "../components/portfolio";
import Contact from "../components/contact";
import Footer from "../components/footer";

const App = (): JSX.Element => {
    return (
        <div className="App">
            <Intro />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
};

export default App;

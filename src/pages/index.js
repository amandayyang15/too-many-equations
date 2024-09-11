import React, { useState } from "react";
import GlobalStyle from "../styles/global-styles";
import Header from "../components/header-footer";
import InputSection from "../components/input";
import OutputSection from "../components/output";

const IndexPage = () => {
    const [solution, setSolution] = useState(null);
    const [variables, setVariables] = useState([]);

    return (
        <>
            <GlobalStyle />
            <main>
                <Header />
                <InputSection setSolution={setSolution} setVariables={setVariables} />
                <OutputSection />
            </main>
        </>
    );
};

export default IndexPage;

export const Head = () => <title>Too Many Equations</title>;

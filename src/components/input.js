import React, { useState } from "react";
import H2HeadingGroup from "../styles/layout";
import SolveEquations from "../logic/calculation.js";
import InputHandling from "../logic/input-handling.js";

const Equations = ({ equations, setEquations }) => {
    return (
        <div className="equations-section">
            {H2HeadingGroup("Equations", "One equation per line")}
            <textarea
                id="equations"
                rows="10"
                cols="50"
                spellCheck="false"
                value={equations}
                onChange={(e) => setEquations(e.target.value)}
            ></textarea>
            <p className="input-error">ERROR: </p>
        </div>
    );
};

const Variables = ({ variables, setVariables }) => {
    return (
        <div className="variables-section">
            {H2HeadingGroup("Variables", "One variable per line")}
            <textarea
                id="variables"
                rows="10"
                cols="50"
                value={variables}
                onChange={(e) => setVariables(e.target.value)}
            ></textarea>
        </div>
    );
};

const Buttons = ({ onSubmit }) => {
    return (
        <div className="buttons-section">
            {H2HeadingGroup(" ", " ")}
            <button id="submit" onClick={onSubmit}>Submit</button>
            {/* <button id="submit" onClick={()=> {console.log("Submit button clicked")}}>Submit</button> */}
            <button id="clear" onClick={() => window.location.reload()}>Clear</button>
        </div>
    );
};

const InputSection = ({ setSolution }) => {
    const [equations, setEquations] = useState(""); //useState takes intital state as argument and returns array containing state variable (equations) and state updater fxn (setEquations)
    const [variables, setVariables] = useState("");

    const handleSubmit = () => {
        const solution = InputHandling(equations, variables);
        setSolution(solution);
    };

    return (
        <div className="input-section">
            <Equations equations={equations} setEquations={setEquations} />
            <Variables variables={variables} setVariables={setVariables} />
            <Buttons onSubmit={handleSubmit} />
        </div>
    );
};

export default InputSection;

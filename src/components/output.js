import * as React from "react"
import H2HeadingGroup from "../styles/layout"
import SolveEquations from "../logic/calculation.js"

const Preview = () => {
    return (
        <div className="preview-section" >
        {H2HeadingGroup("Preview", " ")}
        </div>
    )
}

const Solution = () => {
    return (
        <div className="solution-section">
        {H2HeadingGroup("Solution", " ")}
        <SolveEquations />
        </div>
    )
}

const OutputSection = () => {
    return (
        <div className="input-section">
            {Preview()}
            {Solution()}
        </div>
    )
}

export default OutputSection;

import * as React from "react"
import H2HeadingGroup from "../styles/layout"

const Preview = () => {
    return (
        <div className="preview-section" >
        {H2HeadingGroup("Preview", " ")}
        <textarea id="equations" rows="10" cols="50" spellcheck="false"></textarea>
        </div>
    )
}

const Solution = () => {
    return (
        <div className="solution-section">
        {H2HeadingGroup("Solution", " ")}
        <textarea id="variables" rows="10" cols="50"></textarea>
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

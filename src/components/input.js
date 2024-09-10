import * as React from "react"
import H2HeadingGroup from "../styles/layout"

const Equations = () => {
    return (
        <div className="equations-section" >
        {H2HeadingGroup("Equations", "One equation per line")}
        <textarea id="equations" rows="10" cols="50" spellcheck="false"></textarea>
        </div>
    )
}

const Variables = () => {
    return (
        <div className="variables-section">
        {H2HeadingGroup("Variables", "One variable per line")}
        <textarea id="variables" rows="10" cols="50"></textarea>
        </div>
    )
}

const Buttons = () => {
    return (
        <div className="buttons-section">
            {H2HeadingGroup(" ", " ")}
            <button id="submit">Submit</button>
            <button id="clear">Clear</button>
        </div>
    )
}

const InputSection = () => {
    return (
        <div className="input-section">
            {Equations()}
            {Variables()}
            {Buttons()}
        </div>
    )
}



export default InputSection;

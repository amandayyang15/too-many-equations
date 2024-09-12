import SolveEquations from "./calculation";

//TO DO: figure why on earth SolveEquations is being called when its not supposed to be

//check for invalid inputs, then do symbolic expression transformations
export default function InputHandling(equations, variables) {
    console.log("InputHandling called");
    const eqns = equations + ''.split("\n").filter(Boolean); //.filter(Boolean) removes empty strings from array
    const vars = variables + ''.split("\n").filter(Boolean);

    const invalidInput = InputIsValid(eqns, vars);

    if (invalidInput === true){
        console.log("Input is valid. Proceeding with transformation.");
        SolveEquations(eqns, vars);
    }
    else {
        console.log("Invalid input detected. Please check your input and try again.");
        console.log("Invalid input:", invalidInput);
        return invalidInput;
    }
}

//error handling for inputs
function InputIsValid(eqns, vars){
    const validEquationsRegex = /^[0-9a-zA-Z\s\+\-\*\/=\(\)]*$/;
    const validVariablesRegex = /^[a-zA-]*$/;

    if (eqns == null || vars == null || eqns === "" || vars === "") {
        console.error("Equation and variable fields must be filled");
        return "Equation and variable fields must be filled";
    }

    if (!validEquationsRegex.test(eqns)) {
        console.error("Invalid character(s) detected in the equation.");
        return "Invalid character(s) detected in the equation. Numbers and symbols are not allowed";
    }

    if (!validVariablesRegex.test(vars)) {
        console.error("Invalid character(s) detected in the variable field.");
        return "Invalid character(s) detected in the variable field.";
    }

    else {
        console.log("Valid input detected");
        return true;
    }
    //if equation letters contain only those that exist in variables
    //that each variable is unique and none is a part of another variable (ex a and Va)
    //each line contains '='
}

//convert symbolic equations to mathjs lusolve compatible format
function InputTransformation (eqns, vars){
    const eqnsArray = eqns.split("\n").filter(Boolean);
    const varsArray = vars.split("\n").filter(Boolean);

    const eqnsArrayTransformed = eqnsArray.map(eqns => eqns.replace(/\s/g, '').replace(/=/g, '-(') + ')');
    const varsArrayTransformed = varsArray.map(vars => vars.replace(/\s/g, ''));

    return [eqnsArrayTransformed, varsArrayTransformed];
}

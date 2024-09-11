import * as math from "mathjs";

export default function SolveEquations(equations, variables) {
    const eqns = equations + ''.split("\n").filter(Boolean); //.filter(Boolean) removes empty strings from array
    const vars = variables + ''.split("\n").filter(Boolean);

    console.log("Equations:", eqns);

    return "eqns";

    // try {
    //     const solution = math.lusolve(eqns, vars);
    //     return solution;
    // } catch (error) {
    //     console.error("Error solving equations:", error);
    //     return "Error solving equations. Please check your input.";
    // }
};

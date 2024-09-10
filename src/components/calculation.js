import * as math from "mathjs";

const solveEquations = (equations, variables) => {
    const eqns = equations.split("\n").filter(Boolean);
    const vars = variables.split("\n").filter(Boolean);
    try {
        const solution = math.lusolve(eqns, vars);
        return solution;
    } catch (error) {
        console.error("Error solving equations:", error);
        return "Error solving equations. Please check your input.";
    }
};

export default solveEquations;

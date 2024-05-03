import { useMemo } from "react";

function ExpensiveCalculation({ a, b }) {
    // This calculation will only be re-executed if either `a` or `b` changes
    const result = useMemo(() => {
      console.log("Calculating...");
      return a * b;
    }, [a, b]);
  
    return <div>Result: {result}</div>;
  }
   export default ExpensiveCalculation;
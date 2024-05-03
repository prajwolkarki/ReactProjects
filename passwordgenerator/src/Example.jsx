import { useState } from 'react';

import ExpensiveCalculation from './ExpensiveCalculation';

function Example() {
  const [valueA, setValueA] = useState(2);
  const [valueB, setValueB] = useState(3);

  return (
    <div>
      <input value={valueA} onChange={(e) => setValueA(Number(e.target.value))} />
      <input value={valueB} onChange={(e) => setValueB(Number(e.target.value))} />
      <ExpensiveCalculation a={valueA} b={valueB} />
    </div>
  );
}
 export default Example;
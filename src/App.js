import React, { useState, useEffect } from 'react';
import { useEmp } from './useEmp'
import Hello from './Hello'

const App = () => {
  const [count, setCount] = useState(10);
  const [showHello, setHello] = useState(true);
  const [employee, handleEmpInfoChange] = useEmp({ name: 'Bhargav', age: 24 });
  useEffect(() => {
    console.log('render')

    return () => {
      console.log('unmount');
    }
  });
  useEffect(() => {
    console.log('render only when age change')
  }, [employee.age]);


  return (
    <>
      <button onClick={() => setHello(s => !s)}>Hello {showHello === true ? 'OFF' : 'ON'}</button>
      {showHello && <Hello />}
      <h1>Hello world</h1>
      <button onClick={() => setCount(s => s + 1)}>+</button>
      <button onClick={() => setCount(s => s - 1)}>-</button>
      <div>{count}</div>
      <div>
        <h2>Employee details</h2>
        <input value={employee.name} name="name" onChange={handleEmpInfoChange}></input>
        <input value={employee.age} name="age" onChange={handleEmpInfoChange} ></input>
        <p>{employee.name}</p>
        <p>{employee.age}</p>
      </div >
    </>
  );
}

export default App;

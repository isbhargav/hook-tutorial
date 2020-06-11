import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(10);
  const [employee, setEmployee] = useState({ name: 'Bhargav', age: 24 })

  const handleEmpInfoChange = (e) => {
    //Persist the valu
    const name = [e.target.name];
    const value = e.target.value;
    setEmployee(s => ({ ...s, [name]: value }))
  }

  return (
    <>
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

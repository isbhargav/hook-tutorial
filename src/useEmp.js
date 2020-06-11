import { useState } from 'react';

export const useEmp = (init_state) => {

    const [employee, setEmployee] = useState(init_state);
    const handleEmpInfoChange = (e) => {
        //Persist the valu
        const name = [e.target.name];
        const value = e.target.value;
        setEmployee(s => ({ ...s, [name]: value }))
    }

    return [employee, handleEmpInfoChange]

}
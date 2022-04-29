import { createContext, useEffect } from "react";
import { useState } from 'react'
import axios from "axios";
export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) => {

    const [employees, setEmployees] = useState([])
    // console.log(employees);
    const baseUrl = 'https://manage-employee-db.herokuapp.com/employees';

    async function getEmployees() {
        try {
          const {data} = await axios.get(baseUrl);
          setEmployees(data)
        } catch (error) {
          console.error(error);
        }
      }
    useEffect(() => {
        getEmployees()
    },[])

    // const sortedEmployees = employees.sort((a,b)=>a.name.localeCompare(b.name));

    const addEmployee = async(name, email, adress, phone) =>{
        await axios.post(baseUrl, {name, email, adress, phone});
        getEmployees();
    }
    // const addEmployee = (name, email, adress, phone) => {
    //     setEmployees([...employees, {id:uuidv4(), name, email, adress, phone}])
    // }

    const deleteEmployee = async(id) => {
        await axios.delete(`${baseUrl}/${id}`);
        getEmployees();
    }
    // const deleteEmployee = (id) => {
    //     setEmployees(employees.filter(employee => employee.id !== id))
    // }

    const updateEmployee = async(id, updatedEmployee) => {
        await axios.put(`${baseUrl}/${id}`, updatedEmployee)
        getEmployees();

    }
    // const updateEmployee = (id, updatedEmployee) => {
    //     setEmployees(employees.map((employee) => (employee.id === id ? updatedEmployee : employee)))
    // }

    return (
        <EmployeeContext.Provider value={{employees, addEmployee, deleteEmployee, updateEmployee}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}

export default EmployeeContextProvider;
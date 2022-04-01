import { Form, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext, useState } from "react";

const AddForm = () => {

  const {addEmployee} = useContext(EmployeeContext);

  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [adress, setAdress] = useState('');
  // const [phone, setPhone] = useState('');

  const [newEmployee, setNewEmployee] = useState({
    name:'', email:'', adress:'', phone:''
  })

  const{name, email, adress, phone} = newEmployee
  const onInputChange = (e) => {
    setNewEmployee({...newEmployee, [e.target.name]:e.target.value})
  }

  const handleSubmit =(e) =>{
    e.preventDefault();
    addEmployee(name, email, adress, phone);
   
  }


  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group >
        <Form.Control type="text" placeholder="Name *" required value={name} name='name' onChange={e => onInputChange(e)} />
      </Form.Group>
      <Form.Group>
        <Form.Control type="email" placeholder="Email *" required value={email} name='email' onChange={e => onInputChange(e)}/>
      </Form.Group>
      <Form.Group>
        <Form.Control as="textarea" placeholder="Adress *" rows={3} value={adress} name='adress' onChange={e => onInputChange(e)}/>
        <Form.Group>
          <Form.Control type="text" placeholder="Phone" value={phone} name='phone' onChange={e => onInputChange(e)}/>
        </Form.Group>
      </Form.Group>

      <Button variant='success' type='submit'>
          Add New Employee
      </Button>
    </Form>
  );
};

export default AddForm;

import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Employee from './Employee';
import { useNavigate } from 'react-router-dom';

function Edit() {

  const [id,setId] = useState('')
  const [uname,setUname] = useState('')
  const [age,setAge] = useState('')
  const [desig,setDesig] = useState('')
  const [salary,setSalary] = useState('')

  useEffect(()=>{
    setId(localStorage.getItem('id'))
    setUname(localStorage.getItem('uname'))
    setAge(localStorage.getItem('age'))
    setDesig(localStorage.getItem('desig'))
    setSalary(JSON.parse(localStorage.getItem('salary')))

  },[])
  console.log(id);
  console.log(uname);
  console.log(age);
  console.log(desig);
  console.log(salary);

  var index = Employee.map(item=>item.id).indexOf(id)
  console.log(index)

  let history = useNavigate()

  const handleUpdate=(e)=>{
    e.preventDefault() //to prevent auto refreshing page after clicking update button
    console.log(e)
    let emp = Employee[index]
    emp.uname = uname;
    emp.age = age;
    emp.designation = desig;
    emp.salary = salary;
    console.log(emp)
    history('/')
  }

  return (
    <div className='container'>
      <h1 className='text-primary text-center mt-5'>Update Employee Details</h1>
      <p className='text-center mb-5'>Edit employee details</p>
      <Row>
        <Col>
          <img className='p-1' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User-icon"/>
        </Col>
        <Col>
            
          <Form className='border border-3 p-5'>

            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" value={uname} onChange={(e)=>(setUname(e.target.value))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Age</Form.Label>
              <Form.Control type="text" value={age} onChange={(e)=>(setAge(e.target.value))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Designation</Form.Label>
              <Form.Control type="text" value={desig} onChange={(e)=>(setDesig(e.target.value))} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
              <Form.Label>Salary</Form.Label>
              <Form.Control type="text" value={salary} onChange={(e)=>(setSalary(e.target.value))} />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e)=>handleUpdate(e)}>
              Update
            </Button>
          </Form>

        </Col>
      </Row>
    </div>
  )
}

export default Edit
import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState, useEffect } from 'react';
import Employee from './Employee';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

function Add() {
  
  let history = useNavigate()

  const [id,setId] = useState('')
  const [uname,setUname] = useState('')
  const [age,setAge] = useState('')
  const [desig,setDesig] = useState('')
  const [salary,setSalary] = useState('')

  const handleAdd = (e)=>{
    e.preventDefault()
    let ids = uuid()
    console.log(ids)
    let uniqueId = ids.slice(0,8);
    console.log(uniqueId);
    Employee.push({
      id : uniqueId,
      uname : uname,
      age : age,
      designation : desig,
      salary : salary
    })
    history('/')
  }


  return (
    <div className='container'>
    <h1 className='text-primary text-center mt-5'>Add Employee Details</h1>
    <p className='text-center mb-5'>Add employee details</p>
    <Row>
      <Col>
        <img className='p-1' src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="User-icon"/>
      </Col>
      <Col>
          
        <Form className='border border-3 p-5'>

          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" onChange={(e)=>(setUname(e.target.value))} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" onChange={(e)=>(setAge(e.target.value))} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" onChange={(e)=>(setDesig(e.target.value))} />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Salary</Form.Label>
            <Form.Control type="text" onChange={(e)=>(setSalary(e.target.value))}  />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={(e)=>handleAdd(e)}>
            Add
          </Button>
        </Form>

      </Col>
    </Row>
  </div>
  )
}

export default Add
import React from 'react'
import { Table } from 'react-bootstrap'
import Employee from './Employee'
import Button from 'react-bootstrap/Button';
import "bootstrap-icons/font/bootstrap-icons.css";
import { TiUserAdd,TiUserDelete,TiEdit } from "react-icons/ti";
import { Link, useNavigate } from 'react-router-dom';

function Home() {

  const history = useNavigate();
  const handleDelete = (id)=> {
    alert('Deleted')
    // console.log(Employee.map(item=>item.id).indexOf(id));
    let index = Employee.map(item=>item.id).indexOf(id);
    Employee.splice(index, 1);
    console.log(Employee);
    history('/');
  }
  const handleEdit=(id, uname, age, desig, salary)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("uname",uname);
    localStorage.setItem("age",age);
    localStorage.setItem("desig",desig);
    localStorage.setItem("salary",JSON.stringify(salary));
  }
  return (
    <div className='container'>
        <h1 className='text-primary text-center mt-5'>Employee Management System</h1>
        <p className='text-center m-3'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources.</p>
        <Link to={'/add'}>
        <Button type='button' className='btn btn-success'>Add <TiUserAdd /></Button>
        </Link>
        <h3 className='mt-5'>List of employees</h3>
        <Table className="mt-5" striped bordered hover>
      <thead>
        <tr>
          <th>Username</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            Employee && Employee.length > 0?
            Employee.map((item)=>(
                <tr>
                    <td>{item.uname}</td>
                    <td>{item.age}</td>
                    <td>{item.designation}</td>
                    <td>{item.salary}</td>
                    <td>
                      <Link to='/edit'>
                        <Button className='btn me-2' onClick={()=>handleEdit(item.id, item.uname, item.age, item.designation, item.salary)}><TiEdit /></Button>
                      </Link>
                        <Button onClick={()=>handleDelete(item.id)} className='btn btn-danger'><TiUserDelete /></Button>
                    </td>
                </tr>
            )):"Error"
        }
      </tbody>
    </Table>
    </div>
  )
}

export default Home
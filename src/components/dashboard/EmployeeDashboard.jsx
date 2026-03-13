import React from 'react'
import Tasknumber from '../other/Tasknumber'
import Header from '../other/Header'
import Tasklists from '../tasklist/Tasklists'

const EmployeeDashboard = (props) => {


  return (
    <>
      <Header name={props.employeedata.name}></Header>
      <Tasknumber data={props.employeedata}></Tasknumber>
      <Tasklists data={props.employeedata}></Tasklists>
    </>
  )
}

export default EmployeeDashboard
import React from 'react'
import Tasknumber from '../other/Tasknumber'
import Header from '../other/Header'
import Tasklists from '../tasklist/Tasklists'
const EmployeeDashboard = () => {
  return (
     <> 
     <Header></Header>
     <Tasknumber></Tasknumber>
      <Tasklists></Tasklists>
     </>
  )
}

export default EmployeeDashboard
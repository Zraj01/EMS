import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import Login from './components/auth/Login'
import AdminDashboard from './components/dashboard/AdminDashboard'
function App() {
 
localStorage.clear()
  return (
 <>
{/* <AdminDashboard/> */}
     <Login/>
    <EmployeeDashboard/>
 </>
  )
}

export default App

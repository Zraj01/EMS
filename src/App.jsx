import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import EmployeeDashboard from './components/dashboard/EmployeeDashboard'
import Login from './components/auth/Login'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { setlocalstorage,getlocalstorage} from './utils/Localstorage'
import { Authcontext } from './context/Authprovider'
function App() { 
  const[user,setuser]=useState(null);
  const handlelogin=(email,password)=>{
   if(email=="admin@example.com" && password =="admin123"){
    setuser('admin')
   }
   else if(email=="employee4@example.com" && password =="123"){
    setuser('employee')
   }
   else{
    alert("Invalid Credentials")
   }
  }
  const data=useContext(Authcontext)
  console.log(data)
  return ( 
 <>
 {!user ?<Login handlelogin={handlelogin}/>:"hi"}
    {user=='admin' ?<AdminDashboard/>:<EmployeeDashboard/>}

 </>
  )
}

export default App

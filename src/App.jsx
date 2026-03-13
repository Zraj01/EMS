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
  const[loggedinuserdata,setloggendinuserdata]=useState(null)
  const authdata=useContext(Authcontext)
  // useEffect(()=>{
  //   if(authdata){
  //     const loggedinuser=localStorage.getItem("loggedinuser")
  //     if(loggedinuser){
  //       setuser(loggedinuser.role)
  //     }
  //   }
  // },[authdata])

 setlocalstorage()
  const handlelogin=(email,password)=>{
   if(email=="admin@example.com" && password =="admin123"){
    setuser({role:'admin'})
    setloggendinuserdata({name:"Admin"})
    localStorage.setItem('loggedinuser',JSON.stringify({role:'admin'}))
   }
   else if(authdata){
    const employee=authdata.employees.find((e)=>e.email===email && e.password===password)
    if(employee){

      setuser({role:'employee'})
      setloggendinuserdata(employee)
      localStorage.setItem('loggedinuser',JSON.stringify({role:'employee'}))
    }
   }
   else{
    alert("Invalid Credentials")
   }
  }
 
  return ( 
 <>
     {!user ? (
      <Login handlelogin={handlelogin}/>
    ) : user.role === "admin" ? (
      <AdminDashboard admindata={loggedinuserdata}/>
    ) : (
      <EmployeeDashboard employeedata={loggedinuserdata}/>
    )}
 </>
  )
}

export default App

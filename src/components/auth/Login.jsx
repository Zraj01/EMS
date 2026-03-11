import React from 'react'
import { useState } from 'react'
const Login = () => {
    const sumbithandler=(e)=>{
        e.preventDefault()
    }
    const[email,setemail]=useState("")
    const[password,setpassword]=useState("")
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-r from-indigo-500 to-purple-600">

      <form onSubmit={(e)=>{sumbithandler(e)}} className="bg-white p-8 rounded-xl shadow-lg w-80 flex flex-col gap-4">
        
        <h2 className="text-2xl font-semibold text-center">Login</h2>

        <input
        value={email}
        onChange={(e)=>setemail(e.target.value)}

        required 
          type="email"
          placeholder="Enter your email"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <input
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
          type="password"
          placeholder="Enter your password"
          className="border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />

        <button className="bg-indigo-500 text-white py-2 rounded-md hover:bg-indigo-600 transition cursor-pointer" >
          Login
        </button>

      </form>

    </div>
  )
}

export default Login
import React, { createContext, useEffect } from 'react'
import { useState } from 'react'
import { getlocalstorage } from '../utils/Localstorage'
export const Authcontext=createContext()
const Authprovider = ({children}) => {
    const [userdata,setuserdata]=useState(null)
    useEffect(()=>{

        const {employees,admin}=getlocalstorage()
        setuserdata({employees,admin})
    },[])
  return (
    <div>
    <Authcontext.Provider value={userdata}>

    {children}
    </Authcontext.Provider>
    </div>
  )
}

export default Authprovider
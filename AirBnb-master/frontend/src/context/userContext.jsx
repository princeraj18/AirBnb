import React, { Children, createContext, useContext, useEffect, useState } from 'react'
import { authDataContext } from './AuthContext'
import axios from 'axios'
export const userDataContext = createContext()
 const UserContext = ({children}) => {
    let {serverurl}=useContext(authDataContext)
    let [userData,setUserData]= useState(null);
    const getCurrentUser = async ()=>{
        try {
            let result = await axios.get(serverurl+"/api/user/currentuser",{withCredentials:true, headers: {
          "Content-Type": "application/json"
        }})
            setUserData(result.data)
        } catch (error) {
          
            console.log(error);
              setUserData(null) 
            
            
        }
    }
    useEffect(()=>{
        getCurrentUser()
    },[])
    let value = {
userData,
setUserData
    }
  return (
    <div>
         <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
    </div>
  )
}

export default UserContext
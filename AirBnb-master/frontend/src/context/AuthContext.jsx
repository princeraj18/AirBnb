import React, { Children, createContext } from 'react'
export const authDataContext=createContext();

const AuthContext = ({children}) => {
    let serverurl="http://localhost:8000"
     let value={
        serverurl
    }
  return (
    <div>
        <authDataContext.Provider value={value}>
            {children}
           </authDataContext.Provider>
    </div>
  )
}

export default AuthContext
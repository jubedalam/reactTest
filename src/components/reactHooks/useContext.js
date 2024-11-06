import React, { createContext, useContext } from 'react'
const UserContext  =   createContext();

const Component1    =   ()=>{
    const uname =   useContext(UserContext);
    return(
        <div>
        <p> 
            {uname}
        </p>
        </div>
    )
}

const UseContext = () => {
  return (
    <UserContext.Provider value='UseContect data'>  
    <Component1 />      
        <div>
            Here are use example of useContext
        </div>
    </UserContext.Provider>
  )
}

export default UseContext


import React, { useState } from "react";
import UsContext from "./UserContext";

const UserContextProvider = ({children}) => {
    const [user, setUser] = useState(null)
    
    return (
        <UsContext.Provider value={{user, setUser}}>
            {children}
        </UsContext.Provider>
    )

}

export default UserContextProvider
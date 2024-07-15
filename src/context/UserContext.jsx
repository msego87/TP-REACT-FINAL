import { createContext, useState } from "react";

export const UserContext = createContext();

export const UsertContextProvider = ({children}) =>{
    const [user, setUser] = useState(null);

    return <UserContext.Provider value={{user, setUser}}>
            {children}
           </UserContext.Provider>;
}
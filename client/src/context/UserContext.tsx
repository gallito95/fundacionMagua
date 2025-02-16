import React, { createContext,useState } from "react";

type UserInfo = {
   id:number;
   username: string;
   password: string;
 }

type UserContextType = {
   userInfo: UserInfo | null; // `null`, falls kein Benutzer angemeldet ist
   setUserInfo: (user: UserInfo | null) => void; // Funktion, um Benutzerinformationen zu setzen
 };
 
export const UserContext = createContext<UserContextType>({
   userInfo: null,
   setUserInfo: () => {}
})

export function UserContextProvider ({children}) {

    const [userInfo, setUserInfo] = useState<UserInfo | null>(null)
    return(
         <UserContext.Provider value={ {userInfo,setUserInfo}}>
            {children}
         </UserContext.Provider>
        )
};
import { createContext, useContext, useState } from 'react'

const context = createContext();

const ContextProvider = ({ children }) => {
    const [signUpPage,setSignUp]  = useState(false);
    const [outlet,setOutlet] = useState(false);
   
   


    return (

        <context.Provider value={{signUpPage,setSignUp ,setOutlet,outlet}}>

            {children}

        </context.Provider>

    )
}
export function useContextApi() {

    return useContext(context);

}
export { ContextProvider };

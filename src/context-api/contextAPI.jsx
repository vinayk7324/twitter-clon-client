import { createContext, useContext, useState } from 'react'

const context = createContext();

const ContextProvider = ({ children }) => {
    const [signUpPage,setSignUp]  = useState(false);
   
   


    return (

        <context.Provider value={{signUpPage,setSignUp}}>

            {children}

        </context.Provider>

    )
}
export function useContextApi() {

    return useContext(context);

}
export { ContextProvider };

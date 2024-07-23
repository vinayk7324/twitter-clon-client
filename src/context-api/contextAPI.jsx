import { createContext, useContext, useState } from 'react'

const context = createContext();

const ContextProvider = ({ children }) => {
    const [signUpPage,setSignUp]  = useState(false);
    const [outlet,setOutlet] = useState(false);
    
    const [userData,setuserData] = useState({
        name:'',
        email:'',
        password:'',
        userName:'',
        DOB:'',

    });
    const [userDetails,setUserDetails] = useState(null);
   const [toggle,setToggle] = useState("");
   const [isGoogleLogin,setGoogleLogin] = useState(true);
   


    return (

        <context.Provider value={{userDetails,isGoogleLogin,setGoogleLogin,setUserDetails, signUpPage,setSignUp ,setOutlet,outlet,userData,setuserData,toggle,setToggle}}>

            {children}

        </context.Provider>

    )
}
export function useContextApi() {

    return useContext(context);

}
export { ContextProvider };

import axios from "axios"
import { hunter_api_key } from "../../env-controller.js"


const isEmailExist =async ({email}) => {
    
     const url = `https://api.hunter.io/v2/email-verifier?email=${email}&api_key=${hunter_api_key}`
    try {
        const res = await axios.get(url);
        const status = res.data.data.status
        return status==="valid"
    } catch (error) {
        console.log("error in isEmailExist :: ",error);
        return false;
        
    }
  
}

export default isEmailExist

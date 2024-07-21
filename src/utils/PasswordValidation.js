
const findDigit = (password) => {
    const array = ['0', '1', '2', '3', '4', ',5', '6', '7', '8', '9'];

    for (let i = 0; i < array.length; i++) {

        const match = password.includes(array[i]);
        if (match) {
            return match;
        }
    }
    return false;
}

const findSpecialChar = (password) => {
    const array = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '?'];
    for (let i = 0; i < array.length; i++) {

        const match = password.includes(array[i]);
        if (match) {
            return match;
        }
    }
    return false;

}


const findUpperCaseChar = (password)=>{
    for (let i = 0; i < password.length; i++) {
       if(!findDigit(password[i]) && !findSpecialChar(password[i])){
        if(password[i]==password[i].toUpperCase()){
            return true;
        }
       }

        
    }
 return false;

}



export {findDigit,findSpecialChar,findUpperCaseChar};
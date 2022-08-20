import axios from "axios";



const url= "http://localhost:8000/o/auth/"


// , {headers:{authorization:`bearer${token}`}
   const login=(email, password)=>{
        return axios.post(url + "login", {email,password})
        .then(
            (response)=>{
                if(response.data.accesstoken){

                    console.log("here is the token you have been waiting and secretly fearing" + response.data.accesstoken)
                    localStorage.setItem("user", JSON.stringify(response))
                    console.log(response.data.accesstoken)
                    return response
                }
                else{
                    console.log("here is the data without the tokens" + response.data)
                    console.log(response)
                    return response

                }
            },
        
        
        )
    }


    const passwordreset=(email, password)=>{
        return axios.post(url + "passwordreset", {email,password})
        .then(
            (response)=>{
                if(response.accesstoken){

                    console.log("Has token but now for password reset" + response)
                    localStorage.setItem("user", JSON.stringify(response))
                }
                else{
                    console.log("Response for reset password" + response.data)
          
                    return response

                }
            },
        
        
        )
    }

    export default function(email,role,password){
        return axios.post(url+ "signup", {email, role, password})
            .then((response)=>{
                console.log(response)
                return response
            })
    }


    const signout=()=>{
        return localStorage.removeItem("user")
    }

    const getCurrentUser=()=>{
        return JSON.parse("user", localStorage.getItem("user"))
    
    }

    const verify= (verificationcode)=>{
       return axios.get(url + `verify/${verificationcode}` ).then((response)=>{
            console.log(response)
            return response
        }).catch(err=> console.error(err))
    }

export {
    login,
    verify, 
    signout,
    getCurrentUser,
    passwordreset,


}

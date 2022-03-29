import axios from "axios";


const url= "http://localhost:8000/o/auth/"


   const login=(username, email, password)=>{
        return axios.post(url + "login", {username, email,password})
        .then(
            (response)=>{
                if(response.accesstoken){

                    console.log("response")
                    localStorage.setItem("user", JSON.stringify(response))
                }
                else{
                    return response.data
                }
            },
        
        
        )
    }



    const signup=(username,email,password)=>{
        return axios.post(url+ "signup", {username, email, password})
            .then((response)=>{
                return response.data
            })
    }


    const signout=()=>{
        return localStorage.removeItem("user")
    }

    const getCurrentUser=()=>{
        return JSON.parse("user", localStorage.getItem("user"))
    
    }


export default{
    login,
    signup,
    signout,
    getCurrentUser

}
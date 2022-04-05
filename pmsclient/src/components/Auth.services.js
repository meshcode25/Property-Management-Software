import axios from "axios";



const url= "http://localhost:8000/o/auth/"


   const login=(email, password)=>{
        return axios.post(url + "login", {email,password})
        .then(
            (response)=>{
                if(response.accesstoken){

                    console.log(response)
                    localStorage.setItem("user", JSON.stringify(response))
                }
                else{
                    console.log(response.data)
                    return response.data
                }
            },
        
        
        )
    }



    const signup=(email,role,password)=>{
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

    const verifyuser=(verificationcode)=>{
       return axios.get(url + "/verify" + verificationcode, ).then((response)=>{
            return response
        }).catch(err=> console.error(err))
    }

export default{
    login,
    signup,
    signout,
    getCurrentUser,
    verifyuser

}
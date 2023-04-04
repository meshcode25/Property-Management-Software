import React from "react"
import { RiEyeCloseFill } from "react-icons/ri"
import { useParams } from "react-router-dom"
//  import styled from "styled-components"
  import {verify} from "./Auth.services"

const VerifyEmail=()=>{
    var params = useParams()
    verify(params.verificationcode).then((response)=>{
        if(response.status===404){
            console.log(response)
            console.log("I can do the verification")
            // return console.log("if this works, I think we are don here")
             return window.location.href=(`/dashboard`)
        }
        else{
            return window.location.href="/signin"
        }
        
    }).catch(err=>{console.error(err); console.log("console.log error")})

    return(
        // <div>Wait as you are being redirected to the next page</div>   
        <></>
    )
 }
 
export default VerifyEmail
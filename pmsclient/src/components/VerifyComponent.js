import React from "react"
import { useParams } from "react-router-dom"
//  import styled from "styled-components"
  import {verify} from "./Auth.services"

const VerifyEmail=()=>{
    var params = useParams()

    verify(params.verificationcode).then((response)=>{
        if(response.status===201){
            console.log(response)
             return window.location.href=(`/verifysuccess`)
        }
        else{
            return window.location.href="/verifyfail"

        }
    }).catch(err=>console.error(err))
    
   
    return(


        <div>Wait as you are being redirected to the next page</div>
        
    )
        
   

 }

export default VerifyEmail
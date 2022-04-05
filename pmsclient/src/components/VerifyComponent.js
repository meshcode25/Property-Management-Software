import React from "react"
import {Link, useParams, matchPath} from "react-router-dom"
 import styled from "styled-components"
  import verifyuser from "./Auth.services"


const Nav=styled.div`
width:100%;
padding-left:1rem;
height:100px;
display:flex;
jusfycontent:start;
align-items:center;
color:white;
background-color:green;
`

const Loginlink=styled(Link)`



`
const Body=styled.div`
margin-left:0.5rem;

`

const VerifyEmail=()=>{
    var params = useParams()
    //  const match=matchPath({path:"/confirm/:verificationcode"},`/confirm/${params.verificationcode}`)
    //  console.log(match}
      
    const verify=(params)=>{
          console.log(params)

         verifyuser(params)
    }
        //  console.log(params.verificationcode)
            // const show=()=>{
            // console.log("so it sometimes works, how sad ")
            // }

        
    return(
        <div >
            <Nav>
                <h3>{params.verificationcode}  Your Account has successfully Been Verified</h3>
            </Nav>
            <Body>
                <p>Thank you for taking the time to verify your account, you can now login using the link below Please Login</p>
                <p>
                    Use this link <Loginlink onClick={verify(params.verificationcode)} to="/signup">Login</Loginlink> to login to your account    

                </p>
                {/* <p>{match}</p>     */}
            </Body>



        </div>
        
    )




 }

export default VerifyEmail
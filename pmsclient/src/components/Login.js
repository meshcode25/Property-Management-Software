import React, {useRef, useState} from "react"
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import {isEmail} from "validator"
import {FaUserCircle} from "react-icons/fa"
import LoadingIcons from "react-loading-icons"
import AuthService from "./Auth.services"
import styled from "styled-components"


const Registrationcontainer=styled.div`
    background-color:#f7f7f7;
    padding:0rem;
    height:70vh;
    text-align:center;
    max-width:400px;
    margin:4rem auto;
`

const Logincontainer=styled.div`
   width:90%;
   height:100%;
   margin:0rem auto;


`
const Iconimage=styled.div`
    padding-top:1rem;
    font-size:6.5rem;
    color:lightgrey;
`
const Usernamediv=styled.div`

`
const Usernamelabel=styled.div`
    text-align:start;
    margin:0.5rem 0rem 0.5rem 2.5rem;
    font-size:1.2rem;
` 
const Emaildiv=styled.div`
    padding-top: 1rem;
    
`
const Emailabel=styled.div`
    text-align:start;
    margin:0.2rem 0rem 0.2rem 2.5rem;
    font-size:1.2rem;
`
const Passwordlabel=styled.div`
    text-align:start;
    margin:0.2rem 0rem 0.2rem 2.5rem;
    font-size:1.2rem;
`

const Passwordiv=styled.div`
    padding-top:1rem;
`
const FormButtondiv=styled.div`
    padding-top:1rem;
`

const SpanIcon=styled.div`
    color:black;
    font-size:1rem;
`

const Spanbutton=styled.div`
     
`

  
const Button=styled.button`
    width:50%;
    margin: 0 auto;
    background-color:green;
    color: white;
    text-align:center;
    padding:0.5rem;
    border-radius:10px;
    border:none;
    font-size:1rem;
`
const Messagediv=styled.div`
    width:50%;
    width:2px;
`




const Required=(value)=>{
    if(!value)
    return <div style={{backgroundColor:"red", color:"black"}}>Required</div>
    
}

const IsEmail= (value)=>{
    if(!isEmail(value))

    return <div style={{backgroundColor:"red", color:"black"}}>Enter a valid Email</div>
}


const login= ()=>{
    const checkbtn=useRef()
    const form= useRef()

    const [message, setMessage]=useState("")
    const [password, setPassword]= useState("")
    const [username, setUsername]=useState("")
    const [email, setEmail]= useState("")
    const [loading, setLoading]= useState(false)

    const usernameChange=(e)=>{
        const username=e.target.value
        setUsername(username);
    }


    const passwordChange=(e)=>{
        const password=e.target.value
        setPassword(password);
    }


    const emailChange=(e)=>{
        const email=e.target.value
        setEmail(email);
    }


    const handleLogin=(e)=>{
        e.preventDefault();

        setMessage("");
        setLoading(true)

        
        form.current.validateAll()
        
        if(checkbtn.current.context._errors.length===0){
            AuthService.login(username, email, password)
                .then(
                    ()=>{
                        window.location.href=("/")

                    },
                    (error)=>{
                       const showMessage= error.Error
                        console.log(showMessage)
                        setMessage(showMessage)                        
                        setLoading(false)
                    }
                )
        }
        else{
            setLoading(false)
        }
    }




    return(
        <Registrationcontainer>
            <Logincontainer>
                <Iconimage >< FaUserCircle /></Iconimage>
                
                <Form method="" ref={form} onSubmit={handleLogin} >
                    <Usernamediv>
                        <Usernamelabel>Username</Usernamelabel>
                        <Input  type="text" name="username" placeholder="John Doe" value={username} onChange={usernameChange} validations={[Required]} style={{width:"80%", height:"2rem", borderRadius:"10px", border:"none"}}></Input>
                    </Usernamediv>

                    <Emaildiv>
                        <Emailabel>Email</ Emailabel >
                        <Input type="text" name="email" placeholder="Johndoe23@gmail.com" value={email} onChange={emailChange} validations={[Required, IsEmail]} style={{width:"80%", height:"2rem", borderRadius:"10px", border:"none"}}></Input>
                    </Emaildiv>


                    <Passwordiv>
                        <Passwordlabel>Password</Passwordlabel>
                        <Input type="password" name="password"  value={password} onChange={passwordChange} validations={[Required]} style={{width:"80%", height:"2rem", borderRadius:"10px", border:"none"}}></Input>
                    </Passwordiv>


                    <FormButtondiv>
                        <Button disabled={loading} > 
                        {loading ? (
                            <SpanIcon ><LoadingIcons.SpinningCircles /></SpanIcon>

                            
                        ):
                        (
                            <Spanbutton>SIGN IN</Spanbutton>
                        )}
                        
                        </Button>

                    </FormButtondiv>
                    {message && (
                        <Messagediv>
                            <div sytle={{width:"2px"}}>{message}</div>
                        </Messagediv>

                    )}
                    <CheckButton style={{display:"none"}} ref={checkbtn}/>
                </Form>
            </Logincontainer>



        </Registrationcontainer>
        
    )
}


export default login
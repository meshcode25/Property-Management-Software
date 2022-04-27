/*
// import * as GiIcons from "react-icons/gi"
// import  getCurrentUser  from "./Auth.services"
// import * as RiIcons from "react-icons/ri"
// import { BsWindowSidebar } from "react-icons/bs"


*/
const logo= require ("./easyclickslogo.png")
import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {VscMenu} from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
import Sidebardata from "./Sidebardata"
import { Link, Outlet} from "react-router-dom"
import * as RiIcons from "react-icons/ri"
import Submenu from "./Submenu"
import {FaUserCircle} from "react-icons/fa"

console.log(logo)

const Nav = styled.div`
position:fixed;
top:0;
`
const Navdiv= styled.div`
position:fixed;
top:0;
left:20%;

`
const Logodiv=styled.div`


`
const Navigation = styled.div`
position:fixed;
background-color:black;
display:flex;
align-items:center;  
width:100%;
height:50px;

justify-content:space-between;
`

const Registerdiv=styled.div`
margin-right:5rem;
display:flex;
height:25%;
justify-content:space-around;
align-items:center;

`
const SignIn=styled.button`
fontSize:4rem;
color:white;
border:none;
font-weight:bold;
padding:0.5rem;
background-color:green;
border-radius:7px;
border:none;
margin-right:1rem;
cursor:pointer;

`
const SignUp=styled.button`
fontSize:4rem;
padding:0.5rem;
color:white;
background-color:blue;
border:none;
cursor:pointer;
border-radius:7px;
font-weight:bold;
`

const Naviconburger= styled(Link)` 
  list-style:none;
  padding:0.5rem;
  color:violet;
  font-size:3rem;
  text-decoration:none;
 
` 

const SidebarNav= styled.div`
  position:fixed;
  height:100vh;
  color:black;
  overflow: scroll;
  background-color:black;
  width:21%;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 %;
  top:51px;
  z-index:10;
  
  transition:0.65s;
  left: ${({sidebar})=> sidebar ? `0 ` : `-100%; `}
  `    
  const Wholeprofile=styled.div`
    left:85%;
    position:fixed; 
    top:0;
    color:white;

  
  `
  const Profile  = styled.div`



  `
  const Profileshow = styled(Link)`
    display:flex;
    justify-content:space-evenly;
    color:green;
    background-color:black;
    outline:none;
    border:none;
    align-items:center;
    text-align:center;
    height:50px;
    text-decoration:none;
    display:flex;;

    &:hover{
      background-color:#EFEBF3;
      padding:0 0.7rem;
    } 
  `
  const Showusername = styled.div`
  // margin-left:-2.5rem;
  
  `
  const Username = styled.div`

  
  `
  const Iconimage = styled.div`
    font-size:1.3rem;
    // margin-left:-1rem;
  

  `
  const Dropicon = styled.div`

  `
  const Profilehide = styled.div`
  background-color:blue;


  // padding-top:2rem;
  // margin-top:2rem;
  top:70px;
  
  `
 const Settingrow = styled(Link)`
 padding:0.5rem 1rem;
 display:flex;
 color:white;
 text-decoration:none;
 &:hover{
  background-color: grey;
 };
 justify-content:space-evenly;
 text-align:center;
   
 `
 const Icons = styled.div`

   margin-right:0.5rem;
 `





  
const Sidebar = () => {
  const [sidebar, setSidebar ]= useState(false);
  const [isloggedin, setloggedIn]= useState(false);
  const [showProfile, setshowProfile]= useState(false)
        
  const showSidebar= ()=> {
      setSidebar(!sidebar) 
    } 
    
    const handleshowProfile = ()=> {
      setshowProfile(!showProfile)  
    } 

    const handleLogout= ()=>{
      localStorage.removeItem("user")
      window.location.href="/"

    }

  
  console.log("here is the accutal boolean value" + showProfile)
  // console.log(getCurrentUser)
    const logedin=JSON.parse(localStorage.getItem("user"))
    // console.log(logedin);
  

    var name;
    if(logedin===null){
      console.log("No Cashed cookies")
    } 
    else{
      var email = logedin.data.email;
      console.log("this is the email" + email)
      name= email.substring(0, email.lastIndexOf("@"))
    }

  useEffect(()=>{
    if(logedin===null){
      console.log("No Cashed cookies")
    } 
    else{
      if(logedin.data.accesstoken){
        setloggedIn(true)
       
        // console.log("show isLogged In" + isloggedin)
        
      }
      else{
        setloggedIn(false)
        // console.log("not logged In")
      }
    }
    

  }, [isloggedin])

  // console.log("show isLogged In?" + isloggedin)

  return(
  <div>
    <Nav>
      <Navigation>
        <Logodiv >
        <img style={{height:"51px", width:'100%'}} src={logo} alt="Logo Goes Here" />
          </Logodiv>
        <Navdiv>
          <Naviconburger to='#' onClick={showSidebar} sidebar={sidebar? 1:0}>
              {sidebar?  <MdIcons.MdOutlineClose /> : <VscMenu />}
          </Naviconburger>
        </Navdiv>
        {isloggedin ?  
          <Wholeprofile >
            
            <Profile>

                  

                <Profileshow to="#" onClick={handleshowProfile}>
                  <Iconimage >< FaUserCircle /></Iconimage>
                  <Showusername>{name}</Showusername>
                  <Dropicon><MdIcons.MdExpandMore/></Dropicon>
                </Profileshow>

                {showProfile &&
                <Profilehide>
                  <Settingrow to="#">
                    <Icons ><RiIcons.RiUserSettingsLine/></Icons>
                    <Username>My Account Settings</Username>
                  </Settingrow>

            
                 
                  <Settingrow to="#">
                    <Icons><RiIcons.RiTeamLine/></Icons>
                    <Username>My Team Members</Username>
                  </Settingrow>

                  <Settingrow to="#">
                    <Icons><MdIcons.MdSupportAgent/></Icons>
                    <Username>Help and Support</Username>
                  </Settingrow>

                  <Settingrow to="#" onClick={handleLogout}>
                    <Icons style={{marginLeft:"-4.5rem"}} ><MdIcons.MdPowerSettingsNew/></Icons>
                    <Username style={{marginLeft:"-4.5rem"}} >Log Out</Username>
                  </Settingrow>
                  


                </Profilehide> 
            
            }

            
              
            </Profile>
          </Wholeprofile>
            :
              <Registerdiv>
                <Link to="/signin"><SignIn>SIGN IN</SignIn></Link> 
                <Link to="/signup"><SignUp>SIGN UP</SignUp></Link>    
              </Registerdiv>
              
          

            }
     
      </Navigation>
      <SidebarNav sidebar={sidebar? 1 :0}>
            {Sidebardata.map((menu,index) => { 
              return <Submenu menu={menu} key={index}/>
            })}    
      </SidebarNav>
    </Nav>
    <div>
        <Outlet />
    </div>
</div>

  
  


    )
};

export default Sidebar;

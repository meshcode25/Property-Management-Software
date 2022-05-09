/*
// import * as GiIcons from "react-icons/gi"
// import  getCurrentUser  from "./Auth.services"
// import * as RiIcons from "react-icons/ri"
// import { BsWindowSidebar } from "react-icons/bs"






const Logodiv=styled.div`

`
 <img style={{height:"51px", width:'100%'}} src={logo} alt="Logo Goes Here" /> 
 
 `
 */
import React, {useState, useEffect} from "react"
import styled from "styled-components"
import {VscMenu} from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
import Sidebardata from "./Sidebardata"
import { Link, Outlet} from "react-router-dom"
import * as RiIcons from "react-icons/ri"
// import Submenu from "./Submenu"
import {FaUserCircle} from "react-icons/fa"
// import xDownloadOptions from "helmet/dist/types/middlewares/x-download-options"
// console.log(logo)

// const logo= require ("./easyclickslogo.png")
const logo= require ("./easy4.png")


const Nav = styled.div`
  z-index:10;
  display:grid;
  grid-template-columns: ${({sidebar})=> sidebar ? `6% 94% ` : `24% 76%`} ;
  grid-template-rows:51px  auto ;



`



const Logodiv=styled.div`
color:white;
grid-column: 1/2;
grid-row:  1/2;
text-align:center;
color:indigo;
background-color:black;
// position:fixed;
// overflow:hidden;
// display:flex;
// justify-content:center;

`


const Navigation=styled.div  `
position:fixed;
overflow:hidden;
display:flex;
top:0;
z-index:5;
left:0;
width:100%;
height:51px;
justify-content:space-between;
align-items:center;
background-color:black;


`



const SidebarNav=styled.div  `
position:fixed;
overflow:scroll;
top:51px;
width:22.5%;
display:grid;
grid-template-column:99% 1%;
height:90vh;
left:${({sidebar})=> sidebar ? "-100%": "0"};
background-color:black;



::-webkit-scrollbar {
  width: 5px;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: black;        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: gray;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */
}

`
// const Barcontent= styled.div` 

// grid-column:1/2;

// `
const Scroll=styled.div`
background-color:black;
display:flex;
text-align:center;
position:fixed;
left:${({sidebar})=> sidebar ? "6%": "22.5%" };
top:0;
z-index:1;
width:10px;
height:100vh;
justify-content:space-between;

`
const Openscroll=styled.div`
text-decoration:none;
width:20px;
height:100px;
display:flex;
align-items:center;
color:white;
text-align:center;
background-color:black;
align-self:center;
border-radius:17%;

`

const Switchdiv= styled.div`
 grid-column:2/3;
 grid-row:2/3;
//  position:fixed;
//  overflow:scroll;
background-color:indigo;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  ;


`

const Navdiv= styled.div`
position:fixed;
top:0;
left:20%;

`

const Logo= styled.div`
text-align:center;

`


const Registerdiv=styled.div`
margin-right:5rem;
display:flex;
height:25%;
justify-content:space-around;
align-items:center;

`
// const Tenantlogo= styled.div`
// text-transform:uppercase;
// color:white;
// margin-left:1rem;
// font-weight:bold;

// `
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
// Here is some content from the drop xDownloadOptions, 
//  const Dropdownmenu= styled.div` 
//  padding:0rem;

// `

const Submenuwrap= styled(Link)`
    display:flex;
    color:white;
    text-decoration:none;
    padding:0.5rem 0; 
    justify-content:space-between;
    align-items:center;
    &:hover{
      background-color:blue;
      margin-left:0.5rem;
      transition:0.5s;
    }
    margin-right:2rem;
`
const Span=styled.span`
margin-left: 1rem;
font-size:1.5rem;

`
const Sidebarlebel= styled.span`
margin-left:1rem;
font-size:1.2rem;

`

// const Dropicon= styled.div`
// margin-left:2rem;
// `

const Eachdropdowndiv= styled(Link)` 
  text-decoration:none;
  color:Violet;
  display:flex;
  margin-left:1.5rem;
  justify-content:space-between;
  align-items:center;
  font-size:1.15rem;
  padding:0.5rem 3rem 0.5rem 2rem; 
  ` 

const Dropdownmenu= styled.div` 
  padding:0rem;



`

const Dropdownspan= styled.span` 

` 
const Dropdownsidebarlebel= styled.span` 

` 
  
const Sidebar = () => {
  const [sidebar, setSidebar ]= useState(false);
    
  const [sub, setSub]= useState(false)
  const [submenu, setSubmenu]= useState()
  
  // const [hidesubmenu, sethidesubmenu ]= useState(true);

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

    // const handlesubmenu=()=>{
    //  sethidesubmenu(!hidesubmenu)
    //   console.log( hidesubmenu);
    // }
  
    const handleSub= (id)=>{

      if(id===submenu){
        setSub(!sub);
      } 
      else{
        setSub(true)
      }
      // handlehideSubmenu(number)
      // console.log(sub);
    }

    const showSubmenu= (number)=>{
      handleSub(number)
      // handlehideSubmenu(number)
      console.log(submenu)
        setSubmenu(number)

      
    }

  // console.log("here is the accutal boolean value" + showProfile)
  // console.log(getCurrentUser)
    const logedin=JSON.parse(localStorage.getItem("user"))
    // console.log(logedin);
  

    var name;
    if(logedin===null){
      console.log("No Cashed cookies")
    } 
    else{
      var email = logedin.data.email;
      // console.log("this is the email" + email)
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
    <Nav sidebar={sidebar? 1: 0}>
     
      <Navigation>
     
        <Logodiv>
          <Logo>
          <img style={{height:"51px", width:'100%'}} src={logo} alt="Logo Goes Here" /> 

          </Logo>
        </Logodiv>
              
        <Navdiv>
          <Naviconburger to='#' onClick={showSidebar} sidebar={sidebar? 1:0}>
              {sidebar?   <VscMenu /> :<MdIcons.MdOutlineClose />}
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
    <SidebarNav sidebar={sidebar? 1: 0}>         
          {Sidebardata.map((menu,index) => {
            // return <Submenu key={index} menu={menu} number={index} to="#"/       
          return (
              <div key={index}>
                <Submenuwrap  onClick={()=>{showSubmenu(index)}} sub={sub?1:0} to={!menu.submenu && menu.path}>
                {/* showSubmenu */}
                  <div>
                    <Span >{menu.icon} </Span>
                    <Sidebarlebel>{menu.title}</Sidebarlebel>
                  </div>
                  <Dropicon>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                    {submenu ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }
                  </Dropicon>
               </Submenuwrap> 
               
                {(submenu===index && menu.submenu && sub) && menu.submenu.map((dropdownmenu, index) =>  {
                      return(                      
                        <Dropdownmenu dropdownmenu={dropdownmenu} key={index+ 5} >
                          <Eachdropdowndiv to={dropdownmenu.path} >
                            <div>                          
                            <Dropdownspan >{dropdownmenu.icon} </Dropdownspan>
                            <Dropdownsidebarlebel>{dropdownmenu.title}</Dropdownsidebarlebel>
                            </div>
                          </Eachdropdowndiv>
                        </Dropdownmenu> 
                      )             
                  })
                  
                    
                    
              })
              
              
            </div>
            )
          })}   
        {/* <Barcontent>        </Barcontent> */}
    </SidebarNav>
    <Scroll sidebar={sidebar? 1: 0} onClick={showSidebar}>
      <Openscroll to="#">     
        <Link style={{fontSize:"1.2rem", color: "white"}} to="#"> {sidebar ? <MdIcons.MdOutlineArrowForwardIos/> : <MdIcons.MdOutlineArrowBackIosNew/>  }</Link>
    </Openscroll> 
  </Scroll>
      <Switchdiv>
          <Outlet />
      </Switchdiv>                               
    </Nav>
</div>

  
  


    )
};

export default Sidebar;

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
 
import React, {useState, useEffect, createContext, useContext} from "react"
import styled from "styled-components"
import {VscMenu} from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
import Empty from "../Pages/Empty"
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
  display:grid;
  grid-template-columns: ${({sidebar})=> sidebar ? `4% 96% ` : `22.5% 77.5%`} ;
  grid-template-rows:51px  auto ;



`



const Logodiv=styled.div`
font-size:1.5rem;
font-weight:300;
Margin-left:0.35rem;
grid-column: 1/2;
grid-row:  1/2;
text-align:center;
color:indigo;
color:violet;
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
z-index:20;
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
top:${({sidebar})=>sidebar? "51px":"52px"};
width:${({sidebar})=> sidebar ? "3.5%": "21.5%"};
display:grid;
height:90vh;
left:${({sidebar})=> sidebar ? "0": "0"};
background-color:black;
box-sizing:border-box;

::-webkit-scrollbar {
  width: 7.5px;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: black;        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: gray;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */
}
::-webkit-scrollbar-corner {
  background-color: black;    /* color of the scroll thumb */
  // border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */
}
`
const Scroll=styled.div`
background-color:black;
display:flex;
text-align:center;
position:fixed;
left:${({sidebar})=> sidebar ? "3.6%": "21.5%" };
top:0;
z-index:10;
width:10px;
height:97.6vh;
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
color:white;
align-self:center;
border-radius:17%;

`

const Switchdiv= styled.div`
 position:fixed;
 top:51px;
 left:${({sidebar})=> sidebar ? "4%": "22.5%"};
 height:90vh;
 width:${({sidebar})=> sidebar ? "96%": "77.5%"};
 overflow-x:hidden;
 overflow-y:scroll;
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
    right:1.5%;
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
    } 
  `
  const Profilehide = styled.div`
  background-color:blue;
  top:70px;
  
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
    align-items:center;
    box-sizing:border-box;
    margin-right:0rem;
    // background-color:red;
    justify-content:space-between;
    width:${({sidebar})=>sidebar? "100%" : "100%"};
    &:hover {${({sidebar})=>sidebar? `background-color:blue; transition:0.2s;` :`background-color:blue; margin-left:0.2rem;  transition:0.5s;`}}
`
const Span=styled.span`
font-size:1.5rem;
bacground-color:yellow;
margin-left:${({sidebar})=> sidebar ? "1rem": "1.5rem"};

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
box-sizing:border-box;
margin-left:1.5rem;
justify-content:space-between;
align-items:center;
font-size:1.15rem;
padding: 0.7rem 1.5rem 0.7rem 1.5rem;  
&:hover {background-color:blue; padding-left:1.7rem;  transition:0.5s;}
`
const Eachdropdownsmalldiv= styled(Link)` 
text-decoration:none;
color:Violet;
display:flex;
box-sizing:border-box;
margin-left:1.5rem;
justify-content:space-between;
align-items:center;
font-size:1.15rem;
padding: 0.7rem 2rem 0.7rem 2rem;  
&:hover {background-color:green;  padding-left:2.1rem;  transition:0.2s;}
`
const Lebel=styled.div`
font-size:1rem;
align-self:center;
display:flex;
color:white;
background-color:blue;
padding-top:0.3rem;
font-weight:bold;
height:33.5px;
box-sizing:border-box;
vertical-align:center;
`

const Lebele=styled.div`
color:white;
&:hover{background-color:green}
padding:0.5rem 0 0.5rem 0 ;
background-color:black;

`


const Fixed=styled.div`
position:fixed;
z-index:1;
margin-top:-2rem;
left:${({height})=> (height===4)? "5%" : "4.4%"};
box-sizing:border-box;
background-color:black; 
opacity:2;

`
// top:50px;
// if(height===0){"0px"} if(height===1){"0px"} if(height===2){"0"}   if(height===3){"100px"}  if(height===4){"200px"}  if(height===5){"300px"}  if(height===6){"400px"}  if(height===7){"500px"} if(height===8){"600px"}

const Dropdownmenu= styled.div` 

box-sizing:border-box;
box-sizing:border-box;

`


const Dropdownspan= styled.span` 

` 
const Dropdownsidebarlebel= styled.span` 

` 
export const  Sharesidebar=  createContext();
  
const Sidebar = () => {
  const [sidebar, setSidebar ]= useState(false);
  const [height, setHeight]=useState()
  const [sub, setSub]= useState(false)
  const [submenu, setSubmenu]= useState()

   
  // const [hidesubmenu, sethidesubmenu ]= useState(true);

  const [isloggedin, setloggedIn]= useState(false);
  const [showProfile, setshowProfile]= useState(false)

  
  const showSidebar= ()=> {
    setSidebar(!sidebar) 
    // console.log(sidebar)
  } 
    
    const handleshowProfile = ()=> {
      setshowProfile(!showProfile)  
    } 
    
    const hideProfile=()=>{
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
        setSub(!sub)
        
      } 
      else{
        setSub(true);
     
      }
      // handlehideSubmenu(number)
      // console.log(sub);
    }

    const showSubmenu= (number)=>{
      handleSub(number)


      setSubmenu(number)

      if(number===4){
        setHeight(4)
      }else{
        setHeight()
      }
      }
        
        // console.log("here is the accutal boolean value" + showProfile)
      // console.log(getCurrentUser)
      const logedin=JSON.parse(localStorage.getItem("user"))
    // console.log(logedin);
  

    var name;
    var email;
    if(logedin===null){
      // console.log("No Cashed cookies")
    } 
    else{
      email = logedin.data.email;
      // console.log("this is the email" + email)
      name= email.substring(0, email.lastIndexOf("@"))
    }

  useEffect(()=>{
    if(logedin===null){
      // console.log("No Cashed cookies")
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
          {/* <img style={{height:"51px", width:'100%'}} src={logo} alt="Logo Goes Here" />  */}
          Easy Clicks PMS 
          </Logo>
        </Logodiv>
              
        {/* <Navdiv>
          <Naviconburger to='#' onClick={showSidebar} sidebar={sidebar? 1:0}>
              {sidebar?   <VscMenu /> :<MdIcons.MdOutlineClose />}
          </Naviconburger>
        </Navdiv> */}
        {isloggedin ?  
          <Wholeprofile >
            
            <Profile onMouseEnter={handleshowProfile} onMouseLeave={hideProfile}>

                  

                <Profileshow to="#" >

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
    {sidebar?
              <SidebarNav style={{zIndex:"10", backgroundColor:""}} sidebar={sidebar? 1: 0}>        
                          {Sidebardata.map((menu,index) => {
               
                            return (
                                <div  sub={sub?1:0} style={{padding:"0", backgroundColor:""}} key={index}  >
                                  <Submenuwrap  onMouseEnter={()=>{showSubmenu(index)}} key={index}  style={{ }} sidebar={sidebar? 1:0} sub={sub?1:0} to={!menu.submenu && menu.path}>

                                    <Span sidebar={sidebar? 1: 0 } style={{fontSize:""}}>{menu.icon} </Span>

                                  </Submenuwrap> 

                                  <Fixed onMouseLeave={()=>{setSub(false); setHeight()} } height={height}>

                                  {menu.submenu? 

                                  <Lebel style={{}}>                                                                                                                                                                                                           
                                  {(menu.submenu )? (submenu===index && sub) ? <div style={{}}><span> {menu.title}</span> <span>{submenu ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }</span> </div> : null : (submenu===index && sub) && <div style={{}}><Link to={menu.path} style={{textDecoration:'none' }}> {menu.title}</Link> </div>}
                                  </Lebel>  
                                  : 
                                  
                                  <Lebele style={{}}>                                                                                                                                                                                                           
                                  {(menu.submenu )? (submenu===index && sub) ? <div style={{}}><span> {menu.title}</span> <span>{submenu ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }</span> </div> : null : (submenu===index && sub) && <div style={{}}><Link to={menu.path} style={{textDecoration:'none', color:"violet", padding:"0 0.5rem"}}> {menu.title}</Link> </div>}
                                  </Lebele>  
                                  
                                  }

                        
                                    {(submenu===index && menu.submenu && sub) && menu.submenu.map((dropdownmenu, index) =>  { 
                                                
                                            return(
                                                  <Dropdownmenu dropdownmenu={dropdownmenu} style={{   }} key={index} >
                                                        <Eachdropdownsmalldiv to={dropdownmenu.path} style={{ fontSize:"rem", padding:"0.3rem 0.5rem", margin:"0"}}>      
                                                            <Dropdownsidebarlebel style={{ fontSize:"rem" }}>{dropdownmenu.title}</Dropdownsidebarlebel>  
                                                        </Eachdropdownsmalldiv>
                                                        
                                                  </Dropdownmenu> 
                                            )   
                                      })

                                    }
                            
                                  </Fixed>
                                </div>
                            )    
                            })}  
              
              </SidebarNav>


      :
      <SidebarNav sidebar={sidebar? 1: 0}>        

          
      {Sidebardata.map((menu,index) => {
          // return <Submenu key={index} menu={menu} number={index} to="#"/       
        return (
            <div key={index} style={{margin:"0", padding:"0"}}>
              <Submenuwrap sidebar={sidebar? 1:0} onClick={()=>{showSubmenu(index)}} sub={sub?1:0} to={!menu.submenu && menu.path}>
              {/* showSubmenu */}
                <div style={{padding:"0", margin:"0"}}>
                  <Span >{menu.icon} </Span> 
                  <Sidebarlebel>{menu.title}</Sidebarlebel>
                </div>
                <Dropicon>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
                  {(submenu===index && menu.submenu && sub) ? menu.iconOpen: menu.submenu? menu.iconClosed: null   }
                </Dropicon>
             </Submenuwrap> 
              {(submenu===index && menu.submenu && sub) && menu.submenu.map((dropdownmenu, index) =>  {
                    return(                      
                      <Dropdownmenu sidebar={sidebar? 1:0} dropdownmenu={dropdownmenu} key={index+ 5} >
                        <Eachdropdowndiv to={dropdownmenu.path} >
                          <div>                          
                          <Dropdownspan >{dropdownmenu.icon} </Dropdownspan>
                          <Dropdownsidebarlebel>{dropdownmenu.title}</Dropdownsidebarlebel>
                          </div>
                        </Eachdropdowndiv>
                      </Dropdownmenu> 
                    )             
                })    
            }         
          </div>
          )
        })}  

</SidebarNav>
 
      }
    <Scroll sidebar={sidebar? 1: 0} onClick={showSidebar}>
      <Openscroll to="#">     
        <Link style={{fontSize:"1.35rem", color:"white"}} to="#"> {sidebar ? <MdIcons.MdOutlineArrowForwardIos/> : <MdIcons.MdOutlineArrowBackIosNew/>  }</Link>
      </Openscroll> 
    </Scroll>
    <Switchdiv > 
      <Sharesidebar.Provider value={sidebar}>
        <Outlet />
      </Sharesidebar.Provider>    
    </Switchdiv>                                
    </Nav>
</div>

  
  


    )
};

export default Sidebar;

/*


*/
import React, {useState} from "react"
import styled from "styled-components"
import {VscMenu} from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
import Sidebardata from "./Sidebardata"
import { Link, Outlet} from "react-router-dom"
import Submenu from "./Submenu"



const Nav = styled.div`
position:fixed;
top:0;
`
const Navdiv= styled.div`

`
const Navigation = styled.div`
position:fixed;
background-color:black;
display:flex;
align-items:center;  
width:100%;
height:75.5px;
z-index:100;
justify-content:space-between;
`

const Registerdiv=styled.div`
margin-right:5rem;
display:flex;
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
  overflow:scroll;
  background-color:black;
  width:25%;
  top:76.5px;
  transition:0.65s;
  left: ${({sidebar})=> sidebar ? `0 ` : `-100%; `}
  `    

const Sidebar = () => {
    const [sidebar, setSidebar ]= useState(false);

    const showSidebar= ()=> {
      setSidebar(!sidebar) 
    } 

  return(
  <div>
    <Nav>
      <Navigation>
        <Navdiv>
          <Naviconburger to='#' onClick={showSidebar} sidebar={sidebar? 1:0}>
              {sidebar?  <MdIcons.MdOutlineClose /> : <VscMenu />}
          </Naviconburger>
        </Navdiv>
        <Registerdiv>
            <Link to="/signin"><SignIn>SIGN IN</SignIn></Link>
            <Link to="/signup"><SignUp>SIGN UP</SignUp></Link>

        </Registerdiv>
     
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

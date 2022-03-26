/*
import Submenu from "./Submenu"
   const {dropDown, setshowDropDown} = ()=> useState(false)
   
   const showDropDown= () => setshowDropDown(!dropDown)





            const changetoDropDown = ()=>{
      setDropMenu(!dropmenu)
      console.log(`drop down has been clicked therefore  is now  ${dropmenu}`)
    }
    const [dropmenu, setDropMenu]= useState(true);
    
    //display:${({submenudropdown})=>submenudropdown?`none`:`block`}
    //display:${({dropMenu})=>dropMenu?`block`:`block`}
   // console.log(`Before drop down is clicked it's a ${dropMenu}`)


<Login />
import Login from "./Login"




import Login from "./Login"
*/
import React, {useState} from "react"
import styled from "styled-components"
import {VscMenu} from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
import Sidebardata from "./Sidebardata"
import { Link} from "react-router-dom"

const Nav = styled.div`
background:black; 

`

const Navigation = styled.div`
display:flex;
align-items:center;  
width:100%;
background-color:black;
z-index:100;
justify-content:space-between;
position:fixed;
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
  display: ${({sidebar})=>sidebar?  `none; `:`block; `}
 
` 
 

  const Naviconcancel= styled(Link)`
  list-style:none;
  padding:0.5rem;
  font-size:3rem;
  color:violet;
  text-decoration:none;
  display: ${({sidebar})=>sidebar? `block; `:`none; `}
  
`

const SidebarNav= styled.div`
  height:100vh;
  position:fixed;
  top:75.5px;
  overflow:scroll;
  background-color:black;
  width:23%;
  display: ${({sidebar})=>sidebar? ` block; ` : `none; `}
  overflow: ${({sidebar})=>sidebar? ` scroll; ` : `scroll; `}
`    


  const SidebarWrap = styled.div`
  color:white;
  display:block;

`  

  const Submenu = styled.div` 


  `
  
  const Submenuwrap = styled(Link)` 
  text-decoration:none;
 

  `
  const Sidebarlebel = styled.span`
  font-size:1.2rem;
  text-decoration:none;
  color:white;
  margin-left:0.5rem;
  
  `

  const menuicon={
  
  }
 const Span= styled.span`
    color:white;
    font-size:1.4rem;


 `
 const Sidearrow= styled.div`
    font-size:1.2rem;
    margin:0.5rem  1.5rem 0 0;
    color:white;
    `
const Eachmenudiv=styled.div`
display:flex;
justify-content:space-between;
color:green;
align-items:center;

`

const Dropdownmenu= styled.div` 
  padding:0rem;
  margin:0rem;
` 
const Eachdropdowndiv= styled(Link)` 
  text-decoration:none;
  color:Violet;
  display:flex;
  padding:0.5rem 3rem 0.5rem 2rem; 
  margin:0rem;
  justify-content:space-between;
  align-items:center;
  
  ` 
const Dropdownspan= styled.span` 

` 
const Dropdownsidebarlebel= styled.span` 

` 
const Dropdowndownarrow= styled.span` 

` 


const Sidebar = () => {
    const [sidebar, setSidebar ]= useState(false);

    const showSidebar= ()=> {
      setSidebar(!sidebar) 
    } 
    

    
    const [submenudropdown, setSubMenuDropDown]=useState(false);

    const ChangetoSubmenuDropDown=()=>{
      setSubMenuDropDown(!submenudropdown)
    }
  return(
  
    <Nav>
      <Navigation>
        <div>
          <Naviconburger to='#' onClick={showSidebar} sidebar={sidebar? 1:0}>
              <VscMenu />
          </Naviconburger>
          <Naviconcancel to='#'  onClick={showSidebar} sidebar={sidebar? 1:0} >
              <MdIcons.MdOutlineClose />
          </Naviconcancel>
        </div>
        <Registerdiv>
            <Link to="/signin"><SignIn>SIGN IN</SignIn></Link>
            <Link to="/signup"><SignUp>SIGN UP</SignUp></Link>

        </Registerdiv>
     
      </Navigation>
      <SidebarNav sidebar={sidebar? 1 :0}>

        <SidebarWrap >
            {Sidebardata.map((menu,index) => { 

              return ( 
                <Submenu key={index} menu={menu} >
                    <Submenuwrap to="#">
                     <Eachmenudiv submenudropdown={submenudropdown} to={menu.path} onClick={ChangetoSubmenuDropDown} >
                        <div >                          
                          <Span className={menuicon}>{menu.icon} </Span>
                          <Sidebarlebel>{menu.title}</Sidebarlebel>
                        </div>
                        {submenudropdown? <Sidearrow>{menu.iconOpen}</Sidearrow> : <Sidearrow>{menu.iconClosed}</Sidearrow>}
                      </Eachmenudiv>
                     
                  </Submenuwrap> 

                  {submenudropdown && menu.submenu.map((dropdownmenu, index) =>  { 
                  
                    return(
                      <Dropdownmenu key={index} >
                        <Eachdropdowndiv to={dropdownmenu.path} >
                          <div>                          
                          <Dropdownspan >{dropdownmenu.icon} </Dropdownspan>
                          <Dropdownsidebarlebel>{dropdownmenu.title}</Dropdownsidebarlebel>
                          </div>
                          
                          <Dropdowndownarrow>{}</Dropdowndownarrow>
                        
                        </Eachdropdowndiv>
                      </Dropdownmenu> 

                    )
                      
                  })}

                </Submenu>
              )
            }

            ) 
                
            }
        </SidebarWrap>
     
      </SidebarNav>
    </Nav>
      
  
  


    )
};

export default Sidebar;

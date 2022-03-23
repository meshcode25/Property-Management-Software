/*
import Submenu from "./Submenu"
   const {dropDown, setshowDropDown} = ()=> useState(false)

            const showDropDown= () => setshowDropDown(!dropDown)

*/

import React, {useState} from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
import {VscMenu} from "react-icons/vsc"
import * as MdIcons from "react-icons/md"
import Sidebardata from "./Sidebardata"



const Navigation = styled.div`
width:100%;
background:blue;

`
const Nav = styled.div`
background-color:black;
  
`
const Naviconburger= styled(Link)` 
  list-style:none;
  padding:0.5rem;
  color:violet;
  font-size:3rem;
  text-decoration:none; 
  display: ${({sidebar})=>sidebar?
  `
  none;
  `
  :
  `
  block;
  `
  
  }
 
`  

  const Naviconcancel= styled(Link)`
  list-style:none;
  padding:0.5rem;
  font-size:3rem;
  color:violet;
  text-decoration:none;
  display: ${({sidebar})=>sidebar?
  `
  block;
  `
  :
  `
  none;
  `
}
`

const SidebarNav= styled.div`
  heigth:100vh;
  position:absolute;
  background-color:black;
  top:75.5px;
  width:25%;
  
  display: ${({sidebar})=>sidebar?
  `
  block;
  `
  :
  `
  none;
  `
  
}
`    


  const SidebarWrap = styled.div`
  color:white;
  display:block;
  width:100%;
  :

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
display:${({dropMenu})=>dropMenu?
`
block;
`
:
`
block;
`

}
display:flex;
  justify-content:space-between;
  align-items:center;
`
  
const Dropdownmenu= styled.div` 
  margin:0rem;
  padding:0rem;
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
  //display:${({submenudropdown})=>submenudropdown?`none`:`block`}
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
    

    const [dropmenu, setDropMenu]= useState(false);

   // console.log(`Before drop down is clicked it's a ${dropMenu}`)
    const changetoDropDown = ()=>{
      setDropMenu(!dropmenu)
      console.log(`drop down has been clicked therefore  is now  ${dropmenu}`)
    }

    const [submenudropdown, setSubMenuDropDown]=useState(false)
    const ChangetoSubmenuDropDown=()=>{
      setSubMenuDropDown(!submenudropdown)

    }
  return(
    <Navigation>
      <Nav>
        <div/>
          <Naviconburger to='#' onClick={showSidebar}  sidebar={sidebar} >
              <VscMenu />
          </Naviconburger>
          <Naviconcancel to='#'  onClick={showSidebar} sidebar={sidebar}>
              <MdIcons.MdOutlineClose />
          </Naviconcancel>
        <div/>

     
      </Nav>
      <SidebarNav sidebar={sidebar}>
        <SidebarWrap>
         
          {Sidebardata.map((menu,index) => {

         

              return ( 
                <Submenu key={index} menu={menu} >
                    <Submenuwrap to="#">
                      <Eachmenudiv dropmenu={dropmenu} to={menu.path} onClick={changetoDropDown} >
                        <div >                          
                          <Span className={menuicon}>{menu.icon} </Span>
                          <Sidebarlebel>{menu.title}</Sidebarlebel>
                        </div>
                        {dropmenu? <Sidearrow>{menu.iconOpen}</Sidearrow> : <Sidearrow>{menu.iconClosed}</Sidearrow>}
                      </Eachmenudiv>
                  </Submenuwrap> 
        
                  {menu.submenu.map((dropdownmenu, index) => {

                    return(
                      <Dropdownmenu   key={index} >
                        <Eachdropdowndiv to={dropdownmenu.path} submenudropdown= {submenudropdown} onClick={ChangetoSubmenuDropDown}>
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
          )}
        </SidebarWrap>
      </SidebarNav>
    </Navigation>
    )
};

export default Sidebar;

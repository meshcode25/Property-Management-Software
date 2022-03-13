/*
import Submenu from "./Submenu"
*/
import React, {useState} from "react"
import styled from "styled-components"
import {Link} from "react-router-dom"
import {VscMenu} from "react-icons/vsc"
import {MdOutlineClose} from "react-icons/md"
import Sidebardata from "./Sidebardata"


const Navigation = styled.div `
  height:100vh;
  display:flex;
  justify-content:space-around;
  align-items:center;
  width:100%;

`
const Nav = styled.div`
  background:blue;
  
`
const NavIcon= styled(Link)`
  font-size:3rem;
  list-style:none;
  text-decoration:none;

`  

const SidebarNav= styled.div`
background:green;
color:white;
padding:2rem;
margin:2rem auto; 
width: 500px;
`  

const SidebarWrap = styled.div`
  color:white;
  display:block;
  height:100vh;
  width:2000px;
  background-color:violet;
`  
const DIV= styled.div`
  background-color:green;
  color:white;
  padding:2rem;
  list-style:none;
  text-decoration:none;
  margin:2rem auto; 
  width: 500px;
`
  const Submenu = styled.div` 
  `
  
  const Submenuwrap = styled(Link)` 
  height:1rem;
  padding:0.4rem;
  margin:10px 0;
  `
  const Sidebarlebel = styled.text`
  font-size:1.5rem;
  font-decoration:none;
  color:black;
  margin-left:0.5rem;
  `
  
  const Span=style.h5`
  font-size:rem;
  color:black;
  `
  


const Sidebar = () => {
  const {s`124idebar, setSidebar} = () => useState(false);

  const showSidebar= () => setSidebar(!sidebar);

  return(
    <Navigation>
      <Nav>
        <NavIcon to='#'>
          <VscMenu onClick={showSidebar}/>
          <DIV>Why is this shit not working again</DIV>
        </NavIcon>
      </Nav>
      <SidebarNav >
        <SidebarWrap>
          <NavIcon to='#'>
            <MdOutlineClose sidebar={sidebar}/>
          </NavIcon>
          <div>Oh!!! My God, finally some light at the end of the tunnel</div>
              
          {Sidebardata.map((menu,index) => {
              return ( 
              <Submenu key={index} menu={menu} >
              <Submenuwrap to={menu.path}>
              <div>
                <Span >{menu.icon} </Span>
                <Sidebarlebel>{menu.title}</Sidebarlebel>
              </div>
            </Submenuwrap> 
            </Submenu>
          ) 235678
      </SidebarNav>
    </Navigation>
    )
};

    
    


export default Sidebar;

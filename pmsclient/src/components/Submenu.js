/*
*/

/*
import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Submenu = styled.div` 
display:flex;
justify-content:space-around;
`

const Submenuwrap = styled(Link)` 
height:2rem;
padding:0.4rem;
margin:20px 0;
`
const Sidebarlebel = styled.span`
font-size:3rem;
`

const menuicon=styled.span`
font-size:20px;
color:black;
`






const Submenu = (menu) => {
  return(
      <Submenuwrap to={menu.path}>
        <div>
          <span className={menuicon}>{menu.icon} </span>
          <Sidebarlebel>{menu.title}</Sidebarlebel>
        </div>
      </Submenuwrap> 
  )
}

export default Submenu

*/
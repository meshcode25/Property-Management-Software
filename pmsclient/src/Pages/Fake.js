import React from 'react'
import styled from "styled-components"



const Div= styled.div`
    width:200px;
    height:200px;
    background-color:green;
    color:white;
    font-size:3rem;
    text-align:center;
    margin:200px auto;
`
export const Fake = () => {

    
   
   
   
    return (
        <Div>
        <div style={{position: "absolute", width: "50", bottom: "10px", left: "0", right: "0", marginLeft: "auto", marginRight: "auto" , color: "#000", textAlign: "center", }}>
            <iframe style={{frameborder:"0", scrolling:"yes" , marginheight:"0", marginwidth:"0", width:"700px" , height:"440px"}} src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=London%2C%20United%20Kingdom+(Easy%20Clicks%20Map)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed"></iframe>

        </div>
        </Div>
    )
}




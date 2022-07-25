import React from 'react'
import styled from "styled-components"



// const logo= require ("./easy4.png")
const image= require ("../components/PRESTASHOP12.png")

const Div= styled.div`
    margin:3rem;
    color:white;
    font-size:3rem;
    text-align:center;
    background-image:url(${image});
    height:76.40vh;
    width:700px;
    background-color:green;
    background-postion:center;
    background-repeat:no-repeat;
    bacground-size:cover;
`
export const Fake = () => {

    return (
        <Div>
            <div style={{width:"300px", height:"450px", margin:"2rem auto", backgroundColor:"yellow"}}>
                <iframe style={{frameborder:"0", scrolling:"yes" , marginheight:"0", marginwidth:"0"}} src="https://maps.google.com/maps?width=1400&amp;height=940&amp;hl=en&amp;q=London%2C%20United%20Kingdom+(Easy%20Clicks%20Map)&amp;ie=UTF8&amp;t=&amp;z=18&amp;iwloc=B&amp;output=embed"></iframe>
            </div>

        
        </Div>
    )
}




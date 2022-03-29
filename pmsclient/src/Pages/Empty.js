import React from 'react'


import styled from "styled-components"



const Div= styled.div`
    width:500px;
    height:400px;
    background-color:red;
    color:white;
    font-size:3rem;
    text-align:start;
    padding-left:2rem;
    margin:100px auto;
    padding-top:1rem;
` 

function Empty() {
  return (
    <Div> This is simply for testing routers purposes, When specific parent is clicked show this index page</Div>
  )
}

export default Empty
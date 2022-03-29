import React from 'react'

import styled from "styled-components"

const Div= styled.div`
    width:200px;
    height:200px;
    font-size:4rem;
    background-color:blue;
    color:white;
    text-align:center;
    margin:200px auto;
`
function Test() {
  return (
    <Div>Test</Div>
  )
}

export default Test
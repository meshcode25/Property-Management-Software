import React, {useState, useContext,useRef, useEffect} from 'react'
import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import styled from "styled-components"
import {Sharesidebar} from "../components/Sidebar"
import Form from "react-validation/build/form"
import CheckButton from "react-validation/build/button"
import {Fake} from "./Fake"


const Listpropdiv=styled.div`
height:${({sidebar})=> sidebar ? "90%": "89.5%" };
position:fixed;
left:${({sidebar})=> sidebar ? "4.5%": "22.5%" };
top:52px;
overflow:scroll;
overflow-x:hidden;
width:${({sidebar})=> sidebar ? "95.5%": "77.5%" };
`

const ListHeader=styled.div`
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
width:100%;
padding:0.5rem;
margin:0 auto;
`
const Headertitle=styled.div`
width:90%;
margin:0 auto;
font-size:${({sidebar})=> sidebar ? "1.7rem": "1.7rem" };
font-weight:${({sidebar})=> sidebar ? "600": "600" };
`
const Labelpara=styled.div`

`
const Progressbar =styled.div`
background-color:#F5F5F5;
height:10px;
border-radius:3px;
width:${({sidebar})=> sidebar ? "50%": "60%" };
margin:1rem auto;
`

const Listbody=styled.div `
margin:auto;
width:100%;
`

const Listfooter=styled(Link)`
text-decoration:none;
padding:0.5rem;
background-color:${({disabled})=> disabled ? "#F5F5F5": "blue" };
font-weight:${({sidebar})=> sidebar ? "600": "600" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
color:${({disabled})=> disabled ? "blue": "white" };
width:68%;
margin:0.5rem 30%;  
border-radius:6px;
border:none;
&:hover{
  cursor:pointer;
}

`

const Propertycontainer=styled.div`
max-width:350px;
margin:0 auto;

`
const Propertytypediv=styled.div`

 
`
const Roomslabel=styled.div`
 font-weight:800;

`
const Proptyp =styled(Link)`
box-sizing:border-box;
text-decoration:none;
flex-wrap:wrap;
color:black;
margin:1rem;
display:block;
font-weight:600;
width:100%;
background-color:${({color, number})=>(color===number) ? "orange": "#F8F8F8" };
border:3px solid white;
// background-color:yellow;
padding:1rem 1rem;

:hover{
border:3px solid blue;  
}

`

function Addpropstep1 (){

  const chosen=JSON.parse(localStorage.getItem("proptyp"))
  // console.log(chosen)
  let selected="";

  if(chosen===null){

     selected="";
  }
  else{
     selected=chosen.saved.number;
  }

 

    const side=useContext(Sharesidebar);
    const form=useRef();
    const checkbtn=useRef();
    const [color, setColor]=useState(selected);
    const [proptype, setProptype]=useState(false);
    const [disabled, setDisabled]=useState(true)
    const [path, setPath]=useState("#");



  useEffect(()=>{

    if (selected!==""){
      console.log("here is the first load and the disableds is  "+ disabled)
      setDisabled(false);
      setPath("/properties/list-property/step2");

    }
    else{
      console.log("oh fuck the shit is empty")
    }
  },[])


  useEffect(()=>{
    console.log(proptype);
    console.log(color)
  }, [proptype, color])


  const bgColorChange =(value)=>{
    setColor(value);
    setDisabled(false)
    setPath("/properties/list-property/step2");
  }


  const alllinks=[
    {
      value:"bedsitter",
      label:"Bedsitter",
      
    },
    
    
    {
      value: "house/bangalow",
      label:"House/Bangalow"

    },

    {
      value:"apartment/flat",
      label:"Apartment/Flat"

    },

    {
      value:"townhouse",
      label:"Townhouse",

    },

    {
      value:"warehouse",
      label:"Warehouse",

    },

    {
      value:"offices",
      label:"Offices",

    },
    {
      value:"commericialproperty",
      label:"Commercial Property",

    },{
      value:"villa",
      label:"Villa",

    },{
      value:"shop",
      label:"Shop",

    }
  ];

  const saveDraft=()=>{
    if(!disabled){
      const saved={
        "prop":proptype,
        "number":color,
      }
        
      localStorage.setItem("proptyp", JSON.stringify({saved}))
    
      console.log("I think itäs working")
      console.log(JSON.parse(localStorage.getItem("proptyp")))       
    }
} 


    return (
        <Listpropdiv  sidebar={side? 1:0} >

            <ListHeader sidebar={side?1:0}>
                <Headertitle sidebar={side?1:0}>List new property</Headertitle>
            </ListHeader>
           
            <Listbody  sidebar={side? 1:0}>
                  <Progressbar sidebar={side?1:0}></Progressbar>
                
                  <Propertycontainer>

                      <Form method="" ref={form} >           
                          <Propertytypediv >

                            <Roomslabel>Select Your Property Type:</ Roomslabel >
                            <Labelpara>Which option best describes your property type?</Labelpara>

                              {alllinks.map((link, index)=>{
                              
                              return(
                                <Proptyp  color={color} number={index} onClick={()=>{setProptype(link.value); bgColorChange(index)} } to="#"  key={index}>{link.label}</Proptyp>    
                              )})} 
                          </Propertytypediv>
                          
                          <div style={{}}>
                            <Listfooter to={path}  onClick={saveDraft} disabled={disabled? 1:0}>Next Step</Listfooter> 
                            <CheckButton style={{display:"none"}} ref={checkbtn}/>
                          </div>
                      </Form>  
                  </Propertycontainer>                      
            </Listbody>
        </Listpropdiv>    
    )
}

export default Addpropstep1
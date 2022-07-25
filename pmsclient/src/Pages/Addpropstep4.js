import React, {useState, useContext,useRef, useEffect} from 'react'
// import {BrowserRouter as Link} from "react-router-dom"
import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import styled from "styled-components"
import {Sharesidebar} from "../components/Sidebar"
import Form from "react-validation/build/form"
// import CheckButton from "react-validation/build/button"
// import {Fake} from "./Fake"


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

const Backbutton=styled(Link)`
background-color:#F5F5F5;
text-decoration:none;
font-weight:${({sidebar})=> sidebar ? "600": "600" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
margin:1rem 30% 1rem 2rem;  
border-radius:6.79px;
border:none;
padding:${({sidebar})=> sidebar ? "0.5rem": "0.5rem" };
color:blue;
&:hover{
  cursor:pointer;
  padding:0.5rem;
  color:white;
  background-color:blue;
}

`
const Nextbutton=styled(Link)`
text-decoration:none;
padding:0.5rem;
background-color:${({disabled})=> disabled ? "#F5F5F5": "blue" };
font-weight:${({sidebar})=> sidebar ? "600": "600" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
color:${({disabled})=> disabled ? "blue": "white" };
margin:1rem;
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
const Listingpurposediv=styled.div`

 
`
const Label=styled.div`
 font-weight:800;

 `
 const Internalfeaturesdiv =styled(Link)`
 box-sizing:border-box;
 text-decoration:none;
 flex-wrap:wrap;
color:black;
margin:1rem;
display:block;
font-weight:600;
width:100%;
background-color:${({color, number})=>(color.includes(number)) ? "orange": "#F8F8F8" };
border:3px solid white;
// background-color:yellow;
padding:1rem 1rem;

:hover{
border:3px solid blue;  
}

`
let clicked=[];
let include;
let colorarray=[];
let includedincolorarray;

function Addpropstep4 (){
  
  let selectedfeatures;
  let selectedindex;
  
  let chosen=JSON.parse(localStorage.getItem("externalfeatures"));

  localStorage.removeItem("externalfeatures")

      if(chosen===null){
        selectedfeatures=[];
        selectedindex=[];
      }
      else{
        selectedfeatures=chosen.saved.prop;
        selectedindex=chosen.saved.number;
      }
      


      const side=useContext(Sharesidebar);
      const form=useRef();
      // const checkbtn=useRef();
      const [color, setColor]=useState(selectedindex);
      const [externalfeatures, setExternalfeatures]=useState(selectedfeatures);
      const [disabled, setDisabled]=useState(true)
      const [path, setPath]=useState("#");



   
      useEffect(()=>{
        if (colorarray.length!==0){
          
          setDisabled(false);
          setPath("/properties/list-property/step5");
  
        }else{
          setDisabled(true);
          setPath("#")
  
        }
      },[])
  
        useEffect(()=>{
          console.log(externalfeatures);
          console.log(color);
  
          if(colorarray.length===0){
            setDisabled(true);
            setPath("#")
            console.log("there is nothing in the box to show")
          }else{
            console.log("the box is FULL OF SHIT")
            setDisabled(false);
            setPath("/properties/list-property/step5");
  
          }
          
        }, [externalfeatures, color])

    const bgColorChange =(index)=>{

      includedincolorarray=colorarray.includes(index);
      // || includedincolorarray.length===0
      if(include===false)  {
        colorarray.push(index);
        setColor([...color, index]);
        setDisabled(false);
        setPath("/properties/list-property/step5");
        
      }else{
        let updatedcolorarray=colorarray.filter(remain => remain!==index);
        colorarray=updatedcolorarray;
        let updatedcolor=color.filter(remain => remain!==index);
        setColor(updatedcolor); 
        }


    }

    const alllinks=[
        { value: 'balcony', label:"  Balcony"},        
        { value: 'bbq', label:"BBQ"},             
        { value: 'electricfence', label:"Electric Fence"},
        { value: 'cctv', label:"CCTV"},
        { value: 'borehole', label:"Borehole"},
        { value: 'garden', label:"Garden"},
        { value: 'parking', label: "Parking"},                
        { value: 'staffquaters', label:"Staff Quarters"},
        { value: 'swimmingpool', label:"Swimming Pool"},
        { value: 'wheelchairaccess', label:"Wheelchair Access"},
        { value: 'gym', label:"GYM"},
        { value: 'garden', label:"Garden"}
      
    ];

    const handleClick=(index, value)=>{
      include=clicked.includes(index);
      // console.log(include);

      if(include===false){
        clicked.push(index);
        setExternalfeatures([...externalfeatures, value]);
        
      }else{
        let updatedclicked=clicked.filter(remain => remain!==index);
        clicked=updatedclicked;
        let newfeatures=externalfeatures.filter(remain=> remain!==value);
        setExternalfeatures(newfeatures);
        }
    }
    console.log("these are the clicked features's indexes for clicked " + clicked);
    console.log("these are the clicked color array indexes " + colorarray);

    const saveDraft=()=>{
      if(!disabled){
        const saved={
          "prop":externalfeatures,
          "number":color,
        }
          
        localStorage.setItem("externalfeatures", JSON.stringify({saved}))
      
        console.log("Die zweite vierte ist funktioneiren, es ist fur Liste Zweck ")
        console.log(JSON.parse(localStorage.getItem("externalfeatures")))       
      }
  } 

      const saveBack=()=>{
        console.log("save the features on click back  HEY HEY DDID YOU DO WHAT WE  AGREED" )
        const saved={
          "prop":externalfeatures,
          "number":color,
        }
          
        localStorage.setItem("externalfeatures", JSON.stringify({saved}))
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
                            <Listingpurposediv >

                              <Label>Property/ Apartment Features :</ Label>
                              <Labelpara>Select all Features of the Apartment/ Property</Labelpara>

                                {alllinks.map((link, index)=>{
                                
                                return(
                                  <Internalfeaturesdiv  color={color} number={index} onClick={()=>{handleClick(index, link.value); bgColorChange(index)} } to="#"  key={index}>{link.label}</Internalfeaturesdiv>    
                                )})} 
                            </Listingpurposediv>
                            
                            <div style={{ width:"100%", margin:"1rem 0rem 1rem 1rem"}}>
                              <Backbutton to="/properties/list-property/step3" onClick={saveBack} sidebar={side? 1:0}>Back</Backbutton>  
                              <Nextbutton to={path}  onClick={saveDraft} disabled={disabled? 1:0}>Next Step</Nextbutton> 
                              {/* <CheckButton style={{display:"none"}} ref={checkbtn}/> */}
                            </div>
                        </Form>  
                    </Propertycontainer>                      
              </Listbody>
          </Listpropdiv>    
      )
  }

export default Addpropstep4
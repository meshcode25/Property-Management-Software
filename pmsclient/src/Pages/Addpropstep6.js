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
  padding:0.55rem;
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

function Addpropstep6 (){
  
  let selectedfeatures;
  let selectedindex;
  
  let chosen=JSON.parse(localStorage.getItem("roomsperunit"));

  localStorage.removeItem("roomsperunit")

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
      const [roomsperunit, setRoomsperunit]=useState(selectedfeatures);
      const [disabled, setDisabled]=useState(true)
      const [path, setPath]=useState("#");



      useEffect(()=>{
        if (colorarray.length!==0){
          
          setDisabled(false);
          setPath("/properties/list-property/step7");
  
        }else{
          setDisabled(true);
          setPath("#")
  
        }
      },[])
  
        useEffect(()=>{
          console.log(roomsperunit);
          console.log(color);
  
          if(colorarray.length===0){
            setDisabled(true);
            setPath("#")
            console.log("there is nothing in the box to show")
          }else{
            console.log("the box is FULL OF SHIT")
            setDisabled(false);
            setPath("/properties/list-property/step7");
  
          }
          
        }, [roomsperunit, color])




    const bgColorChange =(index)=>{

      includedincolorarray=colorarray.includes(index);
      // || includedincolorarray.length===0
      if(include===false)  {
        colorarray.push(index);
        setColor([...color, index]);
        setDisabled(false);
        setPath("/properties/list-property/step7");
        
      }else{
        let updatedcolorarray=colorarray.filter(remain => remain!==index);
        colorarray=updatedcolorarray;
        let updatedcolor=color.filter(remain => remain!==index);
        setColor(updatedcolor); 
        }


    }

    const alllinks=[
        { value:  "bedsitters", label:  'Bedsitters'  },   
        { value:  "1bedroom" ,  label:   "1 Bedroom"    },        
        { value:  "2bedrooms" , label:  '2 Bedrooms'  },             
        { value:  "3bedrooms",  label:  '3 Bedrooms'  },
        { value:  "4bedrooms" , label:  '4 Bedrooms'  },
        { value:  "5bedrooms",  label:  '5 Bedrooms'  },
        { value:  "6bedrooms",  label:  '6 Bedrooms'  },
        { value:   "7bedrooms", label:  '7 Bedrooms'  },                
        { value:  "8bedrooms",  label:  "8 Bedrooms"  },
        { value:   "8bedrooms", label:   '8+ Bedrooms' },
    ];

    const handleClick=(index, value)=>{
      include=clicked.includes(index);
      // console.log(include);

      if(include===false){
        clicked.push(index);
        setRoomsperunit([...roomsperunit, value]);
        
      }else{
        let updatedclicked=clicked.filter(remain => remain!==index);
        clicked=updatedclicked;
        let newfeatures=roomsperunit.filter(remain=> remain!==value);
        setRoomsperunit(newfeatures);
        }
    }
    console.log("these are the clicked OUtside features's for step5 indexes for clicked " + clicked);
    console.log("these are the clicked outside featrues for step5 color array indexes " + colorarray);

    const saveDraft=()=>{
      if(!disabled){
        const saved={
          "prop":roomsperunit,
          "number":color,
        }
          
        localStorage.setItem("roomsperunit", JSON.stringify({saved}))
      
        console.log("Die funfte schrittist funktioneiren, es ist fur Liste Zweck ")
        console.log(JSON.parse(localStorage.getItem("roomsperunit")))       
      }
  } 

  const saveBack=()=>{
    console.log("save the features on click back  HEY HEY DDID YOU DO WHAT WE  AGREED" )
    const saved={
      "prop":roomsperunit,
      "number":color,
    }
      
    localStorage.setItem("roomsperunit", JSON.stringify({saved}))
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

                              <Label>Property/ Apartment Units :</ Label>
                              <Labelpara>Select Number of Rooms per Unit in the Apartment</Labelpara>

                                {alllinks.map((link, index)=>{
                                
                                return(
                                  <Internalfeaturesdiv  color={color} number={index} onClick={()=>{handleClick(index, link.value); bgColorChange(index)} } to="#"  key={index}>{link.label}</Internalfeaturesdiv>    
                                )})} 
                            </Listingpurposediv>
                            
                            <div style={{ width:"100%", margin:"1rem 0rem 1rem 1rem"}}>
                              <Backbutton to="/properties/list-property/step5" onClick={saveBack} sidebar={side? 1:0}>Back</Backbutton>  
                              <Nextbutton to={path}  onClick={saveDraft} disabled={disabled? 1:0 }>Next Step</Nextbutton> 
                              {/* <CheckButton style={{display:"none"}} ref={checkbtn}/> */}
                            </div>
                        </Form>  
                    </Propertycontainer>                      
              </Listbody>
          </Listpropdiv>    
      )
  }

export default Addpropstep6
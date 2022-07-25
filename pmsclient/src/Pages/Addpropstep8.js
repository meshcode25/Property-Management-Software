import React, {useState, useContext,useRef, useEffect} from 'react'
// import multer from "multer"
import {BrowserRouter as Router, Routes,Route, Link, Outlet, NavLink} from "react-router-dom"
import styled from "styled-components";
import {Sharesidebar} from "../components/Sidebar";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { urlValidate } from 'express-validators';
import * as MdIcons from "react-icons/md"


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
const Button=styled.button`
text-decoration:none;
padding:0.5rem;
background-color:${({disableed})=> disableed ? "#F5F5F5": "blue" };
font-weight:${({sidebar})=> sidebar ? "600": "600" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "1.2rem" };
color:${({disableed})=> disableed ? "blue": "white" };
margin:1rem;
border-radius:6px;
border:none;
&:hover{
    cursor:pointer;
}

`

const Propertycontainer=styled.div`
width:90%;
margin:0 auto;

`
const Listingpurposediv=styled.div`

`


const Nameofproperty =styled.div`
margin:2rem 0 2rem 1.5rem ;
// padding:0.5rem;
`
const Totalnoofunitsdiv= styled.div`
margin:2rem 0 2rem 1.5rem ;
// padding:0.5rem;


`               
const Numberofunitsavailable=styled.div`
margin:2rem 0 2rem 1.5rem ;
// padding:0.5rem;

`
        

const Label=styled.div`
font-weight:800;


`
const Imagesdiv=styled.div` 
display:flex;
justify-content:space-around;
align-items:center;
wrap-direction:row;
flex-wrap:wrap;


`
const Imagesdiv2=styled.div`
background-image:url(${({src})=>{return src}});
margin:0.05rem 0.1rem 0.6rem 0rem;
background-position:center;
height:170px;
width:250px;
background-repeat:no-repeat;
background-size:250px 170px;
background-color:blue;
border-radius:10px;
`
const Imagediv=styled.div`
background-image:url(${({src})=>{return src}});
margin:0.05rem 0.1rem 0.6rem 0rem;
background-position:center;
height:170px;
position:relative;
width:250px;
background-repeat:no-repeat;
background-size:250px 170px;
background-color:blue;
border-radius:10px;
`
const Removebutton=styled.button`
background-color:#F8F8F8;
color:black;
border:none;
position:absolute;
margin:0.2rem;
right:0;
top:0;

&:hover{
  background-color:red;
  cursor:pointer;
}

`
const Check=styled.div`

input[type=file]::-webkit-file-upload-button {
  // visibility: hidden;
  margin-left:50% ;
  
}

`

const Required=(value)=>{
    if(!value)
    return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Required</div>
    
}

const Max=(value)=>{
    if(value >1000)
    return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Enter Reasonable Number</div>
    
}

const Nuumber=(value)=>{
  if(isNaN(value)){
    return <div style={{backgroundColor:"white", color:"red", padding:"0.25rem 0", fontSize:"1rem", margin: "0.25rem auto", width:"100%",}}>Please Enter a Number</div>
  }else{
  }
}



const Color=()=>{

}   


let clicked=[];
let include;
let colorarray=[];
let includedincolorarray;

function Addpropstep8 (){

  let pics;
  // let totunits;
  // let avaiunits;


  let storedpics=JSON.parse(localStorage.getItem("outsidepics"));
  // let storedavaiunits=JSON.parse(localStorage.getItem("availableunits"));
  // let storedtotunits=JSON.parse(localStorage.getItem("totalunits"));
  
  if(storedpics===null){
      pics=[];
     console.log("NO STOREDpICS ARE THE FOLLOWING " + storedpics)
    }
    else{
        console.log("STOREDPICS ARE THE FOLLOWING " + storedpics);
        pics=storedpics.saved.prop;
        console.log(pics);
      }

      const side=useContext(Sharesidebar);
      const form=useRef();
      const checkbtn=useRef();

      const [disabled, setDisabled]=useState(true)
      const [path, setPath]=useState("#");

      const [src1, setSrc1]=useState(); 
      const  [outsidephoto, setoutsidePhoto]=useState(pics);  
      const  [insidephoto, setinsidePhoto]=useState([]);  
      const  [anyotherphoto, setanyotherPhoto]=useState([]);  

        
    // const photoChange =(event)=>{
    //   const a=event.target.value;
    //   setAvailableunits(a);
    // }


    useEffect(()=>{
      if(outsidephoto.length>0){
        setDisabled(false);
        console.log(outsidephoto);
        setPath("/properties/list-property/step7");
        
      }else{
        setDisabled(true);
        setPath("#");
        
      }

    }, [outsidephoto]);

  const outsidePhotoChange=(e)=>{

    const image=URL.createObjectURL(e.target.files[0]);
    setSrc1(image);
    setoutsidePhoto([...outsidephoto, image]);


  }
  const removeImage=(imageurl)=>{
    const remainingimages=outsidephoto.filter((remain)=> remain!==imageurl)
  
    setoutsidePhoto(remainingimages);

  }
  const imageSize=({target:img})=>{
    const {offsetHeight, offsetWidth}=img;

    console.log(offsetHeight, offsetWidth);

  }
    const insidePhotoChange=()=>{


    }
    const anyotherPhotoChange=()=>{


    }
  


    const handleClick=(e)=>{
            e.preventDefault();
            // console.log("here is the submit button")

            // form.current.validateAll();
            
            if(outsidephoto){
                console.log("no errors FOUND in the OUTSIDE PHOTOS form");
                setDisabled(false);
                saveDraft();
                // setLoading(false)
                // console.log(propertyname);
                // console.log(totalunits);
                // console.log(availableunits);
                    
            }
            else{
                console.log("show all errors ARISING FROM no Photos SELECTED")
                setDisabled(true);
            }
    }
    
    const saveDraft=()=>{
      console.log("here is the OUTSIDEPHOTS draft shit, its's working")
      // e.preventDefault();
      // if(disabled===false){
      // }
      const saved={
        "prop":outsidephoto,
      }
      localStorage.setItem("outsidepics", JSON.stringify({saved}));
        console.log("Die BILD Inhanten liefern Knopfen is functionieren. Schrift 8 FÜR BILDEN ")
  } 


  const saveBack=(e)=>{
    console.log("here is the OUTSIDEPHOTS BACK BUTTONS shit, its's working")
        // e.preventDefault();
        const saved={
          "prop":outsidephoto,
        }
        localStorage.setItem("outsidepics", JSON.stringify({saved}));

    
      console.log("Die BILDEN Inhanten liefern FÜR ZURUCKWARTS Knopfen is functionieren. Schrift 6 BACK ")
     



} 


      return (
          <Listpropdiv  sidebar={side? 1:0} >

              <ListHeader sidebar={side?1:0}>
                  <Headertitle sidebar={side?1:0}>List new property</Headertitle>
              </ListHeader>
            
              <Listbody  sidebar={side? 1:0}>
                    <Progressbar sidebar={side?1:0}></Progressbar>
                  
                    <Propertycontainer>
                    {/* onSubmit={handleClick} */}
                        <Form method="" encType="multipart/form-data" ref={form} onSubmit={handleClick} >           
                             
                            <Listingpurposediv >
                              <Label>Property/ Apartment Photos  :</ Label>
                              <Labelpara>Upload some of the best photos of your apartment/property..</Labelpara>
                          
                                {outsidephoto ?
                                  <Imagesdiv src={src1}>
                                    
                                    {outsidephoto.map((photo,index)=>{
                                      return(
                                        <Imagediv src={photo} key={index} onLoad={imageSize}> <Removebutton onClick={()=>removeImage(photo)}><MdIcons.MdOutlineClose /> </Removebutton></Imagediv>
                                      )
                                    })}
                                 </Imagesdiv>
                                    
                                    :
                                    <div>Fuck THIS SHIT EINT WORKING WHY?</div>
                                }
                                
                            </Listingpurposediv> 

                            <Nameofproperty>
                                <Label>Outside of the Apartement Photos :</ Label >
                                {/* {outsidephoto && 
                                  // <Imagesdiv2 src={src1}></Imagesdiv2>
                                }
                                 */}

                                <Input type="file" name="outsideviews" accept=".png , .jpeg, .jpg" title="upload photos of your Apartment"  onChange={outsidePhotoChange}  style={{width:"100%", height:"5rem", backgroundColor:"white", borderRadius:"5px", border:`2px dashed grey`, fontSize:"1rem", color:"black"}}></Input>            
                            </Nameofproperty>                              

                              <Totalnoofunitsdiv>
                                <Label for="outide">Photos of Inside the Apartment:</ Label >
                                
                                  <div className="outside" >
                                    <Check style={{width:"90%", margin:"2rem auto"}}>
                                      <Input type="file" name="insideviews" accept=".png , .jpeg, .jpg" title=" " value={insidephoto} onChange={insidePhotoChange}  style={{ width:"90%", padding:"4rem 0.5rem", backgroundColor:"#F8F8F8", borderRadius:"5px", border:`2px dashed black`, fontSize:"1rem", color:"black"}}></Input>            

                                    </Check> 
                                  </div>
                              </Totalnoofunitsdiv>

                              <Numberofunitsavailable>
                                  <Label>Photos of anyotherplace of the Apartment :</ Label >
                                  <Input type="file" name="anyotherviews" accept=".png , .jpeg, .jpg" title="upload photos of Around your apartment" value={anyotherphoto} onChange={anyotherPhotoChange}  style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:`2px dashed grey`, fontSize:"1rem", color:"black"}}></Input>            
                              </Numberofunitsavailable>
                               
                            <div style={{ width:"100%", margin:"1rem 0rem 1rem 1rem"}}>
                              <Backbutton to="/properties/list-property/step7" onClick={saveBack} sidebar={side? 1:0} >Back</Backbutton>    

                              {disabled?
                              <Button disableed={disabled?1:0} style={{padding:"0.5rem 1rem", margin:"0.5rem"}}>Next Step</Button>
                              : 
                              <Nextbutton to={path} onClick={saveDraft} disabled={disabled?1:0}>Next Step</Nextbutton>
                              }
                              

                            <CheckButton style={{display:"none"}} ref={checkbtn}/> 
                            </div>

                        </Form>  
                    </Propertycontainer>                           
              </Listbody>
          </Listpropdiv>    
      )
  }

export default Addpropstep8
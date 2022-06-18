import React, {useState, useContext,useRef} from 'react'
import styled from "styled-components"
import {Sharesidebar} from "../components/Sidebar"
import Form from "react-validation/build/form"
import Input from "react-validation/build/input"
import CheckButton from "react-validation/build/button"
import Select from "react-validation/build/select"
import Groupselect from "react-select"
// import  {Groupselect}  from "react-multi-select-component";


const Listpropdiv=styled.div`
position

`

const Div= styled.div`
    // overflow-y:scroll;
    overflow-x:none;
    // overflow:scroll;
    left:${({sidebar})=> sidebar ? "4.5%": "22.5%" };
    width:${({sidebar})=> sidebar ? "45%": "27.5%" };
    height:90vh;
    // background-color:grey;
  
    
` 
const ListHeader=styled.div`
position:fixed;
display:flex;
justify-content:space-between;
align-items:center;
top:50px;
padding:0.45rem;
background:white;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
// border-bottom:1px solid gray;
left:${({sidebar})=> sidebar ? "5.5%": "23.5%" };
width:${({sidebar})=> sidebar ? "45%": "27.5%" };

`
const Headertitle=styled.div`
font-size:${({sidebar})=> sidebar ? "2rem": "1.2rem" };
font-weight:${({sidebar})=> sidebar ? "700": "600" };

`
const Draftsavebutton=styled.button`
  color:blue;
  font-size:1.2rem;
  border:none;
  padding:0;
  padding:${({sidebar})=> sidebar ? "0.5rem": "0.2rem" };
  background-color:transparent;
  &:hover{
    font-size:1.2rem;
    color:blue;
    cursor:pointer;
    border-radius:5px;
    background-color:#F8F8F8;
  }


`

const Progressbar =styled.div`
display:flex;
width:${({sidebar})=> sidebar ? "45%": "27.5%" };
justify-content:space-between;
align-items:center;
position:fixed;
top:${({sidebar})=> sidebar ? "115.5px": "106.5px" };
left:${({sidebar})=> sidebar ? "5.5%": "23.5%" };
z-index:100;
`

const Prog =styled.span`
height:${({sidebar})=> sidebar ? "15px": "10px"};
width:${({sidebar})=> sidebar ? "80px": "50px" };
border-radius:5px;
background-color:blue;
`


const list =styled.div`

`
const Listbody=styled.div `
position:fixed;
top:${({sidebar})=> sidebar ? "140px": "127px" };
height:${({sidebar})=> sidebar ? "76.5vh": "78.5vh" };
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
overflow-y:auto;
overflow-x:hidden;
overflow-wrap:break-word;
background-color:#F8F8F8;
left:${({sidebar})=> sidebar ? "5.5%": "23.5%" };
width:${({sidebar})=> sidebar ? "45%": "27.5%" };

::-webkit-scrollbar {
  width: 7.5px;               /* width of the entire scrollbar */
}

::-webkit-scrollbar-track {
  background: #F8F8F8;        /* color of the tracking area */
}

::-webkit-scrollbar-thumb {
  background-color: grey;    /* color of the scroll thumb */
  border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */
}
::-webkit-scrollbar-corner {
  background-color: white;    /* color of the scroll thumb */
  // border-radius: 20px;       /* roundness of the scroll thumb */
  // border: 1px solid orange;  /* creates padding around scroll thumb */
}

`

const Listfooter=styled.button`
background-color:blue;
font-weight:${({sidebar})=> sidebar ? "600": "800" };
font-size:${({sidebar})=> sidebar ? "1.2rem": "0.9rem" };
color:white;
border-radius:6.79px;
border:none;
padding:${({sidebar})=> sidebar ? "0.5rem": "0.2rem" };
&:hover{
  cursor:pointer;
}

`

const Divtwo= styled.div`
    width:46%;
    // left:52%;
    position:fixed;
    top:52px;
    overflow:scroll;
    overflow-x:hidden;
    left:${({sidebar})=>sidebar? "10%": "70.5%"}
    height:400px;
    background-color:yellow;
    color:black;
    font-size:3rem;
    text-align:start;
    padding-left:2rem;
    padding-top:1rem;
`
 const Addpropertycontainer= styled.div`
 margin:0 auto;
 width:95%;
 padding:1rem 0.5rem;

 
 `
 const Propertycontainer=styled.div`
 
 `
 const Listingtype=styled.div`
 margin:1rem 0;

 `
 const Propertytypediv=styled.div`
 margin:1rem 0;
 `
 const Numberofroomsdiv=styled.div`
 margin:1rem 0;
 `
  
 const Roomslabel=styled.span`
  font-weight:800;

 `
 const Availableinsidefeaturesdiv=styled.div`
 margin:1rem 0;
 `
 const Availableoutsidefeaturesdiv=styled.div`
 margin:1rem 0;
 `
  const Availablenearbyfeaturesdiv=styled.div`
 margin:1rem 0;
 `

function Empty() {

  const insideoptions=[
    { value: 'alarm', label:"Alarm"},        
    { value: 'backupgenerator', label:"Backup Generator Available"},             
    { value: 'ensuite', label:"En Suite"},
    { value: 'fibreinternet', label:"Internet Available"},
    { value: 'furnished', label:"Furnished"},
    { value: 'serviced', label:"Serviced"},
    { value: 'servicechargeincluded', label: "Service Charge Include"},                
    { value: 'walkincloset', label:"Walk In Closet"},
    { value: 'openkitchen', label:"Open Kitchen Plan"},
    { value: 'aircondition', label:"Air Conditioning"}
  ]

  const outsideoptions=[
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
  ]

  const nearbyoptions=[

    { value: 'busstop', label:"Bus Stop"},
    { value: 'hospital', label:"Hospital"},
    { value: 'golfcourse', label: "Golf Course"},                
    { value: 'scenicview', label:"Scenic View"},
    { value: 'beach', label:"Beach"},
    { value: 'seaview', label:"Sea View"},
    { value: "shoppingcenter", label:"Shopping Center"},
    { value: 'school', label:"School"}
  ]

  const Required=()=>{


  }

  const side=useContext(Sharesidebar);
  const form=useRef();
  const checkbtn=useRef()

console.log(side)
  const [numberofrooms, setNumberofrooms]= useState()
  const [listingtype, setListingtype]= useState()
  const [propertytype, setPropertype]=useState();
  
  
  
  
  
  const handleSubmitproperty=()=>{   }

  const handleListingTypeChange=(e)=>{
    
  }


  const handleNumberOfRoomsChange=(e)=>{
    
  }

  const handlePropertyTypeChange=(e)=>{
    
  }



  return (
      <Listpropdiv >
          <Div sidebar={side? 1:0}>  
              <ListHeader sidebar={side?1:0}>
                <Headertitle sidebar={side?1:0}>List new property</Headertitle>
                <Draftsavebutton sidebar={side?1:0}>Save Draft</Draftsavebutton>  
                <Listfooter sidebar={side? 1:0}>Next Step</Listfooter>
              </ListHeader>
              <Progressbar sidebar={side?1:0}>
                <Prog sidebar={side?1:0} ></Prog>
                <Prog sidebar={side?1:0}></Prog>
                <Prog sidebar={side?1:0}></Prog>
                <Prog sidebar={side?1:0} style={{backgroundColor:"#F8F8F8"}}></Prog>
                <Prog sidebar={side?1:0}style={{backgroundColor:"#F8F8F8"}}></Prog>
                <Prog sidebar={side?1:0}style={{backgroundColor:"#F8F8F8"}}></Prog>
                <Prog sidebar={side?1:0}></Prog>
              </Progressbar>

              <Listbody  sidebar={side? 1:0}>
                  <Addpropertycontainer>
                    <Propertycontainer>

                        <Form method="" ref={form} onSubmit={handleSubmitproperty} >  
                            <Listingtype>
                                    <Roomslabel>Select Your Listing type:</ Roomslabel >
                                    <Select type="select" value={listingtype} onChange={handleListingTypeChange} validations={[Required]} style={{width:"100%", height:"3rem", borderRadius:"5px", border:"none", fontSize:"1.2rem", backgroundColor:"white", color:"black"}}>
                                        <option value="">Listing Type</option>
                                        <option value="rent">For Rent</option>
                                        <option value="sale">For Sale</option>
                                        <option value="lease">For Lease</option>
                                    </Select>
                            </Listingtype>
                            <Propertytypediv>
                                    <Roomslabel>Select Your Property Type:</ Roomslabel >
                                    <Select type="select" value={propertytype} onChange={handlePropertyTypeChange} validations={[Required]} style={{width:"100%", height:"3rem", borderRadius:"5px", border:"none", fontSize:"1.2rem", backgroundColor:"white", color:"black"}}>
                                        <option value="">Type of Property</option>
                                        <option value="room/bedsitter">Room/Bedsitter</option>
                                        <option value="house">House/Bungalow</option>                      
                                        <option  value="flat/apartment">Apartment/Flat</option>
                                        <option value="townhouse">Town House</option>
                                        <option value="warehouse">Ware Houses</option>
                                        <option value="offices">Offices</option>                      
                                        <option  value="commercialproperty">Commercial Property</option>
                                        <option value="villa">Villa</option>
                                        <option value="shops">Shops</option>
                                    </Select>
                            </Propertytypediv>
                            {/* <div>{sidebar}</div> */}
                            <Numberofroomsdiv>
                                <Roomslabel>Number of Rooms In Your Property:</ Roomslabel >
                                <Input type="number" name="noRooms" placeholder="Add The number of Rooms" value={numberofrooms} onChange={handleNumberOfRoomsChange} validations={[Required]} style={{width:"100%", height:"3rem", backgroundColor:"white", borderRadius:"5px", border:"none", fontSize:"1rem", color:"black"}}></Input>
                            </Numberofroomsdiv>
                            
                            <Availableinsidefeaturesdiv>
                                <Roomslabel>Select All Features Inside your Property:</ Roomslabel >
                                <Groupselect options={insideoptions} isMulti/>
                            </Availableinsidefeaturesdiv>
                            
                            <Availableoutsidefeaturesdiv>
                                <Roomslabel>Select All Features Around Your Property:</ Roomslabel >
                                <Groupselect options={outsideoptions} isMulti/>
                            </Availableoutsidefeaturesdiv>
                            
                            <Availablenearbyfeaturesdiv>
                                <Roomslabel>Select All Facilities Nearby:</ Roomslabel >
                                <Groupselect options={nearbyoptions} isMulti/>
                            </Availablenearbyfeaturesdiv>
                                        
                            <CheckButton style={{display:"none"}} ref={checkbtn}/>
                        </Form>  
                    </Propertycontainer>
                  </Addpropertycontainer>              
        
          
              </Listbody>
          </Div>

          <Divtwo sidebar={side? 1: 0}> 
            <div>This is simply for testing routers purposes, When specific parent is clicked show this index page jalkdfjalkfjdk</div>
            <div>thiohiohoiahdfoiaj ipoiajfoija iopjapodifjaopijfopi qajfiojadoif j</div>
            <div>This is simply for testing routers purposes, When specific parent is clicked show this index page jalkdfjalkfjdk</div>
            <div>thiohiohoiahdfoiaj ipoiajfoija iopjapodifjaopijfopi qajfiojadoif j</div>
            <div>This is simply for testing routers purposes, When specific parent is clicked show this index page jalkdfjalkfjdk</div>
            <div>thiohiohoiahdfoiaj ipoiajfoija iopjapodifjaopijfopi qajfiojadoif j</div>
         </Divtwo>
      </Listpropdiv>

  
  )
}

export default Empty
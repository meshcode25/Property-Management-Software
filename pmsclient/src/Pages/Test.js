/*

// import mapboxgl from '!mapbox-gl';  eslint import/no-webpack-loader-syntax: off 
// import 'mapbox-gl/dist/mapbox-gl.css';

// mapboxgl.accessToken = 'pk.eyJ1IjoieWVnb24ta2lwcm90aWNoIiwiYSI6ImNsNDgycGRmNjA4bWczY3IybGhicHo0dWkifQ.K5cxQAy5pTaE6km6uKJgqw';


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


  const mapContainer = useRef(null);
  const map = useRef(null);
  const [lng, setLng] = useState(39.658871);
  const [lat, setLat] = useState(-4.043740);
  const [zoom, setZoom] = useState(9);

  map.current=new mapboxgl.NavigationControl();
  
  useEffect(() => {
    if (map.current) return; // initialize map only once
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-v9',
      center: [lng, lat],
      zoom: zoom
    });
  });

  return (
    <div styled={{backgroundColor:"green"}}>
      <div ref={mapContainer} className="map-container" />
    </div>
    );
}

*/

import React,{useRef, useState, useEffect} from 'react'
import styled from "styled-components"


const Div= styled.div`
    overflow:scroll;
    width:900px;
    height:500px;
    font-size:2.5rem;
    background-color:blue;
    color:white;
    text-align:left;
    margin:20px auto;
`
function Test() {


 
  
  return (
    <Div styled={{backgroundColor:"green"}}>
        <div style={{marginLeft:"1rem"} }>Hallo Michael Strater, Ich hoffe Sie werden einen Tag dieses Nachricht Sehen. Ihn dienst nur zum Testen des Routings für diese React-Andwendung, Danke für Die Gelegenheit bei Ihnen eine Arbeitaubildung mitmachen. Danke und ich freut mich sehr bei Ihnen Programmieren zu learnen. Und auch es tut mir Leid, weil ich habe Sehr Spät zuruck melden </div>
     </Div>
    );
}
export default Test
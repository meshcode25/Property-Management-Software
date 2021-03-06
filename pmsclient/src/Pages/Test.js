import React,{useRef, useState, useEffect} from 'react'
import mapboxgl from '!mapbox-gl'; 
import styled from "styled-components"
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = 'pk.eyJ1IjoieWVnb24ta2lwcm90aWNoIiwiYSI6ImNsNDgycGRmNjA4bWczY3IybGhicHo0dWkifQ.K5cxQAy5pTaE6km6uKJgqw';


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

  // return (
  //   <Div>
      
  //     Test

  //   </Div>
  // )


  return (
    <div>
      <div ref={mapContainer} className="map-container" />
    </div>
    );
}

export default Test
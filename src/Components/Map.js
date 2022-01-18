import React,{useState} from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import {Icon} from "leaflet";
import { Container } from '@material-ui/core';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
const Map = (props) =>{
const[activeCountry,setActiveCountry] = useState(null);
  return(  
  <>
  <Container maxWidth="md">
    <CardContent>
  <MapContainer center={[37.0902, -95.7129]} zoom={3.3} scrollWheelZoom={true}>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    
      {props.covidData.map(country=>
      <Marker
         position={[country.countryInfo.lat,country.countryInfo.long]}
         key={country.country}
        eventHandlers={{
            click: (e) => {
              setActiveCountry(country)
            },
          }}
         />
        
      )}  
      {activeCountry && <Popup
        position={[
            activeCountry.countryInfo.lat,
            activeCountry.countryInfo.long
        ]}
      onClose={()=>setActiveCountry(null)}
      >
     <div>
     <img src={activeCountry.countryInfo.flag} alt={activeCountry.country} style={{width:50,height:35}}/>
         <h4>{activeCountry.country}</h4>
         <p>Active Cases: {activeCountry.active}</p>

     </div>
 </Popup>
      }  

  </MapContainer>
  </CardContent>
  </Container>
   </>
  )

};

export default Map;
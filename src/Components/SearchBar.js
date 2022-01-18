import React,{useEffect,useState} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { Container } from '@material-ui/core';
import { textAlign } from '@mui/system';
const SearchBar = (props) =>{
    const clearFilterHandler = (event,newValue )=>{
         props.setCountry(null);

    }
 
   return(
     <>
     <Container  maxWidth="sm">
         <Autocomplete
          onClick={clearFilterHandler}
         onChange={(event,newValue)=>props.setCountry(newValue?.value)}
      disablePortal
      id="combo-box-demo"
      options={props.countryList}
      sx={{ width:340 }}
      renderInput={(params) => <TextField {...params} label="Country"  
      />}
    />
  </Container>
     </>
   );

}


export default SearchBar
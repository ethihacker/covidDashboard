import './App.css';
import {useEffect,useState} from 'react';
import {Typography,AppBar, Button,Card, CardActions, CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core'
import Header from '../src/Components/UI/Header'
import DataCard from './Components/UI/DataCard';
import SearchBar from './Components/SearchBar';
import Map from './Components/Map';
import Chart from './Components/Chart';
function App() {
 const [countryNameData,setCountryNameData] = useState([]);
 const [countryFilter,setCountryFilter] = useState('');
 const [covidData,setCovidData] = useState([]);
 const setCountry= (country) =>{
      setCountryFilter(country) 
 }

  useEffect(() => {        const fetchCovidData = async () => {
    const res = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
    const data = await res.json(); 
    setCovidData(data);
    console.log(covidData);
      const countryData = data.map((country)=>{
           return {label:country.country, value:country.country}
      })
     setCountryNameData(countryData);
  }
  fetchCovidData() 
}, []);



  return (
  <> 
      <Header/>
        <Grid item xs={12}>
             <SearchBar  countryFilter={countryFilter}  setCountry= {setCountry} countryList={countryNameData} />
         </Grid>
        <Grid container spacing={1}>
          <Grid item xs={7}>
            <DataCard countryFilter={countryFilter}/> 
         </Grid>
        <Grid item xs={5}>
        <Chart countryFilter={countryFilter}/>
        
      </Grid>
</Grid>
<Grid item xs={10}>
         <Map covidData={covidData}/>
      </Grid>
   
 </>
 
 );
  
  }

export default App;

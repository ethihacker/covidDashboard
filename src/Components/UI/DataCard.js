import React,{useEffect,useState} from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Container } from '@material-ui/core';
import TablePagination from '@mui/material/TablePagination';
import { containerClasses } from '@mui/material';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from '@mui/material/TableCell';

const DataCard = (props) =>{
    const [countryData,setCountryData] = useState([]);
   
    useEffect(() => {        const fetchCovidData = async () => {
          const res = await fetch("https://corona.lmao.ninja/v2/countries?yesterday&sort")
          const data = await res.json(); 
    
         
         const countryData = data.filter(countryData=>{
               return countryData.country === props.countryFilter;
          })
          if(!props.countryFilter){         
                  setCountryData(data);
          } else{
              setCountryData(countryData);
          }
        }
        fetchCovidData()
      }, [countryData]);

      const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
          backgroundColor: theme.palette.common.black,
          color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
          fontSize: 14,
        },
      }));
      
      const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
          backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
          border: 0,
        },
      }));  

  return  (
 <>
 <Container maxWidth="md">
   <Paper>
    <TableContainer component={Paper} sx={{ maxHeight: 440 }}>
    <Table sx={{ width: '100%', overflow: 'hidden' }} >
      <TableHead>
        <TableRow>
          <StyledTableCell>Country</StyledTableCell>
          <StyledTableCell align="right">Active Cases </StyledTableCell>
          <StyledTableCell align="right">Total Deaths&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Critical Cases&nbsp;</StyledTableCell>
          <StyledTableCell align="right">Critical Cases Per One Million&nbsp;</StyledTableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {countryData.map((country) => (
          <TableRow
            key={country.country}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <StyledTableCell component="th" scope="country">
              {country.country}
            </StyledTableCell>
            <StyledTableCell align="right">{country.active}</StyledTableCell>
            <StyledTableCell align="right">{country.deaths}</StyledTableCell>
            <StyledTableCell align="right">{country.critical}</StyledTableCell>
            <StyledTableCell align="right">{country.criticalPerOneMillion}</StyledTableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
     </TableContainer>
  </Paper>
  </Container>
</>
  );

};

export default DataCard;
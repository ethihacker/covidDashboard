import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import './Header.css'
const Header = (props) =>{
    return (
        <Box sx={{ flexGrow: 1 }}color="blueviolet">
          <AppBar position="sticky" className="appBar">
            <Toolbar>
              <IconButton
                size="lg"
                edge="start"
                color="success"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
              
              </IconButton>
              <Typography variant="h3" component="div" sx={{ flexGrow: 1 }} align="center" color="white">
               COVID-19 Dashboard
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      );

};

export default Header;
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Loge from '../../../Images/Logo/logo.png';

import './Naver.css';
import { HashRouter } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Naver = () => {
    return (
        <div className='Container'>
           <Box sx={{ flexGrow: 1, background: "none" }}>
      <AppBar sx={{background: "none", boxShadow: "none", color: "#000"}} position="static">
        <Toolbar>
          <IconButton
            className='Logo'
          >
           <img src={Loge} alt="" />
          </IconButton>
          <ul className='List'>
         
          <Typography  className='Itam' sx={{ flexGrow: 1 , marginLeft: "30px" }}>
         Home
          </Typography>
         
          
          <Typography  className='Itam' sx={{ flexGrow: 1, marginLeft: "30px" }}>
          Services
          </Typography>
        
          <Typography  className='Itam' sx={{ flexGrow: 1, marginLeft: "30px" }}>
          About
          </Typography>


          
          <Typography  className='Itam' sx={{ flexGrow: 1, marginLeft: "30px" }}>
          Category
          </Typography>

          <Typography  className='Itam' sx={{ flexGrow: 1, marginLeft: "30px" }}>
          Blog
          </Typography>


          <Typography  className='Itam' sx={{ flexGrow: 1, marginLeft: "30px" }}>
          Contact
          </Typography>
          </ul>
          
          
        </Toolbar>
      </AppBar>
    </Box> 
        </div>
    );
};

export default Naver;
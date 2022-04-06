import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Loge from '../../../Images/Logo/logo.png';

import './Naver.css';

const Naver = () => {
    return (
        <div>
           <Box sx={{ flexGrow: 1, background: "none" }}>
      <AppBar sx={{background: "none", boxShadow: "none", color: "#000"}} position="static">
        <Toolbar>
          <IconButton
            className='Logo'
          >
           <img src={Loge} alt="" />
          </IconButton>
          <ul className='List'>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1 , marginLeft: "30px" }}>
          Design Services
          </Typography>
          <Typography  variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "30px" }}>
          Marketing Services
          </Typography>

          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "30px" }}>
          Support &amp; Maintenance
          </Typography>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "30px" }}>
          Blog
          </Typography>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "30px" }}>
          About
          </Typography>


          <Typography variant="h6" component="div" sx={{ flexGrow: 1, marginLeft: "30px" }}>
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
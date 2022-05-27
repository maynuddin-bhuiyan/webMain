import React from 'react';
import Grid from '@mui/material/Grid';
import './Resent.css';

import WebIcon from '@mui/icons-material/Web';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import DesktopMacIcon from '@mui/icons-material/DesktopMac';


const Resent = () => {
    return (
        <div className='Resent' id='Services'>
            

<div className="Container">
            <Grid container spacing={2}>
        <Grid  item xs={4} md={4}>
        <div className="Efficent">
        <PhoneIphoneIcon  className='Icon'/>
         <h2>Mobile</h2>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
         </div>
        </Grid>
        <Grid item xs={4} md={4}>
        <div className="Efficent">
        <DesktopMacIcon className='Icon' />
        <h2>Desktop</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
        </Grid>

        
        <Grid  item xs={4} md={4}>
        <div className="Efficent">  
       
        <WebIcon className='Icon' />
        <h2>WEB</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Grid>
        </Grid>

          
        </div></div>
    );
};

export default Resent;
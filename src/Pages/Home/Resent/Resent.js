import React from 'react';
import Grid from '@mui/material/Grid';
import './Resent.css';

import AccessTimeIcon from '@mui/icons-material/AccessTime';
import SettingsIcon from '@mui/icons-material/Settings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


const Resent = () => {
    return (
        <div className='Resent'>
            


            <Grid container spacing={2}>
        <Grid  item xs={4} md={4}>
        <div className="Efficent">
        <AccessTimeIcon  className='Icon'/>
         <h2>Efficent</h2>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
         </div>
        </Grid>
        <Grid item xs={4} md={4}>
        <div className="Efficent">
        <SettingsIcon className='Icon' />
        <h2>Easy</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
        </Grid>

        
        <Grid  item xs={4} md={4}>
        <div className="Efficent">  
       
        <RocketLaunchIcon className='Icon' />
        <h2>Robust</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Grid>
        </Grid>

          
        </div>
    );
};

export default Resent;
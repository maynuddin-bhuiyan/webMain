import React from 'react';
import './Responsive.css';
import Grid from '@mui/material/Grid';
import HubIcon from '@mui/icons-material/Hub';
import icon1 from '../../../Images/Icon awesome-laravel.png';
import icon2 from '../../../Images/Icon awesome-wordpress.png';
import icon3 from '../../../Images/Group 4293.png';
import icon4 from '../../../Images/Group 4295.png';
import icon5 from '../../../Images/Icon awesome-magento.png';



const Responsive = () => {
    return (
        <div className='Responsive'>
            <div className="line"></div>
            <h1>New Responsive Web Development for
                Desktop  &amp; Mobile Devices</h1>
            <div className="line1"></div>

            <Grid sx={{marginTop: "100px"}} container spacing={2}>
        <Grid  item xs={4} md={4}>
        <div className="ResponsiveText">
        <div className="ResponsiveShap"></div>
       <img src={icon2} alt="" />
         <h2>Wordpress</h2>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
         </div>
        </Grid>
        <Grid item xs={4} md={4}>
        <div className="ResponsiveText">
        <div className="ResponsiveShap"></div>
        <img src={icon3} alt="" />
        <h2>WooCommerce</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
        </Grid>

        
        <Grid  item xs={4} md={4}>
        <div className="ResponsiveText">
        <div className="ResponsiveShap"></div>  
       
        <img src={icon5} alt="" />
        <h2>Magento</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Grid>

         <Grid  item xs={4} md={4}>
        <div className="ResponsiveText">
        <div className="ResponsiveShap"></div>  
       
        <img src={icon1} alt="" />
        <h2>Laravel</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Grid>


         <Grid  item xs={4} md={4}>
        <div className="ResponsiveText"> 
        <div className="ResponsiveShap"></div>
       
        <HubIcon className='icon' />
        <h2>Core PHP</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Grid>

         <Grid  item xs={4} md={4}>
        <div className="ResponsiveText">  
        <div className="ResponsiveShap"></div>
        <img src={icon4} alt="" />
        <h2>Custom Web</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Grid>
        </Grid>

        </div>
    );
};

export default Responsive;
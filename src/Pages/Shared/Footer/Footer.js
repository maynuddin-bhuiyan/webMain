import { Grid } from '@mui/material';
import React from 'react';
import './Footer.css';
import logo from '../../../Images/Logo/logo.png';
import shape1 from '../../../Images/Footer/Path 34.png';
import shape2 from '../../../Images/Footer/Path 35.png';

import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LinkIcon from '@mui/icons-material/Link';


const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Container">

            <Grid style={{paddingTop: "300px", paddingBottom: "50px"}} container spacing={2}>
        <Grid  item xs={3} md={3}>
        <div className="FooterLogo">
        <img src={logo} alt="" />

        <img className='Shape1' src={shape1} alt="" />
        <img className='Shape2' src={shape2} alt="" />
        <p>The best social network for
            business</p>
        </div>
        </Grid>

        <Grid item xs={3} md={3}>
        <div className="FooterServices">       
       
        <h2>Web services</h2>

        <img className='Shape1' src={shape1} alt="" />
        <img className='Shape2' src={shape2} alt="" />
       <ul>
           <li>Maintenance</li>
           <li>Web Design</li>
           <li>Web Development</li>
           <li>Copywriting</li>
           <li>Seo Services</li>
       </ul>
        </div>
        </Grid>

        
        <Grid  item xs={3} md={3}>
        <div className="FooterSocialMedia">
        
       
        
        <h2>Social Media</h2>


        <img className='Shape1' src={shape1} alt="" />
        <img className='Shape2' src={shape2} alt="" />
        <ul>
            <li>Social media Management</li>
            <li>Social media Setup</li>
            <li>Facebook</li>
            <li>Pinterest</li> 
            <li>Twitter</li>
        </ul>
        </div>
         </Grid>

         <Grid  item xs={3} md={3}>
        <div className="FooterContactUs">
         
       
        
        <h2>Contact Us</h2>

        <img className='Shape1' src={shape1} alt="" />
        <img className='Shape2' src={shape2} alt="" />
        

        <div className="SocialIcon">
            
        <div className="call">
            <p> <MailIcon className='Icon' />maynuddinbhu14grm@gmail.com  </p>
            <p> <LocationOnIcon className='Icon' />  Mirpur 1, Dhaka, Bangladesh,</p>
            <p> <PhoneIcon className='Icon' /> +088 1908145097</p>
            <p> <LinkIcon className='Icon'  /> maynuddin-bhuiyan</p>
                
                
            </div>


        </div>
        </div>
         
        </Grid>
        </Grid>


            </div>            
        </div>
    );
};

export default Footer;
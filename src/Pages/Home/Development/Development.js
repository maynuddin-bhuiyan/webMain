import React from 'react';
import './Development.css';
import Grid from '@mui/material/Grid';
import image from '../../../Images/Group 4303.png';

const Development = () => {
    return (
        <div className='Container  Development'>
            <div className='line'></div>
                <h2>Web Development Services</h2>
            <Grid container spacing={2}>
                <Grid className='DevelopmentText'  item xs={6} md={6}>
                
                <h5>Build better with a strong foundation</h5>
                <p><strong>Website development</strong>  is at the heart of what we do - it's the hidden magic in our technical offering and it sits hand in hand with the visual side of <span className='color'> website design.</span> Our  <strong>development team</strong>  makes sure that your website is fast, reliable and responsive. They're the ones who make sure that animations work 'just so' and various add-ons, integrations like payment via PayPal or Stripe for example, fit perfectly into the structure and coding of your site. </p>
                </Grid>
                <Grid className='DevelopmentImg'  item xs={6} md={6}>
                    <img src={image} alt="" />
                </Grid>
            </Grid>
        </div>
    );
};

export default Development;
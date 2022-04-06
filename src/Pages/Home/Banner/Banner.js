import React from 'react';
import Grid from '@mui/material/Grid';
import image from '../../../Images/Banner/Group 4302.png';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

import './Banner.css';
import { Button } from '@mui/material';

const Banner = () => {
  return (
    <div className='Banner Container'>
      <Grid container spacing={2}>
        <Grid className='Text' item xs={6} md={8}>
          <h2>We Develop Websites To
            Grow Your <span className='color'>Business</span> </h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At </p>

          <Button sx={{ background: '#E40046', padding: "10px 10px", color: "#FFF", marginRight: "20px" }}>Get in Touch</Button>
          <Button sx={{ padding: "10px 10px", fontSize: "18px" }}><PlayCircleOutlineIcon
            sx={{ fontSize: "30px", marginRight: "10px" }}

          /> Play Video</Button>
        </Grid>
        <Grid className='Image' item xs={6} md={4}>
          <img src={image} alt="" />
        </Grid>
      </Grid>
    </div>
  );
};

export default Banner;
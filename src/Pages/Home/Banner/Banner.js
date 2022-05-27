import React from 'react';
import Grid from '@mui/material/Grid';
import image from '../../../Images/Banner/Group 4302.png';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import Naver from '../../Shared/Naver/Naver';

import './Banner.css';
import { Button } from '@mui/material';

const Banner = () => {
  return (
    <div className='Banner'>

      <div className="Container">
      <Naver />
      <Grid container spacing={2}>
        <Grid className='Text' item xs={6} md={8}>
          <h2>Create a
portfolio website To
            Grow Your <span className='color'>Business</span> </h2>
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At </p>

          <Button className='Button' >Get in Touch</Button>
          <Button className='Button'><PlayCircleOutlineIcon
            sx={{ fontSize: "30px", marginRight: "10px" }}

          /> Play Video</Button>
        </Grid>
        <Grid className='Image' item xs={6} md={4}>
          <img src={image} alt="" />
        </Grid>
      </Grid>
    </div></div>
  );
};

export default Banner;
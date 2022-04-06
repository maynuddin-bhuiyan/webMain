import React from 'react';
import './Waiting.css';
import Grid from '@mui/material/Grid';
import { Button } from '@mui/material';

const Waiting = () => {
    return (
        <div className='Waiting'>
            <Grid container spacing={2}>
        <Grid  item xs={8} md={8}>
        <h1>Why are you still waiting?</h1>
        <p>Develop your system with an attractive <span className='color'>Design</span> </p>
        </Grid>
        <Grid item xs={4} md={4}>
        <Button className='Start'> Start Project</Button>
        
        
         </Grid>
        </Grid>
        </div>
    );
};

export default Waiting;
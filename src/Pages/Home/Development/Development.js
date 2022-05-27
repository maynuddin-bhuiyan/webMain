import React from 'react';
import './Development.css';
import Grid from '@mui/material/Grid';
import image from '../../../Images/Group 4303.png';
import background1 from '../../../Images/Component 1 – 1.png';

const Development = () => {
    return (
        <div className="Development">
            <img className='Backred' src={background1} alt="" />
        <div className='Container'>
           
                <h2>About Us</h2>

                <div className='line'></div>
            <Grid container spacing={2}>
                <Grid className='DevelopmentText'  item xs={5} md={5}>
                
                <h5>Get the best Results for Web Marketing Companies </h5>
                    

                <div className="Skills-bar">
    <div className="bar">
        <div className="info">
            <span>Html</span>
        </div>
        <div className="Progress-line image"><span></span></div>
    </div>


    <div className="bar">
        <div className="info">
            <span>Css</span>
        </div>
        <div className="Progress-line brand"><span></span></div>
    </div>



    <div className="bar">
        <div className="info">
            <span>Javascript ES6</span>
        </div>
        <div className="Progress-line uiUx"><span></span></div>
    </div>

    <div className="bar">
        <div className="info">
            <span>React.js</span>
        </div>
        <div className="Progress-line React"><span></span></div>
    </div>


    <div className="bar">
        <div className="info">
            <span>Node.js</span>
        </div>
        <div className="Progress-line Node"><span></span></div>
    </div>

    <div className="bar">
        <div className="info">
            <span>MongoDB</span>
        </div>
        <div className="Progress-line MongoDB"><span></span></div>
    </div>

</div>
                </Grid>
                <Grid className='DevelopmentImg'  item xs={7} md={7}>
                    <img src={image} alt="" />
                </Grid>
            </Grid>
        </div></div>
    );
};

export default Development;
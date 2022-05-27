import React from 'react';
import './Responsive.css';
import Grid from '@mui/material/Grid';
import HubIcon from '@mui/icons-material/Hub';
import HtmlIcon from '@mui/icons-material/Html';
import CssIcon from '@mui/icons-material/Css';
import JavascriptIcon from '@mui/icons-material/Javascript';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';




const Responsive = () => {
    return (
        <div className='Responsive'>

            <div className="Container">
            
            <h1>New Category</h1>
            <div className="line1"></div>

            <Grid sx={{marginTop: "100px"}} container spacing={2}>
        <Grid  item xs={4} md={4}>
        <div className="ResponsiveText">
        <div className="ResponsiveShap"></div>
      <HtmlIcon className='icon' />
         <h2>Html</h2>
         <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
         </div>
        </Grid>
        <Grid item xs={4} md={4}>
        <div className="ResponsiveText">
        <div className="ResponsiveShap"></div>
       <CssIcon className='icon' />
        <h2>Css</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
        </Grid>

        
        <Grid  item xs={4} md={4}>
        <div className="ResponsiveText">
        <div className="ResponsiveShap"></div>  
       
        <JavascriptIcon className='icon' />
        <h2>Javascript ES6</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Grid>

         <Grid  item xs={4} md={4}>
        <div className="ResponsiveText">
        <div className="ResponsiveShap"></div>  
       
        <AddReactionIcon className='icon'/>
        <h2>React.js</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Grid>


         <Grid  item xs={4} md={4}>
        <div className="ResponsiveText"> 
        <div className="ResponsiveShap"></div>
       
        <CircleNotificationsIcon className='icon' />
        <h2>Node.js</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Grid>

         <Grid  item xs={4} md={4}>
        <div className="ResponsiveText">  
        <div className="ResponsiveShap"></div>
        <HubIcon className='icon'/>
        <h2>MongoDB</h2>
        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor</p>
        </div>
         </Grid>
        </Grid>

        </div></div>
    );
};

export default Responsive;
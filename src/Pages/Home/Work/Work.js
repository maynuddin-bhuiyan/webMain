import React from 'react';
import './Work.css';
import image1 from '../../../Images/Work/AdobeStock_156513285.png';
import image2 from '../../../Images/Work/AdobeStock_247516270.png';
import image3 from '../../../Images/Work/AdobeStock_260421302.png';
import image4 from '../../../Images/Work/AdobeStock_367817813.png';

const Work = () => {
    return (
        <div className='Work'>
            <h2>Some Of Our Work</h2><div className='line'></div>
            <p>Things we've Made</p>



            <div className="WorkMain">
                <div className="Main">
                    <img src={image1} alt="" />
                    <h6>Link Building for Seo</h6>
                    <p>October 25, 2021</p>
                    <h6>A link building is considered an excellent
approach</h6>
                </div>


                <div className="Main">
                <img src={image2} alt="" />
                    <h6>Link Building for Seo</h6>
                    <p>October 25, 2021</p>
                    <h6>A link building is considered an excellent
approach</h6>
                </div>



                <div className="Main">
                <img src={image3} alt="" />
                    <h6>Link Building for Seo</h6>
                    <p>October 25, 2021</p>
                    <h6>A link building is considered an excellent
approach</h6>
                </div>


                <div className="Main">
                <img src={image4} alt="" />
                    <h6>Link Building for Seo</h6>
                    <p>October 25, 2021</p>
                    <h6>A link building is considered an excellent
approach</h6>
                </div>

            </div>
        </div>
    );
};

export default Work;
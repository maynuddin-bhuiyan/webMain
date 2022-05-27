import React from 'react';
import './Work.css';
import image1 from '../../../Images/Work/1_VTwnmfkXkmteQIdYZHDctw.png';
import image2 from '../../../Images/Work/c670430f7b3452d1889b3dbda4356ab3911becef.webp';
import image3 from '../../../Images/Work/development-economics.png';
import image4 from '../../../Images/Work/previewImage.jpg';

const Work = () => {
    return (
        <div className="Container">
        <div className='Work'>
            <h2>Some Of Our Work</h2><div className='line'></div>
          



            <div className="WorkMain">
                <div className="Main">
                    <img src={image4} alt="" />
                    <h6>Web Design</h6>
                    <p>October 25, 2021</p>
                    <h6>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque saepe iure omnis qui, ut nisi doloribus </h6>
                </div>


                <div className="Main">
                <img src={image2} alt="" />
                    <h6>React Js</h6>
                    <p>October 23, 2021</p>
                    <h6>rem vitae atque inventore veniam aliquam maxime dolorum sed nulla culpa fugit exercitationem. Asperiores.</h6>
                </div>



                <div className="Main">
                <img src={image3} alt="" />
                    <h6>web developer</h6>
                    <p>October 25, 2021</p>
                    <h6>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt repellat quia minima illum odio temporibus commodi magni,</h6>
                </div>


                <div className="Main">
                <img src={image1} alt="" />
                    <h6>Node Js</h6>
                    <p>July 25, 2021</p>
                    <h6> et quidem veniam laudantium neque eaque doloribus distinctio, voluptatem, libero qui repellendus tempore!</h6>
                </div>

            </div>
        </div></div>
    );
};

export default Work;
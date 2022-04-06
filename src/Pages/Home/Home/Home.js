import React from 'react';
import Naver from '../../Shared/Naver/Naver';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import Development from '../Development/Development';
import Resent from '../Resent/Resent';
import Responsive from '../Responsive/Responsive';
import Waiting from '../Waiting/Waiting';
import Work from '../Work/Work';

const Home = () => {
    return (
        <div className='Container'>
            <Naver />
            <Banner />
            <Resent />
            <Development />
            <Responsive />
            <Waiting />
            <Work />
            <ContactUs />
        </div >
    );
};

export default Home;
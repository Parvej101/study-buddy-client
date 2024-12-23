import React from 'react';
import Banner from '../../Components/Banner';
import FeaturesSection from '../../Components/FeaturesSection';
import FaqSection from '../../Components/FaqSection';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturesSection></FeaturesSection>
           <FaqSection></FaqSection>
        </div>
    );
};

export default Home;
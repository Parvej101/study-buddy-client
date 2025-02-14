import React from 'react';
import Banner from '../../Components/Banner';
import FeaturesSection from '../../Components/FeaturesSection';
import FaqSection from '../../Components/FaqSection';
import LearnToGether from '../../Components/LearnToGether';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <FeaturesSection></FeaturesSection>
           <LearnToGether></LearnToGether>
           <FaqSection></FaqSection>

        </div>
    );
};

export default Home;
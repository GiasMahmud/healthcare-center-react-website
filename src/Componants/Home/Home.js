import React from 'react';
import Banner from '../Banner/Banner';
import Doctors from '../Doctors/Doctors';
import Services from '../Services/Services';
import WorkingProcess from '../WorkingProcess/WorkingProcess'
const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <WorkingProcess></WorkingProcess>
            <Services></Services>
            <Doctors></Doctors>

        </div>
    );
};

export default Home;
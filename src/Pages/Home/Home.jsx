import React from 'react';
import Hero from '../Hero/Hero';
import Skills from '../Skill/Skills';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Education></Education>
            
        </div>
    );
};

export default Home;
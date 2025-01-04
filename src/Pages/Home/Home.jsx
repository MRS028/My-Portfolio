import React from 'react';
import Hero from '../Hero/Hero';
import Skills from '../Skill/Skills';
import AboutMe from '../AboutMe/AboutMe';
import Education from '../Education/Education';
import Contact from '../Contact/Contact';
import ProjectShowcase from '../Projects/ProjectShowcase';

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <ProjectShowcase></ProjectShowcase>
            <Education></Education>
            <Contact></Contact>
            
        </div>
    );
};

export default Home;
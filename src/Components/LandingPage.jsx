import React from 'react'
import Home from './Home'
import Projects from './Projects'
import Skills from './Skills'
import NavBar from './NavBar';
import ScrollToTop from './ScrollToTop';
import Resume from './Resume';
import Contact from './Contact';

const LandingPage = () => {
    return (
        <div>
            <ScrollToTop />
            <NavBar />
            <section id="home">
                <Home />
            </section>
            <section id="skills">
                <Skills />
            </section>
            <section id="projects">
                <Projects />
            </section>
            <Resume />
            <section id="contact">
                <Contact />
            </section>


        </div>
    )
}

export default LandingPage

import React from 'react';
import styled from 'styled-components';

const HeroSection = () => {
    return <Wrapper>

        <div className="container grid grid-two-column">

            <div className="section-hero-data">

<p className="hero-top-data"> THIS IS ME</p>
<h1 className="hero-heading">Shamandeep Kaur</h1>

<p className="hero-para">I'm a Web Developer. I have passion in creating websites and learing new technologies.</p>

            </div>

            <Button className= "btn hireme-btn">
             <NavLink to="/Contact">Hire me</NavLink>
            </Button>

            <div className="section-hero-image">


            </div>
        </div>


    </Wrapper>
};

const Wrapper = styled.section``;

export default HeroSection

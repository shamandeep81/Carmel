import React from 'react'
import HeroSection from './components/HeroSection'

const About = () => {

const data = {
name: "I'm a Web Developer",
image: "./images/responsive.gif",

};



  return (
    <HeroSection  {...data}  />
  )
}

export default About;
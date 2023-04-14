import React from 'react'
import HeroSection from './components/HeroSection'





const Home = () => {


  const data = {
name: "I'm Shamandeep",
image: " ./images/monitor.gif",


  };


  return (
    <HeroSection  {... data}/>
  )
}

export default Home;
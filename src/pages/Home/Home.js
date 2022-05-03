import React from 'react'
import HeroSection from '../../components/Herosection/HeroSection';
import MainPage from '../../components/MainPage/MainContent';
import "./Home.css";
function Home() {
  return (
    <div className='home-container'>
      <HeroSection></HeroSection>
      <MainPage></MainPage>
    </div>
  )
}

export default Home
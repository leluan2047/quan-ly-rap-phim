import React from 'react'
import "./Home.scss";
import HeroSection from '../../components/Herosection/HeroSection';
import MainPage from '../../components/MainPage/MainPage';

function Home() {
  return (
    <div className='home-container'>
      <HeroSection></HeroSection>
      <MainPage></MainPage>
    </div>
  )
}

export default Home
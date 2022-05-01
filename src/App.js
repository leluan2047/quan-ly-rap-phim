import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';

import Navbar from './components/Nabvar/Navbar';
import Home from './components/pages/Home';
import MediaCard from './components/Card/MediaCard';
import MainContent from './components/MainPage/MainContent';

import HeroSection from './components/Herosection/HeroSection';



function App() {
  return (
    <div className="App">
      <Router>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
      </Router>
      <MainContent></MainContent>
    </div>
  );
}

export default App;

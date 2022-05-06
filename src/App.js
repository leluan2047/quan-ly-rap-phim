import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nabvar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Login_Register from './components/Login_Register/Login_Register';




function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login_Register />} />
         
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

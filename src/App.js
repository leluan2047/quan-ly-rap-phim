import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Nabvar/Navbar';
import Home from './pages/Home/Home';
import Footer from './components/Footer/Footer';
import Login_Register from './components/Login_Register/Login_Register';
import PersonalInfo from './pages/Account/PersonalInfo/PersonalInfo';
import Admin from './pages/Admin/Admin'
import User from './pages/User/User'
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login_Register />} />
          <Route exact path='/profile' element={<PersonalInfo />} />
          <Route exact path = '/admin' element={<Admin />}/>
          <Route exact path = '/user' element={<User />}/>
          {/* <Route exact path='/account' element={<Account />} /> */}
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

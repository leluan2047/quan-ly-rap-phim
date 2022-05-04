import React  from 'react';
import { useState } from 'react';

import Login from '../../pages/Login/Login';

import './Login_Register.scss'


import { Link } from 'react-router-dom';
import Register from '../../pages/Register/Register';

function Login_Register() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  return (
        <>
        <div className='login-register'>
            <div className='bloc-tabs'>
                <Link className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(1)} to='login' >ĐĂNG NHẬP </Link>
                <Link className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() => toggleTab(2)} to='register' >ĐĂNG KÝ</Link>
            </div>
            <div className='content-tabs'> 
                <div className={toggleState === 1 ? "content  active-content" : "content"}> 
                    <Login />     
                </div>
                <div className={toggleState === 2 ? "content  active-content" : "content"}>
                    <Register />
                </div>
            </div>
        </div>
        
        </>
    
  );
}

export default Login_Register;

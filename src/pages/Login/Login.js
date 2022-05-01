import React, { useEffect }  from 'react';
import { useState } from 'react';
import {  Router,Routes,Route,Link } from 'react-router-dom';
import './Login.css'

 function Login() {
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(false);
  // const [emailError, setEmailError] = useState('')

  const validateEmail = (passval) => {
    return passval.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
  };
  const checkEmail = () => {
    var emailval = document.getElementById('email').value
    if (validateEmail(emailval)) 
    {
      document.getElementById("erroremail").innerHTML = "";
      setEmail(true)
    } 
    else if(emailval ==="")
    {
      document.getElementById("erroremail").innerHTML = "Bạn cần điền đầy đủ thông tin";
      setEmail(false)
    }
    else
    {
      document.getElementById("erroremail").innerHTML = "Bạn đã nhập sai định dạng email";
      setEmail(false)
    }
    //return false;
  }
  const checkPassword = () =>
  {
    var passval = document.getElementById('password').value
    if (passval === "")
    {
      document.getElementById("errorpassword").innerHTML = "Bạn cần điền đầy đủ thông tin";
      setPassword(false)
    }
    else{
      document.getElementById("errorpassword").innerHTML = "";
      setPassword(true)
    }
  }
  const Validate = () =>
  {
      if(!email | !password) {alert('Bạn vui lòng nhập đúng và đầy đủ thông tin')}
      else
      {
        ////ĐĂNG NHẬP
      }
    
  }
  
  return (
    <>
    <div className="r-login" >
        <div className='cgvfc-form-login-content'>
            <form className='cgv-login-form' method='post' id='cgv-login-form'  action='#' >
                <div id='correct'></div>
                <div className='form-control'>
                  <label  >Email hoặc số điện thoại</label><br />
                  <input type='text' id='email' name='email' className='input-login' placeholder='Email hoặc số điện thoại' autoComplete='on' onBlur={checkEmail} required></input><br />
                  <p  id='erroremail'></p>
                </div>
                <div className='form-control'>
                  <label >Mật khẩu</label><br />
                  <input type='password' id='password' name='password' className='input-login' placeholder='Mật khẩu' autoComplete='off' onBlur={checkPassword} required></input><br />
                  <small></small>
                  <p id='errorpassword'></p>
                </div>
                <input type='submit' id ='cgv-btnlogin' value='Đăng nhập' onClick={(e) =>Validate(e)}></input>
                <div className='cgv-login-forgotp-link'> <Link to= "/forgot" className='href '>Bạn muốn tìm lại mật khẩu?</Link></div>      
                <div className='cgv-login-forgotp-link'></div>
               
            </form>
              {/* <Routes>
            <Route path='/forgot' element={<Forgot/>}></Route>

        </Routes> */}
        </div>
    </div>
    </>
  );
}

export default Login;

import React, { useEffect, useState } from 'react';
import { axios } from '../../axios';
import { Router, Routes, Route, Link } from 'react-router-dom';
import './Login.scss'
import { useNavigate } from 'react-router-dom';

function Login() {
  const [password, setPassword] = useState(false);
  const [username, setUsername] = useState(false);
  const [passwordvalue, setPasswordvalue] = useState("");
  const [usernamevalue, setUsernamevalue] = useState("");
  const [success, setSuccess] = useState(false)
  const navigate = useNavigate();
  //  const history = useHistory();
  // const [emailError, setEmailError] = useState('')


  const checkUsername = () => {
    var usernameval = document.getElementById('username').value
    if (usernameval === "") {
      document.getElementById("errorusername").innerHTML = "Bạn cần điền đầy đủ thông tin";
      setUsername(false)
    }
    else {
      document.getElementById("errorusername").innerHTML = "";
      setUsername(true)
    }
  }
  const checkPassword = () => {
    var passval = document.getElementById('password').value
    if (passval === "") {
      document.getElementById("errorpassword").innerHTML = "Bạn cần điền đầy đủ thông tin";
      setPassword(false)
    }
    else {
      document.getElementById("errorpassword").innerHTML = "";
      setPassword(true)
    }
  }
  // const Validate = () => {
  //   if (!username | !password) { alert('Bạn vui lòng nhập đúng và đầy đủ thông tin') }
  //   else {
  //     ////ĐĂNG NHẬP
  //   }
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    
    axios.post('/users/sign-in', { username: usernamevalue, password: passwordvalue })
      .then(result => {
        console.log(result)
        localStorage.setItem('password',passwordvalue);
        localStorage.setItem('token', result.data.token)
        localStorage.setItem('userName', result.data.user.username)
        localStorage.setItem('maUser',result.data.user.id)
        alert(result.data.message)
        if (result.data.user.type === 'admin') {
          navigate('/admin')
        }
        else {
          navigate('/user')
        }
      })
      .catch(error => {
        console.log(error)
        alert(error.response.data.message)
      }

      )
  }
  return (
    <>
      <div className="login" >
        <div className='cgvfc-form-login-content'>
          <form className='cgv-login-form' id='cgv-login-form' onSubmit={handleSubmit} >
            {/* <div id='correct'></div> */}
            <div className='form-control'>
              <label  >Username</label><br />
              <input type='text' id='username' name='username' className='input-login' placeholder='Username' autoComplete='on' onBlur={checkUsername} onChange={(e) => setUsernamevalue(e.target.value)} required></input><br />
              <p id='errorusername'></p>
            </div>
            <div className='form-control'>
              <label >Mật khẩu</label><br />
              <input type='password' id='password' name='password' className='input-login' placeholder='Mật khẩu' autoComplete='off' onBlur={checkPassword} onChange={(e) => setPasswordvalue(e.target.value)} required></input><br />
              <small></small>
              <p id='errorpassword'></p>
            </div>
            <div className='submit-login'>
              {/* <input type='submit' id ='cgv-btnlogin' value='Đăng nhập' onClick={(e) =>Validate(e)}></input> */}
              <input type='submit' id='cgv-btnlogin' value='Đăng nhập' ></input>
            </div>
            <div className='cgv-login-forgotp-link'> <Link to="/forgot" className='href '>Bạn muốn tìm lại mật khẩu?</Link></div>
            <div className='cgv-login-forgotp-link'></div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;


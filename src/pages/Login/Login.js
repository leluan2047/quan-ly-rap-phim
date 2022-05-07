import React, { useEffect,useState}  from 'react';
import {useHistory} from 'react';
import axios from 'axios';
import {  Router,Routes,Route,Link } from 'react-router-dom';
import './Login.scss'
import Account from '../Account/Account';

 function Login() {
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(false);
  const [passwordvalue, setPasswordvalue] = useState("");
  const [emailvalue, setEmailvalue] = useState("");
  const [success, setSuccess] = useState(false)

  //  const history = useHistory();
  // const [emailError, setEmailError] = useState('')
  
  const validateEmail = (emailval) => {
    return emailval.match(
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
  const handleSubmit =  (e) =>
  {
    e.preventDefault();
    console.log({emailvalue,passwordvalue})
    
    axios.post('https://reqres.in/api/login', { email: emailvalue, password: passwordvalue})
      .then(result => {
                        console.log(result) 
                         setSuccess(true)  
                      })
      .catch( error =>{    
                       console.log(error)  
                       })       
  }
  return (
    <>
    {success ?<p>
     {/* <Account></Account> */}
     Account viết chưa xong nên để tạm cái này
       </p>:(
    <div className="login" >
        <div className='cgvfc-form-login-content'>
            <form className='cgv-login-form'  id='cgv-login-form' onSubmit={handleSubmit} >
                {/* <div id='correct'></div> */}
                <div className='form-control'>
                  <label  >Email hoặc số điện thoại</label><br />
                  <input type='text' id='email' name='email' className='input-login' placeholder='Email hoặc số điện thoại' autoComplete='on' onBlur={checkEmail} onChange={(e)=>setEmailvalue(e.target.value)} required></input><br />
                  <p  id='erroremail'></p>
                </div>
                <div className='form-control'>
                  <label >Mật khẩu</label><br />
                  <input type='password' id='password' name='password' className='input-login' placeholder='Mật khẩu' autoComplete='off' onBlur={checkPassword} onChange={(e)=>setPasswordvalue(e.target.value)} required></input><br />
                  <small></small>
                  <p id='errorpassword'></p>
                </div>
                <div className='submit-login'>
                {/* <input type='submit' id ='cgv-btnlogin' value='Đăng nhập' onClick={login} onClick={(e) =>Validate(e)}></input> */}
                <input type='submit' id ='cgv-btnlogin' value='Đăng nhập' ></input>
                </div>
                <div className='cgv-login-forgotp-link'> <Link to= "/forgot" className='href '>Bạn muốn tìm lại mật khẩu?</Link></div>      
                <div className='cgv-login-forgotp-link'></div>
               
            </form>
              {/* <Routes>
            <Route path='/forgot' element={<Forgot/>}></Route>

        </Routes> */}
        </div>
    </div>)}
    </>
  );
}

export default Login;


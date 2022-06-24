import React  from 'react';
import { useState } from 'react';
import {axios} from '../../axios';
import './Register.scss'

function Register() {
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(false);
  const [name, setName] = useState(false);
  const [phone, setPhone] = useState(false);
  const [birthday, setBirthday] = useState(false);
  // const [gender, setGender] = useState(false);
  // const [username, setUsername] = useState(false);
  // const [cmnd, setCmnd] = useState(false);
  const [passwordvalue, setPasswordvalue] = useState("");
  const [emailvalue, setEmailvalue] = useState("");
  const [namevalue, setNamevalue] = useState("");
  const [phonevalue, setPhonevalue] = useState("");
  const [birthdayvalue, setBirthdayvalue] = useState("");
  const [usernamevalue, setUsernamevalue] = useState("");
  const [cmndvalue, setCmndvalue] = useState("");
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
      document.getElementById("errorpassword").innerHTML = "Bạn cần điền mật khẩu";
      setPassword(false)
    }
    else{
      document.getElementById("errorpassword").innerHTML = "";
      setPassword(true)
    }
  }
  const checkName = () =>
  {
    var nameval = document.getElementById('name').value
    if (nameval ==="") 
    {
      document.getElementById("errorname").innerHTML = "Bạn cần điền tên";
      setName(false)
    }
    else 
    {
      document.getElementById("errorname").innerHTML = "";
      setName(true)
    }
  }
  const checkPhone = () =>
  {
    var phoneval = document.getElementById('phone').value
      var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
      if(phoneval !==''){
          if (vnf_regex.test(phoneval) == false) 
          {
            document.getElementById("errorphone").innerHTML = "Số điện thoại không đúng định dạng";
            setPhone(false);
          }else{
            document.getElementById("errorphone").innerHTML = "";
            setPhone(true)
          }
      }else{
        document.getElementById("errorphone").innerHTML = "Bạn cần điền số điện thoại";
      setPhone(false)}
      
  }
  const checkBirthday = () =>
  {
    var birthdayval = document.getElementById('birthday').value
    if (birthdayval !="") 
    {
      document.getElementById("errorbirthday").innerHTML = "";
      setBirthday(true)
    }
    else 
    {
      document.getElementById("errorbirthday").innerHTML = "Bạn cần chọn ngày sinh";
      setBirthday(false)
    }
  }
  const checkUsername = () =>
  {
    ///todo
  }
  const checkCMND = () =>
  {
    //toDo
  }
  const Validate = () =>
  {
    // checkBirthday()
    // if(!email | !password | !birthday | !phone | !name ) {alert('Bạn vui lòng nhập đúng và đầy đủ thông tin')}
    // else
    //   {
    //     ////ĐĂNG KÝ
    //   }
  }
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    var gendervalue = document.querySelector("input:checked").value
    console.log({emailvalue,passwordvalue,namevalue,phonevalue,cmndvalue,usernamevalue,birthdayvalue,gendervalue})
    axios.post('/users/dang-ky', {tenKH: namevalue, gioiTinh: gendervalue, CMND: cmndvalue, SDT:phonevalue,email:emailvalue,username:usernamevalue,password:passwordvalue})
      .then(result => {
                        alert(result.data.message)               
                      })
      .catch( error =>{    
                      alert(error.message)                             
                       })       
  }
  return (
    <>
    <div className="register" >
        <div className='cgvfc-form-register-content'>
            <form className='cgv-signup-form' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
                <label for="r-fname">Tên<span>*</span></label>
                <input type="text" id="name" name="name" class="input-register" placeholder="Tên" autoComplete="on" required onBlur={checkName} onChange={(e)=>setNamevalue(e.target.value)}></input>
                <p  id='errorname'></p>
                <label for="r-phone">Số điện thoại<span>*</span></label>
                <input type="text" id="phone" name="phone" class="input-register" placeholder="Số điện thoại" autoComplete="on" required onBlur={checkPhone} onChange={(e)=>setPhonevalue(e.target.value)}></input>
                <p  id='errorphone'></p>
                <label for="r-cmnd">CMND/CCCD<span>*</span></label>
                <input type="text" id="cmnd" name="cmnd" class="input-register" placeholder="CMND/CCCD" autoComplete="on" required onBlur={checkCMND} onChange={(e)=>setCmndvalue(e.target.value)}></input>
                <p  id='errorphone'></p>
                <label for="r-email">Email<span>*</span></label>
                <input type="text" id="email" name="email" class="input-register" placeholder="Email" autoComplete="on" required onBlur={checkEmail} onChange={(e)=>setEmailvalue(e.target.value)}></input>
                <p  id='erroremail'></p>
                <label for="r-username">Username<span>*</span></label>
                <input type="text" id="username" name="username" class="input-register" placeholder="Username" autoComplete="on" required onBlur={checkUsername} onChange={(e)=>setUsernamevalue(e.target.value)}></input>
                <p  id='erroremail'></p>
                <label for="r-password">Mật khẩu<span>*</span></label>
                <input type="password" id="password" name="password" class="input-register" placeholder="Mật khẩu" autoComplete="new-password"  required onBlur={checkPassword} onChange={(e)=>setPasswordvalue(e.target.value)}></input>
                <p  id='errorpassword'></p>
                <label for="r-birthday">Ngày sinh<span>*</span></label><br></br>
                <input class="input-register"  type='date' id='birthday'name='birthday' autoComplete="off" onChange={(e) => setBirthdayvalue(e.target.value)}></input>
                <p  id='errorbirthday'></p>
                <label for="r-fgender" class="gender-title">Giới tính<span>*</span> </label>
                <br></br>
                <label><input type="radio" name="gender" id="gender" value="Nam" class="input-register1"  ></input>Nam</label>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;            
                <label><input class = 'input-register1' type="radio" name="gender" id="gender" value="Nữ" required />Nữ</label><br/>
                <p  id='errorgender'></p>
            <div className='submit-register'>
            <input type='submit' id ='cgv-btnlogin'  onClick={(e) =>Validate(e)} value='Đăng ký'></input>
            </div>
            </form>
        </div> 
    </div>  
    </>
  );
}
export default Register;

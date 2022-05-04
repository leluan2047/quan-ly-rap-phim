import React  from 'react';
import { useState } from 'react';
//import logo from './logo.svg';
//import './App.css';
import './Register.scss'

function Register() {
  const [password, setPassword] = useState(false);
  const [email, setEmail] = useState(false);
  const [name, setName] = useState(false);
  const [phone, setPhone] = useState(false);
  const [birthday, setBirthday] = useState(false);
  const [gender, setGender] = useState(false);
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
    console.log(nameval)
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
    console.log(phoneval)
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
    console.log(birthdayval)
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
  const Validate = () =>
  {
  var x = document.form.r-gender;
  for (var i=0; i<x.length;i++)
  {
    if(x[i].checked )
    {
      setGender(true)
      break;
    }
    else
    {
      document.getElementById("errorgender").innerHTML = "Bạn cần chọn giới tính";
    }
  }
    if(!email | !password | !birthday | !phone | !name | !gender) {alert('Bạn vui lòng nhập đúng và đầy đủ thông tin')}
    else
      {
        ////ĐĂNG KÝ
      }
      
    
  }
  return (
    <>
    
    <div className="register" >
        <div className='cgvfc-form-register-content'>
            <form className='cgv-signup-form' method='post' name = 'cgv-signup-form' id='cgv-signup-form' action='#'>
            
                {/* <label for="r-fname">Tên<span>*</span></label>
                <input type="text" id="name" name="name" class="input-register" placeholder="Tên" autocomplete="on" required > </input>
                <p  id='errorname'></p> */}
                <label for="r-fname">Tên<span>*</span></label>
                <input type="text" id="name" name="name" class="input-register" placeholder="Tên" autoComplete="on" required onBlur={checkName} ></input>
                <p  id='errorname'></p>
                <label for="r-phone">Số điện thoại<span>*</span></label>
                <input type="text" id="phone" name="phone" class="input-register" placeholder="Số điện thoại" autoComplete="on" required onBlur={checkPhone}></input>
                <p  id='errorphone'></p>
                <label for="r-email">Email<span>*</span></label>
                <input type="text" id="email" name="email" class="input-register" placeholder="Email" autoComplete="on" required onBlur={checkEmail}></input>
                <p  id='erroremail'></p>
                <label for="r-password">Mật khẩu<span>*</span></label>
                <input type="password" id="password" name="password" class="input-register" placeholder="Mật khẩu" autoComplete="new-password"  required onBlur={checkPassword}></input>
                <p  id='errorpassword'></p>
                <label for="r-birthday">Ngày sinh<span>*</span></label><br></br>
                <input class="input-register"  type='date' id='birthday'name='birthday' autoComplete="off" onChange={checkBirthday}></input>
                <p  id='errorbirthday'></p>
                <label for="r-fname" class="gender-title">Giới tính<span>*</span> </label>
                <br></br>
                <label><input type="radio" name="r-gender" id="r-gender" value="1" class="input-register1" ></input>Nam</label>&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;            
                <label><input class = 'input-register1' type="radio" name="r-gender" id="r-gender" value="2" required/>Nữ</label><br/>
                <p  id='errorgender'></p>
                <label for="r-city" >Khu vực<span>*</span>&emsp;</label>
                <select id="r-city" name="r-city" class = 'input-register1' onchange="validateForm(this.id,'city')">
                <option value=""  >Khu vực</option>
                                                                    <option value="65">Hồ Chí Minh</option>
                                                                    <option value="64">Hà Nội</option>
                                                                    <option value="60">Đà Nẵng</option>
                                                                    <option value="48">Cần Thơ</option>
                                                                    <option value="39">Đồng Nai</option>
                                                                    <option value="62">Hải Phòng</option>
                                                                    <option value="13">Quảng Ninh</option>
                                                                    <option value="43">Bà Rịa-Vũng Tàu</option>
                                                                    <option value="31">Bình Định</option>
                                                                    <option value="57">Bình Dương</option>
                                                                    <option value="33">Đắk Lắk</option>
                                                                    <option value="51">Trà Vinh</option>
                                                                    <option value="06">Yên Bái</option>
                                                                    <option value="49">Vĩnh Long</option>
                                                                    <option value="47">Kiên Giang</option>
                                                                    <option value="73">Hậu Giang</option>
                                                                    <option value="23">Hà Tĩnh</option>
                                                                    <option value="32">Phú Yên</option>
                                                                    <option value="58">Bình Phước</option>
                                                                    <option value="40">Bình Thuận</option>
                                                                    <option value="59">Cà Mau</option>
                                                                    <option value="04">Cao Bang</option>
                                                                    <option value="72">Dak Nong</option>
                                                                    <option value="71">Dien Bien</option>
                                                                    <option value="45">Đồng Tháp</option>
                                                                    <option value="54">Bac Giang</option>
                                                                    <option value="30">Gia Lai</option>
                                                                    <option value="44">An Giang</option>
                                                                    <option value="55">Bac Lieu</option>
                                                                    <option value="03">Ha Giang</option>
                                                                    <option value="63">Ha Nam</option>
                                                                    <option value="53">Bac Cạn</option>
                                                                    <option value="56">Bac Ninh</option>
                                                                    <option value="50">Ben Tre</option>
                                                                    <option value="15">Ha Tay</option>
                                                                    <option value="61">Hai Duong</option>
                                                                    <option value="14">Hoa Binh</option>
                                                                    <option value="66">Hưng Yên</option>
                                                                    <option value="34">Khánh Hòa</option>
                                                                    <option value="28">Kon Tum</option>
                                                                    <option value="01">Lai Chau</option>
                                                                    <option value="35">Lam Dong</option>
                                                                    <option value="09">Lạng Sơn</option>
                                                                    <option value="02">Lao Cai</option>
                                                                    <option value="41">Long An</option>
                                                                    <option value="67">Nam Dinh</option>
                                                                    <option value="22">Nghệ An</option>
                                                                    <option value="18">Ninh Binh</option>
                                                                    <option value="36">Ninh Thuan</option>
                                                                    <option value="68">Phú Thọ</option>
                                                                    <option value="24">Quảng Binh</option>
                                                                    <option value="27">Quảng Nam</option>
                                                                    <option value="29">Quảng Ngãi</option>
                                                                    <option value="25">Quảng Tri</option>
                                                                    <option value="52">Sóc Trăng</option>
                                                                    <option value="05">Sơn La</option>
                                                                    <option value="37">Tây Ninh</option>
                                                                    <option value="20">Thai Binh</option>
                                                                    <option value="69">Thái Nguyên</option>
                                                                    <option value="21">Thanh Hoa</option>
                                                                    <option value="26">Thua Thien-Hue</option>
                                                                    <option value="46">Tiền Giang</option>
                                                                    <option value="07">Tuyen Quang</option>
                                                                    <option value="70">Vinh Phuc</option>

                </select>
                <br></br>
                <br></br>
                <label for="r-city">Rạp yêu thích<span>*</span>&emsp;</label>
                                               <select id="prefersite" name="prefersite" class = 'input-register1' onchange="validateForm(this.id,'prefersite')">
                            <option value="">Rạp yêu thích</option>
                            <option value="017">CGV Aeon Canary</option>
                            <option value="090">CGV Aeon Ha Dong</option>
                            <option value="098">CGV Aeon Hai Phong</option>
                            <option value="027">CGV Aeon Long Bien</option>
                            <option value="034">CGV Aeon Mall Binh Tan</option>
                            <option value="012">CGV Aeon Tan Phu</option>
                            <option value="019">CGV Big C Dong Nai</option>
                            <option value="074">CGV Big C My Tho</option>
                            <option value="072">CGV Big C Nha Trang</option>
                            <option value="016">CGV Binh Duong Square</option>
                            <option value="026">CGV Buon Ma Thuot</option>
                              </select>

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

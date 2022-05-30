import React, { useState,useEffect } from 'react'
import {axios} from '../../../axios'
import './PersonalInfo.scss'
function PersonalInfo() {
  const [show, setShow] = useState(false)
  const [oldpass,setOldpass] = useState("")
  const [profile,setProfile] = useState([])
  
  // constructor() {
  //   super();

  //   this.state = { checked: false };
  //   this.handleChange = this.handleChange.bind(this);
  // }

  useEffect( () =>
  {
  
      async function fetchData()
      {
           await axios.get('/users/me')
          .then( res => {
                       
                          const currentUser = res.data
                          console.log(currentUser)
                          setProfile(res.data)
                          // setValue(currentUser.data);   
                          // console.log(value.name)
                          })
              .catch(err =>{
                  console.log(err)
                 
              } );
      }
      fetchData()
     
  },[] 
)

  const handleChange = () => {
    if (show==false)
    setShow(true)
    else{setShow(false)}
    }
  
  const content = show ?<div>
    <div class="old_password">
      <label for="region_id" class="required ">Mật khẩu cũ&nbsp;<span>*</span></label>
      <div class="input-box">
      <input type='text' value='Binh Son'></input>
      </div>	
    </div>
    <div class="new_password">
      <label for="region_id" class="required ">Mật khẩu mới&nbsp;<span>*</span></label>
      <div class="input-box">
      <input type='text' value='Binh Son'></input>
      </div>	
    </div>
    <div class="re_password">
      <label for="region_id" class="required ">Nhập lại mật khẩu mới&nbsp;<span>*</span></label>
      <div class="input-box">
      <input type='text' value='Binh Son'></input>
      </div>	
    </div>
  </div>: null;
  return (
    
    <>
  
    <div className='personal'>
      <div className='page-title'>
        <h1 >THÔNG TIN CÁ NHÂN</h1>
      </div>
      <form action="https://www.cgv.vn/default/customer/account/editPost/" method="post" autocomplete="off" id="form-validate" class="form-PersonnalInfo" enctype="multipart/form-data">
        <div className='div1'>
        <div className='div_left'>
              <div class="customer-name">
                <label for="fullname" class="required">Tên&nbsp;<span>*</span></label>
                <div class="input-box">
                <input type="text" id="fullname" name="fullname" value="Đặng Thị Tú Khuyên" title="" placeholder="" maxlength="255" class="input-text required-entry"></input>
                </div>
              </div>
			        <div>
                <label for="telephone" class="required">Điện thoại&nbsp;<span>*</span></label>
                <div class="input-box">
                <input type="tel" autocapitalize="off" autocorrect="off" name="telephone" id="telephone" value="0385627734" title="Phone Number" class="input-text validate-mobile required-entry"></input>
                </div>
              </div>
						  <div>
                <label for="gender" class="required">Giới tính&nbsp;<span>*</span></label>
                <div class="input-box">
								<input type="radio" name="gender" value="1"/>Nam&emsp;
                <input type="radio" name="gender" value="2" checked="checked"/>Nữ
			          </div>
              </div>
						<div>
              <label for="month">Ngày sinh&nbsp;<span>*</span></label>
					    <div>
                <input type='date'></input>
						  </div>
				   
            </div>
            <div>
              <label for="cmnd" class="required">CMND/CCCD&nbsp;<span>*</span></label>
              <div class="input-box">
              <input type='text' value={profile.username} readOnly></input>
              </div>
            </div>
			      <div>
              <label for="email" class="required">Địa chỉ email&nbsp;<span>*</span></label>
              <div class="input-box">
              <input type='text' value='tukhuyen2000@gmail.com ' readOnly></input>
              </div>
            </div>
           </div>
           <div className='div_right'> 
            <div class="field field-country-first">
              <label for="region_id" class="required ">Thành phố/Tỉnh&nbsp;<span>*</span></label>
              <div class="input-box validation-passed">
                <select id="region_id" name="region_id" title="Tỉnh/Tp" class="validate-select validation-passed">
                  <option value="">Vui lòng chọn...</option></select>
              </div>	
            </div>	   
            <div class="field field-country-first">
              <label for="region_id" class="required ">Địa chỉ&nbsp;<span>*</span></label>
              <div class="input-box">
              <input type='text' value='Binh Son'></input>
              </div>	
            </div>
            <div class="change_password">
              <div class="input-box">
              <input type="checkbox" name="change_password" id="change_password" value="1"  class="checkbox" checked={ show } 
          onChange={(e) =>handleChange(e)}></input>
              <label >Tôi muốn thay đổi mật khẩu</label>
              </div>	
            </div>
            {content}
            <div id='change' className='change'>
            <div class="old_password">
              <label for="region_id" class="required ">Mật khẩu cũ&nbsp;<span>*</span></label>
              <div class="input-box">
              <input type='text' value='Binh Son'></input>
              </div>	
            </div>
            <div class="new_password">
              <label for="region_id" class="required ">Mật khẩu mới&nbsp;<span>*</span></label>
              <div class="input-box">
              <input type='text' value='Binh Son'></input>
              </div>	
            </div>
            <div class="re_password">
              <label for="region_id" class="required ">Nhập lại mật khẩu mới&nbsp;<span>*</span></label>
              <div class="input-box">
              <input type='text' value='Binh Son'></input>
              </div>	
            </div>
            </div>
            </div>
            </div>
            <div className='div2'>
            <div className='option_info'>
              <h3>THÔNG TIN TÙY CHỌN</h3>
              <hr></hr>
              <div className='save'>
              <button type="submit" title="Lưu lại" class="button_save" >Lưu lại</button>
              </div>
              
              <a className='back_link' href='#'>
              <small>« </small> Quay lại
              </a>
            </div>
            </div>
  </form>
  </div>
    
    </>
  )
}

export default PersonalInfo

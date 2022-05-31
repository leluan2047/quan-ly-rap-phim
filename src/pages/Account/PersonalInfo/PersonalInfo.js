import React, { useState,useEffect } from 'react'
import {axios} from '../../../axios'
import './PersonalInfo.scss'
import { getProfile } from '../../../Service/Staff_service';
function PersonalInfo() {
  const [show, setShow] = useState(false)
  const [oldpass,setOldpass] = useState("")
  const [profile,setProfile] = useState([])
  const [tenKH, setTenKH] =useState("")
  const [gioiTinh, setGioiTinh] =useState("")
  const [CMND, setCMND] =useState("")
  const [SDT, setSDT] =useState("")
  useEffect( () =>
  {
      async function fetchData()
      {
        
          let res = await getProfile();
          setTenKH(res.data.khachHang.tenKH)
          setGioiTinh(res.data.khachHang.gioiTinh)
          setCMND(res.data.khachHang.CMND)
          setSDT(res.data.khachHang.SDT)
          console.log(res.data)
          setProfile(res.data)
      }
      fetchData()
  },[] )   
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
            <div>
              <label for="username" class="required">Username&nbsp;<span>*</span></label>
              <div class="input-box">
              <input type='text' defaultValue={profile.username} readOnly></input>
              </div>
            </div>
              <div class="customer-name">
                <label for="fullname" class="required">Tên&nbsp;<span>*</span></label>
                <div class="input-box">
                <input type="text" id="fullname" name="fullname" defaultValue={tenKH}  title="" placeholder="" maxlength="255" class="input-text required-entry"></input>
                </div>
              </div>
			        <div>
                <label for="telephone" class="required">Điện thoại&nbsp;<span>*</span></label>
                <div class="input-box">
                <input type="tel" autocapitalize="off" autocorrect="off"  defaultValue={SDT} name="telephone" id="telephone" title="Phone Number" class="input-text validate-mobile required-entry"></input>
                </div>
              </div>
						  <div>
                <label for="gender" class="required">Giới tính&nbsp;<span>*</span></label>
                
                <div class="input-box">
								<input type="radio" name="gender" value="1"/>Nam&emsp;
                <input type="radio" name="gender" value="2" checked="checked"/>Nữ
			          </div>
              </div>
           
			      
           </div>
           <div className='div_right'> 
           <div>
              <label for="cmnd" class="required">CMND/CCCD&nbsp;<span>*</span></label>
              <div class="input-box">
              <input type='text' defaultValue={CMND}   readOnly></input>
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

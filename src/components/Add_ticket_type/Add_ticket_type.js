import React  from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Add_ticket_type.scss'

function Add_ticket_type() {
  const [maloaive,setMaloaive]= useState("")
  const [tenloaive,setTenloaive] = useState("")
  const [trangthai,setTrangthai] =  useState("")
  const [giave,setGiave] =  useState("")
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    var price = parseInt(giave).toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
    console.log(price,maloaive,tenloaive,trangthai);
    // if(!isNaN(giave))  alert("dung r")
    // else alert("sai rof")
  }
  const checkPrice = () =>
  {
     //tra ve false neu la so
     if(!isNaN(giave)) document.getElementById('errorgiave').innerHTML = ''
     else document.getElementById('errorgiave').innerHTML = 'Vui lòng chọn đúng giá vé' 
  }
  return (
    <>
    <div className="add-ticket-type" >
    <div className='title-add-ticket-type'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div>
            <form className='form-add-ticket-type' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
                <label for="maloaive">Mã loại vé<span>*</span></label>
                <input type="text" id="maloaive" name="maloaive" class="input-add" placeholder="Mã loại vé" required  onChange={(e) => setMaloaive(e.target.value)}></input>
                <label for="tenloaive">Tên loại vé<span>*</span></label>
                <select name="tenloaive" id="tenloaive" onChange={(e) => setTenloaive(e.target.value)}required>
                <option value="">Chọn loại vé</option>
                  <option value="sv">Vé sinh viên</option>
                  <option value="adult">Vé người lớn</option>
                  <option value="child">Vé trẻ em</option>
                </select>
                <label for="trangthai">Trạng thái<span>*</span></label>
                <select name="trangthai" id="trangthai" onChange={(e) => setTrangthai(e.target.value)} required>
                <option value="" >Chọn trạng thái</option>
                  <option value="doing">Đang chiếu</option>
                  <option value="not">Ngưng chiếu</option>      
                </select>
                <label for="giave">Giá vé(VNĐ) <span>*</span></label>
                <input type="text" id="giave" name="giave" class="input-add" placeholder="Giá vé" required onBlur={checkPrice} onChange={(e) => setGiave(e.target.value)}></input>
                <p id='errorgiave'></p>
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new ticket type'></input>
            </div>
            </form>
    </div>
    
    </>
  );
}
export default Add_ticket_type;

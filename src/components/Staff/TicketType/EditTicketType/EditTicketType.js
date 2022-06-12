import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './EditTicketType.scss'

function EditTicketType({ticketType}) {
  //const [id,setID]= useState(ticketType.id)
  const [tenLoaiVe,setTenloaiVe]= useState(ticketType.tenLoaiVe)
  const [giaVe,setGiaVe]= useState(ticketType.giaVe)
  const [trangThai,setTrangThai]= useState(ticketType.trangThai)


  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(ticketType);
    axios.put(`/ticketType/${ticketType.id}`, {tenLoaiVe: tenLoaiVe,giaVe: giaVe, trangThai:trangThai})
      .then(result => {
                        alert(result.data.message)   
                             
                      })
      .catch( error =>{    
                       console.log(error)     
                       })       
  }
  return (
    <>
    <div className="edittickettype" >
    {/* <div className='title-createcategory'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div> */}
            <form className='formedittickettype' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
            <label for="tenloaive">Tên loại vé<span>*</span></label>
                <select name="tenloaive" id="tenloaive" defaultValue={tenLoaiVe}  onChange={(e) => setTenloaiVe(e.target.value)}required>
                <option value="">--Chọn loại vé--</option>
                  <option value="sv">Vé VIP</option>
                  <option value="adult">Vé người lớn</option>
                  <option value="child">Vé trẻ em</option>
                </select>
                <label for="giave">Giá vé(VNĐ) <span>*</span></label>
                <input type="text" id="giave" name="giave" class="input-add" placeholder="Giá vé" required  defaultValue={giaVe} onChange={(e) => setGiaVe(e.target.value)}></input>   
                <label for="trangthai">Trạng thái<span>*</span></label>
                <select name="trangthai" id="trangthai"onChange={(e) => setTrangThai(e.target.value)} value={trangThai}>
                 <option value="active">active</option>
                 <option value="deleted">deleted</option>
                </select>
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Edit ticket type'></input>
            </div>
            </form>
    </div>
    </>
  );
}
export default EditTicketType;

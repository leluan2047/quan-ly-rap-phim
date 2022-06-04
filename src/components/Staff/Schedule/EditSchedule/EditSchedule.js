import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './EditSchedule.scss'

function EditSchedule({schedule}) {
  const [maphong,setMaphong]= useState(schedule.maPhong)
  const [maphim,setMaphim]= useState(schedule.maPhim)
  const [ngaychieu,setNgaychieu]= useState(schedule.ngayChieu)
  const [trangthai,setTrangthai]= useState("Chuẩn bị chiếu")
  console.log(schedule)

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(ngaychieu,maphim,maphong,trangthai);
    axios.put(`/schedule/${schedule.id}`, {maPhong: maphong, maPhim:maphim, ngayChieu: ngaychieu, trangThai:trangthai})
      .then(result => {
                        console.log(result)   
                        alert(result.data.message)           
                      })
      .catch( error =>{    
                       alert(error.response.data.message) 
                       })       
  }
  return (
    <>
    <div className="createschedule" >
    {/* <div className='title-createschedule'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div> */}
            <form className='formcreateschedule' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
            
                <label for="maphong">Mã phòng<span>*</span></label>
                <input type="text" id="maphong" name="maphong" class="input-add" placeholder="Mã phòng" required  defaultValue={maphong} onChange={(e) => setMaphong(e.target.value)}></input>
                <label for="maphim">Mã phim<span>*</span></label>
                <input type="text" id="maphim" name="maphim" class="input-add" placeholder="Mã phim" required   defaultValue={maphim} onChange={(e) => setMaphim(e.target.value)}></input>
                <label for="ngaychieu">Ngày chiếu<span>*</span></label>
                <input type="datetime-local" id="ngaychieu" name="ngaychieu" class="input-add" placeholder="Ngày chiếu" required defaultValue={ngaychieu} onChange={(e) => setNgaychieu(e.target.value)}></input>
                <label for="trangthai">Trạng thái<span>*</span></label>
                <select name="trangthai" id="trangthai"onChange={(e) => setTrangthai(e.target.value)} value={trangthai}>
                 <option value="Chuẩn bị chiếu">Chuẩn bị chiếu</option>
                 <option value="Đã chiếu">Đã chiếu</option>
                </select>
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Edit schedule'></input>
            </div>
            </form>
    </div>
    
    </>
  );
}
export default EditSchedule;

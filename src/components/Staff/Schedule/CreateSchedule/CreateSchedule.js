import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './CreateSchedule.scss'

function CreateSchedule() {
  const [maphong,setMaphong]= useState("")
  const [maphim,setMaphim]= useState("")
  const [ngaychieu,setNgaychieu]= useState("")
  const handleSubmit = (e) =>
  {
    e.preventDefault();
    console.log(ngaychieu);
    axios.post('/schedule', {maPhong: maphong,maPhim: maphim, ngayChieu:ngaychieu})
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
    {/* <div className='title-createcategory'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div> */}
            <form className='formcreateschedule' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
                <label for="maphong">Mã phòng<span>*</span></label>
                <input type="text" id="maphong" name="maphong" class="input-add" placeholder="Mã phòng" required  onChange={(e) => setMaphong(e.target.value)}></input>
                <label for="maphim">Mã phim<span>*</span></label>
                <input type="text" id="maphim" name="maphim" class="input-add" placeholder="Mã phim" required  onChange={(e) => setMaphim(e.target.value)}></input>
                <label for="ngaychieu">Ngày chiếu<span>*</span></label>
                <input type="datetime-local" id="ngaychieu" name="ngaychieu" class="input-add" placeholder="Ngày chiếu" required  onChange={(e) => setNgaychieu(e.target.value)}></input>
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new schedule'></input>
            </div>
            </form>
    </div>
    
    </>
  );
}
export default CreateSchedule;

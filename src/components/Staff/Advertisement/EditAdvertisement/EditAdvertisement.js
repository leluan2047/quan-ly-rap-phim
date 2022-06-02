import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './EditAdvertisement.scss'

function EditAdvertisement({ad}) {
  const [maphim,setMaphim]= useState(ad.maPhim)
  const [tenqc,setTenqc]= useState(ad.tenQuangCao)
  const [noidung,setNoidung]= useState(ad.noiDung)
  const [timeStart,setTimeStart]= useState(ad.timeStart)
  const [timeEnd,setTimeEnd]= useState(ad.timeEnd)

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    axios.put(`/advertisement/${ad.id}`, {maPhim:maphim, tenQuangCao:tenqc, noiDung:noidung, timeStart: timeStart, timeEnd: timeEnd})
      .then(result => {
                        console.log(result)   
                        alert(result.data.message)           
                      })
      .catch( error =>{    
                       alert(error.message)     
                       })       
  }
  return (
    <>
    <div className="createads" >
    {/* <div className='title-createads'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div> */}
            <form className='formcreateads' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
            <label for="maphim">Mã phim<span>*</span></label>
                <input type="text" id="maphim" name="maphim" class="input-add" placeholder="Mã phim" required defaultValue={maphim} onChange={(e) => setMaphim(e.target.value)}></input>
                <label for="tenqc">Tên quảng cáo<span>*</span></label>
                <input type="text" id="tenqc" name="tenqc" class="input-add" placeholder="Tên quảng cáo" required defaultValue={tenqc} onChange={(e) => setTenqc(e.target.value)}></input>
                <label for="noidung">Nội dung<span>*</span></label>
                <input type="text" id="noidung" name="noidung" class="input-add" placeholder="Nội dung" required defaultValue={noidung} onChange={(e) => setNoidung(e.target.value)}></input>
                <label for="timestart">Thời gian bắt đầu<span>*</span></label>
                <input type="datetime-local" id="timestart" name="timestart" class="input-add"  required defaultValue={timeStart} onChange={(e) => setTimeStart(e.target.value)}></input>
                <label for="timeend">Thời gian kết thúc<span>*</span></label>
                <input type="datetime-local" id="timeend" name="timeend" class="input-add"  required defaultValue={timeEnd}  onChange={(e) => setTimeEnd(e.target.value)}></input>
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new category'></input>
            </div>
            </form>
    </div>
    
    </>
  );
}
export default EditAdvertisement;

import React  from 'react';
import { useState } from 'react';
import {axios} from '../../../../axios';
import './CreateTicket.scss'

function CreateTicket() {
  const [maloaive,setMaloaive]= useState("")
  const [masuatchieu,setMasuatchieu] = useState("")
  const [maphong,setMaphong] =  useState("")
  const [maphim,setMaphim] =  useState("")
  const [maghe,setMaghe] =  useState("")
  const [ngaymua,setNgaymua] =  useState("")
  
  const handleSubmit = (e) =>
  {
    e.preventDefault();
     axios.post('/ticket', {maSuatChieu: masuatchieu, maLoaiVe: maloaive, maPhong: maphong, maPhim:maphim, ngayMua: ngaymua})
      .then(result => {
                        console.log(result.data.message) 
                        alert(result.data.message)
                      })
      .catch( error =>{    
                       alert(error.message)  
                                 
                       })  
  }
  return (
    <>
    <div className="add-ticket" >
    {/* <div className='title-add-ticket'>
        <h1 >ADD&ensp;TICKET</h1>
      </div> */}
            <form className='form-add-ticket' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
                <label for="maloaive">Mã loại vé<span>*</span></label>
                <input type="text" id="maloaive" name="maloaive" class="input-add" placeholder="Mã loại vé" required  onChange={(e) => setMaloaive(e.target.value)}></input>
                <label for="masuatchieu">Mã suất chiếu<span>*</span></label>
                <input type="text" id="masuatchieu" name="masuatchieu" class="input-add" placeholder="Mã suất chiếu" required  onChange={(e) => setMasuatchieu(e.target.value)}></input> 
                <label for="maphong">Mã phòng <span>*</span></label>
                <input type="text" id="maphong" name="maphong" class="input-add" placeholder="Mã phòng" required  onChange={(e) => setMaphong(e.target.value)}></input>
                <label for="maphim">Mã phim <span>*</span></label>
                <input type="text" id="maphim" name="maphim" class="input-add" placeholder="Mã phim" required  onChange={(e) => setMaphim(e.target.value)}></input>
                {/* <label for="maghe">Mã ghế <span>*</span></label>
                <input type="text" id="maghe" name="maghe" class="input-add" placeholder="Mã ghế" required  onChange={(e) => setMaghe(e.target.value)}></input> */}
                <label for="ngaymua">Ngày mua <span>*</span></label>
                <input type="datetime-local" id="maghe" name="maghe" class="input-add" required  onChange={(e) => setNgaymua(e.target.value)}></input>
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Add new ticket'></input>
            </div>
            </form>
      
    
    </div>
    
    </>
  );
}

export default CreateTicket;

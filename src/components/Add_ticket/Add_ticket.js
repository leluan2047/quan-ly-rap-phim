import React  from 'react';
import { useState } from 'react';
import axios from 'axios';
import './Add_ticket.scss'

function Add_ticket() {
  const [mave,setMave]= useState("")
  const [masuatchieu,setMasuatchieu] = useState("")
  const [loaive,setLoaive] =  useState("")
  const [maphong,setMaphong] =  useState("")
  const [maphim,setMaphim] =  useState("")
  const [maghe,setMaghe] =  useState("")
  const [ngaymua,setNgaymua] =  useState("")
  
  const handleSubmit = (e) =>
  {
    e.preventDefault();
     console.log({mave,masuatchieu,loaive,maphong,maphim,maghe,ngaymua})
  }
  return (
    <>
    <div className="add-ticket" >
    <div className='title-add-ticket'>
        <h1 >ADD&ensp;TICKET</h1>
      </div>
            <form className='form-add-ticket' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
                <label for="mave">Mã vé<span>*</span></label>
                <input type="text" id="mave" name="mave" class="input-add" placeholder="Mã vé" required  onChange={(e) => setMave(e.target.value)}></input>
                <label for="masuatchieu">Mã suất chiếu<span>*</span></label>
                <input type="text" id="masuatchieu" name="masuatchieu" class="input-add" placeholder="Mã suất chiếu" required  onChange={(e) => setMasuatchieu(e.target.value)}></input>
                <label for="loaive">Loại vé<span>*</span></label>
                <select name="loaive" id="loaive" onChange={(e) => setLoaive(e.target.value)}>
                  <option value="1">Vé thường</option>
                  <option value="0">Vé VIP</option>
                </select>
                <label for="maphong">Mã phòng <span>*</span></label>
                <input type="text" id="maphong" name="maphong" class="input-add" placeholder="Mã phòng" required  onChange={(e) => setMaphong(e.target.value)}></input>
                <label for="maphim">Mã phim <span>*</span></label>
                <input type="text" id="maphim" name="maphim" class="input-add" placeholder="Mã phim" required  onChange={(e) => setMaphim(e.target.value)}></input>
                <label for="maghe">Mã ghế <span>*</span></label>
                <input type="text" id="maghe" name="maghe" class="input-add" placeholder="Mã ghế" required  onChange={(e) => setMaghe(e.target.value)}></input>
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

export default Add_ticket;

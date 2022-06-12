import React  from 'react';
import { axios } from '../../../../axios';
import { useState } from 'react';
import './EditTicket.scss'

function EditTicket({ticket}) {
  const [maloaive,setMaloaive]= useState(ticket.maLoaiVe)
  const [masuatchieu,setMasuatchieu] = useState(ticket.maSuatChieu)
  const [maphong,setMaphong] =  useState(ticket.maPhong)
  const [maphim,setMaphim] =  useState(ticket.maPhim)
  const [ngaymua,setNgaymua] =  useState(ticket.ngayMua)
  const [trangthai,setTrangthai] =  useState(ticket.trangThai)

  const handleSubmit = (e) =>
  {
    e.preventDefault();
    axios.put(`/ticket/${ticket.id}`, {maSuatChieu: masuatchieu, maLoaiVe: maloaive, maPhong: maphong, maPhim:maphim, ngayMua: ngaymua, trangThai: trangthai})
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
    <div className="edit-ticket" >
    {/* <div className='title-edit-ticket'>
        <h1 >EDIT&ensp;TICKET</h1>
      </div> */}
            <form className='form-edit-ticket' name = 'cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
            <label for="maloaive">Mã loại vé<span>*</span></label>
                <input type="text" id="maloaive" name="maloaive" class="input-add" placeholder="Mã loại vé" required  onChange={(e) => setMaloaive(e.target.value)} defaultValue={maloaive}></input>
                <label for="masuatchieu">Mã suất chiếu<span>*</span></label>
                <input type="text" id="masuatchieu" name="masuatchieu" class="input-add" placeholder="Mã suất chiếu" required  onChange={(e) => setMasuatchieu(e.target.value)} defaultValue={masuatchieu}></input> 
                <label for="maphong">Mã phòng <span>*</span></label>
                <input type="text" id="maphong" name="maphong" class="input-add" placeholder="Mã phòng" required  onChange={(e) => setMaphong(e.target.value)} defaultValue={maphong}></input>
                <label for="maphim">Mã phim <span>*</span></label>
                <input type="text" id="maphim" name="maphim" class="input-add" placeholder="Mã phim" required  onChange={(e) => setMaphim(e.target.value)} defaultValue={maphim}></input>
                {/* <label for="maghe">Mã ghế <span>*</span></label>
                <input type="text" id="maghe" name="maghe" class="input-add" placeholder="Mã ghế" required  onChange={(e) => setMaghe(e.target.value)}></input> */}
                <label for="ngaymua">Ngày mua <span>*</span></label>
                <input type="datetime-local" id="maghe" name="maghe" class="input-add" required  onChange={(e) => setNgaymua(e.target.value)} defaultValue={ngaymua}></input>
                <label for="trangthai">Trạng thái<span>*</span></label>
                <select name="trangthai" id="trangthai"onChange={(e) => setTrangthai(e.target.value)} value={trangthai}>
                 <option value="active">active</option>
                 <option value="deleted">deleted</option>
                </select>
            <div className='submit-add'>
            <input type='submit' id ='cgv-btnlogin'  value='Edit ticket'></input>
            </div>
            </form>
      
    
    </div>
    
    </>
  );
}

export default EditTicket;

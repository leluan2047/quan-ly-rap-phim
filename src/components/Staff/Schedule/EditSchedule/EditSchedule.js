import React, { useEffect } from 'react';
import { useState } from 'react';
import { axios } from '../../../../axios';
import './EditSchedule.scss'
import moment from 'moment'

function EditSchedule({ schedule }) {

  const [maphong, setMaphong] = useState(schedule.phongChieu.id)
  const [maphim, setMaphim] = useState(schedule.phim.id)
  const [ngaychieu, setNgaychieu] = useState(moment.utc(schedule.ngayChieu).format('YYYY-MM-DDTHH:mm:ss'))
  const [trangthai, setTrangthai] = useState("Chuẩn bị chiếu")

  const [danhSachPhong, setDanhSachPhong] = useState([]);
  const [danhSachPhim, setDanhSachPhim] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(ngaychieu, maphim, maphong, trangthai);
    axios.put(`/schedule/${schedule.id}`, {
      maPhong: maphong,
      maPhim: maphim,
      ngayChieu: ngaychieu,
      trangThai: trangthai
    })
      .then(result => {
        console.log(result)
        alert(result.data.message)
      })
      .catch(error => {
        alert(error.response.data.message)
      })
  }

  const getData = () => {
    axios
      .get('/rooms')
      .then(res => {
        setDanhSachPhong(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get('/movies')
      .then(res => {
        setDanhSachPhim(res.data)

      })
      .catch(err => {
        console.log(err)
      })

  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <div className="createschedule" >
        {/* <div className='title-createschedule'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div> */}
        <form className='formcreateschedule' name='cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >

          <label for="maphong">Tên phòng<span>*</span></label>
          <select name='maphong' onChange={e => setMaphong(e.target.value)} required value={maphong}>
            <option></option>
            {danhSachPhong.map(item => {
              return (
                <option key={item.id} value={item.id}>{item.tenPhong}</option>
              )
            })}
          </select>

          <label for="maphim">Tên phim<span>*</span></label>
          <select name='maphim' onChange={e => setMaphim(e.target.value)} required value={maphim}>
            <option></option>
            {danhSachPhim.map(item => {
              return (
                <option key={item.id} value={item.id}>{item.tenPhim}</option>
              )
            })}
          </select>

          <label for="ngaychieu">Ngày chiếu<span>*</span></label>
          <input type="datetime-local" id="ngaychieu" name="ngaychieu" class="input-add" placeholder="Ngày chiếu" required defaultValue={ngaychieu} onChange={(e) => setNgaychieu(e.target.value)}></input>
          <label for="trangthai">Trạng thái<span>*</span></label>
          <select name="trangthai" id="trangthai" onChange={(e) => setTrangthai(e.target.value)} value={trangthai}>
            <option value="Chuẩn bị chiếu">Chuẩn bị chiếu</option>
            <option value="Đã chiếu">Đã chiếu</option>
          </select>
          <div className='submit-add'>
            <input type='submit' id='cgv-btnlogin' value='Edit schedule'></input>
          </div>
        </form>
      </div>

    </>
  );
}
export default EditSchedule;

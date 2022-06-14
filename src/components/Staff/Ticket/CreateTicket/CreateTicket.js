import React, { useEffect } from 'react';
import { useState } from 'react';
import { axios } from '../../../../axios';
import './CreateTicket.scss'
import moment from "moment";
function CreateTicket() {

  const [maloaive, setMaloaive] = useState("")
  const [masuatchieu, setMasuatchieu] = useState("")
  const [maphong, setMaphong] = useState("")
  const [maphim, setMaphim] = useState("")
  const [maghe, setMaghe] = useState("")
  const [ngaymua, setNgaymua] = useState("")

  const [danhSachLoaiVe, setDanhSachLoaiVe] = useState([])
  const [danhSuatChieu, setDanhSuatChieu] = useState([])
  const [danhSachPhong, setDanhSachPhong] = useState([])
  const [danhSachGhe, setDanhSachGhe] = useState([])
  const [danhSachPhim, setDanhSachPhim] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/ticket', {
      maSuatChieu: masuatchieu,
      maLoaiVe: maloaive,
      maPhong: maphong,
      maPhim: maphim,
      ngayMua: ngaymua + ".000z"
    })
      .then(result => {
        console.log(result.data.message)
        alert(result.data.message)
      })
      .catch(error => {
        alert(error.message)

      })
  }

  const getData = () => {
    axios
      .get('/ticketType')
      .then(res => {
        setDanhSachLoaiVe(res.data)
      })
      .catch(err => {
        console.log(err)
      })

    axios
      .get('/showtime')
      .then(res => {
        setDanhSuatChieu(res.data)
      })
      .catch(err => {
        console.log(err)
      })

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

  const getGhe = (idPhong) => {
    axios
      .get("/seat")
      .then(res => {
        let gheThuocPhong = res.data.filter(e => {
          return e.maPhong == idPhong
        })
        setDanhSachGhe(gheThuocPhong);
        // console.log(gheThuocPhong);
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
      <div className="add-ticket" >
        {/* <div className='title-add-ticket'>
        <h1 >ADD&ensp;TICKET</h1>
      </div> */}
        <form className='form-add-ticket' name='cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >
          <label for="maloaive">Loại vé<span>*</span></label>
          <select name='maloaive' onChange={e => setMaloaive(e.target.value)} required >
            <option></option>
            {danhSachLoaiVe.map(item => {
              return (
                <option key={item.id} value={item.id}>{item.tenLoaiVe}</option>
              )
            })}
          </select>

          <label for="masuatchieu">Suất chiếu<span>*</span></label>
          <select name='masuatchieu' onChange={e => setMasuatchieu(e.target.value)} required >
            <option></option>
            {danhSuatChieu.map(item => {
              return (
                <option key={item.id} value={item.id}>
                  Từ
                  &nbsp;
                  {moment.utc(item.timeStart).format('YYYY-MM-DD HH:mm:ss')}
                  &nbsp;
                  đến
                  &nbsp;
                  {moment.utc(item.timeEnd).format('YYYY-MM-DD HH:mm:ss')}

                </option>
              )
            })}
          </select>

          <label for="maphong">Phòng <span>*</span></label>
          <select name='maphong' onChange={e => {
            setMaphong(e.target.value);
            getGhe(e.target.value);

          }
          } required >
            <option></option>
            {danhSachPhong.map(item => {
              return (
                <option key={item.id} value={item.id}>{item.tenPhong}</option>
              )
            })}
          </select>

          <label for="maghe">Ghế <span>*</span></label>
          <select name='maghe' onChange={e => setMaghe(e.target.value)} required >
            <option></option>
            {danhSachGhe.map(item => {
              return (
                <option key={item.id} value={item.id}>{item.vitriDay}-{item.vitriCot}</option>
              )
            })}
          </select>
          <label for="maphim">Phim <span>*</span></label>
          <select name='maphim' onChange={e => setMaphim(e.target.value)} required >
            <option></option>
            {danhSachPhim.map(item => {
              return (
                <option key={item.id} value={item.id}>{item.tenPhim}</option>
              )
            })}
          </select>
          {/* <label for="maghe">Mã ghế <span>*</span></label>
                <input type="text" id="maghe" name="maghe" class="input-add" placeholder="Mã ghế" required  onChange={(e) => setMaghe(e.target.value)}></input> */}

          <label for="ngaymua">Ngày mua <span>*</span></label>
          <input type="datetime-local" id="maghe" name="maghe" class="input-add" required onChange={(e) => setNgaymua(e.target.value)}></input>

          <div className='submit-add'>
            <input type='submit' id='cgv-btnlogin' value='Add new ticket'></input>
          </div>
        </form>


      </div>

    </>
  );
}

export default CreateTicket;
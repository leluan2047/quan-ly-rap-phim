import React, { useEffect } from 'react';
import { useState } from 'react';
import { axios } from '../../../../axios';
import './CreateSchedule.scss'
import moment from 'moment'
function CreateSchedule() {

  const [maphong, setMaphong] = useState("")
  const [maphim, setMaphim] = useState("")
  const [ngaychieu, setNgaychieu] = useState("")

  const [danhSachPhong, setDanhSachPhong] = useState([]);
  const [danhSachPhim, setDanhSachPhim] = useState([]);

  const checkDay = () => {
    var startTime = new Date(ngaychieu)

    var toDay = new Date();

    if (startTime < toDay) {
      window.alert("Không thể chọn ngày bắt đầu trước hiện tại");
      return false;
    }

    else
      return true;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (checkDay()) {
      axios
        .post('/schedule', {
          maPhong: maphong,
          maPhim: maphim,
          //ngayChieu: ngaychieu + ".000z"
          ngayChieu: moment.utc(ngaychieu).format('YYYY-MM-DDTHH:mm:ss')
        })
        .then(result => {
          console.log(result)
          alert(result.data.message)
        })
        .catch(error => {
          alert(error.response.data.message)
        })
    }
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
        {/* <div className='title-createcategory'>
        <h1 >ADD&ensp;TICKET&ensp;TYPE</h1>
      </div> */}
        <form className='formcreateschedule' name='cgv-signup-form' id='cgv-signup-form' onSubmit={handleSubmit} >

          <label for="maphong">Tên phòng<span>*</span></label>
          <select name='maphong' onChange={e => setMaphong(e.target.value)} required >
            <option></option>
            {danhSachPhong.map(item => {
              return (
                <option key={item.id} value={item.id}>{item.tenPhong}</option>
              )
            })}
          </select>

          <label for="maphim">Tên phim<span>*</span></label>
          <select name='maphim' onChange={e => setMaphim(e.target.value)} required >
            <option></option>
            {danhSachPhim.map(item => {
              return (
                <option key={item.id} value={item.id}>{item.tenPhim}</option>
              )
            })}
          </select>

          <label for="ngaychieu">Ngày chiếu<span>*</span></label>
          <input type="datetime-local" id="ngaychieu" name="ngaychieu" class="input-add" placeholder="Ngày chiếu" required onChange={(e) => setNgaychieu(e.target.value)}></input>
          <div className='submit-add'>
            <input type='submit' id='cgv-btnlogin' value='Add new schedule'></input>
          </div>
        </form>
      </div>

    </>
  );
}
export default CreateSchedule;

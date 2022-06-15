import React, { useEffect, useState } from 'react'
import { axios } from "../../../axios";
import "./AddShowTime.scss";
import moment from "moment"

function AddShowTime() {
    const [danhSachLichChieu, setDanhSachLichChieu] = useState([]);

    const [tenSuatChieu, setTenSuatChieu] = useState("")
    const [thoiGianBatDau, setThoiGianBatDau] = useState();
    const [thoiGianKetThuc, setThoiGianKetThuc] = useState();
    const [lichChieu, setLichChieu] = useState();


    const getLichChieu = () => {
        axios
            .get('/schedule')
            .then(res => {
                setDanhSachLichChieu(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('/showtime', {
                "maLichChieu": lichChieu,
                "tenSuatChieu": tenSuatChieu,
                "timeStart": thoiGianBatDau + ".000z",
                "timeEnd": thoiGianKetThuc + ".000z"
            })
            .then(res => {
                if(res.data.message === "Create showtime successfully")
                    window.alert("Thêm suất chiếu thành công")
                else{
                    window.alert("Thêm thất bại")
                }
            })
            .catch(err => {
                console.log(err)
            })
        
    }

    useEffect(() => {
        getLichChieu();
    }, [])

    return (
        <div className='addShowTime-container'>
            <div className='title'>
                <h1 >Thêm&ensp;suất chiếu&ensp;</h1>
            </div>

            <form className='addShowTime-form' name='' id='' onSubmit={handleSubmit} >
                <label for="tenSuatChieu">Lịch chiếu<span>*</span></label>
                <select name='lichChieu' onChange={e => setLichChieu(e.target.value)} required >
                    <option></option>
                    {danhSachLichChieu.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{moment.utc(item.ngayChieu).format('YYYY-MM-DD ')}</option>
                        )
                    })}
                </select>


                <label for="tenSuatChieu">Tên suất chiếu<span>*</span></label>
                <input type="text" name="tenSuatChieu" className="input-add" placeholder="Nhập tên suất chiếu" required onChange={(e) => setTenSuatChieu(e.target.value)}></input>

                <label for="thoi gian bat dau">Thời gian bắt đầu<span>*</span></label>
                <input type="datetime-local" name="thoiGianBatDau" className="input-add" placeholder="Nhập thời gian" required onChange={(e) => setThoiGianBatDau(e.target.value)}></input>

                <label for="thoi gian ket thuc">Thời gian kết thúc<span>*</span></label>
                <input type="datetime-local" name="thoiGianKetThuc" className="input-add" placeholder="Nhập thời gian" required onChange={(e) => setThoiGianKetThuc(e.target.value)}></input>

                <div className='submit-add'>
                    <input type='submit' value='Thêm suất chiếu'></input>
                </div>
            </form>
        </div>
    )
}

export default AddShowTime
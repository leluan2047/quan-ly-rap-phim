import React, { useEffect, useState } from 'react'
import { axios } from '../../../axios';
import '../Seat/AddSeat.scss';

function AddSeat() {
    const [danhSachPhong, setDanhSachPhong] = useState([]);

    const [maPhong, setMaPhong] = useState();
    const [trangThai, setTrangThai] = useState("")
    const [viTriDay, setViTriDay] = useState("")
    const [viTriCot, setViTriCot] = useState("")



    useEffect(() => {
        const fetchData = () => {
            axios
                .get('/rooms')
                .then(function (res) {
                    setDanhSachPhong(res.data);
                })
                .catch(function (err) {
                    console.log(err);
                })
        }
        fetchData();
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        const addSeat = () => {
            axios
                .post('/seat', {
                    "maPhong": maPhong,
                    "vitriDay": viTriDay,
                    "vitriCot": viTriCot
                })
                .then(res => {
                    if (res.data.message == "Create seat successfully")
                        window.alert("Thêm ghế thành công")
                    else
                        window.alert("Thêm ghế thất bại")
                })
                .catch(err => {
                    console.log(err);
                })
        }
        addSeat();
    }
    return (
        <div className='addSeat-container'>
            <div className='title'>
                <h1 >ADD&ensp;Seat&ensp;</h1>
            </div>

            <form className='addSeat-form' onSubmit={handleSubmit} >
                <label for="tenPhong">Chọn phòng<span>*</span></label>
                <select name='tenPhong' id='tenPhong' onChange={(e) => setMaPhong(e.target.value)} required >
                    <option value="">None</option>
                    {danhSachPhong.map(phong => {
                        return (
                            <option key={phong.id} value={phong.id}>{phong.tenPhong}</option>
                        )
                    })}
                </select>

                <label for="trangThai">Trạng Thái<span>*</span></label>
                <input name="trangThai" className="input-add" required onChange={e => setTrangThai(e.target.value)} ></input>

                <label for="viTriDay">Vị trí dãy<span>*</span></label>
                <input name="viTriDay" className="input-add" required onChange={e => setViTriDay(e.target.value)}></input>

                <label for="viTriCot">Vị trí cột<span>*</span></label>
                <input name="viTriCot" className="input-add" required onChange={e => setViTriCot(e.target.value)}></input>

                <div className='submit-add'>
                    <input type='submit' value='Thêm ghế'></input>
                </div>
            </form>
        </div>
    )
}

export default AddSeat
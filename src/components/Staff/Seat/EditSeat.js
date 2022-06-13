import React, { useEffect, useState } from 'react'
import { axios } from "../../../axios";
import './EditSeat.scss';

function EditSeat(props) {

    const [danhSachPhong, setDanhSachPhong] = useState([]);

    const [maPhong, setMaPhong] = useState();
    const [trangThai, setTrangThai] = useState("")
    const [viTriDay, setViTriDay] = useState("")
    const [viTriCot, setViTriCot] = useState("")


    const getDachSachPhong = () => {
        axios
            .get(`/rooms`)
            .then(function (res) {
                setDanhSachPhong(res.data);
            })
            .catch(function (err) {
                console.log(err);
            })
    }

    const getData = () => {
        axios
            .get(`/seat/${props.id}`)
            .then(function (res) {
                setMaPhong(res.data.maPhong);
                setTrangThai(res.data.trangThai);
                setViTriCot(res.data.vitriCot);
                setViTriDay(res.data.vitriDay);
            })
            .catch(function (err) {
                console.log(err)
            })
    }

    useEffect(() => {
        getDachSachPhong();
        getData();
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = () => {
            axios
                .put(`/seat/${props.id}`, {
                    maPhong: maPhong,
                    trangThai: trangThai,
                    vitriDay: viTriDay,
                    vitriCot: viTriCot
                })
                .then(res => {
                    if (res.data.message === "Update seat successfully")
                        window.alert("Cập nhật ghế thành công")
                    else {
                        window.alert("Cập nhật ghế thất bại")
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        }

        fetchData();

    }

    return (
        <div className='editSeat-container'>
            <div className='title'>
                <h1 >Edit&ensp;Seat&ensp;</h1>
            </div>

            <form className='editSeat-form' onSubmit={handleSubmit} >
                <select name='tenPhong' onChange={(e) => setMaPhong(e.target.value)} value={maPhong}>
                    {danhSachPhong.map(phong => {
                        return (
                            <option key={phong.id} value={phong.id}>{phong.tenPhong}</option>
                        )
                    })}
                </select>

                <label for="trangThai">Trạng Thái<span>*</span></label>
                <input name="trangThai" className="input-add" required value={trangThai} onChange={e => setTrangThai(e.target.value)} ></input>

                <label for="viTriDay">Vị trí dãy<span>*</span></label>
                <input name="viTriDay" className="input-add" required value={viTriDay} onChange={e => setViTriDay(e.target.value)}></input>

                <label for="viTriCot">Vị trí cột<span>*</span></label>
                <input name="viTriCot" className="input-add" required value={viTriCot} onChange={e => setViTriCot(e.target.value)}></input>

                <div className='submit-add'>
                    <input type='submit' value='Sửa ghế'></input>
                </div>
            </form>
        </div>
    )
}

export default EditSeat
import React, { useEffect } from 'react'
import { useState } from 'react';
import { useParams } from 'react-router-dom'
import { axios } from "../../axios";
import './EditRoom.scss';

function EditRoom(props) {
    const [tenPhong, setTenPhong] = useState("")
    const [soGhe, setSoGhe] = useState(0);
    const [trangThai, setTrangThai] = useState("");
    const { id } = useParams();

    const getData = () => {
        axios
            .get(`/rooms/${props.id}`)
            .then(function (res) {
                setTrangThai(res.data.trangThai);
                setTenPhong(res.data.tenPhong);
                setSoGhe(res.data.soLuongGhe);
            })
            .catch(function (err) {
                console.log(err);
            })
    }


    useEffect(() => {
        getData();

    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = () => {
            axios
                .put(`/rooms/${props.id}`, {
                    tenPhong: tenPhong,
                    soLuongGhe: soGhe,
                    trangThai: trangThai
                })
                .then(function (res) {
                    if (res.data.message === "Update room successfully") {
                        window.alert("Cập nhật thành công");

                    }

                    else {
                        window.alert("Cập nhật thất bại");
                    }
                })
                .catch(function (err) {
                    window.alert("Đã có lỗi xảy ra con!");
                    console.log(err);
                })
        }
        fetchData();
    }


    return (
        <div className='EditRoom-container'>
            <div className='title'>
                <h1 >Edit&ensp;ROOM&ensp;</h1>
            </div>
            <form className='addRoom-form' name='c' id='' onSubmit={handleSubmit} >
                <label for="tenPhong">Tên phòng<span>*</span></label>
                <input type="text" value={tenPhong} name="tenPhong" className="input-add" placeholder="Nhập tên phòng" required onChange={(e) => setTenPhong(e.target.value)}></input>

                <label for="soLuongGhe">Số lượng ghế<span>*</span></label>
                <input type="number" value={soGhe} name="maloaive" className="input-add" placeholder="Nhập số ghế" required onChange={(e) => setSoGhe(e.target.value)}></input>

                <label for="status">Trạng thái</label>

                <select name="cars" id="cars" onChange={(e) => setTrangThai(e.target.value)} value={trangThai}>
                    <option value="deleted" hidden='true'>deleted</option>
                    <option value="active" >Active</option>
                    <option value="updated" >Updated</option>
                </select>

                <div className='submit-add'>
                    <input type='submit' value='Sửa phòng'></input>
                </div>
            </form>
        </div>
    )
}

export default EditRoom
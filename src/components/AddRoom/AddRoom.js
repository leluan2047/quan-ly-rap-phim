import React from 'react'
import { useState } from 'react';
import { axios } from "../../axios";
import "./AddRoom.scss";

function AddRoom() {
    const [tenPhong, setTenPhong] = useState("")
    const [soGhe, setSoGhe] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        const fetchData = () => {
            axios
                .post('/rooms', {
                    tenPhong:tenPhong,
                    soLuongGhe:soGhe
                })
                .then(function(res){
                    if(res.data.message == "Create room successfully")
                        window.alert("Thêm thành công")
                    else
                        window.alert("Thêm thất bại");
                })
                .catch(function(err){
                    window.alert('Đã có lỗi xảy ra, vui lòng thử lại')
                })
        }
        fetchData();
    }

    return (
        <div className='addRoom-container'>
            <div className='title'>
                <h1 >ADD&ensp;ROOM&ensp;</h1>
            </div>

            <form className='addRoom-form' name='c' id='' onSubmit={handleSubmit} >
                <label for="tenPhong">Tên phòng<span>*</span></label>
                <input type="text" name="tenPhong" class="input-add" placeholder="Nhập tên phòng" required onChange={(e) => setTenPhong(e.target.value)}></input>

                <label for="soLuongGhe">Số lượng ghế<span>*</span></label>
                <input type="number" name="maloaive" class="input-add" placeholder="Nhập số ghế" required onChange={(e) => setSoGhe(e.target.value)}></input>

                <div className='submit-add'>
                    <input type='submit' value='Thêm phòng'></input>
                </div>
            </form>
        </div>
    )
}

export default AddRoom
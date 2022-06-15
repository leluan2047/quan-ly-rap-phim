import React, { useEffect, useState } from 'react'
import { axios } from "../../../axios";
import "./AddBooking.scss";

function AddBooking() {

    const [user, setUser] = useState();
    const [ve, setVe] = useState();

    const [danhSachVe, setDanhSachVe] = useState([]);
    const [danhSachUser, setDanhSachUser] = useState([]);

    const [danhSachSuatChieu, setDanhSachSuatChieu] = useState([]);
    const [danhSachLoaiVe, SetDanhSachLoaiVe] = useState([]);
    const [danhSachPhong, SetDanhSachPhong] = useState([]);
    const [danhSachGhe, SetDanhSachGhe] = useState([]);
    const [danhSachPhim, SetDanhSachPhim] = useState([]);




    const getData = () => {
        // axios
        //     .get("/useerss")
        //     .then(res => {
        //         setDanhSachUser(res.data)
        //     })
        //     .catch(err => {
        //         console.log(err)
        //     })


        axios
            .get("/ticket")
            .then(res => {
                setDanhSachVe(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('/booking', {

            })
            .then(res => {

            })
            .catch(err => {
                console.log(err)
            })

    }




    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='addBooking-container'>
            <div className='title'>
                <h1 >Thêm&ensp;&ensp;</h1>
            </div>

            <form className='addBooking-form' name='' id='' onSubmit={handleSubmit} >
                <label for="nguoiMua">Người mua<span>*</span></label>
                <select name='nguoiMua' onChange={e => setUser(e.target.value)} required >
                    <option></option>
                    {danhSachUser.map(item => {
                        return (    
                            <option key={item.id} value={item.id}>


                            </option>
                        )
                    })}
                </select>


                <label for="ve">Vé<span>*</span></label>
                <select name='ve' onChange={e => setVe(e.target.value)} required >
                    <option></option>
                    {danhSachVe.map(item => {
                        return (
                            <option key={item.id} value={item.id}>



                            </option>
                        )
                    })}
                </select>
                <div className='submit-add'>
                    <input type='submit' value='Thêm đặt vé'></input>
                </div>
            </form>
        </div>
    )
}

export default AddBooking
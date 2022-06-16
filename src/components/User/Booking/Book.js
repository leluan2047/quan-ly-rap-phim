import React, { useEffect, useState } from 'react'
import moment from "moment";
import { axios } from "../../../axios";
import "./Book.scss";

function Book() {

    const [maloaive, setMaloaive] = useState("")
    const [masuatchieu, setMasuatchieu] = useState("")
    const [maphong, setMaphong] = useState("")
    const [maphim, setMaphim] = useState("")
    const [maghe, setMaghe] = useState("")
    const [ngaymua, setNgaymua] = useState("")

    const [danhSachSuatChieu, setDanhSachSuatChieu] = useState([]);
    const [danhSachLoaiVe, setDanhSachLoaiVe] = useState([]);
    const [danhSachPhong, setDanhSachPhong] = useState([]);
    const [danhSachGhe, setDanhSachGhe] = useState([]);
    const [danhSachPhim, setDanhSachPhim] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('/booking', {
                "maSuatChieu": masuatchieu,
                "maLoaiVe": maloaive,
                "maPhong": maphong,
                "maPhim": maphim,
                "maGhe": maghe,
                "ngayMua": moment().format('YYYY-MM-DDTHH-mm-ss') + ".000z"
            })
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
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
                setDanhSachSuatChieu(res.data)
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
                    return (e.phongChieu.id == idPhong && e.trangThai === "Còn trống")
                })
                setDanhSachGhe(gheThuocPhong);

            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        getData();
    }, [])

    return (
        <div className='book-container'>
            <div className='title'>
                <h1 >Đặt vé&ensp;&ensp;</h1>
            </div>

            <form className='book-form' name='' id='' onSubmit={handleSubmit} >

                <label for="maloaive">Loại vé<span>*</span></label>
                <select name='maloaive' onChange={e => setMaloaive(e.target.value)} required >
                    <option value="">Chọn loại vé</option>
                    {danhSachLoaiVe.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{item.tenLoaiVe}</option>
                        )
                    })}
                </select>

                <label for="masuatchieu">Suất chiếu<span>*</span></label>
                <select name='masuatchieu' onChange={e => setMasuatchieu(e.target.value)} required >
                    <option value="">Chọn suất chiếu</option>
                    {danhSachSuatChieu.map(item => {
                        return (
                            <option key={item.id} value={item.id}>
                                {item.tenSuatChieu}:
                                &nbsp;
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
                    <option value="">Chọn phòng</option>
                    {

                        danhSachPhong.map((item) => {
                            return (

                                <option key={item.id} value={item.id}>{item.tenPhong}</option>
                            )
                        })

                    }
                </select>

                <label for="maghe">Ghế <span>*</span></label>
                {/* <div style={{ display: 'flex'}}>
                    {danhSachGhe.map((item, index, array) => {
                        return (
                            <>
                                <div>
                                    {index != 0 ? (array[index].vitriDay != array[index - 1].vitriDay ? "" : "") : ""}
                                    {item.vitriDay}{item.vitriCot}
                                </div>

                            </>

                        )
                    })}
                </div> */}

                <select name='maghe' onChange={e => setMaghe(e.target.value)} required >
                    <option value="">Chọn ghế</option>
                    {danhSachGhe.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{item.vitriDay}-{item.vitriCot}</option>
                        )
                    })}
                </select>
                <label for="maphim">Phim <span>*</span></label>
                <select name='maphim' onChange={e => setMaphim(e.target.value)} required >
                    <option value="">Chọn phim</option>
                    {danhSachPhim.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{item.tenPhim}</option>
                        )
                    })}
                </select>
                {/* <label for="maghe">Mã ghế <span>*</span></label>
                <input type="text" id="maghe" name="maghe" class="input-add" placeholder="Mã ghế" required  onChange={(e) => setMaghe(e.target.value)}></input> */}


                <div className='submit-add'>
                    <input type='submit' value='Đặt vé'></input>
                </div>
            </form>
        </div>
    )
}

export default Book
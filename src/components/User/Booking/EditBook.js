import React, { useEffect, useState } from 'react'
import moment from "moment";
import { axios } from "../../../axios";
import "./EditBook.scss";
import CardFilm from "../../Card/CardFilm";
import Carousel from 'react-elastic-carousel';

function EditBook(props) {

    const breakPoints = [
        { width: 500, itemsToShow: 2 },
        { width: 800, itemsToShow: 2 },
        { width: 1100, itemsToShow: 3 },
    ]

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
        if (maghe == "")
            window.alert("Bạn chưa chọn ghế");
        else {
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

        axios
            .get(`/booking/${props.id}`)
            .then(res => {
                setMaloaive(res.data.ve.loaiVe.id);
                setMasuatchieu(res.data.ve.suatChieu.id)
                setMaphong(res.data.ve.phongChieu.id)
                setMaphim(res.data.ve.phim.id);
                setMaghe(res.data.ve.ghe.id)
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
                    return (e.phongChieu.id == idPhong)
                })
                setDanhSachGhe(gheThuocPhong);

            })
            .catch(err => {
                console.log(err)
            })
    }



    const datGhe = (idGhe, trangThai) => {
        if (trangThai === "Đã đặt")
            window.alert("Ghế đã đặt, vui lòng chọn ghế khác")
        else {
            setMaghe(idGhe);
        }
    }

    useEffect(() => {
        getData();

    }, [])


    return (
        <div className='editBook-container'>
            <div className='title'>
                <h1 >Sửa vé&ensp;&ensp;</h1>
            </div>

            <form className='editBook-form' name='' id='' onSubmit={handleSubmit} >

                <label for="maloaive">Loại vé<span>*</span></label>
                <select name='maloaive' onChange={e => setMaloaive(e.target.value)} required value={maloaive} >
                    <option value="">Chọn loại vé</option>
                    {danhSachLoaiVe.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{item.tenLoaiVe}</option>
                        )
                    })}
                </select>

                <label for="masuatchieu">Suất chiếu<span>*</span></label>
                <select name='masuatchieu' onChange={e => setMasuatchieu(e.target.value)} required value={masuatchieu} >
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
                } required value={maphong}>
                    <option value="">Chọn phòng</option>
                    {danhSachPhong.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{item.tenPhong}</option>
                        )
                    })}
                </select>

                <label for="maghe">Ghế <span>*</span></label>
                <div>
                    <div className='seat-group' >
                        {danhSachGhe.map((item, index, array) => {
                            return (
                                <>
                                    <div className={item.trangThai === "Đã đặt" ? 'seated seat-button' : 'seat-button'}
                                        onClick={e => {
                                            datGhe(item.id, item.trangThai)
                                        }}
                                        style={item.id == maghe ? { background: 'green' } : {}}
                                    >
                                        {/* {index != 0 ? (array[index].vitriDay != array[index - 1].vitriDay ? "" : "") : ""} */}
                                        {item.vitriDay}{item.vitriCot}
                                    </div>

                                </>

                            )
                        })}
                    </div>
                </div>
                {/* <select name='maghe' onChange={e => setMaghe(e.target.value)} required value={maghe}>
                    <option value="">Chọn ghế</option>
                    {danhSachGhe.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{item.vitriDay}-{item.vitriCot}</option>
                        )
                    })}
                </select> */}
                <label for="maphim">Phim <span>*</span></label>
                <Carousel breakPoints={breakPoints}>
                    {/* {
                        movies.map(item => {
                            return (
                                <MediaCard image={item.poster} id={item.id}></MediaCard>
                            );
                        })
                    } */}

                    {
                        danhSachPhim.map(item => {
                            return (
                                <div className="cardFilm"
                                    onClick={e => setMaphim(item.id)}
                                    style={item.id == maphim ? { border: '2px solid green' } : {}}
                                >

                                    <CardFilm
                                        key={item.id}
                                        tenPhim={item.tenPhim}
                                        thoiLuong={item.thoiLuong}
                                        trangThai={item.trangThai}
                                        theLoai={item.theLoaiPhim.tenTheLoai}
                                        img={item.poster}
                                    ></CardFilm>

                                </div>
                            );
                        })
                    }
                </Carousel>
                <select name='maphim' value={maphim} required disabled  >
                    <option value="">Bạn chưa chọn phim</option>
                    {danhSachPhim.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{item.tenPhim}</option>
                        )
                    })}
                </select>
                {/* <label for="maghe">Mã ghế <span>*</span></label>
                <input type="text" id="maghe" name="maghe" class="input-add" placeholder="Mã ghế" required  onChange={(e) => setMaghe(e.target.value)}></input> */}


                <div className='submit-add'>
                    <input type='submit' value='Sửa vé'></input>
                </div>
            </form>
        </div>
    )
}

export default EditBook
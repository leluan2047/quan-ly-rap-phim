import React, { useEffect, useState } from 'react'
import moment from "moment";
import Carousel from 'react-elastic-carousel';
import { axios } from "../../../axios";
import { Card } from 'antd';
import "./Book.scss";
import CardFilm from "../../Card/CardFilm";

const { Meta } = Card;
var maGhetemp = [];

function Book(props) {

    const breakPoints = [
        { width: 500, itemsToShow: 2 },
        { width: 800, itemsToShow: 2 },
        { width: 1100, itemsToShow: 3 },
    ]

    const [maloaive, setMaloaive] = useState("")
    const [masuatchieu, setMasuatchieu] = useState("")
    const [maphong, setMaphong] = useState("")
    const [maphim, setMaphim] = useState("")
    const [maghe, setMaghe] = useState([])
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
        else if (maphim == "") {
            window.alert("Bạn chưa chọn phim")
        }
        else {
            maghe.map(item => {
                axios
                    .post('/ticket', {
                        "maSuatChieu": masuatchieu,
                        "maLoaiVe": maloaive,
                        "maPhong": maphong,
                        "maPhim": maphim,
                        "maGhe": item,
                        "ngayMua": moment().format('YYYY-MM-DDTHH:mm:ss') + ".000z"
                    })
                    .then(res => {
                        if (res.data.message === "Create Ticket successfully") {
                            axios
                                .post('/booking', {
                                    "maVe": res.data.ticket.id,
                                })
                                .then(res2 => {
                                    window.alert("Đặt vé thành công")
                                })
                                .catch(err => {
                                    console.log(err)
                                })
                        }
                    })
                    .catch(err => {
                        console.log(err)
                    })
            })
        }


    }

    const getData = () => {
        axios
            .get('/ticketType')
            .then(res => {
                setDanhSachLoaiVe(res.data)
                console.log(res.data)
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

        // Neu id phim ton tai thi chi lay thong tin 1 phim, con khong thi lay danh sach phim
        if (props.idPhim) {
            setMaphim(props.idPhim)

            axios
                .get(`/movies/${props.idPhim}`)
                .then(res => {
                    var x = [" "]
                    x.push(res.data)
                    var y = []
                    y = x.filter(item => item != " ");
                    setDanhSachPhim(y)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        else {
            axios
                .get('/movies')
                .then(res => {
                    setDanhSachPhim(res.data)
                })
                .catch(err => {
                    console.log(err)
                })
        }
        ////--------------------------------------------------------
    }

    const getGhe = (idPhong) => {
        axios
            .get("/seat")
            .then(res => {
                let gheThuocPhong = res.data.filter(e => {
                    return (e.phongChieu.id == idPhong
                        // && e.trangThai === "Còn trống"
                    )
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
            if (maghe.includes(idGhe)) {
                // loai ra khoi mang
                var arr = []
                arr = maGhetemp.filter(item => item != idGhe);
                maGhetemp = arr;
                setMaghe(arr);
            }
            else {
                maGhetemp.push(idGhe);
                var arr = maGhetemp.filter(item => item != 0);
                setMaghe(arr);
            }

        }
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




                <label for="maloaive">Loại vé<span>*</span></label>
                <select name='maloaive' onChange={e => setMaloaive(e.target.value)} required >
                    <option value="">Chọn loại vé</option>
                    {danhSachLoaiVe.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{item.tenLoaiVe}-{item.giaVe}</option>
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
                <div>
                    <div className='seat-group' >
                        {danhSachGhe.map((item) => {
                            return (
                                <>
                                    <div className={item.trangThai === "Đã đặt" ? 'seated seat-button' : 'seat-button'}
                                        onClick={e => {
                                            datGhe(item.id, item.trangThai)
                                        }}
                                        style={maghe.includes(item.id) ? { background: 'green' } : {}}
                                    >
                                        {/* {index != 0 ? (array[index].vitriDay != array[index - 1].vitriDay ? "" : "") : ""} */}
                                        {item.vitriDay}{item.vitriCot}
                                    </div>

                                </>

                            )
                        })}
                    </div>
                </div>

                {/* <select name='maghe' onChange={e => setMaghe(e.target.value)} required value={maghe} disabled>
                    <option value="">Chọn ghế</option>
                    {danhSachGhe.map(item => {
                        return (
                            <option key={item.id} value={item.id}>{item.vitriDay}-{item.vitriCot}</option>
                        )
                    })}
                </select> */}



                {/* <label for="maghe">Mã ghế <span>*</span></label>
                <input type="text" id="maghe" name="maghe" class="input-add" placeholder="Mã ghế" required  onChange={(e) => setMaghe(e.target.value)}></input> */}
                <select name='maphim' value={maloaive} required disabled  >
                    <option value="">Bạn chưa chọn</option>
                    {danhSachLoaiVe.map(item => {
                        return (
                            <option key={item.id} value={item.id}>Tổng tiền: {item.giaVe * maghe.length} VND</option>
                        )
                    })}
                </select>

                <div className='submit-add'>
                    <input type='submit' value='Đặt vé'></input>
                </div>
            </form>
        </div>
    )
}

export default Book
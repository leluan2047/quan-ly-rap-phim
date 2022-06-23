import { React, useEffect, useState } from 'react'
import "./PhimDangChieu.scss";
import { axios } from "../../axios";
import CardFilm from '../Card/CardFilm';
import muaVe from "../../../src/muaVePhim.png"
import Details_movie from '../Details_movie/Details_movie';
import Popup from '../Popup';
function PhimDangChieu() {

    const [openPopup, setOpenPopup] = useState(false);
    const [danhSachPhimDangChieu, setDanhSach] = useState([])
    const [id,setId] = useState();

    const getData = () => {
        axios
            .get("/movies")
            .then(res => {
                let a = res.data.filter(e => {
                    return e.trangThai == "đang chiếu"
                })
                setDanhSach(a)
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getData();
    })

    return (
        <div class="phimDangChieu-movie">
            <div class="page-title">Phim đang chiếu</div>
            <div className='content'>
                {danhSachPhimDangChieu.map(item => {
                    return (
                        <div className="cardFilm">
                            <CardFilm
                                key={item.id}
                                img={item.poster}
                                tenPhim={item.tenPhim}
                                thoiLuong={item.thoiLuong}
                                theLoai={item.theLoai}
                                trangThai={item.trangThai}
                            >
                            </CardFilm>
                            <div className='div-imgVe'>


                                <img src={muaVe} className="img-muaVe" onClick={()=>{setOpenPopup(true);setId(item.id)}}></img>
                            </div>
                        </div>
                    )
                })}

            </div>

            <Popup
                // title="Edit movie"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
                <Details_movie id={id}></Details_movie>
            </Popup>
        </div>
    )
}

export default PhimDangChieu
import { React, useEffect, useState } from 'react'
import "./PhimDangChieu.scss";
import { axios } from "../../axios";
import CardFilm from '../Card/CardFilm';
import muaVe from "../../../src/muaVePhim.png"
import Details_movie from '../Details_movie/Details_movie';
import Popup from '../Popup';
function PhimSapChieu() {

   
    const [danhSachPhimDangChieu, setDanhSach] = useState([])
    const [id,setId] = useState();

    const getData = () => {
        axios
            .get("/movies")
            .then(res => {
                let a = res.data.filter(e => {
                    return e.trangThai == "sắp chiếu"
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
    },[])

    return (
        <div class="phimDangChieu-movie">
            <div class="page-title">Phim sắp chiếu</div>
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
                           
                        </div>
                    )
                })}

            </div>

           
        </div>
    )
}

export default PhimSapChieu
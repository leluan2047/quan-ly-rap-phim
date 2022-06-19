import React, { useEffect, useState } from 'react'
import { axios } from '../../axios'
import './Details_movie.scss'
import Popup from "../Popup";
import Book from '../User/Booking/Book';
function Details_movie({ id }) {

    const [openPopup, setOpenPopup] = useState(false);
    // const id = useState(3)
    const [movie, setMovie] = useState([])
    useEffect(
        () => {
            async function fetchData() {
                await axios.get(`/movies/${id}`)
                    .then(result => {
                        console.log(result)
                        setMovie(result.data)
                    })
                    .catch(error => {
                        console.log(error)
                    })
            }
            fetchData()

        }, []
    )
    return (
        <>
            <div class="details-movie">
                <div class="page-title">Nội dung phim</div>
                <div className='content'>
                    <div class="image-movie">
                        <img id="image-main" class="gallery-image visible" src={movie.poster} alt={movie.tenPhim} >
                        </img>
                    </div>
                    <div class="info-movie">
                        <div>
                            <h1>{movie.tenPhim}</h1>
                        </div>
                        <div>
                            <div class="std"><label>Đạo diễn: </label> &nbsp;{movie.daoDien}</div>
                            {/* <div class="std"><label>Diễn viên:</label>&nbsp; {movie.theLoai}</div> */}
                            <div class="std"><label>Thể loại: </label>&nbsp; {movie.maTheLoai}</div>
                            {/* <div class="std"><label>Khởi chiếu: </label>&nbsp; 04/05/2022</div> */}
                            <div class="std"><label>Thời lượng: </label>&nbsp; {movie.thoiLuong}</div>
                            <div class="std"><label>Trailer </label>&nbsp; {movie.trailer}</div>
                            <div class="std"><label>Nước sản xuất</label>&nbsp; {movie.nuocSanXuat}</div>
                        </div>
                    </div>
                </div>
                <div className='resume'> {movie.noiDungPhim}
                </div>
                <div className='buy-ticket'>
                    <button type="button" title="Mua vé" onClick={() => setOpenPopup(true)}><span>Mua vé</span></button>
                </div>
                <Popup
                    // title="Edit movie"
                    openPopup={openPopup}
                    setOpenPopup={setOpenPopup}
                >
                    {/* <Details_movie id={props.id}></Details_movie> */}
                    <Book idPhim = {id}></Book>
                </Popup>
            </div>
        </>
    )
}
export default Details_movie

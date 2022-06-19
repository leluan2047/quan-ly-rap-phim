import React from 'react'
import "./CardFilm.scss";
function CardFilm(props) {
  return (
    <div className='cardFilm-container'>
      <div className='img'>
        <img src={props.img}></img>
      </div>
      <div className='content-film '>
        <div className='hacker'>
          <div className='title'><h3>{props.tenPhim}</h3></div>
          <div className='title'><b>Thời lượng: </b>{props.thoiLuong}</div>
          <div className='title'><b>Thể loại: </b>{props.theLoai}</div>
          <div className='title'><b>Trạng thái: </b>{props.trangThai}</div>
        </div>
      </div>
    </div>
  )
}

export default CardFilm